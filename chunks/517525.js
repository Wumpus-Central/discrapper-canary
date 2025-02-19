n.d(t, { Z: () => M }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(642128),
    s = n(468194),
    c = n(442837),
    u = n(692547),
    d = n(477690),
    f = n(481060),
    m = n(2052),
    p = n(906732),
    h = n(194082),
    v = n(484459),
    g = n(594174),
    b = n(626135),
    y = n(74538),
    E = n(557457),
    O = n(475674),
    S = n(981631),
    j = n(474936),
    x = n(388032),
    Z = n(195184);
function w(e) {
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
function C(e, t) {
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
let P = (0, s.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    N = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    I = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    R = { opacity: 0 },
    _ = { opacity: 1 },
    k = { borderRadius: ''.concat(P, 'px ').concat(P, 'px ').concat(P, 'px ').concat(P, 'px') },
    A = { borderRadius: '0px '.concat(P, 'px ').concat(P, 'px 0px') },
    T = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    D = (e) => {
        let t,
            l,
            { participant: o, isUpsellEnabled: s, shape: d, size: v, didTrackUpsellViewed: P, setDidTrackUpsellViewed: N, className: I, premiumIndicator: R } = e,
            _ = (0, E.Wc)(o),
            { analyticsLocations: k } = (0, p.ZP)(),
            A = null != (0, O.Z)(o);
        try {
            t = (0, E.nG)(_);
        } catch (e) {
            t = !1;
        }
        try {
            l = (0, E.tR)(_);
        } catch (e) {
            l = !1;
        }
        let T = t || l,
            { location: D } = (0, m.O)(),
            M = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
            L = s && !y.ZP.isPremium(M, j.p9.TIER_1) && !y.ZP.canStreamQuality(y.ZP.StreamQuality.MID, M),
            F = i.useCallback(() => {
                L &&
                    T &&
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, C(w({}, t), { analyticsSource: D }));
                    });
            }, [L, T, D]);
        if (
            (i.useEffect(() => {
                !P &&
                    T &&
                    (b.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: j.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: l,
                        location_stack: k
                    }),
                    N(!0));
            }, [t, l, T, P, N, k]),
            null == _)
        )
            return null;
        let W = (0, r.jsx)(f.ua7, {
            text: A ? x.NW.string(x.t.q8TiVl) : T ? x.NW.string(x.t.IHgpEh) : x.NW.string(x.t.vLb0VV),
            position: 'bottom',
            color: f.ua7.Colors.GREY,
            children: (e) =>
                (0, r.jsxs)(
                    f.P3F,
                    C(w({}, e), {
                        onClick: F,
                        className: a()(Z.qualityIndicator, v, h.eE[d], A ? Z.qualityIndicatorLowQuality : Z.qualityIndicatorFullQuality, { [Z.clickable]: L && T }),
                        children: [
                            T
                                ? (0, r.jsx)(f.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: Z.premiumStreamIcon
                                  })
                                : null,
                            (0, r.jsx)('span', {
                                className: Z.qualityResolution,
                                children: (0, E.ml)(_.maxResolution)
                            }),
                            (0, r.jsx)('span', { children: (0, E.bp)(_.maxFrameRate) })
                        ]
                    })
                )
        });
        return (0, r.jsx)(f.IGR, {
            text: W,
            className: a()(I, Z.qualityIndicatorBadge, { [Z.qualityIndicatorBadgePremium]: T && R }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    },
    M = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: l = !0, size: s, className: c, premiumIndicator: u } = e,
            [d, m] = i.useState(!1),
            p = (0, E.Wc)(t),
            { reducedMotion: g } = i.useContext(f.Sfi),
            b = n && null != p;
        i.useEffect(() => {
            (0, v.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let y = (0, f.Yzy)(
                b,
                {
                    enter: {
                        from: g.enabled ? R : N,
                        to: g.enabled ? _ : I
                    },
                    leave: g.enabled ? R : N,
                    config: T
                },
                'animate-always'
            ),
            O = (0, f.q_F)(
                {
                    to: b ? A : k,
                    config: T
                },
                'animate-always'
            );
        return ((e) => {
            let { className: n, popoutProps: i } = e;
            return (0, r.jsxs)(
                'div',
                C(w({ className: a()(Z.streamQualityIndicator, n) }, i), {
                    children: [
                        y((e, n) =>
                            n
                                ? (0, r.jsx)(o.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(D, {
                                          className: Z.liveQualityIndicator,
                                          participant: t,
                                          size: s,
                                          shape: f.Dv2.ROUND_LEFT,
                                          isUpsellEnabled: l,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: m,
                                          premiumIndicator: u
                                      })
                                  })
                                : null
                        ),
                        (0, r.jsx)(o.animated.div, {
                            style: O,
                            className: Z.liveIndicator,
                            children: (0, r.jsx)(h.ZP, {
                                look: h.jZ.RED,
                                size: s,
                                shape: b ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
                            })
                        })
                    ]
                })
            );
        })({ className: c });
    };
