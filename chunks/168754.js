n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var l = n(697744),
    s = n(709562);
function a(e) {
    let { isActivityActive: t, onMouseEnter: n, onMouseLeave: a, onClick: r, ...o } = e,
        { Component: d, events: c, play: u } = (0, l.c)();
    return (0, i.jsx)(s.l, {
        isTrayButton: !0,
        isActive: t,
        color: t ? "green" : void 0,
        iconComponent: d,
        onMouseEnter: (e) => {
            n?.(e), c.onMouseEnter();
        },
        onMouseLeave: (e) => {
            a?.(e), c.onMouseLeave();
        },
        onClick: (e) => {
            r?.(e), u();
        },
        ...o,
    });
}
