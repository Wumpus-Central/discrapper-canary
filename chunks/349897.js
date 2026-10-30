(n.d(t, { T: () => T }), n(321073));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    u = n(941143),
    s = n(505124),
    c = n(661531),
    o = n(43990),
    d = n(683063),
    m = n(713608),
    f = n(918715),
    h = n(717421),
    g = n(271520),
    p = n(762555),
    v = n(374816),
    x = n(696016),
    S = n(507216),
    E = n(105292),
    y = n(328115);
function A(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: l,
        isAnimated: i,
        index: m,
        activated: f,
        expansionSpring: h,
        icon: g,
        title: p,
        body: v,
    } = e;
    return (0, r.jsx)(o.N, {
        theme: s.NJ.ONYX,
        children: (e) =>
            (0, r.jsx)(d.u, {
                title: p ?? void 0,
                body: v,
                position: "top",
                children: (0, r.jsx)(u.animated.div, {
                    className: a()(y.z, e),
                    onMouseEnter: () => l(m),
                    onMouseLeave: () => l(null),
                    style: {
                        left: i ? h.to((e) => t - e) : t,
                        right: n,
                        width: i ? h.to((e) => `${b + 2 * e}px`) : b,
                        height: i ? h.to((e) => `${b + 2 * e}px`) : b,
                    },
                    children: (0, r.jsx)(g, {
                        size: "custom",
                        width: "100%",
                        height: "100%",
                        color: f ? c.A.colors.INTERACTIVE_ICON_ACTIVE : c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    }),
                }),
            }),
    });
}
let b = 12,
    C = { tension: 500, friction: 30, clamp: !0 };
function j(e) {
    switch (e) {
        case p.B.LAUGHTER:
            return x.Gy.LAUGHTER;
        case p.B.SHOUTING:
            return x.Gy.SHOUTING;
        default:
            return null;
    }
}
function I(e, t) {
    if (null != t.emotion) {
        let n = j(t.emotion.type);
        return null == n ? 0 : ((0, v.$b)(e, n) ?? 0);
    }
    return null != t.game
        ? null == t.game.event_name
            ? 0
            : ((0, v.$b)(e, x.Gy.GAME_EVENT, t.game.event_name) ?? 0)
        : 0;
}
function _(e, t) {
    if (null != t.emotion) {
        let n = j(t.emotion.type);
        return null == n ? null : (0, v.u6)(e, n);
    }
    if (null != t.game) {
        if (null != t.game.event_name) return (0, v.u6)(e, x.Gy.GAME_EVENT, t.game.event_name);
        switch (t.game.type) {
            case p.Q_.MULTIKILL:
            case p.Q_.KILL:
                return m.q;
            case p.Q_.DEATH:
                return f.V;
        }
    }
    return null;
}
function T(e, t, n) {
    let [i, a] = l.useState(null),
        u = l.useRef(null),
        [{ expansion: s }, c] = (0, h.z)(() => ({
            expansion: 0,
            config: C,
            onRest: () => {
                null == u.current && a(null);
            },
        })),
        o = l.useCallback(
            (e) => {
                ((u.current = e), null != e ? (a(e), c({ expansion: 4 })) : c({ expansion: 0 }));
            },
            [c],
        ),
        d = g.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
        m = l.useMemo(() => {
            let r = e
                .filter((e) => ((d && null != e.game) || null != e.emotion) && null != _(t, e))
                .map((e) => {
                    var t;
                    return {
                        event: e,
                        position: ((t = e.timestamp_ms), null == n || n <= 0 ? null : (t / 1e3 / n) * 100),
                    };
                })
                .filter((e) => null != e.position);
            (r.sort((e, t) => e.event.timestamp_ms - t.event.timestamp_ms),
                r.sort((e, n) => I(t, n.event) - I(t, e.event)));
            let l = [];
            for (let e of r) l.some((t) => Math.abs(t.position - e.position) < v.Vd) || l.push(e);
            return (l.sort((e, t) => e.event.timestamp_ms - t.event.timestamp_ms), l.map((e) => e.event));
        }, [e, d, t, n]),
        f = l.useMemo(() => m.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: b, gapPx: 4 })), [m]),
        p = l.useCallback(
            (e, n) => {
                let l = i === e.index,
                    a = m[e.index];
                if (null == a) return null;
                let u = n > e.leftPx,
                    c = _(t, a),
                    d =
                        null != a.emotion
                            ? E.intl.string(S.default["ry+jxm"])
                            : null != a.game
                              ? E.intl.string(S.default["347DBb"])
                              : null;
                return null == c || null == d
                    ? null
                    : (0, r.jsx)(A, {
                          ...e,
                          activated: u,
                          gapPx: 4,
                          title: (function (e, t) {
                              if (null != t.emotion) {
                                  let n = j(t.emotion.type);
                                  return null == n ? null : (0, v.PZ)(e, n);
                              }
                              return null != t.game && null != t.game.event_name
                                  ? (0, v.PZ)(e, x.Gy.GAME_EVENT, t.game.event_name)
                                  : null;
                          })(t, a),
                          body: d,
                          expansionSpring: s,
                          setHoveredIndex: o,
                          isAnimated: l,
                          icon: c,
                      });
            },
            [i, m, o, s, t],
        );
    return { indicators: f, animatingIndex: i, expansionSpring: s, hoverExpansionPx: 4, renderIndicator: p };
}
