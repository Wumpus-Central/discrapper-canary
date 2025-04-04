n.d(t, { Z: () => v }), n(47120), n(978209);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(267642),
    u = n(198466),
    d = n(436444),
    f = n(981631),
    _ = n(388032),
    p = n(282412);
let h = 200,
    m = 250,
    g = 36,
    E = 660,
    b = [f.Eu4.NONE, f.Eu4.TIER_1, f.Eu4.TIER_2, f.Eu4.TIER_3];
function y(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: o, useReducedMotion: a } = e,
        [l, c] = i.useState(a ? r : -1),
        [u, _] = i.useState(0 === n),
        [p, m] = i.useState(!1),
        b = i.useRef(!0);
    function y(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.P).reverse())
            if (t >= n - g / 2 / E) {
                c(Number(e));
                break;
            }
    }
    let { widthFactor: v } = (0, s.q_F)({
        from: { widthFactor: 0 },
        to: { widthFactor: o ? t : 0 },
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
                r === f.Eu4.TIER_3 &&
                    (m(!0),
                    window.setTimeout(() => {
                        b.current && m(!1);
                    }, h));
        }
    });
    return (
        i.useEffect(
            () => () => {
                b.current = !1;
            },
            []
        ),
        {
            isProgressBarAnimationComplete: u,
            progressBarFillWidthFactor: v,
            setShouldFireConfetti: m,
            shouldFireConfetti: p,
            tierMarkerAnimationPosition: l
        }
    );
}
function v(e) {
    let { guild: t } = e,
        n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        [s, h] = i.useState(!1),
        [g, E] = i.useState(0),
        v = i.useRef(null),
        O = s || n,
        { fillFactor: I, totalAvailableBoostsCount: S } = i.useMemo(() => (0, c.Hl)(t), [t]),
        {
            progressBarFillWidthFactor: T,
            isProgressBarAnimationComplete: N,
            setShouldFireConfetti: A,
            shouldFireConfetti: C,
            tierMarkerAnimationPosition: R
        } = y({
            fillFactor: I,
            isRevealed: O,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: S
        });
    return (
        i.useEffect(() => {
            let e = window.setTimeout(() => {
                h(!0);
            }, m);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, r.jsxs)('div', {
            className: p.progressBar,
            role: 'progressbar',
            'aria-valuenow': S,
            'aria-valuetext':
                t.premiumTier === f.Eu4.NONE
                    ? _.NW.formatToPlainString(_.t.Ukqm9v, { numSubscriptionsApplied: S })
                    : _.NW.formatToPlainString(_.t.qWunaW, {
                          numSubscriptionsApplied: S,
                          tierName: (0, c.nW)(t.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, r.jsxs)('div', {
                    className: p.progressBarScrubber,
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            className: p.progressBarFill,
                            style: {
                                width: T.to({
                                    range: [0, 1],
                                    output: [0, 100]
                                }).to((e) => ''.concat(e, '%'))
                            }
                        }),
                        (0, r.jsx)('div', { className: p.progressBarTrack })
                    ]
                }),
                b.map((e) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            confettiTriggerRef: v,
                            guild: t,
                            isProgressBarAnimationComplete: N,
                            setConfettiCount: E,
                            setShouldFireConfetti: A,
                            tier: e,
                            tierMarkerAnimationPosition: R,
                            totalAvailableBoostsCount: S,
                            children: (0, c.nW)(e)
                        },
                        e
                    )
                ),
                (0, r.jsx)(u.Z, {
                    confettiCount: g,
                    confettiTriggerRef: v,
                    isFiring: C
                })
            ]
        })
    );
}
