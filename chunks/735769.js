n.d(t, { A: () => h });
var i = n(17928),
    r = n(73153);
let a = { chatOpen: !0, debugOpen: !1, previewSelection: null, chatScroll: null },
    s = null,
    l = !1,
    o = !1,
    d = null,
    c = "",
    u = new Map(),
    _ = new Map(),
    E = new Set();
class A extends i.Ay.Store {
    static displayName = "ConjurePagesStore";
    getProjectId() {
        return s;
    }
    isOnPage() {
        return l;
    }
    isOverlayOpen() {
        return o;
    }
    getShownProjectId() {
        return l ? s : null;
    }
    getExitRoute() {
        return d;
    }
    getHomePrompt() {
        return c;
    }
    getScrollTop(e) {
        return u.get(e) ?? 0;
    }
    getProjectView(e) {
        return _.get(e) ?? a;
    }
}
let h = new A(r.h, {
    CONJURE_PAGES_VISIT: function (e) {
        return (!l || e.projectId !== s) && ((s = e.projectId), (l = !0), !0);
    },
    CONJURE_PAGES_LEAVE: function () {
        return !!l && ((l = !1), !0);
    },
    CONJURE_PAGES_NAVIGATE: function (e) {
        return e.projectId !== s && ((s = e.projectId), !0);
    },
    CONJURE_PAGES_OVERLAY_SET: function (e) {
        let { open: t } = e;
        return t !== o && ((o = t), !0);
    },
    CONJURE_PAGES_PIN_SET: function (e) {
        let { pinned: t } = e;
        return !!t && !!o && ((o = !1), !0);
    },
    CONJURE_PAGES_EXIT_ROUTE_SAVE: function (e) {
        let { route: t } = e;
        return ((d = t), !1);
    },
    CONJURE_PAGES_HOME_PROMPT_SAVE: function (e) {
        let { prompt: t } = e;
        return ((c = t), !1);
    },
    CONJURE_PAGES_SCROLL_SAVE: function (e) {
        let { key: t, scrollTop: n } = e;
        return (u.set(t, n), !1);
    },
    CONJURE_PAGES_PROJECT_VIEW_SAVE: function (e) {
        let { projectId: t, view: n } = e;
        return !E.has(t) && (_.set(t, { ...(_.get(t) ?? a), ...n }), !1);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        return (E.add(t), _.delete(t), t === s && ((s = null), !0));
    },
    LOGOUT: function () {
        ((s = null), (l = !1), (o = !1), (d = null), (c = ""), u.clear(), _.clear(), E.clear());
    },
});
