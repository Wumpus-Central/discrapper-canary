n.d(t, { A: () => A });
var i = n(17928),
    r = n(73153);
let a = { chatOpen: !0, debugOpen: !1, previewSelection: null, chatScroll: null },
    s = null,
    l = !1,
    o = "",
    d = null,
    c = new Map(),
    u = new Map(),
    _ = new Set();
class E extends i.Ay.Store {
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
    getReturnRoute() {
        return d;
    }
    getHomePrompt() {
        return o;
    }
    getScrollTop(e) {
        return c.get(e) ?? 0;
    }
    getProjectView(e) {
        return u.get(e) ?? a;
    }
}
let A = new E(r.h, {
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
        return (c.set(t, n), !1);
    },
    CONJURE_PAGES_PROJECT_VIEW_SAVE: function (e) {
        let { projectId: t, view: n } = e;
        return !_.has(t) && (u.set(t, { ...(u.get(t) ?? a), ...n }), !1);
    },
    CONJURE_PAGES_RETURN_ROUTE_SAVE: function (e) {
        let { route: t } = e;
        return ((d = t), !1);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        return (_.add(t), u.delete(t), t === s && ((s = null), !0));
    },
    LOGOUT: function () {
        ((s = null), (l = !1), (o = ""), (d = null), c.clear(), u.clear(), _.clear());
    },
});
