l.d(t, { A: () => _ });
var n = l(17928),
    i = l(52133),
    s = l(73153),
    r = l(260498);
let u = new Map(),
    o = new Set(),
    a = new Map(),
    d = new Map(),
    P = new Map(),
    c = new Set(),
    h = [];
class p extends n.Ay.Store {
    initialize() {
        this.waitFor(r.Ay);
    }
    getPublishStatus(e) {
        return u.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return o.has(e);
    }
    getPublishApprovalUrl(e) {
        return a.get(e) ?? null;
    }
    getPublishProgress(e) {
        return d.get(e) ?? null;
    }
    getPublishFailure(e) {
        return P.get(e) ?? null;
    }
    isAppChannelPending(e) {
        return c.has(e);
    }
}
let E = [],
    _ = new p(s.h, {
        LOGOUT: function () {
            if (0 === u.size && 0 === o.size && 0 === a.size && 0 === d.size && 0 === P.size && 0 === c.size) return !1;
            (u.clear(), o.clear(), a.clear(), d.clear(), P.clear(), c.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of u.keys()) null == r.Ay.getProject(e) && (u.delete(e), (t = !0));
            for (let e of a.keys()) null == r.Ay.getProject(e) && (a.delete(e), (t = !0));
            for (let e of d.keys()) null == r.Ay.getProject(e) && (d.delete(e), (t = !0));
            for (let e of P.keys()) null == r.Ay.getProject(e) && (P.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: l,
                    publishState: n,
                    surface: s,
                    previewAppChannels: r,
                    previewDevicePermissions: o = E,
                    publishedRevision: c = null,
                    publishedAt: p = null,
                    publishing: _ = !1,
                    patchNotesSent: S,
                    newUiUnpublished: C = !1,
                } = e,
                R = !_ && a.delete(l),
                g = !_ && d.delete(l),
                f = u.get(l),
                O = (_ || (null != f && f.publishedRevision !== c)) && P.delete(l),
                U =
                    null == S ||
                    ((t = f?.patchNotesSent ?? h),
                    t.length === S.length &&
                        t.every(
                            (e, t) => e.publishedRevision === S[t].publishedRevision && e.messageId === S[t].messageId,
                        ))
                        ? (f?.patchNotesSent ?? h)
                        : S;
            if (
                !R &&
                !g &&
                !O &&
                f?.publishState === n &&
                f.surface === s &&
                (0, i.v)(f.previewAppChannels, r) &&
                (0, i.v)(f.previewDevicePermissions ?? E, o) &&
                f.publishedRevision === c &&
                f.publishedAt === p &&
                f.publishing === _ &&
                f.patchNotesSent === U &&
                f.newUiUnpublished === C
            )
                return !1;
            u.set(l, {
                publishState: n,
                surface: s,
                previewAppChannels: r,
                previewDevicePermissions: o,
                publishedRevision: c,
                publishedAt: p,
                publishing: _,
                patchNotesSent: U,
                newUiUnpublished: C,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            (o.add(t), P.delete(t));
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e,
                l = o.delete(t),
                n = u.get(t)?.publishing !== !0 && d.delete(t);
            return l || n;
        },
        CONJURE_PROJECT_PUBLISH_FAILED: function (e) {
            let { projectId: t, message: l } = e;
            if (P.get(t) === l) return !1;
            P.set(t, l);
        },
        CONJURE_PROJECT_PUBLISH_APPROVAL: function (e) {
            let { projectId: t, approvalUrl: l } = e;
            return null == l ? a.delete(t) : a.get(t) !== l && void a.set(t, l);
        },
        CONJURE_PROJECT_PUBLISH_PROGRESS: function (e) {
            let { projectId: t, progress: l } = e;
            if (d.get(t)?.stage === l.stage) return !1;
            d.set(t, l);
        },
        CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
            let { projectId: t, pending: l } = e;
            if (c.has(t) === l) return !1;
            l ? c.add(t) : c.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: l } = e,
                n = u.get(t);
            if (null == n) return !1;
            u.set(t, {
                ...n,
                patchNotesSent: [
                    ...(n.patchNotesSent ?? h).filter((e) => e.publishedRevision !== l.publishedRevision),
                    l,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (u.delete(t), o.delete(t), a.delete(t), d.delete(t), P.delete(t), c.delete(t));
        },
    });
