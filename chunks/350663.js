n.d(t, { Z: () => _ }), n(388685);
var i = n(951288),
    r = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(261616),
    s = n(481060),
    c = n(110924),
    u = n(569545),
    d = n(237997),
    p = n(444295),
    h = n(752802),
    f = n(68286),
    m = n(461393),
    g = n(340101),
    y = n(981631),
    O = n(339882);
function v(e) {
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
function b(e, t) {
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
let E = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0,
    },
    _ = r.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: o,
                layout: _,
                locked: S,
                activeStreams: x,
                streamParticipants: I,
                participantsVersion: j,
                pinned: C,
                padding: w,
            } = e,
            N = I.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: o,
                locked: S,
                widgetId: t,
                pinned: C,
            })),
            Z = (0, c.Z)(n),
            T = (0, c.Z)(S),
            P = _ === g.C5.VERTICAL,
            A = S || T !== S || Z !== n,
            k = r.useMemo(() => {
                let e = 0,
                    t = 0;
                return P
                    ? N.map((t, n) =>
                          b(v({}, t), {
                              y: (e += t.height + (n > 0 ? w : 0)) - t.height,
                              x: 0,
                          }),
                      )
                    : N.map((e, n) =>
                          b(v({}, e), {
                              x: (t += e.width + (n > 0 ? w : 0)) - e.width,
                              y: 0,
                          }),
                      );
            }, [N, w, P]),
            D = r.useMemo(
                () =>
                    0 === k.length
                        ? (0, m.MH)(f.bt)
                        : k.reduce((e, t) => e + t.height, 0) + (P ? w * (k.length - 1) : 0),
                [k, P, w],
            ),
            R = r.useMemo(
                () => (0 === k.length ? f.bt : k.reduce((e, t) => e + t.width, 0) + (P ? 0 : w * (k.length - 1))),
                [k, P, w],
            ),
            L = (0, s.Yzy)(
                k,
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
                    config: E,
                    trail: 100 * !A,
                },
                A ? "animate-never" : "respect-motion-settings",
            ),
            M = (0, p.ee)(() => new Set(I.map((e) => e.user.id)), [I, j]),
            z = (0, p.ee)(() => new Set(I.filter((e) => x.has((0, u.V9)(e.stream))).map((e) => e.user.id)), [I, x, j]);
        return (
            r.useEffect(() => {
                0 !== M.size &&
                    (0, p.zi)(y.Odu.GO_LIVE, {
                        locked: d.default.isInstanceLocked(),
                        shownUserIds: Array.from(M),
                        liveUserIds: Array.from(z),
                        contentInventoryIds: [],
                    });
            }, [M, z]),
            (0, i.jsx)("div", {
                className: l()({
                    [O.gridContainer]: !0,
                    [O.vertical]: P,
                    [O.horizontal]: !P,
                }),
                style: P ? { height: D } : { width: R },
                children: L((e, t, r, l) =>
                    (0, i.jsx)(a.animated.div, {
                        className: O.gridItem,
                        style: Object.assign({}, e, {
                            width: n,
                            height: o,
                            zIndex: N.length - l,
                        }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: r, widgetId: o, pinned: l } = e;
                            return (0, i.jsx)("div", {
                                className: O.tileContainer,
                                children: (0, i.jsx)(
                                    h.Z,
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
