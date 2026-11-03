n.d(t, { A: () => E });
var i = n(17928),
    r = n(73153);
let a = { chatOpen: !0, debugOpen: !1, previewSelection: null, chatScroll: null },
    s = null,
    l = null,
    o = !1,
    d = new Map(),
    c = new Map(),
    u = new Set();
class _ extends i.Ay.Store {
    static displayName = "ConjurePagesStore";
    getProjectId() {
        return l;
    }
    isOnPage() {
        return o;
    }
    getShownProjectId() {
        return o ? s : null;
    }
    getScrollTop(e) {
        return d.get(e) ?? 0;
    }
    getProjectView(e) {
        return c.get(e) ?? a;
    }
}
let E = new _(r.h, {
    CONJURE_PAGES_VISIT: function (e) {
        return (!0 !== e.inServer && (l = e.projectId), (!o || e.projectId !== s) && ((s = e.projectId), (o = !0), !0));
    },
    CONJURE_PAGES_LEAVE: function () {
        return !!o && ((o = !1), !0);
    },
    CONJURE_PAGES_SCROLL_SAVE: function (e) {
        let { key: t, scrollTop: n } = e;
        return (d.set(t, n), !1);
    },
    CONJURE_PAGES_PROJECT_VIEW_SAVE: function (e) {
        let { projectId: t, view: n } = e;
        return !u.has(t) && (c.set(t, { ...(c.get(t) ?? a), ...n }), !1);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        return (u.add(t), c.delete(t), t === l && (l = null), t === s && ((s = null), !0));
    },
    LOGOUT: function () {
        ((s = null), (l = null), (o = !1), d.clear(), c.clear(), u.clear());
    },
});
