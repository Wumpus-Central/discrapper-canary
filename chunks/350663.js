n.d(t, {
    Z: () => E,
    z: () => O
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
    f = n(752802),
    h = n(340101),
    g = n(981631),
    _ = n(978399);
function m(e) {
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
function v(e, t) {
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
let O = 8,
    b = (e) => {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: l } = e;
        return (0, i.jsx)('div', {
            className: _.tileContainer,
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
    y = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    E = r.memo(function (e) {
        let { widgetId: t, tileWidth: n, layout: o, locked: f, activeStreams: E, streamParticipants: x, participantsVersion: S, pinned: I } = e,
            C = (9 / 16) * n,
            j = x.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                locked: f,
                widgetId: t,
                height: C,
                pinned: I
            })),
            w = (0, c.Z)(n),
            Z = o === h.C5.VERTICAL,
            N = 0,
            P = 0,
            T = (0, s.Yzy)(
                Z
                    ? j.map((e, t) =>
                          v(m({}, e), {
                              y: (N += e.height + (t > 0 ? O : 0)) - e.height,
                              x: 0
                          })
                      )
                    : j.map((e, t) =>
                          v(m({}, e), {
                              x: (P += e.width + (t > 0 ? O : 0)) - e.width,
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
                    config: y,
                    trail: 100 * (n === w)
                },
                n !== w ? 'animate-never' : 'respect-motion-settings'
            ),
            k = (0, p.ee)(() => new Set(x.map((e) => e.user.id)), [x, S]),
            A = (0, p.ee)(() => new Set(x.filter((e) => E.has((0, u.V9)(e.stream))).map((e) => e.user.id)), [x, E, S]);
        return (
            r.useEffect(() => {
                0 !== k.size &&
                    (0, p.zi)(g.Odu.GO_LIVE, {
                        locked: d.Z.isInstanceLocked(),
                        shownUserIds: Array.from(k),
                        liveUserIds: Array.from(A),
                        contentInventoryIds: []
                    });
            }, [k, A]),
            (0, i.jsx)('div', {
                className: l()({
                    [_.gridContainer]: !0,
                    [_.vertical]: Z,
                    [_.horizontal]: !Z
                }),
                style: Z ? { height: N } : { width: P },
                children: T((e, t, r, o) =>
                    (0, i.jsx)(a.animated.div, {
                        className: _.gridItem,
                        style: Object.assign({}, e, {
                            width: n,
                            height: C,
                            zIndex: j.length - o
                        }),
                        children: b(t)
                    })
                )
            })
        );
    });
