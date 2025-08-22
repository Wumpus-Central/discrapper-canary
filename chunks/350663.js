n.d(t, {
    IV: () => E,
    ZP: () => S,
    bt: () => b,
    fd: () => v,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(803948),
    s = n(481060),
    c = n(110924),
    u = n(569545),
    d = n(237997),
    p = n(444295),
    f = n(752802),
    h = n(340101),
    m = n(981631),
    g = n(339882);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
let b = 256,
    v = 144;
function E(e, t, n) {
    if (e === h.C5.VERTICAL) {
        let e = Math.max(t, b),
            n = Math.max((9 / 16) * e, v);
        return {
            tileWidth: e,
            tileHeight: n,
        };
    }
    let i = Math.max(n, v);
    return {
        tileWidth: Math.max((16 / 9) * i, b),
        tileHeight: i,
    };
}
let _ = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0,
    },
    S = r.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: o,
                layout: b,
                locked: v,
                activeStreams: E,
                streamParticipants: S,
                participantsVersion: x,
                pinned: I,
                padding: j,
                sizeOffset: C,
            } = e,
            N = S.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: o,
                locked: v,
                widgetId: t,
                pinned: I,
            })),
            w = (0, c.Z)(n),
            Z = (0, c.Z)(v),
            P = b === h.C5.VERTICAL,
            T = v || Z !== v || w !== n,
            A = 0,
            k = 0,
            D = (0, s.Yzy)(
                P
                    ? N.map((e, t) =>
                          O(y({}, e), {
                              y: (A += e.height + (t > 0 ? j : 0)) - e.height,
                              x: 0,
                          }),
                      )
                    : N.map((e, t) =>
                          O(y({}, e), {
                              x: (k += e.width + (t > 0 ? j : 0)) - e.width,
                              y: 0,
                          }),
                      ),
                {
                    key: (e) => e.key,
                    from: {
                        height: 0,
                        opacity: 0,
                    },
                    leave: {
                        height: 0,
                        opacity: 0,
                    },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return {
                            x: t,
                            y: n,
                            width: i,
                            height: r,
                            opacity: 1,
                        };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return {
                            x: t,
                            y: n,
                            width: i,
                            height: r,
                        };
                    },
                    config: _,
                    trail: 100 * !T,
                },
                T ? "animate-never" : "respect-motion-settings",
            ),
            R = (0, p.ee)(() => new Set(S.map((e) => e.user.id)), [S, x]),
            L = (0, p.ee)(() => new Set(S.filter((e) => E.has((0, u.V9)(e.stream))).map((e) => e.user.id)), [S, E, x]);
        return (
            r.useEffect(() => {
                0 !== R.size &&
                    (0, p.zi)(m.Odu.GO_LIVE, {
                        locked: d.default.isInstanceLocked(),
                        shownUserIds: Array.from(R),
                        liveUserIds: Array.from(L),
                        contentInventoryIds: [],
                    });
            }, [R, L]),
            (0, i.jsx)("div", {
                className: l()({
                    [g.gridContainer]: !0,
                    [g.vertical]: P,
                    [g.horizontal]: !P,
                }),
                style: P ? { height: A } : { width: k },
                children: D((e, t, r, l) =>
                    (0, i.jsx)(a.animated.div, {
                        className: g.gridItem,
                        style: Object.assign({}, e, {
                            width: n,
                            height: o,
                            zIndex: N.length - l,
                        }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: r, widgetId: o, pinned: l } = e;
                            return (0, i.jsx)("div", {
                                className: g.tileContainer,
                                children: (0, i.jsx)(
                                    f.Z,
                                    {
                                        participant: t,
                                        width: n,
                                        locked: r,
                                        widgetId: o,
                                        pinned: l,
                                    },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
