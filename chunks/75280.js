n.d(t, { A: () => b }), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(432022),
    s = n(397927),
    c = n(475743),
    u = n(652896),
    d = n(256415),
    p = n(810412),
    h = n(433560),
    f = n(324093),
    m = n(916494),
    g = n(897720),
    y = n(652215),
    A = n(578950);
function O(e) {
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
function E(e, t) {
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
let v = {
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
                locked: S,
                activeStreams: x,
                streamParticipants: j,
                participantsVersion: I,
                pinned: N,
                padding: w,
            } = e,
            T = j.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: l,
                locked: S,
                widgetId: t,
                pinned: N,
            })),
            C = (0, c.A)(n),
            _ = (0, c.A)(S),
            P = b === g.IV.VERTICAL,
            D = S || _ !== S || C !== n,
            R = r.useMemo(() => {
                let e = 0,
                    t = 0;
                return P
                    ? T.map((t, n) =>
                          E(O({}, t), {
                              y: (e += t.height + (n > 0 ? w : 0)) - t.height,
                              x: 0,
                          }),
                      )
                    : T.map((e, n) =>
                          E(O({}, e), {
                              x: (t += e.width + (n > 0 ? w : 0)) - e.width,
                              y: 0,
                          }),
                      );
            }, [T, w, P]),
            L = r.useMemo(
                () =>
                    0 === R.length
                        ? (0, m.uc)(f.Ub)
                        : R.reduce((e, t) => e + t.height, 0) + (P ? w * (R.length - 1) : 0),
                [R, P, w],
            ),
            k = r.useMemo(
                () => (0 === R.length ? f.Ub : R.reduce((e, t) => e + t.width, 0) + (P ? 0 : w * (R.length - 1))),
                [R, P, w],
            ),
            M = (0, s.pnh)(
                R,
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
                    config: v,
                    trail: 100 * !D,
                },
                D ? "animate-never" : "respect-motion-settings",
            ),
            V = (0, p.Dk)(() => new Set(j.map((e) => e.user.id)), [j, I]),
            U = (0, p.Dk)(() => new Set(j.filter((e) => x.has((0, u._z)(e.stream))).map((e) => e.user.id)), [j, x, I]);
        return (
            r.useEffect(() => {
                0 !== V.size &&
                    (0, p.Y)(y.uss.GO_LIVE, {
                        locked: d.default.isInstanceLocked(),
                        shownUserIds: Array.from(V),
                        liveUserIds: Array.from(U),
                        contentInventoryIds: [],
                    });
            }, [V, U]),
            (0, i.jsx)("div", {
                className: a()({
                    [A.UT]: !0,
                    [A.Vd]: P,
                    [A.xM]: !P,
                }),
                style: P ? { height: L } : { width: k },
                children: M((e, t, r, a) =>
                    (0, i.jsx)(o.animated.div, {
                        className: A.ux,
                        style: Object.assign({}, e, {
                            width: n,
                            height: l,
                            zIndex: T.length - a,
                        }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: r, widgetId: l, pinned: a } = e;
                            return (0, i.jsx)("div", {
                                className: A.iA,
                                children: (0, i.jsx)(
                                    h.d,
                                    {
                                        participant: t,
                                        width: n,
                                        locked: r,
                                        widgetId: l,
                                        pinned: a,
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
