n(321073);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(120692),
    o = n(505124),
    u = n(646514),
    c = n(43990),
    d = n(683063),
    m = n(713608),
    f = n(918715),
    p = n(717421),
    h = n(271520),
    g = n(762555),
    A = n(443184),
    C = n(696016),
    E = n(683825),
    x = n(792996),
    v = n(328115);
function _(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: l,
        isAnimated: a,
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
                    className: r()(v.z, e),
                    onMouseEnter: () => l(m),
                    onMouseLeave: () => l(null),
                    style: {
                        left: a ? p.to((e) => t - e) : t,
                        right: n,
                        width: a ? p.to((e) => `${b + 2 * e}px`) : b,
                        height: a ? p.to((e) => `${b + 2 * e}px`) : b,
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
let b = 12,
    y = { tension: 500, friction: 30, clamp: !0 };
function T(e) {
    switch (e) {
        case g.B.LAUGHTER:
            return C.Gy.LAUGHTER;
        case g.B.SHOUTING:
            return C.Gy.SHOUTING;
        default:
            return null;
    }
}
function S(e, t) {
    if (null != t.emotion) {
        let n = T(t.emotion.type);
        return null == n ? 0 : ((0, A.$b)(e, n) ?? 0);
    }
    return null != t.game
        ? null == t.game.event_name
            ? 0
            : ((0, A.$b)(e, C.Gy.GAME_EVENT, t.game.event_name) ?? 0)
        : 0;
}
function I(e, t) {
    if (null != t.emotion) {
        let n = T(t.emotion.type);
        return null == n ? null : (0, A.u6)(e, n);
    }
    if (null != t.game) {
        if (null != t.game.event_name) return (0, A.u6)(e, C.Gy.GAME_EVENT, t.game.event_name);
        switch (t.game.type) {
            case g.Q_.MULTIKILL:
            case g.Q_.KILL:
                return m.ModerationIcon;
            case g.Q_.DEATH:
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
            let [a, r] = l.useState(null),
                s = l.useRef(null),
                [{ expansion: o }, u] = (0, p.z)(() => ({
                    expansion: 0,
                    config: y,
                    onRest: () => {
                        null == s.current && r(null);
                    },
                })),
                c = l.useCallback(
                    (e) => {
                        ((s.current = e), null != e ? (r(e), u({ expansion: 4 })) : u({ expansion: 0 }));
                    },
                    [u],
                ),
                d = h.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
                m = l.useMemo(() => {
                    let i = e
                        .filter((e) => ((d && null != e.game) || null != e.emotion) && null != I(t, e))
                        .map((e) => {
                            var t;
                            return {
                                event: e,
                                position: ((t = e.timestamp_ms), null == n || n <= 0 ? null : (t / 1e3 / n) * 100),
                            };
                        })
                        .filter((e) => null != e.position);
                    (i.sort((e, t) => e.event.timestamp_ms - t.event.timestamp_ms),
                        i.sort((e, n) => S(t, n.event) - S(t, e.event)));
                    let l = [];
                    for (let e of i) l.some((t) => 3 > Math.abs(t.position - e.position)) || l.push(e);
                    return (l.sort((e, t) => e.event.timestamp_ms - t.event.timestamp_ms), l.map((e) => e.event));
                }, [e, d, t, n]),
                f = l.useMemo(
                    () => m.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: b, gapPx: 4 })),
                    [m],
                ),
                g = l.useCallback(
                    (e, n) => {
                        let l = a === e.index,
                            r = m[e.index];
                        if (null == r) return null;
                        let s = n > e.leftPx,
                            u = I(t, r),
                            d =
                                null != r.emotion
                                    ? x.intl.string(E.default["ry+jxm"])
                                    : null != r.game
                                      ? x.intl.string(E.default["347DBb"])
                                      : null;
                        return null == u || null == d
                            ? null
                            : (0, i.jsx)(_, {
                                  ...e,
                                  activated: s,
                                  gapPx: 4,
                                  title: (function (e, t) {
                                      if (null != t.emotion) {
                                          let n = T(t.emotion.type);
                                          return null == n ? null : (0, A.PZ)(e, n);
                                      }
                                      return null != t.game && null != t.game.event_name
                                          ? (0, A.PZ)(e, C.Gy.GAME_EVENT, t.game.event_name)
                                          : null;
                                  })(t, r),
                                  body: d,
                                  expansionSpring: o,
                                  setHoveredIndex: c,
                                  isAnimated: l,
                                  icon: u,
                              });
                    },
                    [a, m, c, o, t],
                );
            return { indicators: f, animatingIndex: a, expansionSpring: o, hoverExpansionPx: 4, renderIndicator: g };
        },
    },
);
