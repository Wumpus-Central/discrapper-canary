r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(666912),
    l = r(442837),
    u = r(481060),
    c = r(607070),
    d = r(267642),
    f = r(198466),
    _ = r(436444),
    h = r(981631),
    p = r(388032),
    m = r(572656);
let g = 200,
    E = 250,
    v = 36,
    I = 660,
    T = [h.Eu4.NONE, h.Eu4.TIER_1, h.Eu4.TIER_2, h.Eu4.TIER_3];
function b(e) {
    let { fillFactor: n, guildBoostCount: r, premiumTier: i, isRevealed: a, useReducedMotion: o } = e,
        [l, c] = s.useState(o ? i : -1),
        [d, f] = s.useState(0 === r),
        [p, m] = s.useState(!1),
        E = s.useRef(!0);
    function T(e) {
        let { widthFactor: n } = e;
        for (let [e, r] of Object.entries(_.P).reverse())
            if (n >= r - v / 2 / I) {
                c(Number(e));
                break;
            }
    }
    let { widthFactor: b } = (0, u.useSpring)({
        from: { widthFactor: 0 },
        to: { widthFactor: a ? n : 0 },
        config: {
            tension: 15,
            friction: 7,
            clamp: !0
        },
        onChange: T,
        onStart: () => {
            f(!1);
        },
        onRest: () => {
            f(!0),
                i === h.Eu4.TIER_3 &&
                    (m(!0),
                    window.setTimeout(() => {
                        E.current && m(!1);
                    }, g));
        }
    });
    return (
        s.useEffect(
            () => () => {
                E.current = !1;
            },
            []
        ),
        {
            isProgressBarAnimationComplete: d,
            progressBarFillWidthFactor: b,
            setShouldFireConfetti: m,
            shouldFireConfetti: p,
            tierMarkerAnimationPosition: l
        }
    );
}
function y(e) {
    let { guild: n } = e,
        r = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [i, u] = s.useState(!1),
        [g, v] = s.useState(0),
        I = s.useRef(null),
        y = Math.min(h.Eu4.TIER_3, n.premiumTier + 1),
        S = h.oCV[n.premiumTier],
        A = h.oCV[y],
        N = (n.premiumSubscriberCount - S) / (A - S),
        C = _.P[n.premiumTier],
        R = _.P[y],
        O = n.premiumTier === h.Eu4.TIER_3 ? 1 : N * (R - C) + C,
        {
            progressBarFillWidthFactor: D,
            isProgressBarAnimationComplete: L,
            setShouldFireConfetti: x,
            shouldFireConfetti: w,
            tierMarkerAnimationPosition: P
        } = b({
            fillFactor: O,
            isRevealed: i || r,
            useReducedMotion: r,
            premiumTier: n.premiumTier,
            guildBoostCount: n.premiumSubscriberCount
        });
    return (
        s.useEffect(() => {
            let e = window.setTimeout(() => {
                u(!0);
            }, E);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, a.jsxs)('div', {
            className: m.progressBar,
            role: 'progressbar',
            'aria-valuenow': n.premiumSubscriberCount,
            'aria-valuetext':
                n.premiumTier === h.Eu4.NONE
                    ? p.intl.formatToPlainString(p.t.Ukqm9v, { numSubscriptionsApplied: n.premiumSubscriberCount })
                    : p.intl.formatToPlainString(p.t.qWunaW, {
                          numSubscriptionsApplied: n.premiumSubscriberCount,
                          tierName: (0, d.nW)(n.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, a.jsxs)('div', {
                    className: m.progressBarScrubber,
                    children: [
                        (0, a.jsx)(o.animated.div, {
                            className: m.progressBarFill,
                            style: {
                                width: D.to({
                                    range: [0, 1],
                                    output: [0, 100]
                                }).to((e) => ''.concat(e, '%'))
                            }
                        }),
                        (0, a.jsx)('div', { className: m.progressBarTrack })
                    ]
                }),
                T.map((e) =>
                    (0, a.jsx)(
                        _.Z,
                        {
                            confettiTriggerRef: I,
                            guild: n,
                            isProgressBarAnimationComplete: L,
                            setConfettiCount: v,
                            setShouldFireConfetti: x,
                            tier: e,
                            tierMarkerAnimationPosition: P,
                            children: (0, d.nW)(e)
                        },
                        e
                    )
                ),
                (0, a.jsx)(f.Z, {
                    confettiCount: g,
                    confettiTriggerRef: I,
                    isFiring: w
                })
            ]
        })
    );
}
