n.d(t, { Z: () => L }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(200100),
    s = n(468194),
    u = n(442837),
    c = n(692547),
    d = n(477690),
    f = n(481060),
    m = n(2052),
    p = n(906732),
    E = n(194082),
    g = n(484459),
    h = n(594174),
    v = n(626135),
    S = n(74538),
    b = n(557457),
    y = n(475674),
    O = n(981631),
    I = n(474936),
    _ = n(388032),
    Z = n(374336);
function j(e) {
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
let x = (0, s.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    P = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    w = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    A = { opacity: 0 },
    R = { opacity: 1 },
    T = { borderRadius: ''.concat(x, 'px ').concat(x, 'px ').concat(x, 'px ').concat(x, 'px') },
    C = { borderRadius: '0px '.concat(x, 'px ').concat(x, 'px 0px') },
    D = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    M = (e) => {
        let t,
            i,
            { participant: o, isUpsellEnabled: s, shape: d, size: g, didTrackUpsellViewed: x, setDidTrackUpsellViewed: P, className: w, premiumIndicator: A } = e,
            R = (0, b.Wc)(o),
            { analyticsLocations: T } = (0, p.ZP)(),
            C = null != (0, y.Z)(o);
        try {
            t = (0, b.nG)(R);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, b.tR)(R);
        } catch (e) {
            i = !1;
        }
        let D = t || i,
            { location: M } = (0, m.O)(),
            L = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            k = s && !S.ZP.isPremium(L, I.p9.TIER_1) && !S.ZP.canStreamQuality(S.ZP.StreamQuality.MID, L),
            U = l.useCallback(() => {
                k &&
                    D &&
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, N(j({}, t), { analyticsSource: M }));
                    });
            }, [k, D, M]);
        if (
            (l.useEffect(() => {
                !x &&
                    D &&
                    (v.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: I.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: T
                    }),
                    P(!0));
            }, [t, i, D, x, P, T]),
            null == R)
        )
            return null;
        let W = (0, r.jsx)(f.ua7, {
            text: C ? _.NW.string(_.t.q8TiVl) : D ? _.NW.string(_.t.IHgpEh) : _.NW.string(_.t.vLb0VV),
            position: 'bottom',
            color: f.ua7.Colors.GREY,
            children: (e) =>
                (0, r.jsxs)(
                    f.P3F,
                    N(j({}, e), {
                        onClick: U,
                        className: a()(Z.qualityIndicator, g, E.eE[d], C ? Z.qualityIndicatorLowQuality : Z.qualityIndicatorFullQuality, { [Z.clickable]: k && D }),
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
                                children: (0, b.ml)(R.maxResolution)
                            }),
                            (0, r.jsx)('span', { children: (0, b.bp)(R.maxFrameRate) })
                        ]
                    })
                )
        });
        return (0, r.jsx)(f.IGR, {
            text: W,
            className: a()(w, Z.qualityIndicatorBadge, { [Z.qualityIndicatorBadgePremium]: D && A }),
            color: c.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    },
    L = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: s, className: u, premiumIndicator: c } = e,
            [d, m] = l.useState(!1),
            p = (0, b.Wc)(t),
            { reducedMotion: h } = l.useContext(f.Sfi),
            v = n && null != p;
        l.useEffect(() => {
            (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let S = (0, f.Yzy)(
                v,
                {
                    enter: {
                        from: h.enabled ? A : P,
                        to: h.enabled ? R : w
                    },
                    leave: h.enabled ? A : P,
                    config: D
                },
                'animate-always'
            ),
            y = (0, f.q_F)(
                {
                    to: v ? C : T,
                    config: D
                },
                'animate-always'
            );
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, r.jsxs)(
                'div',
                N(j({ className: a()(Z.streamQualityIndicator, n) }, l), {
                    children: [
                        S((e, n) =>
                            n
                                ? (0, r.jsx)(o.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(M, {
                                          className: Z.liveQualityIndicator,
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
                            className: Z.liveIndicator,
                            children: (0, r.jsx)(E.ZP, {
                                look: E.jZ.RED,
                                size: s,
                                shape: v ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
                            })
                        })
                    ]
                })
            );
        })({ className: u });
    };
