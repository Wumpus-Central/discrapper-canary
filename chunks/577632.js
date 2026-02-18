"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(572808),
    l = n(9045),
    u = n(944766),
    c = n(489990);
let d = 1080,
    _ = (e) => {
        let { seats: t, participant: n, participants: s, channel: _, idle: f, enableAnimations: p = !0 } = e,
            h = t.find((e) => e.claimedBy === n.userId),
            m = null != h,
            [E, g] = i.useState(!1),
            A = (0, l.A)(n),
            { x: I, y: T } = i.useMemo(() => {
                let e = { ...n.position };
                if (m) {
                    let t = o.dG[h.id - 1];
                    null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - A.height));
                }
                return e;
            }, [n.position, h, m, A]);
        return (0, r.jsx)("div", {
            className: a()(c.Wp, { [c.lv]: E }),
            style: { transform: `translate3d(${I}px, ${T}px, 0)`, zIndex: T },
            children:
                m &&
                (0, r.jsx)("div", {
                    className: c.my,
                    children: (0, r.jsx)(u.A, {
                        seats: t,
                        claimedSeat: h,
                        participant: n,
                        participants: s,
                        channel: _,
                        idle: f,
                        flip: I > d,
                        handleHover: (e) => g(e),
                        enableAnimations: p,
                    }),
                }),
        });
    };
