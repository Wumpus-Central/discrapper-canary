l.d(t, { A: () => E });
var n = l(17928),
    i = l(52133),
    s = l(73153),
    u = l(260498);
let r = new Map(),
    o = new Set(),
    a = new Map(),
    d = new Map(),
    c = new Map(),
    p = new Set(),
    _ = [];
class h extends n.Ay.Store {
    initialize() {
        this.waitFor(u.Ay);
    }
    getPublishStatus(e) {
        return r.get(e) ?? null;
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
        return c.get(e) ?? null;
    }
    isAppChannelPending(e) {
        return p.has(e);
    }
}
let P = [],
    E = new h(s.h, {
        LOGOUT: function () {
            if (0 === r.size && 0 === o.size && 0 === a.size && 0 === d.size && 0 === c.size && 0 === p.size) return !1;
            (r.clear(), o.clear(), a.clear(), d.clear(), c.clear(), p.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of r.keys()) null == u.Ay.getProject(e) && (r.delete(e), (t = !0));
            for (let e of a.keys()) null == u.Ay.getProject(e) && (a.delete(e), (t = !0));
            for (let e of d.keys()) null == u.Ay.getProject(e) && (d.delete(e), (t = !0));
            for (let e of c.keys()) null == u.Ay.getProject(e) && (c.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: l,
                    publishState: n,
                    surface: s,
                    previewAppChannels: u,
                    previewDevicePermissions: o = P,
                    publishedRevision: p = null,
                    publishedAt: h = null,
                    publishing: E = !1,
                    patchNotesSent: g,
                    newUiUnpublished: S = !1,
                } = e,
                C = !E && a.delete(l),
                f = !E && d.delete(l),
                R = r.get(l),
                O = (E || (null != R && R.publishedRevision !== p)) && c.delete(l),
                U =
                    null == g ||
                    ((t = R?.patchNotesSent ?? _),
                    t.length === g.length &&
                        t.every(
                            (e, t) => e.publishedRevision === g[t].publishedRevision && e.messageId === g[t].messageId,
                        ))
                        ? (R?.patchNotesSent ?? _)
                        : g;
            if (
                !C &&
                !f &&
                !O &&
                R?.publishState === n &&
                R.surface === s &&
                (0, i.v)(R.previewAppChannels, u) &&
                (0, i.v)(R.previewDevicePermissions ?? P, o) &&
                R.publishedRevision === p &&
                R.publishedAt === h &&
                R.publishing === E &&
                R.patchNotesSent === U &&
                R.newUiUnpublished === S
            )
                return !1;
            r.set(l, {
                publishState: n,
                surface: s,
                previewAppChannels: u,
                previewDevicePermissions: o,
                publishedRevision: p,
                publishedAt: h,
                publishing: E,
                patchNotesSent: U,
                newUiUnpublished: S,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            (o.add(t), c.delete(t));
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e,
                l = o.delete(t),
                n = r.get(t)?.publishing !== !0 && d.delete(t);
            return l || n;
        },
        CONJURE_PROJECT_PUBLISH_FAILED: function (e) {
            let { projectId: t, message: l } = e;
            if (c.get(t) === l) return !1;
            c.set(t, l);
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
            if (p.has(t) === l) return !1;
            l ? p.add(t) : p.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: l } = e,
                n = r.get(t);
            if (null == n) return !1;
            r.set(t, {
                ...n,
                patchNotesSent: [
                    ...(n.patchNotesSent ?? _).filter((e) => e.publishedRevision !== l.publishedRevision),
                    l,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (r.delete(t), o.delete(t), a.delete(t), d.delete(t), c.delete(t), p.delete(t));
        },
    });
