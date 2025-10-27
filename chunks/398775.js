n.d(e, {
    PremiumSubscriptionPauseModalSelect: () => C,
    Sz: () => P,
}),
    n(539854),
    n(388685),
    n(642613);
var a = n(951288),
    r = n(647438),
    i = n(913527),
    l = n.n(i),
    s = n(99945),
    u = n(793030),
    o = n(755721),
    c = n(481060),
    d = n(355467),
    m = n(493773),
    O = n(74538),
    _ = n(296848),
    f = n(45474),
    E = n(594135),
    p = n(981631),
    S = n(388032),
    y = n(353680);
async function b(t) {
    let {
        premiumSubscription: e,
        pauseDuration: n,
        onClose: a,
        setHasError: r,
        setIsCancelling: i,
        analyticsLocations: l,
        analyticsLocation: s,
    } = t;
    try {
        i(!0),
            r(!1),
            await (0, d.Mg)(
                e,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: e.currency,
                },
                (0, O.UX)(e.items, e.currency, e.paymentSourceId),
                l,
                s,
            ),
            a();
    } catch (t) {
        r(!0), i(!1);
    }
}
function C() {
    let {
            transitionState: t,
            onClose: e,
            setStep: n,
            setPauseDuration: i,
            pauseDuration: l,
            premiumSubscription: c,
        } = (0, E.a)(),
        d = r.useCallback(
            (t) => {
                let { value: e } = t;
                i(e);
            },
            [i],
        ),
        O = c.status === p.O0b.PAUSED ? S.intl.string(S.t.Lp9WoG) : S.intl.string(S.t.eSR83U),
        b = (function (t) {
            let e = t.status === p.O0b.PAUSED ? S.t.o3upfT : S.t.dBXZEm,
                { durations: n, currentDaysPaused: a } = (0, _.AT)(t),
                r = [];
            for (let t of n) {
                let n = s.T[t];
                r.push({
                    name: S.intl.formatToPlainString(e, { days: n - a }),
                    value: n,
                    radioItemIconClassName: y.radioOption,
                });
            }
            return (
                r.sort((t, e) => t.value - e.value),
                r.push({
                    name: S.intl.string(S.t.OCPUM6),
                    value: 0,
                    radioBarClassName: y.cancelText,
                    radioItemIconClassName: y.cancelText,
                }),
                r
            );
        })(c);
    return (
        (0, m.ZP)(() => {
            b.length < 1 || i(b[0].value);
        }),
        (0, a.jsx)(u.Modal, {
            transitionState: t,
            title: S.intl.string(S.t["f3nnB/"]),
            subtitle: O,
            onClose: async () => {
                await e();
            },
            actions: [
                {
                    variant: "secondary",
                    text: S.intl.string(S.t.h9tkAK),
                    onClick: e,
                },
                {
                    variant: "primary",
                    disabled: null === l,
                    text: S.intl.string(S.t["3PatSz"]),
                    onClick: () => {
                        0 === l ? n(f.R.WHAT_YOU_LOSE) : n(f.R.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(o.Gu, {
                options: b,
                onChange: d,
                value: l,
            }),
        })
    );
}
function P() {
    let {
            transitionState: t,
            onClose: e,
            pauseDuration: n,
            premiumSubscription: i,
            analyticsLocation: s,
            setStep: o,
            analyticsLocations: d,
        } = (0, E.a)(),
        [m, O] = r.useState(!1),
        [_, C] = r.useState(!1);
    if (null == n) return void o(f.R.PAUSE_SELECT);
    let P = null,
        R = [p.O0b.PAST_DUE, p.O0b.PAUSED].includes(i.status) ? i.currentPeriodStart : i.currentPeriodEnd,
        T = l()(R).add(n, "days").toDate();
    switch (i.status) {
        case p.O0b.PAST_DUE:
            P = S.intl.format(S.t["xaS18/"], {
                pauseDuration: n,
                resumeDate: T,
            });
            break;
        case p.O0b.PAUSED:
            P = S.intl.format(S.t.Vur3Fc, { resumeDate: T });
            break;
        default:
            P = S.intl.format(S.t.W85vFA, {
                pauseDate: R,
                resumeDate: T,
                pauseDuration: n,
            });
    }
    return (0, a.jsxs)(u.Modal, {
        title: S.intl.string(S.t.AnMG5x),
        transitionState: t,
        actions: [
            {
                text: S.intl.string(S.t.h9tkAK),
                variant: "primary",
                onClick: e,
            },
            {
                text: S.intl.string(S.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: _ || null == n,
                onClick: async () => {
                    await b({
                        premiumSubscription: i,
                        pauseDuration: n,
                        setIsCancelling: C,
                        setHasError: O,
                        onClose: e,
                        analyticsLocations: d,
                        analyticsLocation: s,
                    });
                },
            },
        ],
        onClose: async () => {
            await e();
        },
        children: [
            m
                ? (0, a.jsx)(c.Wn, {
                      messageType: c.QYI.ERROR,
                      className: y.errorBlock,
                      children: S.intl.string(S.t["5mlOCW"]),
                  })
                : null,
            (0, a.jsx)("div", {
                className: y.body,
                children: P,
            }),
        ],
    });
}
