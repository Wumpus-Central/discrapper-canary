n.d(t, {
    z: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
    s = n(481060),
    c = n(110924),
    d = n(752802),
    u = n(340101),
    h = n(228680);
let m = 8,
    p = (e) => {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: o } = e;
        return (0, i.jsx)('div', {
            className: h.tileContainer,
            children: (0, i.jsx)(
                d.Z,
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
    x = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    };
t.Z = r.memo(function (e) {
    let { widgetId: t, tileWidth: n, layout: r, locked: l, streamParticipants: d, participantsVersion: g, pinned: v } = e,
        f = (9 / 16) * n,
        C = d.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: l,
            widgetId: t,
            height: f,
            pinned: v
        })),
        Z = (0, c.Z)(n),
        b = r === u.C5.VERTICAL,
        j = 0,
        _ = 0,
        I = (0, s.useTransition)(
            b
                ? C.map((e, t) => ({
                      ...e,
                      y: (j += e.height + (t > 0 ? m : 0)) - e.height,
                      x: 0
                  }))
                : C.map((e, t) => ({
                      ...e,
                      x: (_ += e.width + (t > 0 ? m : 0)) - e.width,
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
                config: x,
                trail: n !== Z ? 0 : 100
            },
            n !== Z ? 'animate-never' : 'respect-motion-settings'
        );
    return (0, i.jsx)('div', {
        className: o()({
            [h.gridContainer]: !0,
            [h.vertical]: b,
            [h.horizontal]: !b
        }),
        style: b ? { height: j } : { width: _ },
        children: I((e, t, r, l) =>
            (0, i.jsx)(a.animated.div, {
                className: h.gridItem,
                style: Object.assign({}, e, {
                    width: n,
                    height: f,
                    zIndex: C.length - l
                }),
                children: p(t)
            })
        )
    });
});
