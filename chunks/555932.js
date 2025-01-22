r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(642128),
    l = r(442837),
    u = r(481060),
    c = r(607070),
    d = r(267642),
    f = r(198466),
    p = r(436444),
    h = r(981631),
    _ = r(388032),
    m = r(572656);
let g = 200,
    E = 250,
    v = 36,
    y = 660,
    b = [h.Eu4.NONE, h.Eu4.TIER_1, h.Eu4.TIER_2, h.Eu4.TIER_3];
function I(e) {
    let { fillFactor: n, guildBoostCount: r, premiumTier: i, isRevealed: a, useReducedMotion: s } = e,
        [l, c] = o.useState(s ? i : -1),
        [d, f] = o.useState(0 === r),
        [_, m] = o.useState(!1),
        E = o.useRef(!0);
    function b(e) {
        let { widthFactor: n } = e;
        for (let [e, r] of Object.entries(p.P).reverse())
            if (n >= r - v / 2 / y) {
                c(Number(e));
                break;
            }
    }
    let { widthFactor: I } = (0, u.useSpring)({
        from: { widthFactor: 0 },
        to: { widthFactor: a ? n : 0 },
        config: {
            tension: 15,
            friction: 7,
            clamp: !0
        },
        onChange: b,
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
        o.useEffect(
            () => () => {
                E.current = !1;
            },
            []
        ),
        {
            isProgressBarAnimationComplete: d,
            progressBarFillWidthFactor: I,
            setShouldFireConfetti: m,
            shouldFireConfetti: _,
            tierMarkerAnimationPosition: l
        }
    );
}
function T(e) {
    let { guild: n } = e,
        r = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [i, u] = o.useState(!1),
        [g, v] = o.useState(0),
        y = o.useRef(null),
        T = Math.min(h.Eu4.TIER_3, n.premiumTier + 1),
        S = h.oCV[n.premiumTier],
        A = h.oCV[T],
        C = (n.premiumSubscriberCount - S) / (A - S),
        N = p.P[n.premiumTier],
        R = p.P[T],
        O = n.premiumTier === h.Eu4.TIER_3 ? 1 : C * (R - N) + N,
        {
            progressBarFillWidthFactor: D,
            isProgressBarAnimationComplete: x,
            setShouldFireConfetti: L,
            shouldFireConfetti: w,
            tierMarkerAnimationPosition: P
        } = I({
            fillFactor: O,
            isRevealed: i || r,
            useReducedMotion: r,
            premiumTier: n.premiumTier,
            guildBoostCount: n.premiumSubscriberCount
        });
    return (
        o.useEffect(() => {
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
                    ? _.intl.formatToPlainString(_.t.Ukqm9v, { numSubscriptionsApplied: n.premiumSubscriberCount })
                    : _.intl.formatToPlainString(_.t.qWunaW, {
                          numSubscriptionsApplied: n.premiumSubscriberCount,
                          tierName: (0, d.nW)(n.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, a.jsxs)('div', {
                    className: m.progressBarScrubber,
                    children: [
                        (0, a.jsx)(s.animated.div, {
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
                b.map((e) =>
                    (0, a.jsx)(
                        p.Z,
                        {
                            confettiTriggerRef: y,
                            guild: n,
                            isProgressBarAnimationComplete: x,
                            setConfettiCount: v,
                            setShouldFireConfetti: L,
                            tier: e,
                            tierMarkerAnimationPosition: P,
                            children: (0, d.nW)(e)
                        },
                        e
                    )
                ),
                (0, a.jsx)(f.Z, {
                    confettiCount: g,
                    confettiTriggerRef: y,
                    isFiring: w
                })
            ]
        })
    );
}
