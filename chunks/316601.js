var i = a(855986),
    n = a(73153),
    l = a(951178);
let r = [],
    s = r,
    c = "unattempted";
function o(t) {
    return "guild" === t.install_scope && t.supported_surfaces?.includes(l.q7.PROFILE_WIDGET) === !0;
}
class d extends i.Ay.Store {
    static displayName = "ConjureServerWidgetStore";
    getProjects() {
        return s;
    }
    getProject(t) {
        return s.find((e) => e.application_id === t);
    }
    getFetchState() {
        return c;
    }
}
let u = new d(n.h, {
    CONJURE_SERVER_PROFILE_WIDGETS_FETCH_START: function () {
        c = "loading";
    },
    CONJURE_SERVER_PROFILE_WIDGETS_FETCH_SUCCESS: function (t) {
        let { projects: e } = t,
            a = e.filter(o);
        ((s = 0 === a.length ? r : a), (c = "success"));
    },
    CONJURE_SERVER_PROFILE_WIDGETS_FETCH_FAIL: function () {
        c = "error";
    },
    LOGOUT: function () {
        ((s = r), (c = "unattempted"));
    },
});
a.d(e, {}, { A: u });
