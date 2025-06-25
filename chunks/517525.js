n.d(t, { Z: () => L }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    u = n(695469),
    o = n(468194),
    s = n(442837),
    c = n(692547),
    d = n(477690),
    f = n(481060),
    m = n(2052),
    p = n(906732),
    E = n(194082),
    g = n(484459),
    h = n(594174),
    S = n(626135),
    O = n(74538),
    v = n(557457),
    b = n(475674),
    I = n(981631),
    _ = n(474936),
    y = n(388032),
    Z = n(374336);
function A(e) {
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
function N(e, t) {
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
let R = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    P = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    T = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    j = { opacity: 0 },
    C = { opacity: 1 },
    w = { borderRadius: ''.concat(R, 'px ').concat(R, 'px ').concat(R, 'px ').concat(R, 'px') },
    x = { borderRadius: '0px '.concat(R, 'px ').concat(R, 'px 0px') },
    D = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    M = (e) => {
        let t,
            i,
            { participant: u, isUpsellEnabled: o, shape: d, size: g, didTrackUpsellViewed: R, setDidTrackUpsellViewed: P, className: T, premiumIndicator: j, quality: C } = e,
            { analyticsLocations: w } = (0, p.ZP)(),
            x = null != (0, b.Z)(u);
        try {
            t = (0, v.nG)(C);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, v.tR)(C);
        } catch (e) {
            i = !1;
        }
        let D = t || i,
            { location: M } = (0, m.O)(),
            L = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
            k = o && !O.ZP.isPremium(L, _.p9.TIER_1) && !O.ZP.canStreamQuality(O.ZP.StreamQuality.MID, L),
            U = l.useCallback(() => {
                k &&
                    D &&
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, N(A({}, t), { analyticsSource: M }));
                    });
            }, [k, D, M]);
        if (
            (l.useEffect(() => {
                !R &&
                    D &&
                    (S.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: _.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: w
                    }),
                    P(!0));
            }, [t, i, D, R, P, w]),
            null == C)
        )
            return null;
        let V = (0, r.jsx)(f.ua7, {
            text: x ? y.intl.string(y.t.q8TiVl) : D ? y.intl.string(y.t.IHgpEh) : y.intl.string(y.t.vLb0VV),
            position: 'bottom',
            color: f.ua7.Colors.GREY,
            children: (e) =>
                (0, r.jsxs)(
                    f.P3F,
                    N(A({}, e), {
                        onClick: U,
                        className: a()(Z.qualityIndicator, g, E.eE[d], x ? Z.qualityIndicatorLowQuality : Z.qualityIndicatorFullQuality, { [Z.clickable]: k && D }),
                        children: [
                            D
                                ? (0, r.jsx)(f.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: Z.premiumStreamIcon
                                  })
                                : null,
                            (0, r.jsx)('span', {
                                className: Z.qualityResolution,
                                children: (0, v.ml)(C.maxResolution)
                            }),
                            (0, r.jsx)('span', { children: (0, v.bp)(C.maxFrameRate) })
                        ]
                    })
                )
        });
        return (0, r.jsx)(f.IGR, {
            text: V,
            className: a()(T, Z.qualityIndicatorBadge, { [Z.qualityIndicatorBadgePremium]: D && j }),
            color: c.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    },
    L = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: o, className: s, premiumIndicator: c } = e,
            [d, m] = l.useState(!1),
            p = (0, v.W3)(t),
            { reducedMotion: h } = l.useContext(f.Sfi),
            S = n && null != p;
        l.useEffect(() => {
            (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let O = (0, f.Yzy)(
                S,
                {
                    enter: {
                        from: h.enabled ? j : P,
                        to: h.enabled ? C : T
                    },
                    leave: h.enabled ? j : P,
                    config: D
                },
                'animate-always'
            ),
            b = (0, f.q_F)(
                {
                    to: S ? x : w,
                    config: D
                },
                'animate-always'
            );
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, r.jsxs)(
                'div',
                N(A({ className: a()(Z.streamQualityIndicator, n) }, l), {
                    children: [
                        O((e, n) =>
                            n
                                ? (0, r.jsx)(u.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(M, {
                                          className: Z.liveQualityIndicator,
                                          participant: t,
                                          size: o,
                                          shape: f.Dv2.ROUND_LEFT,
                                          isUpsellEnabled: i,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: m,
                                          premiumIndicator: c,
                                          quality: p
                                      })
                                  })
                                : null
                        ),
                        (0, r.jsx)(u.animated.div, {
                            style: b,
                            className: Z.liveIndicator,
                            children: (0, r.jsx)(E.ZP, {
                                look: E.jZ.RED,
                                size: o,
                                shape: S ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
                            })
                        })
                    ]
                })
            );
        })({ className: s });
    };
