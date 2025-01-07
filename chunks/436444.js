r.d(n, {
    P: function () {
        return T;
    }
});
var i = r(411104);
var a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(666912),
    u = r(481060),
    c = r(906732),
    d = r(975298),
    f = r(471885),
    _ = r(267642),
    h = r(879892),
    p = r(198466),
    m = r(981631),
    g = r(474936),
    E = r(388032),
    v = r(775588);
function I(e) {
    switch (e) {
        case m.Eu4.TIER_3:
            return m.Qqv.TIER_3;
        case m.Eu4.TIER_2:
            return m.Qqv.TIER_2;
        case m.Eu4.TIER_1:
            return m.Qqv.TIER_1;
        default:
            throw Error('Unsupported Boosting tier: '.concat(e));
    }
}
let T = {
    [m.Eu4.NONE]: 0,
    [m.Eu4.TIER_1]: 1 / 3,
    [m.Eu4.TIER_2]: 2 / 3,
    [m.Eu4.TIER_3]: 1
};
function b(e) {
    let { children: n, confettiTriggerRef: r, guild: i, isProgressBarAnimationComplete: s, setConfettiCount: b, setShouldFireConfetti: y, tier: S, tierMarkerAnimationPosition: A } = e,
        { analyticsLocations: N } = (0, c.ZP)(),
        C = (0, d.Z)(),
        R = m.oCV[S] - i.premiumSubscriberCount,
        O = S <= A || s,
        D = O && S <= i.premiumTier,
        L = O && S < i.premiumTier,
        x = O && S === i.premiumTier,
        { scaleFactor: w } = (0, u.useSpring)({
            from: { scaleFactor: 0 },
            to: { scaleFactor: A >= S || (s && A + 1 === S) || (s && -1 === A && S === m.Eu4.NONE) ? 1 : 0 },
            config: {
                tension: 360,
                friction: 12
            }
        }),
        P = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(l.animated.div, {
                    className: v.progressBarMarkerIndicator,
                    style: { transform: w.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                }),
                S !== m.Eu4.NONE &&
                    (0, a.jsx)(f.Z, {
                        tier: S,
                        className: v.boostedTierIcon
                    })
            ]
        });
    function M() {
        O &&
            (0, h.u)({
                analyticsLocations: N,
                analyticsLocation: {
                    page: m.ZY5.PREMIUM_GUILD_USER_MODAL,
                    section: m.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                    object: m.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                    objectType: I(S)
                },
                numberOfBoostsToAdd: R,
                guild: i
            });
    }
    let k = !D && C.fractionalState === g.a$.NONE,
        U = k ? u.Clickable : 'div',
        B = k ? { onClick: M } : {};
    return (0, a.jsx)(u.Tooltip, {
        text: D
            ? E.intl.formatToPlainString(E.t['1o48kp'], { tierName: (0, _.nW)(S, { useLevels: !1 }) })
            : E.intl.formatToPlainString(E.t.r6NN6e, {
                  numBoostsRequired: R,
                  tierName: (0, _.nW)(S, { useLevels: !1 })
              }),
        shouldShow: S !== m.Eu4.NONE,
        children: (e) =>
            (0, a.jsxs)(U, {
                className: o()(v.progressBarMarker, {
                    [v.progressBarMarkerUnlocked]: D,
                    [v.progressBarMarkerLocked]: k,
                    [v.progressBarMarkerLower]: L,
                    [v.progressBarMarkerCurrent]: x
                }),
                style: { left: ''.concat(100 * T[S], '%') },
                ...e,
                ...B,
                children: [
                    !D && (0, a.jsx)('div', { className: v.boostedTierIconBackground }),
                    D && S === m.Eu4.TIER_3
                        ? (0, a.jsx)(p.m, {
                              confettiTriggerRef: r,
                              setConfettiCount: b,
                              setShouldFireConfetti: y,
                              children: P
                          })
                        : P,
                    (0, a.jsxs)(u.Text, {
                        className: v.progressBarMarkerLabel,
                        variant: 'text-md/normal',
                        children: [
                            D &&
                                S !== m.Eu4.NONE &&
                                (0, a.jsx)(u.CheckmarkLargeIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: v.progressBarMarkerUnlockedIcon
                                }),
                            n
                        ]
                    })
                ]
            })
    });
}
n.Z = b;
