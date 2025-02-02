n.d(t, {
    Z: () => f,
    z: () => _
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(642128),
    s = n(481060),
    d = n(110924),
    c = n(752802),
    u = n(340101),
    h = n(228680);
let _ = 8,
    p = (e) => {
        let { participant: t, width: n, locked: l, widgetId: r, pinned: o } = e;
        return (0, i.jsx)('div', {
            className: h.tileContainer,
            children: (0, i.jsx)(
                c.Z,
                {
                    participant: t,
                    width: n,
                    locked: l,
                    widgetId: r,
                    pinned: o
                },
                t.user.id
            )
        });
    },
    g = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    f = l.memo(function (e) {
        let { widgetId: t, tileWidth: n, layout: l, locked: r, streamParticipants: c, participantsVersion: f, pinned: m } = e,
            v = (9 / 16) * n,
            x = c.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: r,
                widgetId: t,
                height: v,
                pinned: m
            })),
            E = (0, d.Z)(n),
            Z = l === u.C5.VERTICAL,
            C = 0,
            I = 0,
            S = (0, s.Yzy)(
                Z
                    ? x.map((e, t) => ({
                          ...e,
                          y: (C += e.height + (t > 0 ? _ : 0)) - e.height,
                          x: 0
                      }))
                    : x.map((e, t) => ({
                          ...e,
                          x: (I += e.width + (t > 0 ? _ : 0)) - e.width,
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
                        let { x: t, y: n, width: i, height: l } = e;
                        return {
                            x: t,
                            y: n,
                            width: i,
                            height: l,
                            opacity: 1
                        };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: l } = e;
                        return {
                            x: t,
                            y: n,
                            width: i,
                            height: l
                        };
                    },
                    config: g,
                    trail: n !== E ? 0 : 100
                },
                n !== E ? 'animate-never' : 'respect-motion-settings'
            );
        return (0, i.jsx)('div', {
            className: o()({
                [h.gridContainer]: !0,
                [h.vertical]: Z,
                [h.horizontal]: !Z
            }),
            style: Z ? { height: C } : { width: I },
            children: S((e, t, l, r) =>
                (0, i.jsx)(a.animated.div, {
                    className: h.gridItem,
                    style: Object.assign({}, e, {
                        width: n,
                        height: v,
                        zIndex: x.length - r
                    }),
                    children: p(t)
                })
            )
        });
    });
