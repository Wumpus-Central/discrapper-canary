n.d(t, { A: () => d });
var i = n(17928),
    l = n(52133),
    _ = n(73153),
    u = n(260498);
let r = new Map(),
    s = new Set(),
    a = new Map(),
    o = new Set(),
    c = [];
class p extends i.Ay.Store {
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
        return a.get(e) ?? null;
    }
    isAppChannelPending(e) {
        return o.has(e);
    }
}
let E = [],
    d = new p(_.h, {
        LOGOUT: function () {
            if (0 === r.size && 0 === s.size && 0 === a.size && 0 === o.size) return !1;
            (r.clear(), s.clear(), a.clear(), o.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of r.keys()) null == u.Ay.getProject(e) && (r.delete(e), (t = !0));
            for (let e of a.keys()) null == u.Ay.getProject(e) && (a.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: n,
                    publishState: i,
                    surface: _,
                    previewAppChannels: u,
                    previewDevicePermissions: s = E,
                    publishedRevision: o = null,
                    publishedAt: p = null,
                    publishing: d = !1,
                    patchNotesSent: R,
                    newUiUnpublished: h = !1,
                } = e,
                A = !d && a.delete(n),
                P = r.get(n),
                f =
                    null == R ||
                    ((t = P?.patchNotesSent ?? c),
                    t.length === R.length &&
                        t.every(
                            (e, t) => e.publishedRevision === R[t].publishedRevision && e.messageId === R[t].messageId,
                        ))
                        ? (P?.patchNotesSent ?? c)
                        : R;
            if (
                !A &&
                P?.publishState === i &&
                P.surface === _ &&
                (0, l.v)(P.previewAppChannels, u) &&
                (0, l.v)(P.previewDevicePermissions ?? E, s) &&
                P.publishedRevision === o &&
                P.publishedAt === p &&
                P.publishing === d &&
                P.patchNotesSent === f &&
                P.newUiUnpublished === h
            )
                return !1;
            r.set(n, {
                publishState: i,
                surface: _,
                previewAppChannels: u,
                previewDevicePermissions: s,
                publishedRevision: o,
                publishedAt: p,
                publishing: d,
                patchNotesSent: f,
                newUiUnpublished: h,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            s.add(t);
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e;
            return s.delete(t);
        },
        CONJURE_PROJECT_PUBLISH_APPROVAL: function (e) {
            let { projectId: t, approvalUrl: n } = e;
            return null == n ? a.delete(t) : a.get(t) !== n && void a.set(t, n);
        },
        CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
            let { projectId: t, pending: n } = e;
            if (o.has(t) === n) return !1;
            n ? o.add(t) : o.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: n } = e,
                i = r.get(t);
            if (null == i) return !1;
            r.set(t, {
                ...i,
                patchNotesSent: [
                    ...(i.patchNotesSent ?? c).filter((e) => e.publishedRevision !== n.publishedRevision),
                    n,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (r.delete(t), s.delete(t), a.delete(t), o.delete(t));
        },
    });
