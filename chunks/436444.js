n.d(t, {
    P: () => S,
    Z: () => T
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
    E = n(400837);
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
function v(e) {
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
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
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
let S = {
        [h.Eu4.NONE]: 0,
        [h.Eu4.TIER_1]: 1 / 3,
        [h.Eu4.TIER_2]: 2 / 3,
        [h.Eu4.TIER_3]: 1
    },
    T = function (e) {
        let { children: t, confettiTriggerRef: n, guild: i, isProgressBarAnimationComplete: b, setConfettiCount: y, setShouldFireConfetti: T, tier: A, tierMarkerAnimationPosition: N } = e,
            { analyticsLocations: C } = (0, l.ZP)(),
            R = (0, c.Z)(),
            P = (0, u.Z)(i.id).available,
            w = h.oCV[A] - P,
            D = A <= N || b,
            L = D && A <= i.premiumTier,
            x = D && A < i.premiumTier,
            M = D && A === i.premiumTier,
            { scaleFactor: k } = (0, s.q_F)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: N >= A || (b && N + 1 === A) || (b && -1 === N && A === h.Eu4.NONE) ? 1 : 0 },
                config: {
                    tension: 360,
                    friction: 12
                }
            }),
            j = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.animated.div, {
                        className: E.progressBarMarkerIndicator,
                        style: { transform: k.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                    }),
                    A !== h.Eu4.NONE &&
                        (0, r.jsx)(d.Z, {
                            tier: A,
                            color: 'currentColor',
                            className: E.boostedTierIcon
                        })
                ]
            });
        function U() {
            D &&
                (0, _.u)({
                    analyticsLocations: C,
                    analyticsLocation: {
                        page: h.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: h.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: h.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: I(A)
                    },
                    numberOfBoostsToAdd: w,
                    guild: i
                });
        }
        let G = !L && R.fractionalState === m.a$.NONE,
            B = G ? s.P3F : 'div',
            F = G ? { onClick: U } : {};
        return (0, r.jsx)(s.ua7, {
            text: L
                ? g.NW.formatToPlainString(g.t['1o48kp'], { tierName: (0, f.nW)(A, { useLevels: !1 }) })
                : g.NW.formatToPlainString(g.t.r6NN6e, {
                      numBoostsRequired: w,
                      tierName: (0, f.nW)(A, { useLevels: !1 })
                  }),
            shouldShow: A !== h.Eu4.NONE,
            children: (e) =>
                (0, r.jsxs)(
                    B,
                    O(
                        v(
                            {
                                className: o()(E.progressBarMarker, {
                                    [E.progressBarMarkerUnlocked]: L,
                                    [E.progressBarMarkerLocked]: G,
                                    [E.progressBarMarkerLower]: x,
                                    [E.progressBarMarkerCurrent]: M
                                }),
                                style: { left: ''.concat(100 * S[A], '%') }
                            },
                            e,
                            F
                        ),
                        {
                            children: [
                                !L && (0, r.jsx)('div', { className: E.boostedTierIconBackground }),
                                L && A === h.Eu4.TIER_3
                                    ? (0, r.jsx)(p.m, {
                                          confettiTriggerRef: n,
                                          setConfettiCount: y,
                                          setShouldFireConfetti: T,
                                          children: j
                                      })
                                    : j,
                                (0, r.jsxs)(s.Text, {
                                    className: E.progressBarMarkerLabel,
                                    variant: 'text-md/normal',
                                    children: [
                                        L &&
                                            A !== h.Eu4.NONE &&
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
