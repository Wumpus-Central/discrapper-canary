n.d(t, { Z: () => L }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(481752),
    s = n(468194),
    u = n(442837),
    c = n(692547),
    d = n(477690),
    f = n(481060),
    m = n(2052),
    p = n(906732),
    E = n(194082),
    g = n(484459),
    v = n(594174),
    h = n(626135),
    S = n(74538),
    b = n(557457),
    y = n(475674),
    O = n(981631),
    Z = n(474936),
    j = n(388032),
    I = n(374336);
function _(e) {
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
function P(e, t) {
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
let w = (0, s.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    x = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    A = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    R = { opacity: 0 },
    N = { opacity: 1 },
    C = { borderRadius: ''.concat(w, 'px ').concat(w, 'px ').concat(w, 'px ').concat(w, 'px') },
    T = { borderRadius: '0px '.concat(w, 'px ').concat(w, 'px 0px') },
    D = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    M = (e) => {
        let t,
            i,
            { participant: o, isUpsellEnabled: s, shape: d, size: g, didTrackUpsellViewed: w, setDidTrackUpsellViewed: x, className: A, premiumIndicator: R } = e,
            N = (0, b.Wc)(o),
            { analyticsLocations: C } = (0, p.ZP)(),
            T = null != (0, y.Z)(o);
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
            { location: M } = (0, m.O)(),
            L = (0, u.e7)([v.default], () => v.default.getCurrentUser()),
            k = s && !S.ZP.isPremium(L, Z.p9.TIER_1) && !S.ZP.canStreamQuality(S.ZP.StreamQuality.MID, L),
            U = l.useCallback(() => {
                k &&
                    D &&
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, P(_({}, t), { analyticsSource: M }));
                    });
            }, [k, D, M]);
        if (
            (l.useEffect(() => {
                !w &&
                    D &&
                    (h.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Z.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: C
                    }),
                    x(!0));
            }, [t, i, D, w, x, C]),
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
                    P(_({}, e), {
                        onClick: U,
                        className: a()(I.qualityIndicator, g, E.eE[d], T ? I.qualityIndicatorLowQuality : I.qualityIndicatorFullQuality, { [I.clickable]: k && D }),
                        children: [
                            D
                                ? (0, r.jsx)(f.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: I.premiumStreamIcon
                                  })
                                : null,
                            (0, r.jsx)('span', {
                                className: I.qualityResolution,
                                children: (0, b.ml)(N.maxResolution)
                            }),
                            (0, r.jsx)('span', { children: (0, b.bp)(N.maxFrameRate) })
                        ]
                    })
                )
        });
        return (0, r.jsx)(f.IGR, {
            text: F,
            className: a()(A, I.qualityIndicatorBadge, { [I.qualityIndicatorBadgePremium]: D && R }),
            color: c.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    },
    L = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: s, className: u, premiumIndicator: c } = e,
            [d, m] = l.useState(!1),
            p = (0, b.Wc)(t),
            { reducedMotion: v } = l.useContext(f.Sfi),
            h = n && null != p;
        l.useEffect(() => {
            (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let S = (0, f.Yzy)(
                h,
                {
                    enter: {
                        from: v.enabled ? R : x,
                        to: v.enabled ? N : A
                    },
                    leave: v.enabled ? R : x,
                    config: D
                },
                'animate-always'
            ),
            y = (0, f.q_F)(
                {
                    to: h ? T : C,
                    config: D
                },
                'animate-always'
            );
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, r.jsxs)(
                'div',
                P(_({ className: a()(I.streamQualityIndicator, n) }, l), {
                    children: [
                        S((e, n) =>
                            n
                                ? (0, r.jsx)(o.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(M, {
                                          className: I.liveQualityIndicator,
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
                            className: I.liveIndicator,
                            children: (0, r.jsx)(E.ZP, {
                                look: E.jZ.RED,
                                size: s,
                                shape: h ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
                            })
                        })
                    ]
                })
            );
        })({ className: u });
    };
