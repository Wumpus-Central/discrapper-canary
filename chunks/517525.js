n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(468194),
    c = n(442837),
    u = n(692547),
    d = n(477690),
    m = n(481060),
    f = n(2052),
    p = n(906732),
    h = n(194082),
    g = n(484459),
    v = n(594174),
    I = n(626135),
    S = n(74538),
    _ = n(557457),
    x = n(475674),
    E = n(981631),
    C = n(474936),
    y = n(388032),
    b = n(891252);
let Z = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    T = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    N = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    A = { opacity: 0 },
    j = { opacity: 1 },
    w = { borderRadius: ''.concat(Z, 'px ').concat(Z, 'px ').concat(Z, 'px ').concat(Z, 'px') },
    P = { borderRadius: '0px '.concat(Z, 'px ').concat(Z, 'px 0px') },
    R = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    M = (e) => {
        let t,
            a,
            { participant: s, isUpsellEnabled: o, shape: d, size: g, didTrackUpsellViewed: Z, setDidTrackUpsellViewed: T, className: N, premiumIndicator: A } = e,
            j = (0, _.Wc)(s),
            { analyticsLocations: w } = (0, p.ZP)(),
            P = null != (0, x.Z)(s);
        try {
            t = (0, _.nG)(j);
        } catch (e) {
            t = !1;
        }
        try {
            a = (0, _.tR)(j);
        } catch (e) {
            a = !1;
        }
        let R = t || a,
            { location: M } = (0, f.O)(),
            O = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
            L = o && !S.ZP.isPremium(O, C.p9.TIER_1) && !S.ZP.canStreamQuality(S.ZP.StreamQuality.MID, O),
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
                !Z &&
                    R &&
                    (I.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: C.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: a,
                        location_stack: w
                    }),
                    T(!0));
            }, [t, a, R, Z, T, w]),
            null == j)
        )
            return null;
        let D = (0, i.jsx)(m.Tooltip, {
            text: P ? y.intl.string(y.t.q8TiVl) : R ? y.intl.string(y.t.IHgpEh) : y.intl.string(y.t.vLb0VV),
            position: 'bottom',
            color: m.Tooltip.Colors.GREY,
            children: (e) =>
                (0, i.jsxs)(m.Clickable, {
                    ...e,
                    onClick: k,
                    className: r()(b.qualityIndicator, g, h.eE[d], P ? b.qualityIndicatorLowQuality : b.qualityIndicatorFullQuality, { [b.clickable]: L && R }),
                    children: [
                        R
                            ? (0, i.jsx)(m.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: b.premiumStreamIcon
                              })
                            : null,
                        (0, i.jsx)('span', {
                            className: b.qualityResolution,
                            children: (0, _.ml)(j.maxResolution)
                        }),
                        (0, i.jsx)('span', { children: (0, _.bp)(j.maxFrameRate) })
                    ]
                })
        });
        return (0, i.jsx)(m.TextBadge, {
            text: D,
            className: r()(N, b.qualityIndicatorBadge, { [b.qualityIndicatorBadgePremium]: R && A }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    };
t.Z = (e) => {
    let { participant: t, showQuality: n, isUpsellEnabled: a = !0, size: o, className: c, premiumIndicator: u } = e,
        [d, f] = l.useState(!1),
        p = (0, _.Wc)(t),
        { reducedMotion: v } = l.useContext(m.AccessibilityPreferencesContext),
        I = n && null != p;
    l.useEffect(() => {
        (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
    }, [t]);
    let S = (0, m.useTransition)(
            I,
            {
                enter: {
                    from: v.enabled ? A : T,
                    to: v.enabled ? j : N
                },
                leave: v.enabled ? A : T,
                config: R
            },
            'animate-always'
        ),
        x = (0, m.useSpring)(
            {
                to: I ? P : w,
                config: R
            },
            'animate-always'
        );
    return ((e) => {
        let { className: n, popoutProps: l } = e;
        return (0, i.jsxs)('div', {
            className: r()(b.streamQualityIndicator, n),
            ...l,
            children: [
                S((e, n) =>
                    n
                        ? (0, i.jsx)(s.animated.div, {
                              style: e,
                              children: (0, i.jsx)(M, {
                                  className: b.liveQualityIndicator,
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
                    className: b.liveIndicator,
                    children: (0, i.jsx)(h.ZP, {
                        look: h.jZ.RED,
                        size: o,
                        shape: I ? m.BadgeShapes.ROUND_RIGHT : m.BadgeShapes.ROUND
                    })
                })
            ]
        });
    })({ className: c });
};
