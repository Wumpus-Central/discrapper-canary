n.d(t, { A: () => x });
var i = n(17928),
    r = n(73153),
    s = n(42766),
    l = n(164892);
function a(e) {
    return (
        "user" === e.install_scope && e.supported_surfaces?.includes(l.q7.OVERLAY) === !0 && null != e.overlay_widget
    );
}
var o = n(644434);
let d = [],
    u = { hiddenApplicationIds: [] },
    c = u,
    h = new Set(),
    m = d;
function g(e) {
    ((c = { hiddenApplicationIds: e }), (h = new Set(e)));
}
function p() {
    let e = s.Ay.getOwnedProjects().filter(a);
    (e.length === m.length && e.every((e, t) => e === m[t])) || (m = 0 === e.length ? d : e);
}
class f extends i.Ay.PersistedStore {
    static displayName = "ConjureOverlayWidgetsStore";
    static persistKey = "ConjureOverlayWidgets";
    initialize(e) {
        (g(e?.hiddenApplicationIds ?? u.hiddenApplicationIds), p(), this.syncWith([s.Ay], () => (p(), !0)));
    }
    getState() {
        return c;
    }
    getProjects() {
        return m;
    }
    getProject(e) {
        if (null != e) return m.find((t) => t.application_id === e);
    }
    getFetchStatus() {
        let e = s.Ay.getOwnedProjectsFetchState();
        return "unattempted" === e ? "idle" : e;
    }
    hasFetchSucceeded() {
        return s.Ay.hasFetchedOwnedProjects();
    }
    getHiddenApplicationIds() {
        return h;
    }
    isHidden(e) {
        return h.has(e);
    }
}
let x = new f(r.h, {
    LOGOUT: function () {
        ((m = d), g([]));
    },
    LAYOUT_DELETE_ALL_WIDGETS: function (e) {
        let { layoutId: t } = e;
        if (t !== o.GJ || 0 === h.size) return !1;
        g([]);
    },
    CONJURE_OVERLAY_WIDGET_HIDE: function (e) {
        let { applicationId: t } = e;
        if (h.has(t)) return !1;
        g([...c.hiddenApplicationIds, t]);
    },
    CONJURE_OVERLAY_WIDGET_SHOW: function (e) {
        let { applicationId: t } = e;
        if (!h.has(t)) return !1;
        g(c.hiddenApplicationIds.filter((e) => e !== t));
    },
});
