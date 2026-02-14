"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(522160),
    s = n(311907),
    o = n(397927),
    l = n(775602),
    u = n(473145),
    c = n(963894),
    d = n(711624),
    _ = n(652215),
    f = n(985018),
    h = n(870168);
let p = 200,
    g = 250,
    E = 36,
    A = 660,
    I = [_.TVA.NONE, _.TVA.TIER_1, _.TVA.TIER_2, _.TVA.TIER_3];
function T(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: a, useReducedMotion: s } = e,
        [l, u] = i.useState(s ? r : -1),
        [c, f] = i.useState(0 === n),
        [h, g] = i.useState(!1),
        I = i.useRef(!0);
    function T(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(d.p).reverse())
            if (t >= n - E / 2 / A) {
                u(Number(e));
                break;
            }
    }
    let { widthFactor: y } = (0, o.zhh)({
        from: { widthFactor: 0 },
        to: { widthFactor: a ? t : 0 },
        config: { tension: 15, friction: 7, clamp: !0 },
        onChange: T,
        onStart: () => {
            f(!1);
        },
        onRest: () => {
            f(!0),
                r === _.TVA.TIER_3 &&
                    (g(!0),
                    window.setTimeout(() => {
                        I.current && g(!1);
                    }, p));
        },
    });
    return (
        i.useEffect(
            () => () => {
                I.current = !1;
            },
            [],
        ),
        {
            isProgressBarAnimationComplete: c,
            progressBarFillWidthFactor: y,
            setShouldFireConfetti: g,
            shouldFireConfetti: h,
            tierMarkerAnimationPosition: l,
        }
    );
}
function y(e) {
    let { guild: t } = e,
        n = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [o, p] = i.useState(!1),
        [E, A] = i.useState(0),
        y = i.useRef(null),
        S = o || n,
        { fillFactor: v, totalAvailableBoostsCount: C } = i.useMemo(() => (0, u.$U)(t), [t]),
        {
            progressBarFillWidthFactor: b,
            isProgressBarAnimationComplete: N,
            setShouldFireConfetti: R,
            shouldFireConfetti: O,
            tierMarkerAnimationPosition: D,
        } = T({ fillFactor: v, isRevealed: S, useReducedMotion: n, premiumTier: t.premiumTier, guildBoostCount: C });
    return (
        i.useEffect(() => {
            let e = window.setTimeout(() => {
                p(!0);
            }, g);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, r.jsxs)("div", {
            className: h.hr,
            role: "progressbar",
            "aria-valuenow": C,
            "aria-valuetext":
                t.premiumTier === _.TVA.NONE
                    ? f.intl.formatToPlainString(f.t.Ukqm9v, { numSubscriptionsApplied: C })
                    : f.intl.formatToPlainString(f.t.qWunaU, {
                          numSubscriptionsApplied: C,
                          tierName: (0, u.gb)(t.premiumTier, { useLevels: !1 }),
                      }),
            children: [
                (0, r.jsxs)("div", {
                    className: h.VZ,
                    children: [
                        (0, r.jsx)(a.animated.div, {
                            className: h.SX,
                            style: { width: b.to({ range: [0, 1], output: [0, 100] }).to((e) => `${e}%`) },
                        }),
                        (0, r.jsx)("div", { className: h.mv }),
                    ],
                }),
                I.map((e) =>
                    (0, r.jsx)(
                        d.A,
                        {
                            confettiTriggerRef: y,
                            guild: t,
                            isProgressBarAnimationComplete: N,
                            setConfettiCount: A,
                            setShouldFireConfetti: R,
                            tier: e,
                            tierMarkerAnimationPosition: D,
                            totalAvailableBoostsCount: C,
                            children: (0, u.gb)(e),
                        },
                        e,
                    ),
                ),
                (0, r.jsx)(c.A, { confettiCount: E, confettiTriggerRef: y, isFiring: O }),
            ],
        })
    );
}
