n.d(t, { A: () => h });
var i = n(855986),
    r = n(73153),
    l = n(260498),
    s = n(951178);
function a(e) {
    return (
        "user" === e.install_scope && e.supported_surfaces?.includes(s.q7.OVERLAY) === !0 && null != e.overlay_widget
    );
}
let o = [],
    u = o;
function d() {
    let e = l.Ay.getOwnedProjects().filter(a);
    (e.length === u.length && e.every((e, t) => e === u[t])) || (u = 0 === e.length ? o : e);
}
class c extends i.Ay.Store {
    static displayName = "ConjureOverlayWidgetsStore";
    initialize() {
        (d(), this.syncWith([l.Ay], () => (d(), !0)));
    }
    getProjects() {
        return u;
    }
    getProject(e) {
        if (null != e) return u.find((t) => t.application_id === e);
    }
    hasFetchSucceeded() {
        return l.Ay.hasFetchedOwnedProjects();
    }
}
let h = new c(r.h, {
    LOGOUT: function () {
        u = o;
    },
});
