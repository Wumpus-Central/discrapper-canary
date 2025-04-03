n.d(t, {
    Z: () => E,
    z: () => v
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(642128),
    s = n(481060),
    c = n(110924),
    u = n(569545),
    d = n(237997),
    p = n(444295),
    h = n(752802),
    f = n(340101),
    m = n(981631),
    g = n(678270);
function y(e) {
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
function O(e, t) {
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
let v = 8,
    b = (e) => {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: l } = e;
        return (0, i.jsx)('div', {
            className: g.tileContainer,
            children: (0, i.jsx)(
                h.Z,
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
    _ = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    E = r.memo(function (e) {
        let { widgetId: t, tileWidth: n, layout: o, locked: h, activeStreams: E, streamParticipants: x, participantsVersion: I, pinned: j } = e,
            C = (9 / 16) * n,
            S = x.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: h,
                widgetId: t,
                height: C,
                pinned: j
            })),
            N = (0, c.Z)(n),
            Z = o === f.C5.VERTICAL,
            w = 0,
            P = 0,
            T = (0, s.Yzy)(
                Z
                    ? S.map((e, t) =>
                          O(y({}, e), {
                              y: (w += e.height + (t > 0 ? v : 0)) - e.height,
                              x: 0
                          })
                      )
                    : S.map((e, t) =>
                          O(y({}, e), {
                              x: (P += e.width + (t > 0 ? v : 0)) - e.width,
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
                    config: _,
                    trail: 100 * (n === N)
                },
                n !== N ? 'animate-never' : 'respect-motion-settings'
            ),
            k = (0, p.ee)(() => new Set(x.map((e) => e.user.id)), [x, I]),
            D = (0, p.ee)(() => new Set(x.filter((e) => E.has((0, u.V9)(e.stream))).map((e) => e.user.id)), [x, E, I]);
        return (
            r.useEffect(() => {
                0 !== k.size &&
                    (0, p.zi)(m.Odu.GO_LIVE, {
                        locked: d.default.isInstanceLocked(),
                        shownUserIds: Array.from(k),
                        liveUserIds: Array.from(D),
                        contentInventoryIds: []
                    });
            }, [k, D]),
            (0, i.jsx)('div', {
                className: l()({
                    [g.gridContainer]: !0,
                    [g.vertical]: Z,
                    [g.horizontal]: !Z
                }),
                style: Z ? { height: w } : { width: P },
                children: T((e, t, r, o) =>
                    (0, i.jsx)(a.animated.div, {
                        className: g.gridItem,
                        style: Object.assign({}, e, {
                            width: n,
                            height: C,
                            zIndex: S.length - o
                        }),
                        children: b(t)
                    })
                )
            })
        );
    });
