"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(572808),
    l = n(9045),
    u = n(944766),
    c = n(489990);
let d = 1080,
    _ = (e) => {
        let { seats: t, participant: n, participants: a, channel: _, idle: f, enableAnimations: h = !0 } = e,
            p = t.find((e) => e.claimedBy === n.userId),
            g = null != p,
            [E, A] = i.useState(!1),
            I = (0, l.A)(n),
            { x: T, y } = i.useMemo(() => {
                let e = { ...n.position };
                if (g) {
                    let t = o.dG[p.id - 1];
                    null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - I.height));
                }
                return e;
            }, [n.position, p, g, I]);
        return (0, r.jsx)("div", {
            className: s()(c.Wp, { [c.lv]: E }),
            style: { transform: `translate3d(${T}px, ${y}px, 0)`, zIndex: y },
            children:
                g &&
                (0, r.jsx)("div", {
                    className: c.my,
                    children: (0, r.jsx)(u.A, {
                        seats: t,
                        claimedSeat: p,
                        participant: n,
                        participants: a,
                        channel: _,
                        idle: f,
                        flip: T > d,
                        handleHover: (e) => A(e),
                        enableAnimations: h,
                    }),
                }),
        });
    };
