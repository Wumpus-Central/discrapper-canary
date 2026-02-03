n.d(t, {
    A: () => T,
    p: () => S,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(92674),
    s = n(435371),
    l = n(397927),
    c = n(688810),
    u = n(531260),
    d = n(313375),
    f = n(473145),
    p = n(987144),
    _ = n(963894),
    h = n(652215),
    m = n(788868),
    g = n(985018),
    E = n(333354),
    y = n(195450);

function b(e, t, n) {
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
                b(e, t, n[t]);
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

function A(e, t) {
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

function I(e) {
    switch (e) {
        case h.TVA.TIER_3:
            return h.AnalyticsObjectTypes.TIER_3;
        case h.TVA.TIER_2:
            return h.AnalyticsObjectTypes.TIER_2;
        case h.TVA.TIER_1:
            return h.AnalyticsObjectTypes.TIER_1;
        default:
            throw Error("Unsupported Boosting tier: ".concat(e));
    }
}
let S = {
        [h.TVA.NONE]: 0,
        [h.TVA.TIER_1]: 1 / 3,
        [h.TVA.TIER_2]: 2 / 3,
        [h.TVA.TIER_3]: 1,
    },
    T = function (e) {
        let {
                children: t,
                confettiTriggerRef: n,
                guild: i,
                isProgressBarAnimationComplete: b,
                setConfettiCount: v,
                setShouldFireConfetti: T,
                tier: C,
                tierMarkerAnimationPosition: N,
                totalAvailableBoostsCount: w,
            } = e,
            { analyticsLocations: R } = (0, c.Ay)(),
            P = (0, u.A)(),
            D = h.M2T[C],
            L = D - w,
            x = C <= N || b,
            M = x && C <= i.premiumTier,
            j = x && C < i.premiumTier,
            k = x && C === i.premiumTier,
            U = i.premiumTier < C && w >= D,
            { scaleFactor: G } = (0, l.zhh)({
                from: {
                    scaleFactor: 0,
                },
                to: {
                    scaleFactor: N >= C || (b && N + 1 === C) || (b && -1 === N && C === h.TVA.NONE) ? 1 : 0,
                },
                config: {
                    tension: 360,
                    friction: 12,
                },
            }),
            V = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.animated.div, {
                        className: y.sO,
                        style: {
                            transform: G.to((e) => "translate(-50%, -50%) scale(".concat(e, ")")),
                        },
                    }),
                    C !== h.TVA.NONE
                        ? U
                            ? (0, r.jsx)(l.x8N, {
                                  className: a()(y.Wo, y.GV),
                                  size: "xxs",
                                  color: "currentColor",
                              })
                            : (0, r.jsx)(d.A, {
                                  tier: C,
                                  color: "currentColor",
                                  className: y.Wo,
                              })
                        : void 0,
                ],
            });

        function F() {
            !x ||
                U ||
                (0, p.g)({
                    analyticsLocations: R,
                    analyticsLocation: {
                        page: h.liQ.PREMIUM_GUILD_USER_MODAL,
                        section: h.JJy.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: h.ZSU.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: I(C),
                    },
                    numberOfBoostsToAdd: L,
                    guild: i,
                });
        }
        let B = !M && P.fractionalState === m.xc.NONE,
            H = B ? l.DUT : "div",
            Y = B
                ? {
                      onClick: F,
                  }
                : {},
            W = M
                ? g.intl.formatToPlainString(g.t["1o48ki"], {
                      tierName: (0, f.gb)(C, {
                          useLevels: !1,
                      }),
                  })
                : U
                  ? g.intl.formatToPlainString(E.default["9CtPjt"], {
                        perk: (0, f.gb)(C, {
                            useLevels: !1,
                        }),
                    })
                  : g.intl.formatToPlainString(g.t.r6NN6Q, {
                        numBoostsRequired: L,
                        tierName: (0, f.gb)(C, {
                            useLevels: !1,
                        }),
                    }),
            K = (0, r.jsxs)(
                H,
                A(
                    O(
                        {
                            className: a()(y.Ll, {
                                [y.kZ]: M,
                                [y.ng]: B,
                                [y.uZ]: j,
                                [y.Ue]: k,
                            }),
                            style: {
                                left: "".concat(100 * S[C], "%"),
                            },
                        },
                        Y,
                    ),
                    {
                        children: [
                            !M &&
                                (0, r.jsx)("div", {
                                    className: y.cj,
                                }),
                            M && C === h.TVA.TIER_3
                                ? (0, r.jsx)(_.H, {
                                      confettiTriggerRef: n,
                                      setConfettiCount: v,
                                      setShouldFireConfetti: T,
                                      children: V,
                                  })
                                : V,
                            (0, r.jsxs)(l.Text, {
                                className: y.Td,
                                variant: "text-md/normal",
                                children: [
                                    M &&
                                        C !== h.TVA.NONE &&
                                        (0, r.jsx)(l.A9s, {
                                            size: "md",
                                            color: "currentColor",
                                            className: y.ZI,
                                        }),
                                    t,
                                ],
                            }),
                        ],
                    },
                ),
            );
        return C !== h.TVA.NONE
            ? (0, r.jsx)(s.m_, {
                  text: W,
                  children: K,
              })
            : K;
    };
