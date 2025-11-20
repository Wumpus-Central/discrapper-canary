n.d(t, {
    P: () => S,
    Z: () => A,
}),
    n(415506);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(790519),
    s = n(681715),
    l = n(481060),
    c = n(906732),
    u = n(975298),
    d = n(471885),
    f = n(267642),
    _ = n(879892),
    p = n(198466),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(130231),
    b = n(724437);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    switch (e) {
        case h.Eu4.TIER_3:
            return h.AnalyticsObjectTypes.TIER_3;
        case h.Eu4.TIER_2:
            return h.AnalyticsObjectTypes.TIER_2;
        case h.Eu4.TIER_1:
            return h.AnalyticsObjectTypes.TIER_1;
        default:
            throw Error("Unsupported Boosting tier: ".concat(e));
    }
}
let S = {
        [h.Eu4.NONE]: 0,
        [h.Eu4.TIER_1]: 1 / 3,
        [h.Eu4.TIER_2]: 2 / 3,
        [h.Eu4.TIER_3]: 1,
    },
    A = function (e) {
        let {
                children: t,
                confettiTriggerRef: n,
                guild: i,
                isProgressBarAnimationComplete: y,
                setConfettiCount: v,
                setShouldFireConfetti: A,
                tier: C,
                tierMarkerAnimationPosition: N,
                totalAvailableBoostsCount: R,
            } = e,
            { analyticsLocations: P } = (0, c.ZP)(),
            D = (0, u.Z)(),
            w = h.oCV[C],
            L = w - R,
            x = C <= N || y,
            M = x && C <= i.premiumTier,
            k = x && C < i.premiumTier,
            j = x && C === i.premiumTier,
            U = i.premiumTier < C && R >= w,
            { scaleFactor: G } = (0, l.q_F)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: N >= C || (y && N + 1 === C) || (y && -1 === N && C === h.Eu4.NONE) ? 1 : 0 },
                config: {
                    tension: 360,
                    friction: 12,
                },
            }),
            B = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.animated.div, {
                        className: b.progressBarMarkerIndicator,
                        style: { transform: G.to((e) => "translate(-50%, -50%) scale(".concat(e, ")")) },
                    }),
                    C !== h.Eu4.NONE
                        ? U
                            ? (0, r.jsx)(l.zkc, {
                                  className: a()(b.boostedTierIcon, b.disabledIndicator),
                                  size: "xxs",
                                  color: "currentColor",
                              })
                            : (0, r.jsx)(d.Z, {
                                  tier: C,
                                  color: "currentColor",
                                  className: b.boostedTierIcon,
                              })
                        : void 0,
                ],
            });
        function Z() {
            x &&
                (U ||
                    (0, _.u)({
                        analyticsLocations: P,
                        analyticsLocation: {
                            page: h.ZY5.PREMIUM_GUILD_USER_MODAL,
                            section: h.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                            object: h.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                            objectType: T(C),
                        },
                        numberOfBoostsToAdd: L,
                        guild: i,
                    }));
        }
        let F = !M && D.fractionalState === m.a$.NONE,
            V = F ? l.P3F : "div",
            H = F ? { onClick: Z } : {},
            Y = M
                ? g.intl.formatToPlainString(g.t["1o48ki"], { tierName: (0, f.nW)(C, { useLevels: !1 }) })
                : U
                  ? g.intl.formatToPlainString(E.default["9CtPjt"], { perk: (0, f.nW)(C, { useLevels: !1 }) })
                  : g.intl.formatToPlainString(g.t.r6NN6Q, {
                        numBoostsRequired: L,
                        tierName: (0, f.nW)(C, { useLevels: !1 }),
                    }),
            W = (0, r.jsxs)(
                V,
                I(
                    O(
                        {
                            className: a()(b.progressBarMarker, {
                                [b.progressBarMarkerUnlocked]: M,
                                [b.progressBarMarkerLocked]: F,
                                [b.progressBarMarkerLower]: k,
                                [b.progressBarMarkerCurrent]: j,
                            }),
                            style: { left: "".concat(100 * S[C], "%") },
                        },
                        H,
                    ),
                    {
                        children: [
                            !M && (0, r.jsx)("div", { className: b.boostedTierIconBackground }),
                            M && C === h.Eu4.TIER_3
                                ? (0, r.jsx)(p.m, {
                                      confettiTriggerRef: n,
                                      setConfettiCount: v,
                                      setShouldFireConfetti: A,
                                      children: B,
                                  })
                                : B,
                            (0, r.jsxs)(l.Text, {
                                className: b.progressBarMarkerLabel,
                                variant: "text-md/normal",
                                children: [
                                    M &&
                                        C !== h.Eu4.NONE &&
                                        (0, r.jsx)(l.dz2, {
                                            size: "md",
                                            color: "currentColor",
                                            className: b.progressBarMarkerUnlockedIcon,
                                        }),
                                    t,
                                ],
                            }),
                        ],
                    },
                ),
            );
        return C !== h.Eu4.NONE
            ? (0, r.jsx)(s.u, {
                  text: Y,
                  children: W,
              })
            : W;
    };
