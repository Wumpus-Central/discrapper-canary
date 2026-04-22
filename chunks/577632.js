"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(572808),
    l = n(9045),
    u = n(944766),
    d = n(615165);
let c = (e) => {
    let { seats: t, participant: n, participants: s, channel: c, idle: _, enableAnimations: f = !0 } = e,
        E = t.find((e) => e.claimedBy === n.userId),
        h = null != E,
        [p, m] = i.useState(!1),
        g = (0, l.A)(n),
        { x: A, y: I } = i.useMemo(() => {
            let e = { ...n.position };
            if (h) {
                let t = o.dG[E.id - 1];
                null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - g.height));
            }
            return e;
        }, [n.position, E, h, g]);
    return (0, r.jsx)("div", {
        className: a()(d.Wp, { [d.lv]: p }),
        style: { transform: `translate3d(${A}px, ${I}px, 0)`, zIndex: I },
        children:
            h &&
            (0, r.jsx)("div", {
                className: d.my,
                children: (0, r.jsx)(u.A, {
                    seats: t,
                    claimedSeat: E,
                    participant: n,
                    participants: s,
                    channel: c,
                    idle: _,
                    flip: A > 1080,
                    handleHover: (e) => m(e),
                    enableAnimations: f,
                }),
            }),
    });
};
