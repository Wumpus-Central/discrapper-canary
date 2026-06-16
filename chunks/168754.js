t.d(n, { A: () => a });
var l = t(627968);
t(64700);
var i = t(697744),
    s = t(204651);
function a(e) {
    let { isActivityActive: n, onMouseEnter: t, onMouseLeave: a, onClick: r, ...o } = e,
        { Component: c, events: u, play: d } = (0, i.c)();
    return (0, l.jsx)(s.l, {
        isTrayButton: !0,
        isActive: n,
        color: n ? "green" : void 0,
        iconComponent: c,
        onMouseEnter: (e) => {
            t?.(e), u.onMouseEnter();
        },
        onMouseLeave: (e) => {
            a?.(e), u.onMouseLeave();
        },
        onClick: (e) => {
            r?.(e), d();
        },
        ...o,
    });
}
