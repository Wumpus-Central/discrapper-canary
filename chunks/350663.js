n.d(t, {
    Z: () => v,
    z: () => g
});
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(642128),
    s = n(481060),
    c = n(110924),
    u = n(752802),
    d = n(340101),
    p = n(978399);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 8,
    _ = (e) => {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: l } = e;
        return (0, i.jsx)('div', {
            className: p.tileContainer,
            children: (0, i.jsx)(
                u.Z,
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
    m = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    v = r.memo(function (e) {
        let { widgetId: t, tileWidth: n, layout: r, locked: o, streamParticipants: u, participantsVersion: v, pinned: O } = e,
            b = (9 / 16) * n,
            y = u.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: o,
                widgetId: t,
                height: b,
                pinned: O
            })),
            E = (0, c.Z)(n),
            x = r === d.C5.VERTICAL,
            S = 0,
            C = 0,
            I = (0, s.Yzy)(
                x
                    ? y.map((e, t) =>
                          h(f({}, e), {
                              y: (S += e.height + (t > 0 ? g : 0)) - e.height,
                              x: 0
                          })
                      )
                    : y.map((e, t) =>
                          h(f({}, e), {
                              x: (C += e.width + (t > 0 ? g : 0)) - e.width,
                              y: 0
                          })
                      ),
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
                    config: m,
                    trail: 100 * (n === E)
                },
                n !== E ? 'animate-never' : 'respect-motion-settings'
            );
        return (0, i.jsx)('div', {
            className: l()({
                [p.gridContainer]: !0,
                [p.vertical]: x,
                [p.horizontal]: !x
            }),
            style: x ? { height: S } : { width: C },
            children: I((e, t, r, o) =>
                (0, i.jsx)(a.animated.div, {
                    className: p.gridItem,
                    style: Object.assign({}, e, {
                        width: n,
                        height: b,
                        zIndex: y.length - o
                    }),
                    children: _(t)
                })
            )
        });
    });
