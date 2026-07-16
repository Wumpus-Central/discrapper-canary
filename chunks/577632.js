"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(572808),
    o = n(9045),
    d = n(944766),
    c = n(615165);
let u = function (e) {
    let { seats: t, participant: n, participants: a, channel: u, idle: _, enableAnimations: E = !0 } = e,
        A = t.find((e) => e.claimedBy === n.userId),
        h = null != A,
        [I, f] = r.useState(!1),
        p = (0, o.A)(n),
        { x: T, y: m } = r.useMemo(() => {
            let e = { ...n.position };
            if (h) {
                let t = l.dG[A.id - 1];
                null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - p.height));
            }
            return e;
        }, [n.position, A, h, p]);
    return (0, i.jsx)("div", {
        className: s()(c.Wp, { [c.lv]: I }),
        style: { transform: `translate3d(${T}px, ${m}px, 0)`, zIndex: m },
        children:
            h &&
            (0, i.jsx)("div", {
                className: c.my,
                children: (0, i.jsx)(d.A, {
                    seats: t,
                    claimedSeat: A,
                    participant: n,
                    participants: a,
                    channel: u,
                    idle: _,
                    flip: T > 1080,
                    handleHover: (e) => f(e),
                    enableAnimations: E,
                }),
            }),
    });
};
