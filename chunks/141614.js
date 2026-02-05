"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(92674),
    s = n(311907),
    o = n(397927),
    l = n(775602),
    u = n(473145),
    c = n(963894),
    d = n(711624),
    _ = n(652215),
    f = n(985018),
    p = n(870168);
let h = 200,
    m = 250,
    g = 36,
    E = 660,
    A = [_.TVA.NONE, _.TVA.TIER_1, _.TVA.TIER_2, _.TVA.TIER_3];
function I(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: a, useReducedMotion: s } = e,
        [l, u] = i.useState(s ? r : -1),
        [c, f] = i.useState(0 === n),
        [p, m] = i.useState(!1),
        A = i.useRef(!0);
    function I(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.p).reverse())
            if (t >= n - g / 2 / E) {
                u(Number(e));
                break;
            }
    }
    let { widthFactor: T } = (0, o.zhh)({
        from: { widthFactor: 0 },
        to: { widthFactor: a ? t : 0 },
        config: { tension: 15, friction: 7, clamp: !0 },
        onChange: I,
        onStart: () => {
            f(!1);
        },
        onRest: () => {
            f(!0),
                r === _.TVA.TIER_3 &&
                    (m(!0),
                    window.setTimeout(() => {
                        A.current && m(!1);
                    }, h));
        },
    });
    return (
        i.useEffect(
            () => () => {
                A.current = !1;
            },
            [],
        ),
        {
            isProgressBarAnimationComplete: c,
            progressBarFillWidthFactor: T,
            setShouldFireConfetti: m,
            shouldFireConfetti: p,
            tierMarkerAnimationPosition: l,
        }
    );
}
function T(e) {
    let { guild: t } = e,
        n = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [o, h] = i.useState(!1),
        [g, E] = i.useState(0),
        T = i.useRef(null),
        y = o || n,
        { fillFactor: S, totalAvailableBoostsCount: v } = i.useMemo(() => (0, u.$U)(t), [t]),
        {
            progressBarFillWidthFactor: C,
            isProgressBarAnimationComplete: b,
            setShouldFireConfetti: N,
            shouldFireConfetti: R,
            tierMarkerAnimationPosition: O,
        } = I({ fillFactor: S, isRevealed: y, useReducedMotion: n, premiumTier: t.premiumTier, guildBoostCount: v });
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
            className: p.hr,
            role: "progressbar",
            "aria-valuenow": v,
            "aria-valuetext":
                t.premiumTier === _.TVA.NONE
                    ? f.intl.formatToPlainString(f.t.Ukqm9v, { numSubscriptionsApplied: v })
                    : f.intl.formatToPlainString(f.t.qWunaU, {
                          numSubscriptionsApplied: v,
                          tierName: (0, u.gb)(t.premiumTier, { useLevels: !1 }),
                      }),
            children: [
                (0, r.jsxs)("div", {
                    className: p.VZ,
                    children: [
                        (0, r.jsx)(a.animated.div, {
                            className: p.SX,
                            style: { width: C.to({ range: [0, 1], output: [0, 100] }).to((e) => `${e}%`) },
                        }),
                        (0, r.jsx)("div", { className: p.mv }),
                    ],
                }),
                A.map((e) =>
                    (0, r.jsx)(
                        d.A,
                        {
                            confettiTriggerRef: T,
                            guild: t,
                            isProgressBarAnimationComplete: b,
                            setConfettiCount: E,
                            setShouldFireConfetti: N,
                            tier: e,
                            tierMarkerAnimationPosition: O,
                            totalAvailableBoostsCount: v,
                            children: (0, u.gb)(e),
                        },
                        e,
                    ),
                ),
                (0, r.jsx)(c.A, { confettiCount: g, confettiTriggerRef: T, isFiring: R }),
            ],
        })
    );
}
