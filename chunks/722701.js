n.d(t, { A: () => E });
var i = n(17928),
    l = n(52133),
    _ = n(73153),
    u = n(260498);
let r = new Map(),
    s = new Set(),
    a = new Set(),
    o = [];
class c extends i.Ay.Store {
    initialize() {
        this.waitFor(u.Ay);
    }
    getPublishStatus(e) {
        return r.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return s.has(e);
    }
    isAppChannelPending(e) {
        return a.has(e);
    }
}
let p = [],
    E = new c(_.h, {
        LOGOUT: function () {
            if (0 === r.size && 0 === s.size && 0 === a.size) return !1;
            (r.clear(), s.clear(), a.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of r.keys()) null == u.Ay.getProject(e) && (r.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: n,
                    published: i,
                    hasUnpublishedChanges: _,
                    surface: u,
                    previewAppChannels: s,
                    previewDevicePermissions: a = p,
                    publishedRevision: c = null,
                    publishedAt: E = null,
                    publishing: d = !1,
                    patchNotesSent: R,
                    newUiUnpublished: h = !1,
                } = e,
                A = i ? (_ ? "changes" : "up_to_date") : "unpublished",
                P = r.get(n),
                f =
                    null == R ||
                    ((t = P?.patchNotesSent ?? o),
                    t.length === R.length &&
                        t.every(
                            (e, t) => e.publishedRevision === R[t].publishedRevision && e.messageId === R[t].messageId,
                        ))
                        ? (P?.patchNotesSent ?? o)
                        : R;
            if (
                P?.state === A &&
                P.surface === u &&
                (0, l.v)(P.previewAppChannels, s) &&
                (0, l.v)(P.previewDevicePermissions ?? p, a) &&
                P.publishedRevision === c &&
                P.publishedAt === E &&
                P.publishing === d &&
                P.patchNotesSent === f &&
                P.newUiUnpublished === h
            )
                return !1;
            r.set(n, {
                state: A,
                surface: u,
                previewAppChannels: s,
                previewDevicePermissions: a,
                publishedRevision: c,
                publishedAt: E,
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
        CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
            let { projectId: t, pending: n } = e;
            if (a.has(t) === n) return !1;
            n ? a.add(t) : a.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: n } = e,
                i = r.get(t);
            if (null == i) return !1;
            r.set(t, {
                ...i,
                patchNotesSent: [
                    ...(i.patchNotesSent ?? o).filter((e) => e.publishedRevision !== n.publishedRevision),
                    n,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (r.delete(t), s.delete(t), a.delete(t));
        },
    });
