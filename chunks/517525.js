n.d(t, { Z: () => L }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(636606),
    c = n(468194),
    s = n(442837),
    u = n(692547),
    d = n(28664),
    f = n(477690),
    p = n(481060),
    m = n(2052),
    _ = n(906732),
    g = n(194082),
    v = n(484459),
    b = n(594174),
    E = n(626135),
    h = n(74538),
    y = n(557457),
    S = n(475674),
    O = n(981631),
    C = n(474936),
    I = n(388032),
    w = n(386393);
function P(e) {
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
function j(e, t) {
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
let x = (0, c.Mg)(f.Z.LIVE_INDICATOR_BORDER_RADIUS),
    Z = {
        opacity: 0,
        transform: "translate3d(100%, 0, 0)",
    },
    R = {
        opacity: 1,
        transform: "translate3d(0%, 0, 0)",
    },
    T = { opacity: 0 },
    A = { opacity: 1 },
    N = { borderRadius: "".concat(x, "px ").concat(x, "px ").concat(x, "px ").concat(x, "px") },
    D = { borderRadius: "0px ".concat(x, "px ").concat(x, "px 0px") },
    M = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0,
    },
    k = (e) => {
        let t,
            l,
            {
                participant: o,
                isUpsellEnabled: c,
                shape: f,
                size: v,
                didTrackUpsellViewed: x,
                setDidTrackUpsellViewed: Z,
                className: R,
                premiumIndicator: T,
                quality: A,
            } = e,
            { analyticsLocations: N } = (0, _.ZP)(),
            D = null != (0, S.Z)(o);
        try {
            t = (0, y.nG)(A);
        } catch (e) {
            t = !1;
        }
        try {
            l = (0, y.tR)(A);
        } catch (e) {
            l = !1;
        }
        let M = t || l,
            { location: k } = (0, m.O)(),
            L = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
            F = c && !h.ZP.isPremium(L, C.PremiumTypes.TIER_1) && !h.ZP.canStreamQuality(h.ZP.StreamQuality.MID, L),
            V = i.useCallback(() => {
                F &&
                    M &&
                    (0, p.ZDy)(async () => {
                        let { default: e } = await n.e("28479").then(n.bind(n, 78865));
                        return (t) => (0, r.jsx)(e, j(P({}, t), { analyticsSource: k }));
                    });
            }, [F, M, k]);
        if (
            (i.useEffect(() => {
                !x &&
                    M &&
                    (E.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: C.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: l,
                        location_stack: N,
                    }),
                    Z(!0));
            }, [t, l, M, x, Z, N]),
            null == A)
        )
            return null;
        let U = (0, r.jsx)(d.u, {
            text: D ? I.intl.string(I.t.q8TiVt) : M ? I.intl.string(I.t.IHgpEn) : I.intl.string(I.t.vLb0VW),
            position: "bottom",
            children: (0, r.jsxs)(p.P3F, {
                onClick: V,
                className: a()(
                    w.qualityIndicator,
                    v,
                    g.eE[f],
                    D ? w.qualityIndicatorLowQuality : w.qualityIndicatorFullQuality,
                    { [w.clickable]: F && M },
                ),
                children: [
                    M
                        ? (0, r.jsx)(p.SrA, {
                              size: "md",
                              color: "currentColor",
                              className: w.premiumStreamIcon,
                          })
                        : null,
                    (0, r.jsx)("span", {
                        className: w.qualityResolution,
                        children: (0, y.ml)(A.maxResolution),
                    }),
                    (0, r.jsx)("span", { children: (0, y.bp)(A.maxFrameRate) }),
                ],
            }),
        });
        return (0, r.jsx)(p.IGR, {
            text: U,
            className: a()(R, w.qualityIndicatorBadge, { [w.qualityIndicatorBadgePremium]: M && T }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: g.eE[f],
        });
    },
    L = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: l = !0, size: c, className: s, premiumIndicator: u } = e,
            [d, f] = i.useState(!1),
            m = (0, y.W3)(t),
            { reducedMotion: _ } = i.useContext(p.Sfi),
            b = n && null != m;
        i.useEffect(() => {
            (0, v.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let E = (0, p.Yzy)(
                b,
                {
                    enter: {
                        from: _.enabled ? T : Z,
                        to: _.enabled ? A : R,
                    },
                    leave: _.enabled ? T : Z,
                    config: M,
                },
                "animate-always",
            ),
            h = (0, p.q_F)(
                {
                    to: b ? D : N,
                    config: M,
                },
                "animate-always",
            );
        return ((e) => {
            let { className: n, popoutProps: i } = e;
            return (0, r.jsxs)(
                "div",
                j(P({ className: a()(w.streamQualityIndicator, n) }, i), {
                    children: [
                        E((e, n) =>
                            n
                                ? (0, r.jsx)(o.animated.div, {
                                      style: e,
                                      children: (0, r.jsx)(k, {
                                          className: w.liveQualityIndicator,
                                          participant: t,
                                          size: c,
                                          shape: p.Dv2.ROUND_LEFT,
                                          isUpsellEnabled: l,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: f,
                                          premiumIndicator: u,
                                          quality: m,
                                      }),
                                  })
                                : null,
                        ),
                        (0, r.jsx)(o.animated.div, {
                            style: h,
                            className: w.liveIndicator,
                            children: (0, r.jsx)(g.ZP, {
                                look: g.jZ.RED,
                                size: c,
                                shape: b ? p.Dv2.ROUND_RIGHT : p.Dv2.ROUND,
                            }),
                        }),
                    ],
                }),
            );
        })({ className: s });
    };
