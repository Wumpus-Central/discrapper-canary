n.d(t, { A: () => h });
var i = n(17928),
    l = n(73153),
    r = n(260498),
    s = n(951178);
function a(e) {
    return (
        "user" === e.install_scope && e.supported_surfaces?.includes(s.q7.OVERLAY) === !0 && null != e.overlay_widget
    );
}
let o = [],
    d = o;
function u() {
    let e = r.Ay.getOwnedProjects().filter(a);
    (e.length === d.length && e.every((e, t) => e === d[t])) || (d = 0 === e.length ? o : e);
}
class c extends i.Ay.Store {
    static displayName = "ConjureOverlayWidgetsStore";
    initialize() {
        (u(), this.syncWith([r.Ay], () => (u(), !0)));
    }
    getProjects() {
        return d;
    }
    getProject(e) {
        if (null != e) return d.find((t) => t.application_id === e);
    }
    hasFetchSucceeded() {
        return r.Ay.hasFetchedOwnedProjects();
    }
}
let h = new c(l.h, {
    LOGOUT: function () {
        d = o;
    },
});
