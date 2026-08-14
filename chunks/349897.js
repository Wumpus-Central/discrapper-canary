n.d(t, { T: () => _ });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(53466),
    o = n(505124),
    d = n(866665),
    c = n(43990),
    u = n(717421),
    h = n(713608),
    m = n(918715),
    p = n(661531),
    g = n(271520),
    f = n(762555),
    A = n(16590),
    x = n(375708),
    v = n(111524);
function C(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: l,
        isAnimated: a,
        index: u,
        activated: h,
        expansionSpring: m,
        icon: g,
        tooltip: f,
    } = e;
    return (0, i.jsx)(d.m, {
        delay: 300,
        text: f,
        children: (0, i.jsx)(c.N, {
            theme: o.NJ.MIDNIGHT,
            children: (e) =>
                (0, i.jsx)(r.animated.div, {
                    className: s()(v.z, e),
                    onMouseEnter: () => l(u),
                    onMouseLeave: () => l(null),
                    style: {
                        left: a ? m.to((e) => t - e) : t,
                        right: n,
                        width: a ? m.to((e) => `${E + 2 * e}px`) : E,
                        height: a ? m.to((e) => `${E + 2 * e}px`) : E,
                    },
                    children: (0, i.jsx)(g, {
                        size: "custom",
                        width: "100%",
                        height: "100%",
                        color: h ? p.A.colors.INTERACTIVE_ICON_ACTIVE : p.A.colors.INTERACTIVE_ICON_DEFAULT,
                    }),
                }),
        }),
    });
}
let E = 12,
    T = { tension: 500, friction: 30, clamp: !0 };
function _(e) {
    let [t, n] = l.useState(null),
        a = l.useRef(null),
        [{ expansion: s }, r] = (0, u.z)(() => ({
            expansion: 0,
            config: T,
            onRest: () => {
                null == a.current && n(null);
            },
        })),
        o = l.useCallback(
            (e) => {
                (a.current = e), null != e ? (n(e), r({ expansion: 4 })) : r({ expansion: 0 });
            },
            [r],
        ),
        d = g.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
        c = l.useMemo(() => (d ? e.filter((e) => null != e.game) : []), [e, d]),
        p = l.useMemo(() => c.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: E, gapPx: 4 })), [c]),
        v = l.useCallback(
            (e, n) => {
                let l,
                    a,
                    r = t === e.index,
                    d = c[e.index];
                if (null == d) return null;
                let u = n > e.leftPx;
                switch (d.game.type) {
                    case f.Q_.MULTIKILL:
                        (a = x.intl.string(A.default.PMLPER)), (l = h.q);
                        break;
                    case f.Q_.KILL:
                        (l = h.q), (a = x.intl.string(A.default.fYdqnM));
                        break;
                    case f.Q_.DEATH:
                        (l = m.V), (a = x.intl.string(A.default.MhIx41));
                }
                return null == l || null == a
                    ? null
                    : (0, i.jsx)(C, {
                          ...e,
                          activated: u,
                          gapPx: 4,
                          tooltip: a,
                          expansionSpring: s,
                          setHoveredIndex: o,
                          isAnimated: r,
                          icon: l,
                      });
            },
            [t, c, o, s],
        );
    return { indicators: p, animatingIndex: t, expansionSpring: s, hoverExpansionPx: 4, renderIndicator: v };
}
