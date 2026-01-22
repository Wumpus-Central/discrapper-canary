n.d(t, {
    A: () => O,
}),
    n(896048),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(108531),
    s = n(311907),
    o = n(397927),
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
    b = [f.TVA.NONE, f.TVA.TIER_1, f.TVA.TIER_2, f.TVA.TIER_3];

function y(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: a, useReducedMotion: s } = e,
        [l, c] = i.useState(s ? r : -1),
        [u, p] = i.useState(0 === n),
        [_, m] = i.useState(!1),
        b = i.useRef(!0);

    function y(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.p).reverse())
            if (t >= n - g / 2 / E) {
                c(Number(e));
                break;
            }
    }
    let { widthFactor: O } = (0, o.zhh)({
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
        onChange: y,
        onStart: () => {
            p(!1);
        },
        onRest: () => {
            p(!0),
                r === f.TVA.TIER_3 &&
                    (m(!0),
                    window.setTimeout(() => {
                        b.current && m(!1);
                    }, h));
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
            setShouldFireConfetti: m,
            shouldFireConfetti: _,
            tierMarkerAnimationPosition: l,
        }
    );
}

function O(e) {
    let { guild: t } = e,
        n = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [o, h] = i.useState(!1),
        [g, E] = i.useState(0),
        O = i.useRef(null),
        A = o || n,
        { fillFactor: v, totalAvailableBoostsCount: S } = i.useMemo(() => (0, c.$U)(t), [t]),
        {
            progressBarFillWidthFactor: I,
            isProgressBarAnimationComplete: T,
            setShouldFireConfetti: C,
            shouldFireConfetti: N,
            tierMarkerAnimationPosition: R,
        } = y({
            fillFactor: v,
            isRevealed: A,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: S,
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
            "aria-valuenow": S,
            "aria-valuetext":
                t.premiumTier === f.TVA.NONE
                    ? p.intl.formatToPlainString(p.t.Ukqm9v, {
                          numSubscriptionsApplied: S,
                      })
                    : p.intl.formatToPlainString(p.t.qWunaU, {
                          numSubscriptionsApplied: S,
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
                                width: I.to({
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
                b.map((e) =>
                    (0, r.jsx)(
                        d.A,
                        {
                            confettiTriggerRef: O,
                            guild: t,
                            isProgressBarAnimationComplete: T,
                            setConfettiCount: E,
                            setShouldFireConfetti: C,
                            tier: e,
                            tierMarkerAnimationPosition: R,
                            totalAvailableBoostsCount: S,
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
