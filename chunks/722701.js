n.d(t, { A: () => d });
var s = n(17928),
    r = n(73153),
    o = n(260498);
let i = new Map(),
    l = new Set(),
    a = new Set();
class c extends s.Ay.Store {
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
let d = new c(r.h, {
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
        let {
                projectId: t,
                published: n,
                hasUnpublishedChanges: s,
                surface: r,
                previewAppChannels: o,
                publishedRevision: l = null,
                publishedAt: a = null,
                publishing: c = !1,
            } = e,
            d = n ? (s ? "changes" : "up_to_date") : "unpublished",
            u = i.get(t);
        if (
            u?.state === d &&
            u.surface === r &&
            u.previewAppChannels.length === o.length &&
            u.previewAppChannels.every((e, t) => e === o[t]) &&
            u.publishedRevision === l &&
            u.publishedAt === a &&
            u.publishing === c
        )
            return !1;
        i.set(t, { state: d, surface: r, previewAppChannels: o, publishedRevision: l, publishedAt: a, publishing: c });
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
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (i.delete(t), l.delete(t), a.delete(t));
    },
});
