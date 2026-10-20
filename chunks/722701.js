n.d(t, { A: () => d });
var i = n(17928),
    l = n(52133),
    u = n(73153),
    _ = n(260498);
let r = new Map(),
    s = new Set(),
    a = new Map(),
    o = new Set(),
    c = [];
class p extends i.Ay.Store {
    initialize() {
        this.waitFor(_.Ay);
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
    d = new p(u.h, {
        LOGOUT: function () {
            if (0 === r.size && 0 === s.size && 0 === a.size && 0 === o.size) return !1;
            (r.clear(), s.clear(), a.clear(), o.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of r.keys()) null == _.Ay.getProject(e) && (r.delete(e), (t = !0));
            for (let e of a.keys()) null == _.Ay.getProject(e) && (a.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: n,
                    published: i,
                    hasUnpublishedChanges: u,
                    surface: _,
                    previewAppChannels: s,
                    previewDevicePermissions: o = E,
                    publishedRevision: p = null,
                    publishedAt: d = null,
                    publishing: R = !1,
                    patchNotesSent: h,
                    newUiUnpublished: P = !1,
                } = e,
                A = !R && a.delete(n),
                f = i ? (u ? "changes" : "up_to_date") : "unpublished",
                C = r.get(n),
                U =
                    null == h ||
                    ((t = C?.patchNotesSent ?? c),
                    t.length === h.length &&
                        t.every(
                            (e, t) => e.publishedRevision === h[t].publishedRevision && e.messageId === h[t].messageId,
                        ))
                        ? (C?.patchNotesSent ?? c)
                        : h;
            if (
                !A &&
                C?.state === f &&
                C.surface === _ &&
                (0, l.v)(C.previewAppChannels, s) &&
                (0, l.v)(C.previewDevicePermissions ?? E, o) &&
                C.publishedRevision === p &&
                C.publishedAt === d &&
                C.publishing === R &&
                C.patchNotesSent === U &&
                C.newUiUnpublished === P
            )
                return !1;
            r.set(n, {
                state: f,
                surface: _,
                previewAppChannels: s,
                previewDevicePermissions: o,
                publishedRevision: p,
                publishedAt: d,
                publishing: R,
                patchNotesSent: U,
                newUiUnpublished: P,
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
