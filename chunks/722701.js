n.d(t, { A: () => u });
var s = n(17928),
    r = n(73153),
    o = n(260498);
let i = new Map(),
    l = new Set(),
    a = new Set(),
    c = [];
class d extends s.Ay.Store {
    initialize() {
        this.waitFor(o.Ay);
    }
    getPublishStatus(e) {
        return i.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return l.has(e);
    }
    isAppChannelPending(e) {
        return a.has(e);
    }
}
let u = new d(r.h, {
    LOGOUT: function () {
        if (0 === i.size && 0 === l.size && 0 === a.size) return !1;
        (i.clear(), l.clear(), a.clear());
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of i.keys()) null == o.Ay.getProject(e) && (i.delete(e), (t = !0));
        if (!t) return !1;
    },
    CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
        var t;
        let {
                projectId: n,
                published: s,
                hasUnpublishedChanges: r,
                surface: o,
                previewAppChannels: l,
                publishedRevision: a = null,
                publishedAt: d = null,
                publishing: u = !1,
                patchNotesSent: p,
            } = e,
            h = s ? (r ? "changes" : "up_to_date") : "unpublished",
            f = i.get(n),
            _ =
                null == p ||
                ((t = f?.patchNotesSent ?? c),
                t.length === p.length &&
                    t.every((e, t) => e.publishedRevision === p[t].publishedRevision && e.messageId === p[t].messageId))
                    ? (f?.patchNotesSent ?? c)
                    : p;
        if (
            f?.state === h &&
            f.surface === o &&
            f.previewAppChannels.length === l.length &&
            f.previewAppChannels.every((e, t) => e === l[t]) &&
            f.publishedRevision === a &&
            f.publishedAt === d &&
            f.publishing === u &&
            f.patchNotesSent === _
        )
            return !1;
        i.set(n, {
            state: h,
            surface: o,
            previewAppChannels: l,
            publishedRevision: a,
            publishedAt: d,
            publishing: u,
            patchNotesSent: _,
        });
    },
    CONJURE_PROJECT_PUBLISH_START: function (e) {
        let { projectId: t } = e;
        l.add(t);
    },
    CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
        let { projectId: t } = e;
        return l.delete(t);
    },
    CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
        let { projectId: t, pending: n } = e;
        if (a.has(t) === n) return !1;
        n ? a.add(t) : a.delete(t);
    },
    CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
        let { projectId: t, sent: n } = e,
            s = i.get(t);
        if (null == s) return !1;
        i.set(t, {
            ...s,
            patchNotesSent: [...(s.patchNotesSent ?? c).filter((e) => e.publishedRevision !== n.publishedRevision), n],
        });
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (i.delete(t), l.delete(t), a.delete(t));
    },
});
