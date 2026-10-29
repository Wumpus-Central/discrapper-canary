n.d(t, { A: () => E });
var i = n(17928),
    r = n(73153);
let a = { chatOpen: !0, debugOpen: !1, previewSelection: null, chatScroll: null },
    s = null,
    l = !1,
    o = "",
    d = new Map(),
    c = new Map(),
    u = new Set();
class _ extends i.Ay.Store {
    static displayName = "ConjurePagesStore";
    getProjectId() {
        return s;
    }
    isOnPage() {
        return l;
    }
    getShownProjectId() {
        return l ? s : null;
    }
    getHomePrompt() {
        return o;
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
        return (!l || e.projectId !== s) && ((s = e.projectId), (l = !0), !0);
    },
    CONJURE_PAGES_LEAVE: function () {
        return !!l && ((l = !1), !0);
    },
    CONJURE_PAGES_HOME_PROMPT_SAVE: function (e) {
        let { prompt: t } = e;
        return ((o = t), !1);
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
        return (u.add(t), c.delete(t), t === s && ((s = null), !0));
    },
    LOGOUT: function () {
        ((s = null), (l = !1), (o = ""), d.clear(), c.clear(), u.clear());
    },
});
