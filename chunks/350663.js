n.d(t, {
    z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(666912),
    s = n(481060),
    c = n(110924),
    u = n(752802),
    d = n(340101),
    h = n(228680);
let f = 8,
    m = (e) => {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: o } = e;
        return (0, i.jsx)(
            u.Z,
            {
                participant: t,
                width: n,
                locked: r,
                widgetId: l,
                pinned: o
            },
            t.user.id
        );
    },
    v = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    };
t.Z = r.memo(function (e) {
    let { widgetId: t, tileWidth: n, layout: r, locked: l, streamParticipants: u, participantsVersion: p, pinned: x } = e,
        g = (9 / 16) * n,
        C = u.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: l,
            widgetId: t,
            height: g,
            pinned: x
        })),
        Z = (0, c.Z)(n),
        I = r === d.C5.VERTICAL,
        _ = 0,
        j = 0,
        E = (0, s.useTransition)(
            I
                ? C.map((e, t) => ({
                      ...e,
                      y: (_ += e.height + (t > 0 ? f : 0)) - e.height,
                      x: 0
                  }))
                : C.map((e, t) => ({
                      ...e,
                      x: (j += e.width + (t > 0 ? f : 0)) - e.width,
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
                config: v,
                trail: n !== Z ? 0 : 100
            },
            n !== Z ? 'animate-never' : 'respect-motion-settings'
        );
    return (0, i.jsx)('div', {
        className: o()({
            [h.gridContainer]: !0,
            [h.vertical]: I,
            [h.horizontal]: !I
        }),
        style: I ? { height: _ } : { width: j },
        children: E((e, t, r, l) =>
            (0, i.jsx)(a.animated.div, {
                className: h.gridItem,
                style: Object.assign({}, e, {
                    width: n,
                    height: g,
                    zIndex: C.length - l
                }),
                children: m(t)
            })
        )
    });
});
