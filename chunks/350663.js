n.d(t, {
    Z: () => g,
    z: () => _
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
    s = n(481060),
    d = n(110924),
    c = n(752802),
    u = n(340101),
    h = n(145396);
let _ = 8,
    p = (e) => {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: o } = e;
        return (0, i.jsx)('div', {
            className: h.tileContainer,
            children: (0, i.jsx)(
                c.Z,
                {
                    participant: t,
                    width: n,
                    locked: r,
                    widgetId: l,
                    pinned: o
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
        let { widgetId: t, tileWidth: n, layout: r, locked: l, streamParticipants: c, participantsVersion: g, pinned: m } = e,
            v = (9 / 16) * n,
            E = c.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: l,
                widgetId: t,
                height: v,
                pinned: m
            })),
            I = (0, d.Z)(n),
            x = r === u.C5.VERTICAL,
            C = 0,
            S = 0,
            Z = (0, s.Yzy)(
                x
                    ? E.map((e, t) => ({
                          ...e,
                          y: (C += e.height + (t > 0 ? _ : 0)) - e.height,
                          x: 0
                      }))
                    : E.map((e, t) => ({
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
                    trail: n !== I ? 0 : 100
                },
                n !== I ? 'animate-never' : 'respect-motion-settings'
            );
        return (0, i.jsx)('div', {
            className: o()({
                [h.gridContainer]: !0,
                [h.vertical]: x,
                [h.horizontal]: !x
            }),
            style: x ? { height: C } : { width: S },
            children: Z((e, t, r, l) =>
                (0, i.jsx)(a.animated.div, {
                    className: h.gridItem,
                    style: Object.assign({}, e, {
                        width: n,
                        height: v,
                        zIndex: E.length - l
                    }),
                    children: p(t)
                })
            )
        });
    });
