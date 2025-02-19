n.d(t, {
    P: () => S,
    Z: () => I
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
    u = n(471885),
    d = n(267642),
    f = n(879892),
    p = n(198466),
    _ = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(480757);
function E(e, t, n) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    switch (e) {
        case _.Eu4.TIER_3:
            return _.Qqv.TIER_3;
        case _.Eu4.TIER_2:
            return _.Qqv.TIER_2;
        case _.Eu4.TIER_1:
            return _.Qqv.TIER_1;
        default:
            throw Error('Unsupported Boosting tier: '.concat(e));
    }
}
let S = {
        [_.Eu4.NONE]: 0,
        [_.Eu4.TIER_1]: 1 / 3,
        [_.Eu4.TIER_2]: 2 / 3,
        [_.Eu4.TIER_3]: 1
    },
    I = function (e) {
        let { children: t, confettiTriggerRef: n, guild: i, isProgressBarAnimationComplete: E, setConfettiCount: b, setShouldFireConfetti: I, tier: T, tierMarkerAnimationPosition: N } = e,
            { analyticsLocations: A } = (0, l.ZP)(),
            C = (0, c.Z)(),
            R = _.oCV[T] - i.premiumSubscriberCount,
            P = T <= N || E,
            w = P && T <= i.premiumTier,
            D = P && T < i.premiumTier,
            x = P && T === i.premiumTier,
            { scaleFactor: L } = (0, s.q_F)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: N >= T || (E && N + 1 === T) || (E && -1 === N && T === _.Eu4.NONE) ? 1 : 0 },
                config: {
                    tension: 360,
                    friction: 12
                }
            }),
            M = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.animated.div, {
                        className: g.progressBarMarkerIndicator,
                        style: { transform: L.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                    }),
                    T !== _.Eu4.NONE &&
                        (0, r.jsx)(u.Z, {
                            tier: T,
                            className: g.boostedTierIcon
                        })
                ]
            });
        function k() {
            P &&
                (0, f.u)({
                    analyticsLocations: A,
                    analyticsLocation: {
                        page: _.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: _.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: _.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: O(T)
                    },
                    numberOfBoostsToAdd: R,
                    guild: i
                });
        }
        let j = !w && C.fractionalState === h.a$.NONE,
            U = j ? s.P3F : 'div',
            G = j ? { onClick: k } : {};
        return (0, r.jsx)(s.ua7, {
            text: w
                ? m.NW.formatToPlainString(m.t['1o48kp'], { tierName: (0, d.nW)(T, { useLevels: !1 }) })
                : m.NW.formatToPlainString(m.t.r6NN6e, {
                      numBoostsRequired: R,
                      tierName: (0, d.nW)(T, { useLevels: !1 })
                  }),
            shouldShow: T !== _.Eu4.NONE,
            children: (e) =>
                (0, r.jsxs)(
                    U,
                    y(
                        v(
                            {
                                className: o()(g.progressBarMarker, {
                                    [g.progressBarMarkerUnlocked]: w,
                                    [g.progressBarMarkerLocked]: j,
                                    [g.progressBarMarkerLower]: D,
                                    [g.progressBarMarkerCurrent]: x
                                }),
                                style: { left: ''.concat(100 * S[T], '%') }
                            },
                            e,
                            G
                        ),
                        {
                            children: [
                                !w && (0, r.jsx)('div', { className: g.boostedTierIconBackground }),
                                w && T === _.Eu4.TIER_3
                                    ? (0, r.jsx)(p.m, {
                                          confettiTriggerRef: n,
                                          setConfettiCount: b,
                                          setShouldFireConfetti: I,
                                          children: M
                                      })
                                    : M,
                                (0, r.jsxs)(s.Text, {
                                    className: g.progressBarMarkerLabel,
                                    variant: 'text-md/normal',
                                    children: [
                                        w &&
                                            T !== _.Eu4.NONE &&
                                            (0, r.jsx)(s.dz2, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: g.progressBarMarkerUnlockedIcon
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
