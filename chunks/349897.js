n(321073);
var i = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(156150),
    o = n(505124),
    u = n(646514),
    c = n(43990),
    d = n(683063),
    m = n(713608),
    f = n(918715),
    p = n(717421),
    h = n(762555),
    g = n(443184),
    A = n(696016),
    C = n(683825),
    x = n(792996),
    E = n(328115);
function v(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: l,
        isAnimated: r,
        index: m,
        activated: f,
        expansionSpring: p,
        icon: h,
        title: g,
        body: A,
    } = e;
    return (0, i.jsx)(c.N, {
        theme: o.NJ.ONYX,
        children: (e) =>
            (0, i.jsx)(d.u, {
                title: g ?? void 0,
                body: A,
                position: "top",
                children: (0, i.jsx)(s.animated.div, {
                    className: a()(E.z, e),
                    onMouseEnter: () => l(m),
                    onMouseLeave: () => l(null),
                    style: {
                        left: r ? p.to((e) => t - e) : t,
                        right: n,
                        width: r ? p.to((e) => `${_ + 2 * e}px`) : _,
                        height: r ? p.to((e) => `${_ + 2 * e}px`) : _,
                    },
                    children: (0, i.jsx)(h, {
                        size: "custom",
                        width: "100%",
                        height: "100%",
                        color: f ? u.A.colors.INTERACTIVE_ICON_ACTIVE : u.A.colors.INTERACTIVE_ICON_DEFAULT,
                    }),
                }),
            }),
    });
}
let _ = 12,
    b = { tension: 500, friction: 30, clamp: !0 };
function y(e) {
    switch (e) {
        case h.B.LAUGHTER:
            return A.Gy.LAUGHTER;
        case h.B.SHOUTING:
            return A.Gy.SHOUTING;
        default:
            return null;
    }
}
function T(e, t) {
    if (null != t.emotion) {
        let n = y(t.emotion.type);
        return null == n ? 0 : ((0, g.$b)(e, n) ?? 0);
    }
    return null != t.game
        ? null == t.game.event_name
            ? 0
            : ((0, g.$b)(e, A.Gy.GAME_EVENT, t.game.event_name) ?? 0)
        : 0;
}
function S(e, t) {
    if (null != t.emotion) {
        let n = y(t.emotion.type);
        return null == n ? null : (0, g.u6)(e, n);
    }
    if (null != t.game) {
        if (null != t.game.event_name) return (0, g.u6)(e, A.Gy.GAME_EVENT, t.game.event_name);
        switch (t.game.type) {
            case h.Q_.MULTIKILL:
            case h.Q_.KILL:
                return m.ModerationIcon;
            case h.Q_.DEATH:
                return f.SkullIcon;
        }
    }
    return null;
}
n.d(
    t,
    {},
    {
        T: function (e, t, n) {
            let [r, a] = l.useState(null),
                s = l.useRef(null),
                [{ expansion: o }, u] = (0, p.z)(() => ({
                    expansion: 0,
                    config: b,
                    onRest: () => {
                        null == s.current && a(null);
                    },
                })),
                c = l.useCallback(
                    (e) => {
                        ((s.current = e), null != e ? (a(e), u({ expansion: 4 })) : u({ expansion: 0 }));
                    },
                    [u],
                ),
                d = l.useMemo(() => {
                    let i = e
                        .filter((e) => (null != e.game || null != e.emotion) && null != S(t, e))
                        .map((e) => {
                            var t;
                            return {
                                event: e,
                                position: ((t = e.timestamp_ms), null == n || n <= 0 ? null : (t / 1e3 / n) * 100),
                            };
                        })
                        .filter((e) => null != e.position);
                    (i.sort((e, t) => e.event.timestamp_ms - t.event.timestamp_ms),
                        i.sort((e, n) => T(t, n.event) - T(t, e.event)));
                    let l = [];
                    for (let e of i) l.some((t) => 3 > Math.abs(t.position - e.position)) || l.push(e);
                    return (l.sort((e, t) => e.event.timestamp_ms - t.event.timestamp_ms), l.map((e) => e.event));
                }, [e, t, n]),
                m = l.useMemo(
                    () => d.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: _, gapPx: 4 })),
                    [d],
                ),
                f = l.useCallback(
                    (e, n) => {
                        let l = r === e.index,
                            a = d[e.index];
                        if (null == a) return null;
                        let s = n > e.leftPx,
                            u = S(t, a),
                            m =
                                null != a.emotion
                                    ? x.intl.string(C.default.Ek6GZO)
                                    : null != a.game
                                      ? x.intl.string(C.default["347DBb"])
                                      : null;
                        return null == u || null == m
                            ? null
                            : (0, i.jsx)(v, {
                                  ...e,
                                  activated: s,
                                  gapPx: 4,
                                  title: (function (e, t) {
                                      if (null != t.emotion) {
                                          let n = y(t.emotion.type);
                                          return null == n ? null : (0, g.PZ)(e, n);
                                      }
                                      return null != t.game && null != t.game.event_name
                                          ? (0, g.PZ)(e, A.Gy.GAME_EVENT, t.game.event_name)
                                          : null;
                                  })(t, a),
                                  body: m,
                                  expansionSpring: o,
                                  setHoveredIndex: c,
                                  isAnimated: l,
                                  icon: u,
                              });
                    },
                    [r, d, c, o, t],
                );
            return { indicators: m, animatingIndex: r, expansionSpring: o, hoverExpansionPx: 4, renderIndicator: f };
        },
    },
);
