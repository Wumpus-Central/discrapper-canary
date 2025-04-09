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
    j = n(374336);
function Z(e) {
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
function x(e, t) {
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
let N = (0, s.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    P = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    w = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    R = { opacity: 0 },
    A = { opacity: 1 },
    T = { borderRadius: ''.concat(N, 'px ').concat(N, 'px ').concat(N, 'px ').concat(N, 'px') },
    C = { borderRadius: '0px '.concat(N, 'px ').concat(N, 'px 0px') },
    D = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    M = (e) => {
        let t,
            i,
            { participant: o, isUpsellEnabled: s, shape: d, size: g, didTrackUpsellViewed: N, setDidTrackUpsellViewed: P, className: w, premiumIndicator: R } = e,
            A = (0, b.Wc)(o),
            { analyticsLocations: T } = (0, p.ZP)(),
            C = null != (0, y.Z)(o);
        try {
            t = (0, b.nG)(A);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, b.tR)(A);
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
                        return (t) => (0, r.jsx)(e, x(Z({}, t), { analyticsSource: M }));
                    });
            }, [k, D, M]);
        if (
            (l.useEffect(() => {
                !N &&
                    D &&
                    (v.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: I.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: T
                    }),
                    P(!0));
            }, [t, i, D, N, P, T]),
            null == A)
        )
            return null;
        let W = (0, r.jsx)(f.ua7, {
            text: C ? _.NW.string(_.t.q8TiVl) : D ? _.NW.string(_.t.IHgpEh) : _.NW.string(_.t.vLb0VV),
            position: 'bottom',
            color: f.ua7.Colors.GREY,
            children: (e) =>
                (0, r.jsxs)(
                    f.P3F,
                    x(Z({}, e), {
                        onClick: U,
                        className: a()(j.qualityIndicator, g, E.eE[d], C ? j.qualityIndicatorLowQuality : j.qualityIndicatorFullQuality, { [j.clickable]: k && D }),
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
                                children: (0, b.ml)(A.maxResolution)
                            }),
                            (0, r.jsx)('span', { children: (0, b.bp)(A.maxFrameRate) })
                        ]
                    })
                )
        });
        return (0, r.jsx)(f.IGR, {
            text: W,
            className: a()(w, j.qualityIndicatorBadge, { [j.qualityIndicatorBadgePremium]: D && R }),
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
                        from: h.enabled ? R : P,
                        to: h.enabled ? A : w
                    },
                    leave: h.enabled ? R : P,
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
                x(Z({ className: a()(j.streamQualityIndicator, n) }, l), {
                    children: [
                        S((e, n) =>
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
