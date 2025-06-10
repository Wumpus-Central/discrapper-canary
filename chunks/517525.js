n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(524979),
    u = n(468194),
    s = n(442837),
    c = n(692547),
    d = n(477690),
    f = n(481060),
    p = n(2052),
    m = n(906732),
    g = n(194082),
    E = n(484459),
    h = n(594174),
    v = n(626135),
    S = n(74538),
    b = n(557457),
    O = n(475674),
    y = n(981631),
    Z = n(474936),
    j = n(388032),
    _ = n(374336);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = (0, u.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    A = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    x = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    R = { opacity: 0 },
    N = { opacity: 1 },
    C = { borderRadius: ''.concat(P, 'px ').concat(P, 'px ').concat(P, 'px ').concat(P, 'px') },
    T = { borderRadius: '0px '.concat(P, 'px ').concat(P, 'px 0px') },
    D = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    M = (e) => {
        let t,
            i,
            { participant: o, isUpsellEnabled: u, shape: d, size: E, didTrackUpsellViewed: P, setDidTrackUpsellViewed: A, className: x, premiumIndicator: R, quality: N } = e,
            { analyticsLocations: C } = (0, m.ZP)(),
            T = null != (0, O.Z)(o);
        try {
            t = (0, b.nG)(N);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, b.tR)(N);
        } catch (e) {
            i = !1;
        }
        let D = t || i,
            { location: M } = (0, p.O)(),
            k = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
            L = u && !S.ZP.isPremium(k, Z.p9.TIER_1) && !S.ZP.canStreamQuality(S.ZP.StreamQuality.MID, k),
            U = l.useCallback(() => {
                L &&
                    D &&
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, w(I({}, t), { analyticsSource: M }));
                    });
            }, [L, D, M]);
        if (
            (l.useEffect(() => {
                !P &&
                    D &&
                    (v.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Z.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: C
                    }),
                    A(!0));
            }, [t, i, D, P, A, C]),
            null == N)
        )
            return null;
        let F = (0, r.jsx)(f.ua7, {
            text: T ? j.intl.string(j.t.q8TiVl) : D ? j.intl.string(j.t.IHgpEh) : j.intl.string(j.t.vLb0VV),
            position: 'bottom',
            color: f.ua7.Colors.GREY,
            children: (e) =>
                (0, r.jsxs)(
                    f.P3F,
                    w(I({}, e), {
                        onClick: U,
                        className: a()(_.qualityIndicator, E, g.eE[d], T ? _.qualityIndicatorLowQuality : _.qualityIndicatorFullQuality, { [_.clickable]: L && D }),
                        children: [
                            D
                                ? (0, r.jsx)(f.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: _.premiumStreamIcon
                                  })
                                : null,
                            (0, r.jsx)('span', {
                                className: _.qualityResolution,
                                children: (0, b.ml)(N.maxResolution)
                            }),
                            (0, r.jsx)('span', { children: (0, b.bp)(N.maxFrameRate) })
                        ]
                    })
                )
        });
        return (0, r.jsx)(f.IGR, {
            text: F,
            className: a()(x, _.qualityIndicatorBadge, { [_.qualityIndicatorBadgePremium]: D && R }),
            color: c.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    },
    k = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: u, className: s, premiumIndicator: c } = e,
            [d, p] = l.useState(!1),
            m = (0, b.W3)(t),
            { reducedMotion: h } = l.useContext(f.Sfi),
            v = n && null != m;
        l.useEffect(() => {
            (0, E.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let S = (0, f.Yzy)(
                v,
                {
                    enter: {
                        from: h.enabled ? R : A,
                        to: h.enabled ? N : x
                    },
                    leave: h.enabled ? R : A,
                    config: D
                },
                'animate-always'
            ),
            O = (0, f.q_F)(
                {
                    to: v ? T : C,
                    config: D
                },
                'animate-always'
            );
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, r.jsxs)(
                'div',
                w(I({ className: a()(_.streamQualityIndicator, n) }, l), {
                    children: [
                        S((e, n) =>
                            n
                                ? (0, r.jsx)(o.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(M, {
                                          className: _.liveQualityIndicator,
                                          participant: t,
                                          size: u,
                                          shape: f.Dv2.ROUND_LEFT,
                                          isUpsellEnabled: i,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: p,
                                          premiumIndicator: c,
                                          quality: m
                                      })
                                  })
                                : null
                        ),
                        (0, r.jsx)(o.animated.div, {
                            style: O,
                            className: _.liveIndicator,
                            children: (0, r.jsx)(g.ZP, {
                                look: g.jZ.RED,
                                size: u,
                                shape: v ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
                            })
                        })
                    ]
                })
            );
        })({ className: s });
    };
