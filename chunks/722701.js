n.d(t, { A: () => R });
var l = n(17928),
    i = n(52133),
    _ = n(73153),
    u = n(260498);
let r = new Map(),
    s = new Set(),
    o = new Map(),
    a = new Map(),
    c = new Set(),
    p = [];
class d extends l.Ay.Store {
    initialize() {
        this.waitFor(u.Ay);
    }
    getPublishStatus(e) {
        return r.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return s.has(e);
    }
    getPublishApprovalUrl(e) {
        return o.get(e) ?? null;
    }
    getPublishProgress(e) {
        return a.get(e) ?? null;
    }
    isAppChannelPending(e) {
        return c.has(e);
    }
}
let E = [],
    R = new d(_.h, {
        LOGOUT: function () {
            if (0 === r.size && 0 === s.size && 0 === o.size && 0 === a.size && 0 === c.size) return !1;
            (r.clear(), s.clear(), o.clear(), a.clear(), c.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of r.keys()) null == u.Ay.getProject(e) && (r.delete(e), (t = !0));
            for (let e of o.keys()) null == u.Ay.getProject(e) && (o.delete(e), (t = !0));
            for (let e of a.keys()) null == u.Ay.getProject(e) && (a.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: n,
                    publishState: l,
                    surface: _,
                    previewAppChannels: u,
                    previewDevicePermissions: s = E,
                    publishedRevision: c = null,
                    publishedAt: d = null,
                    publishing: R = !1,
                    patchNotesSent: h,
                    newUiUnpublished: A = !1,
                } = e,
                P = !R && o.delete(n),
                C = !R && a.delete(n),
                f = r.get(n),
                O =
                    null == h ||
                    ((t = f?.patchNotesSent ?? p),
                    t.length === h.length &&
                        t.every(
                            (e, t) => e.publishedRevision === h[t].publishedRevision && e.messageId === h[t].messageId,
                        ))
                        ? (f?.patchNotesSent ?? p)
                        : h;
            if (
                !P &&
                !C &&
                f?.publishState === l &&
                f.surface === _ &&
                (0, i.v)(f.previewAppChannels, u) &&
                (0, i.v)(f.previewDevicePermissions ?? E, s) &&
                f.publishedRevision === c &&
                f.publishedAt === d &&
                f.publishing === R &&
                f.patchNotesSent === O &&
                f.newUiUnpublished === A
            )
                return !1;
            r.set(n, {
                publishState: l,
                surface: _,
                previewAppChannels: u,
                previewDevicePermissions: s,
                publishedRevision: c,
                publishedAt: d,
                publishing: R,
                patchNotesSent: O,
                newUiUnpublished: A,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            s.add(t);
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e,
                n = s.delete(t),
                l = r.get(t)?.publishing !== !0 && a.delete(t);
            return n || l;
        },
        CONJURE_PROJECT_PUBLISH_APPROVAL: function (e) {
            let { projectId: t, approvalUrl: n } = e;
            return null == n ? o.delete(t) : o.get(t) !== n && void o.set(t, n);
        },
        CONJURE_PROJECT_PUBLISH_PROGRESS: function (e) {
            let { projectId: t, progress: n } = e;
            if (a.get(t)?.stage === n.stage) return !1;
            a.set(t, n);
        },
        CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
            let { projectId: t, pending: n } = e;
            if (c.has(t) === n) return !1;
            n ? c.add(t) : c.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: n } = e,
                l = r.get(t);
            if (null == l) return !1;
            r.set(t, {
                ...l,
                patchNotesSent: [
                    ...(l.patchNotesSent ?? p).filter((e) => e.publishedRevision !== n.publishedRevision),
                    n,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (r.delete(t), s.delete(t), o.delete(t), a.delete(t), c.delete(t));
        },
    });
