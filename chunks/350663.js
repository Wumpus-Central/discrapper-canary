n.d(t, {
    z: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(642128),
    s = n(481060),
    c = n(110924),
    d = n(752802),
    u = n(340101),
    h = n(228680);
let m = 8,
    p = (e) => {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: l } = e;
        return (0, i.jsx)('div', {
            className: h.tileContainer,
            children: (0, i.jsx)(
                d.Z,
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
    x = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    };
t.Z = r.memo(function (e) {
    let { widgetId: t, tileWidth: n, layout: r, locked: o, streamParticipants: d, participantsVersion: f, pinned: v } = e,
        g = (9 / 16) * n,
        C = d.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: o,
            widgetId: t,
            height: g,
            pinned: v
        })),
        Z = (0, c.Z)(n),
        _ = r === u.C5.VERTICAL,
        b = 0,
        j = 0,
        I = (0, s.useTransition)(
            _
                ? C.map((e, t) => ({
                      ...e,
                      y: (b += e.height + (t > 0 ? m : 0)) - e.height,
                      x: 0
                  }))
                : C.map((e, t) => ({
                      ...e,
                      x: (j += e.width + (t > 0 ? m : 0)) - e.width,
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
        className: l()({
            [h.gridContainer]: !0,
            [h.vertical]: _,
            [h.horizontal]: !_
        }),
        style: _ ? { height: b } : { width: j },
        children: I((e, t, r, o) =>
            (0, i.jsx)(a.animated.div, {
                className: h.gridItem,
                style: Object.assign({}, e, {
                    width: n,
                    height: g,
                    zIndex: C.length - o
                }),
                children: p(t)
            })
        )
    });
});
