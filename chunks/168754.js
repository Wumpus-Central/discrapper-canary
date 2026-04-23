t.d(n, { A: () => s });
var l = t(627968);
t(64700);
var i = t(697744),
    a = t(709562);
function s(e) {
    let { isActivityActive: n, onMouseEnter: t, onMouseLeave: s, onClick: r, ...o } = e,
        { Component: c, events: u, play: d } = (0, i.c)();
    return (0, l.jsx)(a.l, {
        isTrayButton: !0,
        isActive: n,
        color: n ? "green" : void 0,
        iconComponent: c,
        onMouseEnter: (e) => {
            t?.(e), u.onMouseEnter();
        },
        onMouseLeave: (e) => {
            s?.(e), u.onMouseLeave();
        },
        onClick: (e) => {
            r?.(e), d();
        },
        ...o,
    });
}
