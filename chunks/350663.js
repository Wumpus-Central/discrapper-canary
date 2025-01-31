n.d(t, {
    Z: () => p,
    z: () => _
});
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(642128),
    s = n(481060),
    c = n(110924),
    d = n(752802),
    u = n(340101),
    h = n(228680);
let _ = 8,
    m = (e) => {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: a } = e;
        return (0, i.jsx)('div', {
            className: h.tileContainer,
            children: (0, i.jsx)(
                d.Z,
                {
                    participant: t,
                    width: n,
                    locked: r,
                    widgetId: o,
                    pinned: a
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
    p = r.memo(function (e) {
        let { widgetId: t, tileWidth: n, layout: r, locked: o, streamParticipants: d, participantsVersion: p, pinned: f } = e,
            x = (9 / 16) * n,
            v = d.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: o,
                widgetId: t,
                height: x,
                pinned: f
            })),
            C = (0, c.Z)(n),
            b = r === u.C5.VERTICAL,
            Z = 0,
            I = 0,
            j = (0, s.Yzy)(
                b
                    ? v.map((e, t) => ({
                          ...e,
                          y: (Z += e.height + (t > 0 ? _ : 0)) - e.height,
                          x: 0
                      }))
                    : v.map((e, t) => ({
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
                    config: g,
                    trail: n !== C ? 0 : 100
                },
                n !== C ? 'animate-never' : 'respect-motion-settings'
            );
        return (0, i.jsx)('div', {
            className: a()({
                [h.gridContainer]: !0,
                [h.vertical]: b,
                [h.horizontal]: !b
            }),
            style: b ? { height: Z } : { width: I },
            children: j((e, t, r, o) =>
                (0, i.jsx)(l.animated.div, {
                    className: h.gridItem,
                    style: Object.assign({}, e, {
                        width: n,
                        height: x,
                        zIndex: v.length - o
                    }),
                    children: m(t)
                })
            )
        });
    });
