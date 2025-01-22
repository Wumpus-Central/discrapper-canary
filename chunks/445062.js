r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(864094),
    o = r(871499),
    s = r(388032);
function l(e) {
    return e ? s.intl.string(s.t.S5anIS) : s.intl.string(s.t.q3O3Jy);
}
function u(e) {
    let { isSelfStream: n, centerButton: r = !1, onMouseEnter: s, onMouseLeave: u, ...c } = e,
        d = r ? o.d : o.Z,
        { Component: f, events: p } = (0, a.P)('disable');
    return (0, i.jsx)(d, {
        label: l(n),
        iconComponent: f,
        isActive: !0,
        onMouseEnter: (e) => {
            null == s || s(e), p.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == u || u(e), p.onMouseLeave();
        },
        ...c
    });
}
