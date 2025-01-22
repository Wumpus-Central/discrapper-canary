r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(685072),
    o = r(287734),
    s = r(871499),
    l = r(388032);
function u(e) {
    let { centerButton: n = !1, onClick: r, onMouseEnter: u, onMouseLeave: c, ...d } = e,
        f = n ? s.d : s.Z,
        p = () => {
            o.default.disconnect(), null == r || r();
        },
        h = () => l.intl.string(l.t['6vrfgo']),
        { Component: _, events: m } = (0, a.K)();
    return (0, i.jsx)(f, {
        ...d,
        onClick: p,
        iconComponent: _,
        onMouseEnter: (e) => {
            null == u || u(e), m.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == c || c(e), m.onMouseLeave();
        },
        label: h()
    });
}
