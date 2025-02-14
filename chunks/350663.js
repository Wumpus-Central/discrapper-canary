n.d(t, {
    Z: () => m,
    z: () => _
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(642128),
    s = n(481060),
    d = n(110924),
    u = n(752802),
    c = n(340101),
    h = n(625130);
let _ = 8,
    p = (e) => {
        let { participant: t, width: n, locked: l, widgetId: r, pinned: o } = e;
        return (0, i.jsx)('div', {
            className: h.tileContainer,
            children: (0, i.jsx)(
                u.Z,
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
    f = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    m = l.memo(function (e) {
        let { widgetId: t, tileWidth: n, layout: l, locked: r, streamParticipants: u, participantsVersion: m, pinned: g } = e,
            v = (9 / 16) * n,
            E = u.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: r,
                widgetId: t,
                height: v,
                pinned: g
            })),
            x = (0, d.Z)(n),
            I = l === c.C5.VERTICAL,
            C = 0,
            S = 0,
            Z = (0, s.Yzy)(
                I
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
                    config: f,
                    trail: n !== x ? 0 : 100
                },
                n !== x ? 'animate-never' : 'respect-motion-settings'
            );
        return (0, i.jsx)('div', {
            className: o()({
                [h.gridContainer]: !0,
                [h.vertical]: I,
                [h.horizontal]: !I
            }),
            style: I ? { height: C } : { width: S },
            children: Z((e, t, l, r) =>
                (0, i.jsx)(a.animated.div, {
                    className: h.gridItem,
                    style: Object.assign({}, e, {
                        width: n,
                        height: v,
                        zIndex: E.length - r
                    }),
                    children: p(t)
                })
            )
        });
    });
