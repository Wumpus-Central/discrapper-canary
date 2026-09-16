t.d(n, { A: () => s });
var i = t(477900);
t(582128);
var l = t(697744),
    a = t(204651);
function s(e) {
    let { isActivityActive: n, onMouseEnter: t, onMouseLeave: s, onClick: o, ...r } = e,
        { Component: c, events: u, play: d } = (0, l.c)();
    return (0, i.jsx)(a.l, {
        isTrayButton: !0,
        isActive: n,
        color: n ? "green" : void 0,
        iconComponent: c,
        onMouseEnter: (e) => {
            (t?.(e), u.onMouseEnter());
        },
        onMouseLeave: (e) => {
            (s?.(e), u.onMouseLeave());
        },
        onClick: (e) => {
            (o?.(e), d());
        },
        ...r,
    });
}
