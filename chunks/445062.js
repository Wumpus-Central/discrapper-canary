n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(864094),
    a = n(871499),
    s = n(388032);
function o(e) {
    return e ? s.intl.string(s.t.S5anIS) : s.intl.string(s.t.q3O3Jy);
}
function l(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: s, onMouseLeave: l, ...u } = e,
        c = n ? a.d : a.Z,
        { Component: d, events: f } = (0, r.P)('disable');
    return (0, i.jsx)(c, {
        label: o(t),
        iconComponent: d,
        onMouseEnter: (e) => {
            null == s || s(e), f.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == l || l(e), f.onMouseLeave();
        },
        ...u
    });
}
