n.d(t, { T: () => E });
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(202091),
    s = n(505124),
    c = n(661531),
    o = n(866665),
    d = n(43990),
    m = n(717421),
    f = n(713608),
    g = n(918715),
    h = n(271520),
    p = n(762555),
    v = n(268378),
    x = n(375708),
    S = n(328115);
function C(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: l,
        isAnimated: a,
        index: m,
        activated: f,
        expansionSpring: g,
        icon: h,
        tooltip: p,
    } = e;
    return (0, r.jsx)(o.m, {
        delay: 300,
        text: p,
        children: (0, r.jsx)(d.N, {
            theme: s.NJ.ONYX,
            children: (e) =>
                (0, r.jsx)(u.animated.div, {
                    className: i()(S.z, e),
                    onMouseEnter: () => l(m),
                    onMouseLeave: () => l(null),
                    style: {
                        left: a ? g.to((e) => t - e) : t,
                        right: n,
                        width: a ? g.to((e) => `${b + 2 * e}px`) : b,
                        height: a ? g.to((e) => `${b + 2 * e}px`) : b,
                    },
                    children: (0, r.jsx)(h, {
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
    y = { tension: 500, friction: 30, clamp: !0 };
function E(e) {
    let [t, n] = l.useState(null),
        a = l.useRef(null),
        [{ expansion: i }, u] = (0, m.z)(() => ({
            expansion: 0,
            config: y,
            onRest: () => {
                null == a.current && n(null);
            },
        })),
        s = l.useCallback(
            (e) => {
                ((a.current = e), null != e ? (n(e), u({ expansion: 4 })) : u({ expansion: 0 }));
            },
            [u],
        ),
        c = h.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
        o = l.useMemo(() => (c ? e.filter((e) => null != e.game) : []), [e, c]),
        d = l.useMemo(() => o.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: b, gapPx: 4 })), [o]),
        S = l.useCallback(
            (e, n) => {
                let l,
                    a,
                    u = t === e.index,
                    c = o[e.index];
                if (null == c) return null;
                let d = n > e.leftPx;
                switch (c.game.type) {
                    case p.Q_.MULTIKILL:
                        ((a = x.intl.string(v.default.PMLPER)), (l = f.q));
                        break;
                    case p.Q_.KILL:
                        ((l = f.q), (a = x.intl.string(v.default.fYdqnM)));
                        break;
                    case p.Q_.DEATH:
                        ((l = g.V), (a = x.intl.string(v.default.MhIx41)));
                }
                return null == l || null == a
                    ? null
                    : (0, r.jsx)(C, {
                          ...e,
                          activated: d,
                          gapPx: 4,
                          tooltip: a,
                          expansionSpring: i,
                          setHoveredIndex: s,
                          isAnimated: u,
                          icon: l,
                      });
            },
            [t, o, s, i],
        );
    return { indicators: d, animatingIndex: t, expansionSpring: i, hoverExpansionPx: 4, renderIndicator: S };
}
