n(321073);
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(120692),
    o = n(505124),
    u = n(646514),
    d = n(43990),
    c = n(683063),
    m = n(713608),
    h = n(918715),
    f = n(717421),
    p = n(271520),
    g = n(762555),
    A = n(443184),
    v = n(696016),
    x = n(683825),
    E = n(792996),
    C = n(328115);
function _(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: i,
        isAnimated: a,
        index: m,
        activated: h,
        expansionSpring: f,
        icon: p,
        title: g,
        body: A,
    } = e;
    return (0, l.jsx)(d.N, {
        theme: o.NJ.ONYX,
        children: (e) =>
            (0, l.jsx)(c.u, {
                title: g ?? void 0,
                body: A,
                position: "top",
                children: (0, l.jsx)(s.animated.div, {
                    className: r()(C.z, e),
                    onMouseEnter: () => i(m),
                    onMouseLeave: () => i(null),
                    style: {
                        left: a ? f.to((e) => t - e) : t,
                        right: n,
                        width: a ? f.to((e) => `${y + 2 * e}px`) : y,
                        height: a ? f.to((e) => `${y + 2 * e}px`) : y,
                    },
                    children: (0, l.jsx)(p, {
                        size: "custom",
                        width: "100%",
                        height: "100%",
                        color: h ? u.A.colors.INTERACTIVE_ICON_ACTIVE : u.A.colors.INTERACTIVE_ICON_DEFAULT,
                    }),
                }),
            }),
    });
}
let y = 12,
    T = { tension: 500, friction: 30, clamp: !0 };
function N(e) {
    switch (e) {
        case g.B.LAUGHTER:
            return v.Gy.LAUGHTER;
        case g.B.SHOUTING:
            return v.Gy.SHOUTING;
        default:
            return null;
    }
}
function b(e, t) {
    if (null != t.emotion) {
        let n = N(t.emotion.type);
        return null == n ? 0 : ((0, A.$b)(e, n) ?? 0);
    }
    return null != t.game
        ? null == t.game.event_name
            ? 0
            : ((0, A.$b)(e, v.Gy.GAME_EVENT, t.game.event_name) ?? 0)
        : 0;
}
function j(e, t) {
    if (null != t.emotion) {
        let n = N(t.emotion.type);
        return null == n ? null : (0, A.u6)(e, n);
    }
    if (null != t.game) {
        if (null != t.game.event_name) return (0, A.u6)(e, v.Gy.GAME_EVENT, t.game.event_name);
        switch (t.game.type) {
            case g.Q_.MULTIKILL:
            case g.Q_.KILL:
                return m.q;
            case g.Q_.DEATH:
                return h.V;
        }
    }
    return null;
}
n.d(
    t,
    {},
    {
        T: function (e, t, n) {
            let [a, r] = i.useState(null),
                s = i.useRef(null),
                [{ expansion: o }, u] = (0, f.z)(() => ({
                    expansion: 0,
                    config: T,
                    onRest: () => {
                        null == s.current && r(null);
                    },
                })),
                d = i.useCallback(
                    (e) => {
                        ((s.current = e), null != e ? (r(e), u({ expansion: 4 })) : u({ expansion: 0 }));
                    },
                    [u],
                ),
                c = p.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
                m = i.useMemo(() => {
                    let l = e
                        .filter((e) => ((c && null != e.game) || null != e.emotion) && null != j(t, e))
                        .map((e) => {
                            var t;
                            return {
                                event: e,
                                position: ((t = e.timestamp_ms), null == n || n <= 0 ? null : (t / 1e3 / n) * 100),
                            };
                        })
                        .filter((e) => null != e.position);
                    (l.sort((e, t) => e.event.timestamp_ms - t.event.timestamp_ms),
                        l.sort((e, n) => b(t, n.event) - b(t, e.event)));
                    let i = [];
                    for (let e of l) i.some((t) => 3 > Math.abs(t.position - e.position)) || i.push(e);
                    return (i.sort((e, t) => e.event.timestamp_ms - t.event.timestamp_ms), i.map((e) => e.event));
                }, [e, c, t, n]),
                h = i.useMemo(
                    () => m.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: y, gapPx: 4 })),
                    [m],
                ),
                g = i.useCallback(
                    (e, n) => {
                        let i = a === e.index,
                            r = m[e.index];
                        if (null == r) return null;
                        let s = n > e.leftPx,
                            u = j(t, r),
                            c =
                                null != r.emotion
                                    ? E.intl.string(x.default["ry+jxm"])
                                    : null != r.game
                                      ? E.intl.string(x.default["347DBb"])
                                      : null;
                        return null == u || null == c
                            ? null
                            : (0, l.jsx)(_, {
                                  ...e,
                                  activated: s,
                                  gapPx: 4,
                                  title: (function (e, t) {
                                      if (null != t.emotion) {
                                          let n = N(t.emotion.type);
                                          return null == n ? null : (0, A.PZ)(e, n);
                                      }
                                      return null != t.game && null != t.game.event_name
                                          ? (0, A.PZ)(e, v.Gy.GAME_EVENT, t.game.event_name)
                                          : null;
                                  })(t, r),
                                  body: c,
                                  expansionSpring: o,
                                  setHoveredIndex: d,
                                  isAnimated: i,
                                  icon: u,
                              });
                    },
                    [a, m, d, o, t],
                );
            return { indicators: h, animatingIndex: a, expansionSpring: o, hoverExpansionPx: 4, renderIndicator: g };
        },
    },
);
