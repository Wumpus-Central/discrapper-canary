n.d(t, { Z: () => O }), n(47120), n(978209);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(317169),
    u = n(267642),
    d = n(198466),
    f = n(436444),
    _ = n(981631),
    p = n(388032),
    h = n(531233);
let m = 200,
    g = 250,
    E = 36,
    b = 660,
    v = [_.Eu4.NONE, _.Eu4.TIER_1, _.Eu4.TIER_2, _.Eu4.TIER_3];
function y(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: o, useReducedMotion: a } = e,
        [l, c] = i.useState(a ? r : -1),
        [u, d] = i.useState(0 === n),
        [p, h] = i.useState(!1),
        g = i.useRef(!0);
    function v(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(f.P).reverse())
            if (t >= n - E / 2 / b) {
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
        onChange: v,
        onStart: () => {
            d(!1);
        },
        onRest: () => {
            d(!0),
                r === _.Eu4.TIER_3 &&
                    (h(!0),
                    window.setTimeout(() => {
                        g.current && h(!1);
                    }, m));
        }
    });
    return (
        i.useEffect(
            () => () => {
                g.current = !1;
            },
            []
        ),
        {
            isProgressBarAnimationComplete: u,
            progressBarFillWidthFactor: y,
            setShouldFireConfetti: h,
            shouldFireConfetti: p,
            tierMarkerAnimationPosition: l
        }
    );
}
function O(e) {
    let { guild: t } = e,
        n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        [s, m] = i.useState(!1),
        [E, b] = i.useState(0),
        O = i.useRef(null),
        I = Math.min(_.Eu4.TIER_3, t.premiumTier + 1),
        S = _.oCV[t.premiumTier],
        T = _.oCV[I],
        A = (0, c.Z)(t.id).available,
        N = A / (T - S),
        C = f.P[t.premiumTier],
        R = f.P[I],
        {
            progressBarFillWidthFactor: P,
            isProgressBarAnimationComplete: w,
            setShouldFireConfetti: D,
            shouldFireConfetti: L,
            tierMarkerAnimationPosition: x
        } = y({
            fillFactor: t.premiumTier === _.Eu4.TIER_3 ? 1 : N * (R - C) + C,
            isRevealed: s || n,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: S + A
        });
    return (
        i.useEffect(() => {
            let e = window.setTimeout(() => {
                m(!0);
            }, g);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, r.jsxs)('div', {
            className: h.progressBar,
            role: 'progressbar',
            'aria-valuenow': S + A,
            'aria-valuetext':
                t.premiumTier === _.Eu4.NONE
                    ? p.NW.formatToPlainString(p.t.Ukqm9v, { numSubscriptionsApplied: S + A })
                    : p.NW.formatToPlainString(p.t.qWunaW, {
                          numSubscriptionsApplied: S + A,
                          tierName: (0, u.nW)(t.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, r.jsxs)('div', {
                    className: h.progressBarScrubber,
                    children: [
                        (0, r.jsx)(o.animated.div, {
                            className: h.progressBarFill,
                            style: {
                                width: P.to({
                                    range: [0, 1],
                                    output: [0, 100]
                                }).to((e) => ''.concat(e, '%'))
                            }
                        }),
                        (0, r.jsx)('div', { className: h.progressBarTrack })
                    ]
                }),
                v.map((e) =>
                    (0, r.jsx)(
                        f.Z,
                        {
                            confettiTriggerRef: O,
                            guild: t,
                            isProgressBarAnimationComplete: w,
                            setConfettiCount: b,
                            setShouldFireConfetti: D,
                            tier: e,
                            tierMarkerAnimationPosition: x,
                            children: (0, u.nW)(e)
                        },
                        e
                    )
                ),
                (0, r.jsx)(d.Z, {
                    confettiCount: E,
                    confettiTriggerRef: O,
                    isFiring: L
                })
            ]
        })
    );
}
