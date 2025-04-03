n.d(t, { Z: () => k }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(642128),
    s = n(468194),
    u = n(442837),
    c = n(692547),
    d = n(477690),
    f = n(481060),
    m = n(2052),
    p = n(906732),
    g = n(194082),
    E = n(484459),
    h = n(594174),
    v = n(626135),
    b = n(74538),
    S = n(557457),
    y = n(475674),
    O = n(981631),
    Z = n(474936),
    I = n(388032),
    j = n(374336);
function x(e) {
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
let _ = (0, s.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    w = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    P = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    R = { opacity: 0 },
    A = { opacity: 1 },
    C = { borderRadius: ''.concat(_, 'px ').concat(_, 'px ').concat(_, 'px ').concat(_, 'px') },
    T = { borderRadius: '0px '.concat(_, 'px ').concat(_, 'px 0px') },
    D = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    M = (e) => {
        let t,
            i,
            { participant: o, isUpsellEnabled: s, shape: d, size: E, didTrackUpsellViewed: _, setDidTrackUpsellViewed: w, className: P, premiumIndicator: R } = e,
            A = (0, S.Wc)(o),
            { analyticsLocations: C } = (0, p.ZP)(),
            T = null != (0, y.Z)(o);
        try {
            t = (0, S.nG)(A);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, S.tR)(A);
        } catch (e) {
            i = !1;
        }
        let D = t || i,
            { location: M } = (0, m.O)(),
            k = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            L = s && !b.ZP.isPremium(k, Z.p9.TIER_1) && !b.ZP.canStreamQuality(b.ZP.StreamQuality.MID, k),
            U = l.useCallback(() => {
                L &&
                    D &&
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, N(x({}, t), { analyticsSource: M }));
                    });
            }, [L, D, M]);
        if (
            (l.useEffect(() => {
                !_ &&
                    D &&
                    (v.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Z.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: C
                    }),
                    w(!0));
            }, [t, i, D, _, w, C]),
            null == A)
        )
            return null;
        let F = (0, r.jsx)(f.ua7, {
            text: T ? I.NW.string(I.t.q8TiVl) : D ? I.NW.string(I.t.IHgpEh) : I.NW.string(I.t.vLb0VV),
            position: 'bottom',
            color: f.ua7.Colors.GREY,
            children: (e) =>
                (0, r.jsxs)(
                    f.P3F,
                    N(x({}, e), {
                        onClick: U,
                        className: a()(j.qualityIndicator, E, g.eE[d], T ? j.qualityIndicatorLowQuality : j.qualityIndicatorFullQuality, { [j.clickable]: L && D }),
                        children: [
                            D
                                ? (0, r.jsx)(f.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: j.premiumStreamIcon
                                  })
                                : null,
                            (0, r.jsx)('span', {
                                className: j.qualityResolution,
                                children: (0, S.ml)(A.maxResolution)
                            }),
                            (0, r.jsx)('span', { children: (0, S.bp)(A.maxFrameRate) })
                        ]
                    })
                )
        });
        return (0, r.jsx)(f.IGR, {
            text: F,
            className: a()(P, j.qualityIndicatorBadge, { [j.qualityIndicatorBadgePremium]: D && R }),
            color: c.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    },
    k = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: s, className: u, premiumIndicator: c } = e,
            [d, m] = l.useState(!1),
            p = (0, S.Wc)(t),
            { reducedMotion: h } = l.useContext(f.Sfi),
            v = n && null != p;
        l.useEffect(() => {
            (0, E.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let b = (0, f.Yzy)(
                v,
                {
                    enter: {
                        from: h.enabled ? R : w,
                        to: h.enabled ? A : P
                    },
                    leave: h.enabled ? R : w,
                    config: D
                },
                'animate-always'
            ),
            y = (0, f.q_F)(
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
                N(x({ className: a()(j.streamQualityIndicator, n) }, l), {
                    children: [
                        b((e, n) =>
                            n
                                ? (0, r.jsx)(o.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(M, {
                                          className: j.liveQualityIndicator,
                                          participant: t,
                                          size: s,
                                          shape: f.Dv2.ROUND_LEFT,
                                          isUpsellEnabled: i,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: m,
                                          premiumIndicator: c
                                      })
                                  })
                                : null
                        ),
                        (0, r.jsx)(o.animated.div, {
                            style: y,
                            className: j.liveIndicator,
                            children: (0, r.jsx)(g.ZP, {
                                look: g.jZ.RED,
                                size: s,
                                shape: v ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
                            })
                        })
                    ]
                })
            );
        })({ className: u });
    };
