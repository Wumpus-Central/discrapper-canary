n.d(t, {
    A: () => O,
}),
    n(896048),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(92674),
    o = n(311907),
    s = n(397927),
    l = n(775602),
    c = n(473145),
    u = n(963894),
    d = n(711624),
    f = n(652215),
    p = n(985018),
    _ = n(870168);
let h = 200,
    m = 250,
    g = 36,
    E = 660,
    y = [f.TVA.NONE, f.TVA.TIER_1, f.TVA.TIER_2, f.TVA.TIER_3];

function b(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: a, useReducedMotion: o } = e,
        [l, c] = i.useState(o ? r : -1),
        [u, p] = i.useState(0 === n),
        [_, m] = i.useState(!1),
        y = i.useRef(!0);

    function b(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.p).reverse())
            if (t >= n - g / 2 / E) {
                c(Number(e));
                break;
            }
    }
    let { widthFactor: O } = (0, s.zhh)({
        from: {
            widthFactor: 0,
        },
        to: {
            widthFactor: a ? t : 0,
        },
        config: {
            tension: 15,
            friction: 7,
            clamp: !0,
        },
        onChange: b,
        onStart: () => {
            p(!1);
        },
        onRest: () => {
            p(!0),
                r === f.TVA.TIER_3 &&
                    (m(!0),
                    window.setTimeout(() => {
                        y.current && m(!1);
                    }, h));
        },
    });
    return (
        i.useEffect(
            () => () => {
                y.current = !1;
            },
            [],
        ),
        {
            isProgressBarAnimationComplete: u,
            progressBarFillWidthFactor: O,
            setShouldFireConfetti: m,
            shouldFireConfetti: _,
            tierMarkerAnimationPosition: l,
        }
    );
}

function O(e) {
    let { guild: t } = e,
        n = (0, o.bG)([l.A], () => l.A.useReducedMotion),
        [s, h] = i.useState(!1),
        [g, E] = i.useState(0),
        O = i.useRef(null),
        v = s || n,
        { fillFactor: A, totalAvailableBoostsCount: I } = i.useMemo(() => (0, c.$U)(t), [t]),
        {
            progressBarFillWidthFactor: S,
            isProgressBarAnimationComplete: T,
            setShouldFireConfetti: C,
            shouldFireConfetti: N,
            tierMarkerAnimationPosition: w,
        } = b({
            fillFactor: A,
            isRevealed: v,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: I,
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
        (0, r.jsxs)("div", {
            className: _.hr,
            role: "progressbar",
            "aria-valuenow": I,
            "aria-valuetext":
                t.premiumTier === f.TVA.NONE
                    ? p.intl.formatToPlainString(p.t.Ukqm9v, {
                          numSubscriptionsApplied: I,
                      })
                    : p.intl.formatToPlainString(p.t.qWunaU, {
                          numSubscriptionsApplied: I,
                          tierName: (0, c.gb)(t.premiumTier, {
                              useLevels: !1,
                          }),
                      }),
            children: [
                (0, r.jsxs)("div", {
                    className: _.VZ,
                    children: [
                        (0, r.jsx)(a.animated.div, {
                            className: _.SX,
                            style: {
                                width: S.to({
                                    range: [0, 1],
                                    output: [0, 100],
                                }).to((e) => "".concat(e, "%")),
                            },
                        }),
                        (0, r.jsx)("div", {
                            className: _.mv,
                        }),
                    ],
                }),
                y.map((e) =>
                    (0, r.jsx)(
                        d.A,
                        {
                            confettiTriggerRef: O,
                            guild: t,
                            isProgressBarAnimationComplete: T,
                            setConfettiCount: E,
                            setShouldFireConfetti: C,
                            tier: e,
                            tierMarkerAnimationPosition: w,
                            totalAvailableBoostsCount: I,
                            children: (0, c.gb)(e),
                        },
                        e,
                    ),
                ),
                (0, r.jsx)(u.A, {
                    confettiCount: g,
                    confettiTriggerRef: O,
                    isFiring: N,
                }),
            ],
        })
    );
}
