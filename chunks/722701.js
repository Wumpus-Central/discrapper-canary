n.d(t, { A: () => h });
var l = n(17928),
    i = n(52133),
    u = n(73153),
    _ = n(260498);
let r = new Map(),
    o = new Set(),
    s = new Map(),
    a = new Map(),
    c = new Map(),
    p = new Set(),
    d = [];
class E extends l.Ay.Store {
    initialize() {
        this.waitFor(_.Ay);
    }
    getPublishStatus(e) {
        return r.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return o.has(e);
    }
    getPublishApprovalUrl(e) {
        return s.get(e) ?? null;
    }
    getPublishProgress(e) {
        return a.get(e) ?? null;
    }
    getPublishFailure(e) {
        return c.get(e) ?? null;
    }
    isAppChannelPending(e) {
        return p.has(e);
    }
}
let R = [],
    h = new E(u.h, {
        LOGOUT: function () {
            if (0 === r.size && 0 === o.size && 0 === s.size && 0 === a.size && 0 === c.size && 0 === p.size) return !1;
            (r.clear(), o.clear(), s.clear(), a.clear(), c.clear(), p.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of r.keys()) null == _.Ay.getProject(e) && (r.delete(e), (t = !0));
            for (let e of s.keys()) null == _.Ay.getProject(e) && (s.delete(e), (t = !0));
            for (let e of a.keys()) null == _.Ay.getProject(e) && (a.delete(e), (t = !0));
            for (let e of c.keys()) null == _.Ay.getProject(e) && (c.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: n,
                    publishState: l,
                    surface: u,
                    previewAppChannels: _,
                    previewDevicePermissions: o = R,
                    publishedRevision: p = null,
                    publishedAt: E = null,
                    publishing: h = !1,
                    patchNotesSent: A,
                    newUiUnpublished: P = !1,
                } = e,
                f = !h && s.delete(n),
                C = !h && a.delete(n),
                U = r.get(n),
                g = (h || (null != U && U.publishedRevision !== p)) && c.delete(n),
                O =
                    null == A ||
                    ((t = U?.patchNotesSent ?? d),
                    t.length === A.length &&
                        t.every(
                            (e, t) => e.publishedRevision === A[t].publishedRevision && e.messageId === A[t].messageId,
                        ))
                        ? (U?.patchNotesSent ?? d)
                        : A;
            if (
                !f &&
                !C &&
                !g &&
                U?.publishState === l &&
                U.surface === u &&
                (0, i.v)(U.previewAppChannels, _) &&
                (0, i.v)(U.previewDevicePermissions ?? R, o) &&
                U.publishedRevision === p &&
                U.publishedAt === E &&
                U.publishing === h &&
                U.patchNotesSent === O &&
                U.newUiUnpublished === P
            )
                return !1;
            r.set(n, {
                publishState: l,
                surface: u,
                previewAppChannels: _,
                previewDevicePermissions: o,
                publishedRevision: p,
                publishedAt: E,
                publishing: h,
                patchNotesSent: O,
                newUiUnpublished: P,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            (o.add(t), c.delete(t));
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e,
                n = o.delete(t),
                l = r.get(t)?.publishing !== !0 && a.delete(t);
            return n || l;
        },
        CONJURE_PROJECT_PUBLISH_FAILED: function (e) {
            let { projectId: t, message: n } = e;
            if (c.get(t) === n) return !1;
            c.set(t, n);
        },
        CONJURE_PROJECT_PUBLISH_APPROVAL: function (e) {
            let { projectId: t, approvalUrl: n } = e;
            return null == n ? s.delete(t) : s.get(t) !== n && void s.set(t, n);
        },
        CONJURE_PROJECT_PUBLISH_PROGRESS: function (e) {
            let { projectId: t, progress: n } = e;
            if (a.get(t)?.stage === n.stage) return !1;
            a.set(t, n);
        },
        CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
            let { projectId: t, pending: n } = e;
            if (p.has(t) === n) return !1;
            n ? p.add(t) : p.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: n } = e,
                l = r.get(t);
            if (null == l) return !1;
            r.set(t, {
                ...l,
                patchNotesSent: [
                    ...(l.patchNotesSent ?? d).filter((e) => e.publishedRevision !== n.publishedRevision),
                    n,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (r.delete(t), o.delete(t), s.delete(t), a.delete(t), c.delete(t), p.delete(t));
        },
    });
