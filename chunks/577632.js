"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(572808),
    l = n(9045),
    u = n(944766),
    c = n(615165);
let d = (e) => {
    let { seats: t, participant: n, participants: s, channel: d, idle: _, enableAnimations: f = !0 } = e,
        h = t.find((e) => e.claimedBy === n.userId),
        p = null != h,
        [E, m] = r.useState(!1),
        g = (0, l.A)(n),
        { x: A, y: I } = r.useMemo(() => {
            let e = { ...n.position };
            if (p) {
                let t = o.dG[h.id - 1];
                null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - g.height));
            }
            return e;
        }, [n.position, h, p, g]);
    return (0, i.jsx)("div", {
        className: a()(c.Wp, { [c.lv]: E }),
        style: { transform: `translate3d(${A}px, ${I}px, 0)`, zIndex: I },
        children:
            p &&
            (0, i.jsx)("div", {
                className: c.my,
                children: (0, i.jsx)(u.A, {
                    seats: t,
                    claimedSeat: h,
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
