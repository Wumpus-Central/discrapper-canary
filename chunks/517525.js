n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(666912),
    o = n(468194),
    c = n(442837),
    u = n(692547),
    d = n(477690),
    m = n(481060),
    f = n(2052),
    p = n(906732),
    g = n(194082),
    h = n(484459),
    v = n(594174),
    S = n(626135),
    I = n(74538),
    _ = n(557457),
    x = n(475674),
    E = n(981631),
    C = n(474936),
    Z = n(388032),
    y = n(891252);
let b = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    T = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    A = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    N = { opacity: 0 },
    w = { opacity: 1 },
    j = { borderRadius: ''.concat(b, 'px ').concat(b, 'px ').concat(b, 'px ').concat(b, 'px') },
    P = { borderRadius: '0px '.concat(b, 'px ').concat(b, 'px 0px') },
    R = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    M = (e) => {
        let t,
            a,
            { participant: s, isUpsellEnabled: o, shape: d, size: h, didTrackUpsellViewed: b, setDidTrackUpsellViewed: T, className: A, premiumIndicator: N } = e,
            w = (0, _.Wc)(s),
            { analyticsLocations: j } = (0, p.ZP)(),
            P = null != (0, x.Z)(s);
        try {
            t = (0, _.nG)(w);
        } catch (e) {
            t = !1;
        }
        try {
            a = (0, _.tR)(w);
        } catch (e) {
            a = !1;
        }
        let R = t || a,
            { location: M } = (0, f.O)(),
            O = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
            L = o && !I.ZP.isPremium(O, C.p9.TIER_1) && !I.ZP.canStreamQuality(I.ZP.StreamQuality.MID, O),
            k = l.useCallback(() => {
                L &&
                    R &&
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                analyticsSource: M
                            });
                    });
            }, [L, R, M]);
        if (
            (l.useEffect(() => {
                !b &&
                    R &&
                    (S.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: C.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: a,
                        location_stack: j
                    }),
                    T(!0));
            }, [t, a, R, b, T, j]),
            null == w)
        )
            return null;
        let D = (0, i.jsx)(m.Tooltip, {
            text: P ? Z.intl.string(Z.t.q8TiVl) : R ? Z.intl.string(Z.t.IHgpEh) : Z.intl.string(Z.t.vLb0VV),
            position: 'bottom',
            color: m.Tooltip.Colors.GREY,
            children: (e) =>
                (0, i.jsxs)(m.Clickable, {
                    ...e,
                    onClick: k,
                    className: r()(y.qualityIndicator, h, g.eE[d], P ? y.qualityIndicatorLowQuality : y.qualityIndicatorFullQuality, { [y.clickable]: L && R }),
                    children: [
                        R
                            ? (0, i.jsx)(m.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: y.premiumStreamIcon
                              })
                            : null,
                        (0, i.jsx)('span', {
                            className: y.qualityResolution,
                            children: (0, _.ml)(w.maxResolution)
                        }),
                        (0, i.jsx)('span', { children: (0, _.bp)(w.maxFrameRate) })
                    ]
                })
        });
        return (0, i.jsx)(m.TextBadge, {
            text: D,
            className: r()(A, y.qualityIndicatorBadge, { [y.qualityIndicatorBadgePremium]: R && N }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    };
t.Z = (e) => {
    let { participant: t, showQuality: n, isUpsellEnabled: a = !0, size: o, className: c, premiumIndicator: u } = e,
        [d, f] = l.useState(!1),
        p = (0, _.Wc)(t),
        { reducedMotion: v } = l.useContext(m.AccessibilityPreferencesContext),
        S = n && null != p;
    l.useEffect(() => {
        (0, h.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
    }, [t]);
    let I = (0, m.useTransition)(
            S,
            {
                enter: {
                    from: v.enabled ? N : T,
                    to: v.enabled ? w : A
                },
                leave: v.enabled ? N : T,
                config: R
            },
            'animate-always'
        ),
        x = (0, m.useSpring)(
            {
                to: S ? P : j,
                config: R
            },
            'animate-always'
        );
    return ((e) => {
        let { className: n, popoutProps: l } = e;
        return (0, i.jsxs)('div', {
            className: r()(y.streamQualityIndicator, n),
            ...l,
            children: [
                I((e, n) =>
                    n
                        ? (0, i.jsx)(s.animated.div, {
                              style: e,
                              children: (0, i.jsx)(M, {
                                  className: y.liveQualityIndicator,
                                  participant: t,
                                  size: o,
                                  shape: m.BadgeShapes.ROUND_LEFT,
                                  isUpsellEnabled: a,
                                  didTrackUpsellViewed: d,
                                  setDidTrackUpsellViewed: f,
                                  premiumIndicator: u
                              })
                          })
                        : null
                ),
                (0, i.jsx)(s.animated.div, {
                    style: x,
                    className: y.liveIndicator,
                    children: (0, i.jsx)(g.ZP, {
                        look: g.jZ.RED,
                        size: o,
                        shape: S ? m.BadgeShapes.ROUND_RIGHT : m.BadgeShapes.ROUND
                    })
                })
            ]
        });
    })({ className: c });
};
