n.d(t, {
    z: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(476183),
    s = n(481060),
    c = n(110924),
    u = n(752802),
    d = n(340101),
    h = n(228680);
let f = 8,
    p = (e) => {
        let { participant: t, width: n, locked: l, widgetId: r, pinned: o } = e;
        return (0, i.jsx)(
            u.Z,
            {
                participant: t,
                width: n,
                locked: l,
                widgetId: r,
                pinned: o
            },
            t.user.id
        );
    },
    m = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    };
t.Z = l.memo(function (e) {
    let { widgetId: t, tileWidth: n, layout: l, locked: r, streamParticipants: u, participantsVersion: v, pinned: g } = e,
        x = (9 / 16) * n,
        C = u.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: r,
            widgetId: t,
            height: x,
            pinned: g
        })),
        Z = (0, c.Z)(n),
        _ = l === d.C5.VERTICAL,
        I = 0,
        j = 0,
        E = (0, s.useTransition)(
            _
                ? C.map((e, t) => ({
                      ...e,
                      y: (I += e.height + (t > 0 ? f : 0)) - e.height,
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
                config: m,
                trail: n !== Z ? 0 : 100
            },
            n !== Z ? 'animate-never' : 'respect-motion-settings'
        );
    return (0, i.jsx)('div', {
        className: o()({
            [h.gridContainer]: !0,
            [h.vertical]: _,
            [h.horizontal]: !_
        }),
        style: _ ? { height: I } : { width: j },
        children: E((e, t, l, r) =>
            (0, i.jsx)(a.animated.div, {
                className: h.gridItem,
                style: Object.assign({}, e, {
                    width: n,
                    height: x,
                    zIndex: C.length - r
                }),
                children: p(t)
            })
        )
    });
});
