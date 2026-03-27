"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(880013),
    a = n(311907),
    o = n(397927),
    l = n(775602),
    u = n(473145),
    c = n(963894),
    d = n(711624),
    _ = n(652215),
    f = n(985018),
    p = n(936798);
let h = 200,
    m = 250,
    E = 36,
    g = 660,
    A = [_.TVA.NONE, _.TVA.TIER_1, _.TVA.TIER_2, _.TVA.TIER_3];
function I(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: s, useReducedMotion: a } = e,
        [l, u] = i.useState(a ? r : -1),
        [c, f] = i.useState(0 === n),
        [p, m] = i.useState(!1),
        A = i.useRef(!0);
    function I(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.p).reverse())
            if (t >= n - E / 2 / g) {
                u(Number(e));
                break;
            }
    }
    let { widthFactor: T } = (0, o.zhh)({
        from: { widthFactor: 0 },
        to: { widthFactor: s ? t : 0 },
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
        n = (0, a.bG)([l.A], () => l.A.useReducedMotion),
        [o, h] = i.useState(!1),
        [E, g] = i.useState(0),
        T = i.useRef(null),
        S = o || n,
        { fillFactor: y, totalAvailableBoostsCount: v } = i.useMemo(() => (0, u.$U)(t), [t]),
        {
            progressBarFillWidthFactor: N,
            isProgressBarAnimationComplete: C,
            setShouldFireConfetti: R,
            shouldFireConfetti: O,
            tierMarkerAnimationPosition: b,
        } = I({ fillFactor: y, isRevealed: S, useReducedMotion: n, premiumTier: t.premiumTier, guildBoostCount: v });
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
                        (0, r.jsx)(s.animated.div, {
                            className: p.SX,
                            style: { width: N.to({ range: [0, 1], output: [0, 100] }).to((e) => `${e}%`) },
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
                            isProgressBarAnimationComplete: C,
                            setConfettiCount: g,
                            setShouldFireConfetti: R,
                            tier: e,
                            tierMarkerAnimationPosition: b,
                            totalAvailableBoostsCount: v,
                            children: (0, u.gb)(e),
                        },
                        e,
                    ),
                ),
                (0, r.jsx)(c.A, { confettiCount: E, confettiTriggerRef: T, isFiring: O }),
            ],
        })
    );
}
