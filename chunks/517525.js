n.d(t, { Z: () => L }), n(47120);
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
    _ = n(626135),
    I = n(74538),
    S = n(557457),
    x = n(475674),
    E = n(981631),
    C = n(474936),
    Z = n(388032),
    y = n(891252);
let b = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    N = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    T = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    A = { opacity: 0 },
    w = { opacity: 1 },
    P = { borderRadius: ''.concat(b, 'px ').concat(b, 'px ').concat(b, 'px ').concat(b, 'px') },
    j = { borderRadius: '0px '.concat(b, 'px ').concat(b, 'px 0px') },
    R = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    k = (e) => {
        let t,
            a,
            { participant: s, isUpsellEnabled: o, shape: d, size: g, didTrackUpsellViewed: b, setDidTrackUpsellViewed: N, className: T, premiumIndicator: A } = e,
            w = (0, S.Wc)(s),
            { analyticsLocations: P } = (0, p.ZP)(),
            j = null != (0, x.Z)(s);
        try {
            t = (0, S.nG)(w);
        } catch (e) {
            t = !1;
        }
        try {
            a = (0, S.tR)(w);
        } catch (e) {
            a = !1;
        }
        let R = t || a,
            { location: k } = (0, f.O)(),
            L = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
            O = o && !I.ZP.isPremium(L, C.p9.TIER_1) && !I.ZP.canStreamQuality(I.ZP.StreamQuality.MID, L),
            M = l.useCallback(() => {
                O &&
                    R &&
                    (0, m.ZDy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                analyticsSource: k
                            });
                    });
            }, [O, R, k]);
        if (
            (l.useEffect(() => {
                !b &&
                    R &&
                    (_.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: C.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: a,
                        location_stack: P
                    }),
                    N(!0));
            }, [t, a, R, b, N, P]),
            null == w)
        )
            return null;
        let D = (0, i.jsx)(m.ua7, {
            text: j ? Z.intl.string(Z.t.q8TiVl) : R ? Z.intl.string(Z.t.IHgpEh) : Z.intl.string(Z.t.vLb0VV),
            position: 'bottom',
            color: m.ua7.Colors.GREY,
            children: (e) =>
                (0, i.jsxs)(m.P3F, {
                    ...e,
                    onClick: M,
                    className: r()(y.qualityIndicator, g, h.eE[d], j ? y.qualityIndicatorLowQuality : y.qualityIndicatorFullQuality, { [y.clickable]: O && R }),
                    children: [
                        R
                            ? (0, i.jsx)(m.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: y.premiumStreamIcon
                              })
                            : null,
                        (0, i.jsx)('span', {
                            className: y.qualityResolution,
                            children: (0, S.ml)(w.maxResolution)
                        }),
                        (0, i.jsx)('span', { children: (0, S.bp)(w.maxFrameRate) })
                    ]
                })
        });
        return (0, i.jsx)(m.IGR, {
            text: D,
            className: r()(T, y.qualityIndicatorBadge, { [y.qualityIndicatorBadgePremium]: R && A }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    },
    L = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: a = !0, size: o, className: c, premiumIndicator: u } = e,
            [d, f] = l.useState(!1),
            p = (0, S.Wc)(t),
            { reducedMotion: v } = l.useContext(m.Sfi),
            _ = n && null != p;
        l.useEffect(() => {
            (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let I = (0, m.Yzy)(
                _,
                {
                    enter: {
                        from: v.enabled ? A : N,
                        to: v.enabled ? w : T
                    },
                    leave: v.enabled ? A : N,
                    config: R
                },
                'animate-always'
            ),
            x = (0, m.q_F)(
                {
                    to: _ ? j : P,
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
                                  children: (0, i.jsx)(k, {
                                      className: y.liveQualityIndicator,
                                      participant: t,
                                      size: o,
                                      shape: m.Dv2.ROUND_LEFT,
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
                        children: (0, i.jsx)(h.ZP, {
                            look: h.jZ.RED,
                            size: o,
                            shape: _ ? m.Dv2.ROUND_RIGHT : m.Dv2.ROUND
                        })
                    })
                ]
            });
        })({ className: c });
    };
