n.d(t, {
    Z: () => g,
    z: () => _
});
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(642128),
    s = n(481060),
    d = n(110924),
    c = n(752802),
    u = n(340101),
    h = n(228680);
let _ = 8,
    p = (e) => {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: l } = e;
        return (0, i.jsx)('div', {
            className: h.tileContainer,
            children: (0, i.jsx)(
                c.Z,
                {
                    participant: t,
                    width: n,
                    locked: r,
                    widgetId: o,
                    pinned: l
                },
                t.user.id
            )
        });
    },
    f = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    g = r.memo(function (e) {
        let { widgetId: t, tileWidth: n, layout: r, locked: o, streamParticipants: c, participantsVersion: g, pinned: m } = e,
            v = (9 / 16) * n,
            x = c.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: o,
                widgetId: t,
                height: v,
                pinned: m
            })),
            E = (0, d.Z)(n),
            C = r === u.C5.VERTICAL,
            Z = 0,
            S = 0,
            I = (0, s.Yzy)(
                C
                    ? x.map((e, t) => ({
                          ...e,
                          y: (Z += e.height + (t > 0 ? _ : 0)) - e.height,
                          x: 0
                      }))
                    : x.map((e, t) => ({
                          ...e,
                          x: (S += e.width + (t > 0 ? _ : 0)) - e.width,
                          y: 0
                      })),
                {
                    key: (e) => e.key,
                    from: {
                        height: 0,
                        opacity: 0
                    },
                    leave: {
                        height: 0,
                        opacity: 0
                    },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return {
                            x: t,
                            y: n,
                            width: i,
                            height: r,
                            opacity: 1
                        };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return {
                            x: t,
                            y: n,
                            width: i,
                            height: r
                        };
                    },
                    config: f,
                    trail: n !== E ? 0 : 100
                },
                n !== E ? 'animate-never' : 'respect-motion-settings'
            );
        return (0, i.jsx)('div', {
            className: l()({
                [h.gridContainer]: !0,
                [h.vertical]: C,
                [h.horizontal]: !C
            }),
            style: C ? { height: Z } : { width: S },
            children: I((e, t, r, o) =>
                (0, i.jsx)(a.animated.div, {
                    className: h.gridItem,
                    style: Object.assign({}, e, {
                        width: n,
                        height: v,
                        zIndex: x.length - o
                    }),
                    children: p(t)
                })
            )
        });
    });
