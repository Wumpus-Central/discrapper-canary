n.d(t, { Z: () => y }), n(47120), n(978209);
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
    p = n(388032),
    _ = n(794747);
let h = 200,
    m = 250,
    g = 36,
    E = 660,
    v = [f.Eu4.NONE, f.Eu4.TIER_1, f.Eu4.TIER_2, f.Eu4.TIER_3];
function b(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: o, useReducedMotion: a } = e,
        [l, c] = i.useState(a ? r : -1),
        [u, p] = i.useState(0 === n),
        [_, m] = i.useState(!1),
        v = i.useRef(!0);
    function b(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.P).reverse())
            if (t >= n - g / 2 / E) {
                c(Number(e));
                break;
            }
    }
    let { widthFactor: y } = (0, s.q_F)({
        from: { widthFactor: 0 },
        to: { widthFactor: o ? t : 0 },
        config: {
            tension: 15,
            friction: 7,
            clamp: !0
        },
        onChange: b,
        onStart: () => {
            p(!1);
        },
        onRest: () => {
            p(!0),
                r === f.Eu4.TIER_3 &&
                    (m(!0),
                    window.setTimeout(() => {
                        v.current && m(!1);
                    }, h));
        }
    });
    return (
        i.useEffect(
            () => () => {
                v.current = !1;
            },
            []
        ),
        {
            isProgressBarAnimationComplete: u,
            progressBarFillWidthFactor: y,
            setShouldFireConfetti: m,
            shouldFireConfetti: _,
            tierMarkerAnimationPosition: l
        }
    );
}
function y(e) {
    let { guild: t } = e,
        n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        [s, h] = i.useState(!1),
        [g, E] = i.useState(0),
        y = i.useRef(null),
        O = Math.min(f.Eu4.TIER_3, t.premiumTier + 1),
        S = f.oCV[t.premiumTier],
        I = f.oCV[O],
        T = (t.premiumSubscriberCount - S) / (I - S),
        N = d.P[t.premiumTier],
        A = d.P[O],
        {
            progressBarFillWidthFactor: C,
            isProgressBarAnimationComplete: R,
            setShouldFireConfetti: P,
            shouldFireConfetti: w,
            tierMarkerAnimationPosition: D
        } = b({
            fillFactor: t.premiumTier === f.Eu4.TIER_3 ? 1 : T * (A - N) + N,
            isRevealed: s || n,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: t.premiumSubscriberCount
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
            className: _.progressBar,
            role: 'progressbar',
            'aria-valuenow': t.premiumSubscriberCount,
            'aria-valuetext':
                t.premiumTier === f.Eu4.NONE
                    ? p.NW.formatToPlainString(p.t.Ukqm9v, { numSubscriptionsApplied: t.premiumSubscriberCount })
                    : p.NW.formatToPlainString(p.t.qWunaW, {
                          numSubscriptionsApplied: t.premiumSubscriberCount,
                          tierName: (0, c.nW)(t.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, r.jsxs)('div', {
                    className: _.progressBarScrubber,
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            className: _.progressBarFill,
                            style: {
                                width: C.to({
                                    range: [0, 1],
                                    output: [0, 100]
                                }).to((e) => ''.concat(e, '%'))
                            }
                        }),
                        (0, r.jsx)('div', { className: _.progressBarTrack })
                    ]
                }),
                v.map((e) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            confettiTriggerRef: y,
                            guild: t,
                            isProgressBarAnimationComplete: R,
                            setConfettiCount: E,
                            setShouldFireConfetti: P,
                            tier: e,
                            tierMarkerAnimationPosition: D,
                            children: (0, c.nW)(e)
                        },
                        e
                    )
                ),
                (0, r.jsx)(u.Z, {
                    confettiCount: g,
                    confettiTriggerRef: y,
                    isFiring: w
                })
            ]
        })
    );
}
