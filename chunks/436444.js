n.d(t, {
    P: () => S,
    Z: () => T
}),
    n(415506);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481752),
    s = n(481060),
    l = n(906732),
    c = n(975298),
    u = n(471885),
    d = n(267642),
    f = n(879892),
    _ = n(198466),
    p = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(680278),
    E = n(910307);
function b(e, t, n) {
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
                b(e, t, n[t]);
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
function v(e, t) {
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
function I(e) {
    switch (e) {
        case p.Eu4.TIER_3:
            return p.Qqv.TIER_3;
        case p.Eu4.TIER_2:
            return p.Qqv.TIER_2;
        case p.Eu4.TIER_1:
            return p.Qqv.TIER_1;
        default:
            throw Error('Unsupported Boosting tier: '.concat(e));
    }
}
let S = {
        [p.Eu4.NONE]: 0,
        [p.Eu4.TIER_1]: 1 / 3,
        [p.Eu4.TIER_2]: 2 / 3,
        [p.Eu4.TIER_3]: 1
    },
    T = function (e) {
        let { children: t, confettiTriggerRef: n, guild: i, isProgressBarAnimationComplete: b, setConfettiCount: O, setShouldFireConfetti: T, tier: A, tierMarkerAnimationPosition: N, totalAvailableBoostsCount: C } = e,
            { analyticsLocations: R } = (0, l.ZP)(),
            P = (0, c.Z)(),
            w = p.oCV[A],
            D = w - C,
            L = A <= N || b,
            x = L && A <= i.premiumTier,
            M = L && A < i.premiumTier,
            k = L && A === i.premiumTier,
            j = i.premiumTier < A && C >= w,
            { scaleFactor: U } = (0, s.q_F)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: N >= A || (b && N + 1 === A) || (b && -1 === N && A === p.Eu4.NONE) ? 1 : 0 },
                config: {
                    tension: 360,
                    friction: 12
                }
            }),
            G = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.animated.div, {
                        className: E.progressBarMarkerIndicator,
                        style: { transform: U.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                    }),
                    A !== p.Eu4.NONE
                        ? j
                            ? (0, r.jsx)(s.mTd, {
                                  className: o()(E.boostedTierIcon, E.disabledIndicator),
                                  size: 'xxs',
                                  color: 'currentColor'
                              })
                            : (0, r.jsx)(u.Z, {
                                  tier: A,
                                  color: 'currentColor',
                                  className: E.boostedTierIcon
                              })
                        : void 0
                ]
            });
        function B() {
            L &&
                (j ||
                    (0, f.u)({
                        analyticsLocations: R,
                        analyticsLocation: {
                            page: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                            section: p.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                            object: p.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                            objectType: I(A)
                        },
                        numberOfBoostsToAdd: D,
                        guild: i
                    }));
        }
        let V = !x && P.fractionalState === h.a$.NONE,
            F = V ? s.P3F : 'div',
            Z = V ? { onClick: B } : {};
        return (0, r.jsx)(s.ua7, {
            tooltipClassName: E.tooltip,
            text: x
                ? m.intl.formatToPlainString(m.t['1o48kp'], { tierName: (0, d.nW)(A, { useLevels: !1 }) })
                : j
                  ? m.intl.formatToPlainString(g.default['9CtPjo'], { perk: (0, d.nW)(A, { useLevels: !1 }) })
                  : m.intl.formatToPlainString(m.t.r6NN6e, {
                        numBoostsRequired: D,
                        tierName: (0, d.nW)(A, { useLevels: !1 })
                    }),
            shouldShow: A !== p.Eu4.NONE,
            children: (e) =>
                (0, r.jsxs)(
                    F,
                    v(
                        y(
                            {
                                className: o()(E.progressBarMarker, {
                                    [E.progressBarMarkerUnlocked]: x,
                                    [E.progressBarMarkerLocked]: V,
                                    [E.progressBarMarkerLower]: M,
                                    [E.progressBarMarkerCurrent]: k
                                }),
                                style: { left: ''.concat(100 * S[A], '%') }
                            },
                            e,
                            Z
                        ),
                        {
                            children: [
                                !x && (0, r.jsx)('div', { className: E.boostedTierIconBackground }),
                                x && A === p.Eu4.TIER_3
                                    ? (0, r.jsx)(_.m, {
                                          confettiTriggerRef: n,
                                          setConfettiCount: O,
                                          setShouldFireConfetti: T,
                                          children: G
                                      })
                                    : G,
                                (0, r.jsxs)(s.Text, {
                                    className: E.progressBarMarkerLabel,
                                    variant: 'text-md/normal',
                                    children: [
                                        x &&
                                            A !== p.Eu4.NONE &&
                                            (0, r.jsx)(s.dz2, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: E.progressBarMarkerUnlockedIcon
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
