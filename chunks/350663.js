n.d(t, { Z: () => b }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(358458),
    s = n(481060),
    u = n(110924),
    c = n(569545),
    d = n(237997),
    p = n(444295),
    h = n(752802),
    f = n(68286),
    m = n(461393),
    g = n(340101),
    y = n(981631),
    O = n(339882);
function E(e) {
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
let S = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0,
    },
    b = r.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: l,
                layout: b,
                locked: x,
                activeStreams: j,
                streamParticipants: I,
                participantsVersion: C,
                pinned: Z,
                padding: N,
            } = e,
            w = I.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: l,
                locked: x,
                widgetId: t,
                pinned: Z,
            })),
            T = (0, u.Z)(n),
            _ = (0, u.Z)(x),
            P = b === g.C5.VERTICAL,
            A = x || _ !== x || T !== n,
            D = r.useMemo(() => {
                let e = 0,
                    t = 0;
                return P
                    ? w.map((t, n) =>
                          v(E({}, t), {
                              y: (e += t.height + (n > 0 ? N : 0)) - t.height,
                              x: 0,
                          }),
                      )
                    : w.map((e, n) =>
                          v(E({}, e), {
                              x: (t += e.width + (n > 0 ? N : 0)) - e.width,
                              y: 0,
                          }),
                      );
            }, [w, N, P]),
            R = r.useMemo(
                () =>
                    0 === D.length
                        ? (0, m.MH)(f.bt)
                        : D.reduce((e, t) => e + t.height, 0) + (P ? N * (D.length - 1) : 0),
                [D, P, N],
            ),
            k = r.useMemo(
                () => (0 === D.length ? f.bt : D.reduce((e, t) => e + t.width, 0) + (P ? 0 : N * (D.length - 1))),
                [D, P, N],
            ),
            L = (0, s.Yzy)(
                D,
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
                    config: S,
                    trail: 100 * !A,
                },
                A ? "animate-never" : "respect-motion-settings",
            ),
            M = (0, p.ee)(() => new Set(I.map((e) => e.user.id)), [I, C]),
            V = (0, p.ee)(() => new Set(I.filter((e) => j.has((0, c.V9)(e.stream))).map((e) => e.user.id)), [I, j, C]);
        return (
            r.useEffect(() => {
                0 !== M.size &&
                    (0, p.zi)(y.Odu.GO_LIVE, {
                        locked: d.default.isInstanceLocked(),
                        shownUserIds: Array.from(M),
                        liveUserIds: Array.from(V),
                        contentInventoryIds: [],
                    });
            }, [M, V]),
            (0, i.jsx)("div", {
                className: o()({
                    [O.gridContainer]: !0,
                    [O.vertical]: P,
                    [O.horizontal]: !P,
                }),
                style: P ? { height: R } : { width: k },
                children: L((e, t, r, o) =>
                    (0, i.jsx)(a.animated.div, {
                        className: O.gridItem,
                        style: Object.assign({}, e, {
                            width: n,
                            height: l,
                            zIndex: w.length - o,
                        }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: r, widgetId: l, pinned: o } = e;
                            return (0, i.jsx)("div", {
                                className: O.tileContainer,
                                children: (0, i.jsx)(
                                    h.Z,
                                    {
                                        participant: t,
                                        width: n,
                                        locked: r,
                                        widgetId: l,
                                        pinned: o,
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
