n.d(t, { Z: () => O }), n(388685), n(583741);
var r = n(54381),
    i = n(473749),
    a = n(620792),
    o = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(267642),
    u = n(198466),
    d = n(436444),
    f = n(981631),
    p = n(388032),
    _ = n(993346);
let m = 200,
    h = 250,
    g = 36,
    E = 660,
    b = [f.Eu4.NONE, f.Eu4.TIER_1, f.Eu4.TIER_2, f.Eu4.TIER_3];
function y(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: a, useReducedMotion: o } = e,
        [l, c] = i.useState(o ? r : -1),
        [u, p] = i.useState(0 === n),
        [_, h] = i.useState(!1),
        b = i.useRef(!0);
    function y(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.P).reverse())
            if (t >= n - g / 2 / E) {
                c(Number(e));
                break;
            }
    }
    let { widthFactor: O } = (0, s.q_F)({
        from: { widthFactor: 0 },
        to: { widthFactor: a ? t : 0 },
        config: {
            tension: 15,
            friction: 7,
            clamp: !0,
        },
        onChange: y,
        onStart: () => {
            p(!1);
        },
        onRest: () => {
            p(!0),
                r === f.Eu4.TIER_3 &&
                    (h(!0),
                    window.setTimeout(() => {
                        b.current && h(!1);
                    }, m));
        },
    });
    return (
        i.useEffect(
            () => () => {
                b.current = !1;
            },
            [],
        ),
        {
            isProgressBarAnimationComplete: u,
            progressBarFillWidthFactor: O,
            setShouldFireConfetti: h,
            shouldFireConfetti: _,
            tierMarkerAnimationPosition: l,
        }
    );
}
function O(e) {
    let { guild: t } = e,
        n = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        [s, m] = i.useState(!1),
        [g, E] = i.useState(0),
        O = i.useRef(null),
        v = s || n,
        { fillFactor: S, totalAvailableBoostsCount: I } = i.useMemo(() => (0, c.Hl)(t), [t]),
        {
            progressBarFillWidthFactor: T,
            isProgressBarAnimationComplete: C,
            setShouldFireConfetti: A,
            shouldFireConfetti: N,
            tierMarkerAnimationPosition: P,
        } = y({
            fillFactor: S,
            isRevealed: v,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: I,
        });
    return (
        i.useEffect(() => {
            let e = window.setTimeout(() => {
                m(!0);
            }, h);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, r.jsxs)("div", {
            className: _.progressBar,
            role: "progressbar",
            "aria-valuenow": I,
            "aria-valuetext":
                t.premiumTier === f.Eu4.NONE
                    ? p.intl.formatToPlainString(p.t.Ukqm9v, { numSubscriptionsApplied: I })
                    : p.intl.formatToPlainString(p.t.qWunaU, {
                          numSubscriptionsApplied: I,
                          tierName: (0, c.nW)(t.premiumTier, { useLevels: !1 }),
                      }),
            children: [
                (0, r.jsxs)("div", {
                    className: _.progressBarScrubber,
                    children: [
                        (0, r.jsx)(a.animated.div, {
                            className: _.progressBarFill,
                            style: {
                                width: T.to({
                                    range: [0, 1],
                                    output: [0, 100],
                                }).to((e) => "".concat(e, "%")),
                            },
                        }),
                        (0, r.jsx)("div", { className: _.progressBarTrack }),
                    ],
                }),
                b.map((e) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            confettiTriggerRef: O,
                            guild: t,
                            isProgressBarAnimationComplete: C,
                            setConfettiCount: E,
                            setShouldFireConfetti: A,
                            tier: e,
                            tierMarkerAnimationPosition: P,
                            totalAvailableBoostsCount: I,
                            children: (0, c.nW)(e),
                        },
                        e,
                    ),
                ),
                (0, r.jsx)(u.Z, {
                    confettiCount: g,
                    confettiTriggerRef: O,
                    isFiring: N,
                }),
            ],
        })
    );
}
