n.d(t, {
    P: () => I,
    Z: () => S
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
    _ = n(198466),
    p = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(877383);
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
function b(e) {
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
function y(e, t) {
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
function O(e) {
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
let I = {
        [p.Eu4.NONE]: 0,
        [p.Eu4.TIER_1]: 1 / 3,
        [p.Eu4.TIER_2]: 2 / 3,
        [p.Eu4.TIER_3]: 1
    },
    S = function (e) {
        let { children: t, confettiTriggerRef: n, guild: i, isProgressBarAnimationComplete: E, setConfettiCount: v, setShouldFireConfetti: S, tier: T, tierMarkerAnimationPosition: N } = e,
            { analyticsLocations: A } = (0, l.ZP)(),
            C = (0, c.Z)(),
            R = p.oCV[T] - i.premiumSubscriberCount,
            P = T <= N || E,
            w = P && T <= i.premiumTier,
            D = P && T < i.premiumTier,
            L = P && T === i.premiumTier,
            { scaleFactor: x } = (0, s.q_F)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: N >= T || (E && N + 1 === T) || (E && -1 === N && T === p.Eu4.NONE) ? 1 : 0 },
                config: {
                    tension: 360,
                    friction: 12
                }
            }),
            M = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.animated.div, {
                        className: g.progressBarMarkerIndicator,
                        style: { transform: x.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                    }),
                    T !== p.Eu4.NONE &&
                        (0, r.jsx)(u.Z, {
                            tier: T,
                            color: 'currentColor',
                            className: g.boostedTierIcon
                        })
                ]
            });
        function k() {
            P &&
                (0, f.u)({
                    analyticsLocations: A,
                    analyticsLocation: {
                        page: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: p.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: p.qAy.SUBSCRIBE_TO_TIER_BUTTON,
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
            shouldShow: T !== p.Eu4.NONE,
            children: (e) =>
                (0, r.jsxs)(
                    U,
                    y(
                        b(
                            {
                                className: o()(g.progressBarMarker, {
                                    [g.progressBarMarkerUnlocked]: w,
                                    [g.progressBarMarkerLocked]: j,
                                    [g.progressBarMarkerLower]: D,
                                    [g.progressBarMarkerCurrent]: L
                                }),
                                style: { left: ''.concat(100 * I[T], '%') }
                            },
                            e,
                            G
                        ),
                        {
                            children: [
                                !w && (0, r.jsx)('div', { className: g.boostedTierIconBackground }),
                                w && T === p.Eu4.TIER_3
                                    ? (0, r.jsx)(_.m, {
                                          confettiTriggerRef: n,
                                          setConfettiCount: v,
                                          setShouldFireConfetti: S,
                                          children: M
                                      })
                                    : M,
                                (0, r.jsxs)(s.Text, {
                                    className: g.progressBarMarkerLabel,
                                    variant: 'text-md/normal',
                                    children: [
                                        w &&
                                            T !== p.Eu4.NONE &&
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
