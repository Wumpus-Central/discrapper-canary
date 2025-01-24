n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    S = n(626135),
    I = n(74538),
    x = n(557457),
    _ = n(475674),
    C = n(981631),
    b = n(474936),
    E = n(388032),
    y = n(891252);
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
    O = (e) => {
        let t,
            r,
            { participant: s, isUpsellEnabled: o, shape: d, size: g, didTrackUpsellViewed: Z, setDidTrackUpsellViewed: T, className: N, premiumIndicator: A } = e,
            j = (0, x.Wc)(s),
            { analyticsLocations: w } = (0, p.ZP)(),
            P = null != (0, _.Z)(s);
        try {
            t = (0, x.nG)(j);
        } catch (e) {
            t = !1;
        }
        try {
            r = (0, x.tR)(j);
        } catch (e) {
            r = !1;
        }
        let R = t || r,
            { location: O } = (0, f.O)(),
            k = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
            M = o && !I.ZP.isPremium(k, b.p9.TIER_1) && !I.ZP.canStreamQuality(I.ZP.StreamQuality.MID, k),
            L = l.useCallback(() => {
                M &&
                    R &&
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                analyticsSource: O
                            });
                    });
            }, [M, R, O]);
        if (
            (l.useEffect(() => {
                !Z &&
                    R &&
                    (S.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: b.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: r,
                        location_stack: w
                    }),
                    T(!0));
            }, [t, r, R, Z, T, w]),
            null == j)
        )
            return null;
        let D = (0, i.jsx)(m.Tooltip, {
            text: P ? E.intl.string(E.t.q8TiVl) : R ? E.intl.string(E.t.IHgpEh) : E.intl.string(E.t.vLb0VV),
            position: 'bottom',
            color: m.Tooltip.Colors.GREY,
            children: (e) =>
                (0, i.jsxs)(m.Clickable, {
                    ...e,
                    onClick: L,
                    className: a()(y.qualityIndicator, g, h.eE[d], P ? y.qualityIndicatorLowQuality : y.qualityIndicatorFullQuality, { [y.clickable]: M && R }),
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
                            children: (0, x.ml)(j.maxResolution)
                        }),
                        (0, i.jsx)('span', { children: (0, x.bp)(j.maxFrameRate) })
                    ]
                })
        });
        return (0, i.jsx)(m.TextBadge, {
            text: D,
            className: a()(N, y.qualityIndicatorBadge, { [y.qualityIndicatorBadgePremium]: R && A }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    };
t.Z = (e) => {
    let { participant: t, showQuality: n, isUpsellEnabled: r = !0, size: o, className: c, premiumIndicator: u } = e,
        [d, f] = l.useState(!1),
        p = (0, x.Wc)(t),
        { reducedMotion: v } = l.useContext(m.AccessibilityPreferencesContext),
        S = n && null != p;
    l.useEffect(() => {
        (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
    }, [t]);
    let I = (0, m.useTransition)(
            S,
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
        _ = (0, m.useSpring)(
            {
                to: S ? P : w,
                config: R
            },
            'animate-always'
        );
    return ((e) => {
        let { className: n, popoutProps: l } = e;
        return (0, i.jsxs)('div', {
            className: a()(y.streamQualityIndicator, n),
            ...l,
            children: [
                I((e, n) =>
                    n
                        ? (0, i.jsx)(s.animated.div, {
                              style: e,
                              children: (0, i.jsx)(O, {
                                  className: y.liveQualityIndicator,
                                  participant: t,
                                  size: o,
                                  shape: m.BadgeShapes.ROUND_LEFT,
                                  isUpsellEnabled: r,
                                  didTrackUpsellViewed: d,
                                  setDidTrackUpsellViewed: f,
                                  premiumIndicator: u
                              })
                          })
                        : null
                ),
                (0, i.jsx)(s.animated.div, {
                    style: _,
                    className: y.liveIndicator,
                    children: (0, i.jsx)(h.ZP, {
                        look: h.jZ.RED,
                        size: o,
                        shape: S ? m.BadgeShapes.ROUND_RIGHT : m.BadgeShapes.ROUND
                    })
                })
            ]
        });
    })({ className: c });
};
