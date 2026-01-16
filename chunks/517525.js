n.d(t, { Z: () => L }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(81239),
    c = n(468194),
    s = n(442837),
    u = n(692547),
    d = n(28664),
    f = n(477690),
    p = n(481060),
    g = n(2052),
    b = n(906732),
    m = n(194082),
    h = n(484459),
    E = n(594174),
    v = n(626135),
    _ = n(74538),
    y = n(557457),
    O = n(475674),
    C = n(981631),
    S = n(474936),
    I = n(388032),
    N = n(740767);
function T(e) {
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
let P = (0, c.Mg)(f.Z.LIVE_INDICATOR_BORDER_RADIUS),
    Z = {
        opacity: 0,
        transform: "translate3d(100%, 0, 0)",
    },
    j = {
        opacity: 1,
        transform: "translate3d(0%, 0, 0)",
    },
    w = { opacity: 0 },
    A = { opacity: 1 },
    R = { borderRadius: "".concat(P, "px ").concat(P, "px ").concat(P, "px ").concat(P, "px") },
    D = { borderRadius: "0px ".concat(P, "px ").concat(P, "px 0px") },
    M = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0,
    },
    k = (e) => {
        let t,
            i,
            {
                participant: o,
                isUpsellEnabled: c,
                shape: f,
                size: h,
                didTrackUpsellViewed: P,
                setDidTrackUpsellViewed: Z,
                className: j,
                premiumIndicator: w,
                quality: A,
            } = e,
            { analyticsLocations: R } = (0, b.ZP)(),
            D = null != (0, O.Z)(o);
        try {
            t = (0, y.nG)(A);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, y.tR)(A);
        } catch (e) {
            i = !1;
        }
        let M = t || i,
            { location: k } = (0, g.O)(),
            L = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
            U = c && !_.ZP.isPremium(L, S.PremiumTypes.TIER_1) && !_.ZP.canStreamQuality(_.ZP.StreamQuality.MID, L),
            F = l.useCallback(() => {
                U &&
                    M &&
                    (0, p.ZDy)(async () => {
                        let { default: e } = await n.e("28479").then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, x(T({}, t), { analyticsSource: k }));
                    });
            }, [U, M, k]);
        if (
            (l.useEffect(() => {
                !P &&
                    M &&
                    (v.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: S.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: R,
                    }),
                    Z(!0));
            }, [t, i, M, P, Z, R]),
            null == A)
        )
            return null;
        let V = (0, r.jsx)(d.u, {
            text: D ? I.intl.string(I.t.q8TiVt) : M ? I.intl.string(I.t.IHgpEn) : I.intl.string(I.t.vLb0VW),
            position: "bottom",
            children: (0, r.jsxs)(p.P3F, {
                onClick: F,
                className: a()(
                    N.qualityIndicator,
                    h,
                    m.eE[f],
                    D ? N.qualityIndicatorLowQuality : N.qualityIndicatorFullQuality,
                    { [N.clickable]: U && M },
                ),
                children: [
                    M
                        ? (0, r.jsx)(p.SrA, {
                              size: "md",
                              color: "currentColor",
                              className: N.premiumStreamIcon,
                          })
                        : null,
                    (0, r.jsx)("span", {
                        className: N.qualityResolution,
                        children: (0, y.ml)(A.maxResolution),
                    }),
                    (0, r.jsx)("span", { children: (0, y.bp)(A.maxFrameRate) }),
                ],
            }),
        });
        return (0, r.jsx)(p.IGR, {
            text: V,
            className: a()(j, N.qualityIndicatorBadge, { [N.qualityIndicatorBadgePremium]: M && w }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: m.eE[f],
        });
    },
    L = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: c, className: s, premiumIndicator: u } = e,
            [d, f] = l.useState(!1),
            g = (0, y.W3)(t),
            { reducedMotion: b } = l.useContext(p.Sfi),
            E = n && null != g;
        l.useEffect(() => {
            (0, h.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let v = (0, p.Yzy)(
                E,
                {
                    enter: {
                        from: b.enabled ? w : Z,
                        to: b.enabled ? A : j,
                    },
                    leave: b.enabled ? w : Z,
                    config: M,
                },
                "animate-always",
            ),
            _ = (0, p.q_F)(
                {
                    to: E ? D : R,
                    config: M,
                },
                "animate-always",
            );
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, r.jsxs)(
                "div",
                x(T({ className: a()(N.streamQualityIndicator, n) }, l), {
                    children: [
                        v((e, n) =>
                            n
                                ? (0, r.jsx)(o.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(k, {
                                          className: N.liveQualityIndicator,
                                          participant: t,
                                          size: c,
                                          shape: p.Dv2.ROUND_LEFT,
                                          isUpsellEnabled: i,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: f,
                                          premiumIndicator: u,
                                          quality: g,
                                      }),
                                  })
                                : null,
                        ),
                        (0, r.jsx)(o.animated.div, {
                            style: _,
                            className: N.liveIndicator,
                            children: (0, r.jsx)(m.ZP, {
                                look: m.jZ.RED,
                                size: c,
                                shape: E ? p.Dv2.ROUND_RIGHT : p.Dv2.ROUND,
                            }),
                        }),
                    ],
                }),
            );
        })({ className: s });
    };
