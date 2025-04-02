n.d(t, {
    P: () => T,
    Z: () => N
}),
    n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(642128),
    s = n(481060),
    l = n(906732),
    c = n(975298),
    u = n(317169),
    d = n(471885),
    f = n(267642),
    _ = n(879892),
    p = n(198466),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(296260),
    b = n(400837);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    switch (e) {
        case h.Eu4.TIER_3:
            return h.Qqv.TIER_3;
        case h.Eu4.TIER_2:
            return h.Qqv.TIER_2;
        case h.Eu4.TIER_1:
            return h.Qqv.TIER_1;
        default:
            throw Error('Unsupported Boosting tier: '.concat(e));
    }
}
let T = {
        [h.Eu4.NONE]: 0,
        [h.Eu4.TIER_1]: 1 / 3,
        [h.Eu4.TIER_2]: 2 / 3,
        [h.Eu4.TIER_3]: 1
    },
    N = function (e) {
        let { children: t, confettiTriggerRef: n, guild: i, isProgressBarAnimationComplete: v, setConfettiCount: O, setShouldFireConfetti: N, tier: A, tierMarkerAnimationPosition: C, totalAvailableBoostsCount: R } = e,
            { analyticsLocations: P } = (0, l.ZP)(),
            w = (0, c.Z)(),
            D = (0, u.Z)(i.id).available,
            L = h.oCV[A],
            x = L - D,
            M = A <= C || v,
            k = M && A <= i.premiumTier,
            j = M && A < i.premiumTier,
            U = M && A === i.premiumTier,
            G = i.premiumTier < A && R >= L,
            { scaleFactor: B } = (0, s.q_F)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: C >= A || (v && C + 1 === A) || (v && -1 === C && A === h.Eu4.NONE) ? 1 : 0 },
                config: {
                    tension: 360,
                    friction: 12
                }
            }),
            F = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.animated.div, {
                        className: b.progressBarMarkerIndicator,
                        style: { transform: B.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                    }),
                    A !== h.Eu4.NONE
                        ? G
                            ? (0, r.jsx)(s.mTd, {
                                  className: o()(b.boostedTierIcon, b.disabledIndicator),
                                  size: 'xxs',
                                  color: 'currentColor'
                              })
                            : (0, r.jsx)(d.Z, {
                                  tier: A,
                                  color: 'currentColor',
                                  className: b.boostedTierIcon
                              })
                        : void 0
                ]
            });
        function V() {
            M &&
                !G &&
                (0, _.u)({
                    analyticsLocations: P,
                    analyticsLocation: {
                        page: h.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: h.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: h.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: S(A)
                    },
                    numberOfBoostsToAdd: x,
                    guild: i
                });
        }
        let Z = !k && w.fractionalState === m.a$.NONE,
            H = Z ? s.P3F : 'div',
            W = Z ? { onClick: V } : {};
        return (0, r.jsx)(s.ua7, {
            tooltipClassName: b.tooltip,
            text: k
                ? g.NW.formatToPlainString(g.t['1o48kp'], { tierName: (0, f.nW)(A, { useLevels: !1 }) })
                : G
                  ? g.NW.formatToPlainString(E.Z['9CtPjo'], { perk: (0, f.nW)(A, { useLevels: !1 }) })
                  : g.NW.formatToPlainString(g.t.r6NN6e, {
                        numBoostsRequired: x,
                        tierName: (0, f.nW)(A, { useLevels: !1 })
                    }),
            shouldShow: A !== h.Eu4.NONE,
            children: (e) =>
                (0, r.jsxs)(
                    H,
                    I(
                        y(
                            {
                                className: o()(b.progressBarMarker, {
                                    [b.progressBarMarkerUnlocked]: k,
                                    [b.progressBarMarkerLocked]: Z,
                                    [b.progressBarMarkerLower]: j,
                                    [b.progressBarMarkerCurrent]: U
                                }),
                                style: { left: ''.concat(100 * T[A], '%') }
                            },
                            e,
                            W
                        ),
                        {
                            children: [
                                !k && (0, r.jsx)('div', { className: b.boostedTierIconBackground }),
                                k && A === h.Eu4.TIER_3
                                    ? (0, r.jsx)(p.m, {
                                          confettiTriggerRef: n,
                                          setConfettiCount: O,
                                          setShouldFireConfetti: N,
                                          children: F
                                      })
                                    : F,
                                (0, r.jsxs)(s.Text, {
                                    className: b.progressBarMarkerLabel,
                                    variant: 'text-md/normal',
                                    children: [
                                        k &&
                                            A !== h.Eu4.NONE &&
                                            (0, r.jsx)(s.dz2, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: b.progressBarMarkerUnlockedIcon
                                            }),
                                        t
                                    ]
                                })
                            ]
                        }
                    )
                )
        });
    };
