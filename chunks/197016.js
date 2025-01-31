n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(685072),
    a = n(287734),
    s = n(871499),
    o = n(388032);
function l(e) {
    let { centerButton: t = !1, onClick: n, onMouseEnter: l, onMouseLeave: u, ...c } = e,
        d = t ? s.d : s.Z,
        f = () => {
            a.default.disconnect(), null == n || n();
        },
        _ = () => o.intl.string(o.t['6vrfgo']),
        { Component: p, events: h } = (0, r.K)();
    return (0, i.jsx)(d, {
        ...c,
        onClick: f,
        iconComponent: p,
        onMouseEnter: (e) => {
            null == l || l(e), h.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == u || u(e), h.onMouseLeave();
        },
        label: _()
    });
}
