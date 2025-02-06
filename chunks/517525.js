n.d(t, { Z: () => P }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(468194),
    u = n(442837),
    c = n(692547),
    d = n(477690),
    m = n(481060),
    f = n(2052),
    h = n(906732),
    p = n(194082),
    v = n(484459),
    g = n(594174),
    E = n(626135),
    x = n(74538),
    Z = n(557457),
    S = n(475674),
    C = n(981631),
    b = n(474936),
    I = n(388032),
    _ = n(891252);
let R = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    j = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    y = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    N = { opacity: 0 },
    w = { opacity: 1 },
    A = { borderRadius: ''.concat(R, 'px ').concat(R, 'px ').concat(R, 'px ').concat(R, 'px') },
    T = { borderRadius: '0px '.concat(R, 'px ').concat(R, 'px 0px') },
    k = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    O = (e) => {
        let t,
            r,
            { participant: s, isUpsellEnabled: o, shape: d, size: v, didTrackUpsellViewed: R, setDidTrackUpsellViewed: j, className: y, premiumIndicator: N } = e,
            w = (0, Z.Wc)(s),
            { analyticsLocations: A } = (0, h.ZP)(),
            T = null != (0, S.Z)(s);
        try {
            t = (0, Z.nG)(w);
        } catch (e) {
            t = !1;
        }
        try {
            r = (0, Z.tR)(w);
        } catch (e) {
            r = !1;
        }
        let k = t || r,
            { location: O } = (0, f.O)(),
            P = (0, u.e7)([g.default], () => g.default.getCurrentUser()),
            M = o && !x.ZP.isPremium(P, b.p9.TIER_1) && !x.ZP.canStreamQuality(x.ZP.StreamQuality.MID, P),
            D = i.useCallback(() => {
                M &&
                    k &&
                    (0, m.ZDy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                analyticsSource: O
                            });
                    });
            }, [M, k, O]);
        if (
            (i.useEffect(() => {
                !R &&
                    k &&
                    (E.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: b.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: r,
                        location_stack: A
                    }),
                    j(!0));
            }, [t, r, k, R, j, A]),
            null == w)
        )
            return null;
        let L = (0, l.jsx)(m.ua7, {
            text: T ? I.intl.string(I.t.q8TiVl) : k ? I.intl.string(I.t.IHgpEh) : I.intl.string(I.t.vLb0VV),
            position: 'bottom',
            color: m.ua7.Colors.GREY,
            children: (e) =>
                (0, l.jsxs)(m.P3F, {
                    ...e,
                    onClick: D,
                    className: a()(_.qualityIndicator, v, p.eE[d], T ? _.qualityIndicatorLowQuality : _.qualityIndicatorFullQuality, { [_.clickable]: M && k }),
                    children: [
                        k
                            ? (0, l.jsx)(m.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: _.premiumStreamIcon
                              })
                            : null,
                        (0, l.jsx)('span', {
                            className: _.qualityResolution,
                            children: (0, Z.ml)(w.maxResolution)
                        }),
                        (0, l.jsx)('span', { children: (0, Z.bp)(w.maxFrameRate) })
                    ]
                })
        });
        return (0, l.jsx)(m.IGR, {
            text: L,
            className: a()(y, _.qualityIndicatorBadge, { [_.qualityIndicatorBadgePremium]: k && N }),
            color: c.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    },
    P = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: r = !0, size: o, className: u, premiumIndicator: c } = e,
            [d, f] = i.useState(!1),
            h = (0, Z.Wc)(t),
            { reducedMotion: g } = i.useContext(m.Sfi),
            E = n && null != h;
        i.useEffect(() => {
            (0, v.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let x = (0, m.Yzy)(
                E,
                {
                    enter: {
                        from: g.enabled ? N : j,
                        to: g.enabled ? w : y
                    },
                    leave: g.enabled ? N : j,
                    config: k
                },
                'animate-always'
            ),
            S = (0, m.q_F)(
                {
                    to: E ? T : A,
                    config: k
                },
                'animate-always'
            );
        return ((e) => {
            let { className: n, popoutProps: i } = e;
            return (0, l.jsxs)('div', {
                className: a()(_.streamQualityIndicator, n),
                ...i,
                children: [
                    x((e, n) =>
                        n
                            ? (0, l.jsx)(s.animated.div, {
                                  style: e,
                                  children: (0, l.jsx)(O, {
                                      className: _.liveQualityIndicator,
                                      participant: t,
                                      size: o,
                                      shape: m.Dv2.ROUND_LEFT,
                                      isUpsellEnabled: r,
                                      didTrackUpsellViewed: d,
                                      setDidTrackUpsellViewed: f,
                                      premiumIndicator: c
                                  })
                              })
                            : null
                    ),
                    (0, l.jsx)(s.animated.div, {
                        style: S,
                        className: _.liveIndicator,
                        children: (0, l.jsx)(p.ZP, {
                            look: p.jZ.RED,
                            size: o,
                            shape: E ? m.Dv2.ROUND_RIGHT : m.Dv2.ROUND
                        })
                    })
                ]
            });
        })({ className: u });
    };
