n.d(t, {
    P: () => v,
    Z: () => y
}),
    n(411104);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(481060),
    l = n(906732),
    u = n(975298),
    c = n(471885),
    d = n(267642),
    f = n(879892),
    _ = n(198466),
    p = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(775588);
function E(e) {
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
let v = {
        [p.Eu4.NONE]: 0,
        [p.Eu4.TIER_1]: 1 / 3,
        [p.Eu4.TIER_2]: 2 / 3,
        [p.Eu4.TIER_3]: 1
    },
    y = function (e) {
        let { children: t, confettiTriggerRef: n, guild: r, isProgressBarAnimationComplete: y, setConfettiCount: I, setShouldFireConfetti: T, tier: b, tierMarkerAnimationPosition: S } = e,
            { analyticsLocations: A } = (0, l.ZP)(),
            N = (0, u.Z)(),
            C = p.oCV[b] - r.premiumSubscriberCount,
            R = b <= S || y,
            O = R && b <= r.premiumTier,
            D = R && b < r.premiumTier,
            x = R && b === r.premiumTier,
            { scaleFactor: L } = (0, o.q_F)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: S >= b || (y && S + 1 === b) || (y && -1 === S && b === p.Eu4.NONE) ? 1 : 0 },
                config: {
                    tension: 360,
                    friction: 12
                }
            }),
            P = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.animated.div, {
                        className: g.progressBarMarkerIndicator,
                        style: { transform: L.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                    }),
                    b !== p.Eu4.NONE &&
                        (0, i.jsx)(c.Z, {
                            tier: b,
                            className: g.boostedTierIcon
                        })
                ]
            });
        function w() {
            R &&
                (0, f.u)({
                    analyticsLocations: A,
                    analyticsLocation: {
                        page: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                        section: p.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: p.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: E(b)
                    },
                    numberOfBoostsToAdd: C,
                    guild: r
                });
        }
        let M = !O && N.fractionalState === h.a$.NONE,
            k = M ? o.P3F : 'div',
            U = M ? { onClick: w } : {};
        return (0, i.jsx)(o.ua7, {
            text: O
                ? m.intl.formatToPlainString(m.t['1o48kp'], { tierName: (0, d.nW)(b, { useLevels: !1 }) })
                : m.intl.formatToPlainString(m.t.r6NN6e, {
                      numBoostsRequired: C,
                      tierName: (0, d.nW)(b, { useLevels: !1 })
                  }),
            shouldShow: b !== p.Eu4.NONE,
            children: (e) =>
                (0, i.jsxs)(k, {
                    className: a()(g.progressBarMarker, {
                        [g.progressBarMarkerUnlocked]: O,
                        [g.progressBarMarkerLocked]: M,
                        [g.progressBarMarkerLower]: D,
                        [g.progressBarMarkerCurrent]: x
                    }),
                    style: { left: ''.concat(100 * v[b], '%') },
                    ...e,
                    ...U,
                    children: [
                        !O && (0, i.jsx)('div', { className: g.boostedTierIconBackground }),
                        O && b === p.Eu4.TIER_3
                            ? (0, i.jsx)(_.m, {
                                  confettiTriggerRef: n,
                                  setConfettiCount: I,
                                  setShouldFireConfetti: T,
                                  children: P
                              })
                            : P,
                        (0, i.jsxs)(o.Text, {
                            className: g.progressBarMarkerLabel,
                            variant: 'text-md/normal',
                            children: [
                                O &&
                                    b !== p.Eu4.NONE &&
                                    (0, i.jsx)(o.dz2, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: g.progressBarMarkerUnlockedIcon
                                    }),
                                t
                            ]
                        })
                    ]
                })
        });
    };
