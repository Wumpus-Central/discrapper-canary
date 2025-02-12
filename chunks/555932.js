n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(267642),
    c = n(198466),
    d = n(436444),
    f = n(981631),
    _ = n(388032),
    p = n(201989);
let h = 200,
    m = 250,
    g = 36,
    E = 660,
    v = [f.Eu4.NONE, f.Eu4.TIER_1, f.Eu4.TIER_2, f.Eu4.TIER_3];
function y(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: i, isRevealed: a, useReducedMotion: s } = e,
        [l, u] = r.useState(s ? i : -1),
        [c, _] = r.useState(0 === n),
        [p, m] = r.useState(!1),
        v = r.useRef(!0);
    function y(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.P).reverse())
            if (t >= n - g / 2 / E) {
                u(Number(e));
                break;
            }
    }
    let { widthFactor: I } = (0, o.q_F)({
        from: { widthFactor: 0 },
        to: { widthFactor: a ? t : 0 },
        config: {
            tension: 15,
            friction: 7,
            clamp: !0
        },
        onChange: y,
        onStart: () => {
            _(!1);
        },
        onRest: () => {
            _(!0),
                i === f.Eu4.TIER_3 &&
                    (m(!0),
                    window.setTimeout(() => {
                        v.current && m(!1);
                    }, h));
        }
    });
    return (
        r.useEffect(
            () => () => {
                v.current = !1;
            },
            []
        ),
        {
            isProgressBarAnimationComplete: c,
            progressBarFillWidthFactor: I,
            setShouldFireConfetti: m,
            shouldFireConfetti: p,
            tierMarkerAnimationPosition: l
        }
    );
}
function I(e) {
    let { guild: t } = e,
        n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        [o, h] = r.useState(!1),
        [g, E] = r.useState(0),
        I = r.useRef(null),
        T = Math.min(f.Eu4.TIER_3, t.premiumTier + 1),
        b = f.oCV[t.premiumTier],
        S = f.oCV[T],
        A = (t.premiumSubscriberCount - b) / (S - b),
        N = d.P[t.premiumTier],
        C = d.P[T],
        {
            progressBarFillWidthFactor: R,
            isProgressBarAnimationComplete: O,
            setShouldFireConfetti: D,
            shouldFireConfetti: L,
            tierMarkerAnimationPosition: x
        } = y({
            fillFactor: t.premiumTier === f.Eu4.TIER_3 ? 1 : A * (C - N) + N,
            isRevealed: o || n,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: t.premiumSubscriberCount
        });
    return (
        r.useEffect(() => {
            let e = window.setTimeout(() => {
                h(!0);
            }, m);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, i.jsxs)('div', {
            className: p.progressBar,
            role: 'progressbar',
            'aria-valuenow': t.premiumSubscriberCount,
            'aria-valuetext':
                t.premiumTier === f.Eu4.NONE
                    ? _.intl.formatToPlainString(_.t.Ukqm9v, { numSubscriptionsApplied: t.premiumSubscriberCount })
                    : _.intl.formatToPlainString(_.t.qWunaW, {
                          numSubscriptionsApplied: t.premiumSubscriberCount,
                          tierName: (0, u.nW)(t.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, i.jsxs)('div', {
                    className: p.progressBarScrubber,
                    children: [
                        (0, i.jsx)(a.animated.div, {
                            className: p.progressBarFill,
                            style: {
                                width: R.to({
                                    range: [0, 1],
                                    output: [0, 100]
                                }).to((e) => ''.concat(e, '%'))
                            }
                        }),
                        (0, i.jsx)('div', { className: p.progressBarTrack })
                    ]
                }),
                v.map((e) =>
                    (0, i.jsx)(
                        d.Z,
                        {
                            confettiTriggerRef: I,
                            guild: t,
                            isProgressBarAnimationComplete: O,
                            setConfettiCount: E,
                            setShouldFireConfetti: D,
                            tier: e,
                            tierMarkerAnimationPosition: x,
                            children: (0, u.nW)(e)
                        },
                        e
                    )
                ),
                (0, i.jsx)(c.Z, {
                    confettiCount: g,
                    confettiTriggerRef: I,
                    isFiring: L
                })
            ]
        })
    );
}
