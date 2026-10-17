n.d(t, { A: () => c });
var i = n(17928),
    l = n(73153),
    _ = n(260498);
let u = new Map(),
    a = new Set(),
    r = new Set(),
    s = [];
class o extends i.Ay.Store {
    initialize() {
        this.waitFor(_.Ay);
    }
    getPublishStatus(e) {
        return u.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return a.has(e);
    }
    isAppChannelPending(e) {
        return r.has(e);
    }
}
let c = new o(l.h, {
    LOGOUT: function () {
        if (0 === u.size && 0 === a.size && 0 === r.size) return !1;
        (u.clear(), a.clear(), r.clear());
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of u.keys()) null == _.Ay.getProject(e) && (u.delete(e), (t = !0));
        if (!t) return !1;
    },
    CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
        var t;
        let {
                projectId: n,
                published: i,
                hasUnpublishedChanges: l,
                surface: _,
                previewAppChannels: a,
                publishedRevision: r = null,
                publishedAt: o = null,
                publishing: c = !1,
                patchNotesSent: p,
            } = e,
            E = i ? (l ? "changes" : "up_to_date") : "unpublished",
            d = u.get(n),
            h =
                null == p ||
                ((t = d?.patchNotesSent ?? s),
                t.length === p.length &&
                    t.every((e, t) => e.publishedRevision === p[t].publishedRevision && e.messageId === p[t].messageId))
                    ? (d?.patchNotesSent ?? s)
                    : p;
        if (
            d?.state === E &&
            d.surface === _ &&
            d.previewAppChannels.length === a.length &&
            d.previewAppChannels.every((e, t) => e === a[t]) &&
            d.publishedRevision === r &&
            d.publishedAt === o &&
            d.publishing === c &&
            d.patchNotesSent === h
        )
            return !1;
        u.set(n, {
            state: E,
            surface: _,
            previewAppChannels: a,
            publishedRevision: r,
            publishedAt: o,
            publishing: c,
            patchNotesSent: h,
        });
    },
    CONJURE_PROJECT_PUBLISH_START: function (e) {
        let { projectId: t } = e;
        a.add(t);
    },
    CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
        let { projectId: t } = e;
        return a.delete(t);
    },
    CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
        let { projectId: t, pending: n } = e;
        if (r.has(t) === n) return !1;
        n ? r.add(t) : r.delete(t);
    },
    CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
        let { projectId: t, sent: n } = e,
            i = u.get(t);
        if (null == i) return !1;
        u.set(t, {
            ...i,
            patchNotesSent: [...(i.patchNotesSent ?? s).filter((e) => e.publishedRevision !== n.publishedRevision), n],
        });
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (u.delete(t), a.delete(t), r.delete(t));
    },
});
