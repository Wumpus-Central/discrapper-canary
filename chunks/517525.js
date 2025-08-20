n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(803948),
    u = n(468194),
    s = n(442837),
    c = n(692547),
    d = n(477690),
    f = n(481060),
    p = n(2052),
    m = n(906732),
    E = n(194082),
    g = n(484459),
    b = n(594174),
    S = n(626135),
    v = n(74538),
    h = n(557457),
    O = n(475674),
    y = n(981631),
    _ = n(474936),
    j = n(388032),
    Z = n(386393);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        transform: "translate3d(100%, 0, 0)",
    },
    C = {
        opacity: 1,
        transform: "translate3d(0%, 0, 0)",
    },
    R = { opacity: 0 },
    x = { opacity: 1 },
    N = { borderRadius: "".concat(P, "px ").concat(P, "px ").concat(P, "px ").concat(P, "px") },
    T = { borderRadius: "0px ".concat(P, "px ").concat(P, "px 0px") },
    D = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0,
    },
    M = (e) => {
        let t,
            i,
            {
                participant: o,
                isUpsellEnabled: u,
                shape: d,
                size: g,
                didTrackUpsellViewed: P,
                setDidTrackUpsellViewed: A,
                className: C,
                premiumIndicator: R,
                quality: x,
            } = e,
            { analyticsLocations: N } = (0, m.ZP)(),
            T = null != (0, O.Z)(o);
        try {
            t = (0, h.nG)(x);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, h.tR)(x);
        } catch (e) {
            i = !1;
        }
        let D = t || i,
            { location: M } = (0, p.O)(),
            L = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
            F = u && !v.ZP.isPremium(L, _.p9.TIER_1) && !v.ZP.canStreamQuality(v.ZP.StreamQuality.MID, L),
            V = l.useCallback(() => {
                F &&
                    D &&
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("28479").then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, w(I({}, t), { analyticsSource: M }));
                    });
            }, [F, D, M]);
        if (
            (l.useEffect(() => {
                !P &&
                    D &&
                    (S.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: _.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: N,
                    }),
                    A(!0));
            }, [t, i, D, P, A, N]),
            null == x)
        )
            return null;
        let k = (0, r.jsx)(f.ua7, {
            text: T ? j.intl.string(j.t.q8TiVl) : D ? j.intl.string(j.t.IHgpEh) : j.intl.string(j.t.vLb0VV),
            position: "bottom",
            color: f.ua7.Colors.GREY,
            children: (e) =>
                (0, r.jsxs)(
                    f.P3F,
                    w(I({}, e), {
                        onClick: V,
                        className: a()(
                            Z.qualityIndicator,
                            g,
                            E.eE[d],
                            T ? Z.qualityIndicatorLowQuality : Z.qualityIndicatorFullQuality,
                            { [Z.clickable]: F && D },
                        ),
                        children: [
                            D
                                ? (0, r.jsx)(f.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: Z.premiumStreamIcon,
                                  })
                                : null,
                            (0, r.jsx)("span", {
                                className: Z.qualityResolution,
                                children: (0, h.ml)(x.maxResolution),
                            }),
                            (0, r.jsx)("span", { children: (0, h.bp)(x.maxFrameRate) }),
                        ],
                    }),
                ),
        });
        return (0, r.jsx)(f.IGR, {
            text: k,
            className: a()(C, Z.qualityIndicatorBadge, { [Z.qualityIndicatorBadgePremium]: D && R }),
            color: c.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: E.eE[d],
        });
    },
    L = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: u, className: s, premiumIndicator: c } = e,
            [d, p] = l.useState(!1),
            m = (0, h.W3)(t),
            { reducedMotion: b } = l.useContext(f.Sfi),
            S = n && null != m;
        l.useEffect(() => {
            (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let v = (0, f.Yzy)(
                S,
                {
                    enter: {
                        from: b.enabled ? R : A,
                        to: b.enabled ? x : C,
                    },
                    leave: b.enabled ? R : A,
                    config: D,
                },
                "animate-always",
            ),
            O = (0, f.q_F)(
                {
                    to: S ? T : N,
                    config: D,
                },
                "animate-always",
            );
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, r.jsxs)(
                "div",
                w(I({ className: a()(Z.streamQualityIndicator, n) }, l), {
                    children: [
                        v((e, n) =>
                            n
                                ? (0, r.jsx)(o.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(M, {
                                          className: Z.liveQualityIndicator,
                                          participant: t,
                                          size: u,
                                          shape: f.Dv2.ROUND_LEFT,
                                          isUpsellEnabled: i,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: p,
                                          premiumIndicator: c,
                                          quality: m,
                                      }),
                                  })
                                : null,
                        ),
                        (0, r.jsx)(o.animated.div, {
                            style: O,
                            className: Z.liveIndicator,
                            children: (0, r.jsx)(E.ZP, {
                                look: E.jZ.RED,
                                size: u,
                                shape: S ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND,
                            }),
                        }),
                    ],
                }),
            );
        })({ className: s });
    };
