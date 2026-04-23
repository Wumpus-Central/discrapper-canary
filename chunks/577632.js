"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(572808),
    l = n(9045),
    u = n(944766),
    c = n(615165);
let d = (e) => {
    let { seats: t, participant: n, participants: s, channel: d, idle: _, enableAnimations: f = !0 } = e,
        p = t.find((e) => e.claimedBy === n.userId),
        h = null != p,
        [E, m] = i.useState(!1),
        g = (0, l.A)(n),
        { x: A, y: I } = i.useMemo(() => {
            let e = { ...n.position };
            if (h) {
                let t = o.dG[p.id - 1];
                null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - g.height));
            }
            return e;
        }, [n.position, p, h, g]);
    return (0, r.jsx)("div", {
        className: a()(c.Wp, { [c.lv]: E }),
        style: { transform: `translate3d(${A}px, ${I}px, 0)`, zIndex: I },
        children:
            h &&
            (0, r.jsx)("div", {
                className: c.my,
                children: (0, r.jsx)(u.A, {
                    seats: t,
                    claimedSeat: p,
                    participant: n,
                    participants: s,
                    channel: d,
                    idle: _,
                    flip: A > 1080,
                    handleHover: (e) => m(e),
                    enableAnimations: f,
                }),
            }),
    });
};
