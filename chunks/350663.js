n.d(t, {
    Z: () => _,
    z: () => v
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(272573),
    s = n(481060),
    c = n(110924),
    u = n(569545),
    d = n(237997),
    p = n(444295),
    f = n(752802),
    h = n(340101),
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
                f.Z,
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
    E = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    _ = r.memo(function (e) {
        let { widgetId: t, tileWidth: n, layout: o, locked: f, activeStreams: _, streamParticipants: I, participantsVersion: x, pinned: j } = e,
            S = (9 / 16) * n,
            C = I.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: f,
                widgetId: t,
                height: S,
                pinned: j
            })),
            N = (0, c.Z)(n),
            Z = o === h.C5.VERTICAL,
            w = 0,
            P = 0,
            T = (0, s.Yzy)(
                Z
                    ? C.map((e, t) =>
                          O(y({}, e), {
                              y: (w += e.height + (t > 0 ? v : 0)) - e.height,
                              x: 0
                          })
                      )
                    : C.map((e, t) =>
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
                    config: E,
                    trail: 100 * (n === N)
                },
                n !== N ? 'animate-never' : 'respect-motion-settings'
            ),
            k = (0, p.ee)(() => new Set(I.map((e) => e.user.id)), [I, x]),
            D = (0, p.ee)(() => new Set(I.filter((e) => _.has((0, u.V9)(e.stream))).map((e) => e.user.id)), [I, _, x]);
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
                            height: S,
                            zIndex: C.length - o
                        }),
                        children: b(t)
                    })
                )
            })
        );
    });
