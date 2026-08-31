n.d(t, { T: () => _ });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(221877),
    o = n(505124),
    u = n(866665),
    d = n(43990),
    c = n(717421),
    m = n(713608),
    p = n(918715),
    g = n(661531),
    h = n(271520),
    f = n(762555),
    x = n(711918),
    C = n(375708),
    I = n(328115);
function A(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: l,
        isAnimated: a,
        index: c,
        activated: m,
        expansionSpring: p,
        icon: h,
        tooltip: f,
    } = e;
    return (0, i.jsx)(u.m, {
        delay: 300,
        text: f,
        children: (0, i.jsx)(d.N, {
            theme: o.NJ.MIDNIGHT,
            children: (e) =>
                (0, i.jsx)(r.animated.div, {
                    className: s()(I.z, e),
                    onMouseEnter: () => l(c),
                    onMouseLeave: () => l(null),
                    style: {
                        left: a ? p.to((e) => t - e) : t,
                        right: n,
                        width: a ? p.to((e) => `${j + 2 * e}px`) : j,
                        height: a ? p.to((e) => `${j + 2 * e}px`) : j,
                    },
                    children: (0, i.jsx)(h, {
                        size: "custom",
                        width: "100%",
                        height: "100%",
                        color: m ? g.A.colors.INTERACTIVE_ICON_ACTIVE : g.A.colors.INTERACTIVE_ICON_DEFAULT,
                    }),
                }),
        }),
    });
}
let j = 12,
    v = { tension: 500, friction: 30, clamp: !0 };
function _(e) {
    let [t, n] = l.useState(null),
        a = l.useRef(null),
        [{ expansion: s }, r] = (0, c.z)(() => ({
            expansion: 0,
            config: v,
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
        u = h.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
        d = l.useMemo(() => (u ? e.filter((e) => null != e.game) : []), [e, u]),
        g = l.useMemo(() => d.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: j, gapPx: 4 })), [d]),
        I = l.useCallback(
            (e, n) => {
                let l,
                    a,
                    r = t === e.index,
                    u = d[e.index];
                if (null == u) return null;
                let c = n > e.leftPx;
                switch (u.game.type) {
                    case f.Q_.MULTIKILL:
                        (a = C.intl.string(x.default.PMLPER)), (l = m.q);
                        break;
                    case f.Q_.KILL:
                        (l = m.q), (a = C.intl.string(x.default.fYdqnM));
                        break;
                    case f.Q_.DEATH:
                        (l = p.V), (a = C.intl.string(x.default.MhIx41));
                }
                return null == l || null == a
                    ? null
                    : (0, i.jsx)(A, {
                          ...e,
                          activated: c,
                          gapPx: 4,
                          tooltip: a,
                          expansionSpring: s,
                          setHoveredIndex: o,
                          isAnimated: r,
                          icon: l,
                      });
            },
            [t, d, o, s],
        );
    return { indicators: g, animatingIndex: t, expansionSpring: s, hoverExpansionPx: 4, renderIndicator: I };
}
