n.d(t, { T: () => _ });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(74445),
    o = n(505124),
    u = n(866665),
    d = n(43990),
    c = n(717421),
    m = n(713608),
    g = n(918715),
    h = n(661531),
    p = n(271520),
    f = n(762555),
    x = n(704796),
    C = n(375708),
    I = n(328115);
function A(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: i,
        isAnimated: a,
        index: c,
        activated: m,
        expansionSpring: g,
        icon: p,
        tooltip: f,
    } = e;
    return (0, l.jsx)(u.m, {
        delay: 300,
        text: f,
        children: (0, l.jsx)(d.N, {
            theme: o.NJ.MIDNIGHT,
            children: (e) =>
                (0, l.jsx)(r.animated.div, {
                    className: s()(I.z, e),
                    onMouseEnter: () => i(c),
                    onMouseLeave: () => i(null),
                    style: {
                        left: a ? g.to((e) => t - e) : t,
                        right: n,
                        width: a ? g.to((e) => `${j + 2 * e}px`) : j,
                        height: a ? g.to((e) => `${j + 2 * e}px`) : j,
                    },
                    children: (0, l.jsx)(p, {
                        size: "custom",
                        width: "100%",
                        height: "100%",
                        color: m ? h.A.colors.INTERACTIVE_ICON_ACTIVE : h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    }),
                }),
        }),
    });
}
let j = 12,
    v = { tension: 500, friction: 30, clamp: !0 };
function _(e) {
    let [t, n] = i.useState(null),
        a = i.useRef(null),
        [{ expansion: s }, r] = (0, c.z)(() => ({
            expansion: 0,
            config: v,
            onRest: () => {
                null == a.current && n(null);
            },
        })),
        o = i.useCallback(
            (e) => {
                (a.current = e), null != e ? (n(e), r({ expansion: 4 })) : r({ expansion: 0 });
            },
            [r],
        ),
        u = p.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
        d = i.useMemo(() => (u ? e.filter((e) => null != e.game) : []), [e, u]),
        h = i.useMemo(() => d.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: j, gapPx: 4 })), [d]),
        I = i.useCallback(
            (e, n) => {
                let i,
                    a,
                    r = t === e.index,
                    u = d[e.index];
                if (null == u) return null;
                let c = n > e.leftPx;
                switch (u.game.type) {
                    case f.Q_.MULTIKILL:
                        (a = C.intl.string(x.default.PMLPER)), (i = m.q);
                        break;
                    case f.Q_.KILL:
                        (i = m.q), (a = C.intl.string(x.default.fYdqnM));
                        break;
                    case f.Q_.DEATH:
                        (i = g.V), (a = C.intl.string(x.default.MhIx41));
                }
                return null == i || null == a
                    ? null
                    : (0, l.jsx)(A, {
                          ...e,
                          activated: c,
                          gapPx: 4,
                          tooltip: a,
                          expansionSpring: s,
                          setHoveredIndex: o,
                          isAnimated: r,
                          icon: i,
                      });
            },
            [t, d, o, s],
        );
    return { indicators: h, animatingIndex: t, expansionSpring: s, hoverExpansionPx: 4, renderIndicator: I };
}
