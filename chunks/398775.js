n.d(e, {
    PremiumSubscriptionPauseModalSelect: () => S,
    Sz: () => C,
}),
    n(539854),
    n(388685),
    n(642613);
var a = n(54381),
    r = n(473749),
    i = n(913527),
    l = n.n(i),
    o = n(99945),
    s = n(793030),
    c = n(755721),
    u = n(355467),
    d = n(493773),
    m = n(74538),
    f = n(296848),
    O = n(45474),
    _ = n(594135),
    E = n(981631),
    p = n(388032),
    b = n(278900);
async function y(t) {
    let {
        premiumSubscription: e,
        pauseDuration: n,
        onClose: a,
        setHasError: r,
        setIsCancelling: i,
        analyticsLocations: l,
        analyticsLocation: o,
    } = t;
    try {
        i(!0),
            r(!1),
            await (0, u.Mg)(
                e,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: e.currency,
                },
                (0, m.UX)(e.items, e.currency, e.paymentSourceId),
                l,
                o,
            ),
            a();
    } catch (t) {
        r(!0), i(!1);
    }
}
function S() {
    let {
            transitionState: t,
            onClose: e,
            setStep: n,
            setPauseDuration: i,
            pauseDuration: l,
            premiumSubscription: u,
        } = (0, _.a)(),
        m = r.useCallback(
            (t) => {
                let { value: e } = t;
                i(e);
            },
            [i],
        ),
        y = u.status === E.O0b.PAUSED ? p.intl.string(p.t.Lp9WoG) : p.intl.string(p.t.eSR83U),
        S = (function (t) {
            let e = t.status === E.O0b.PAUSED ? p.t.o3upfT : p.t.dBXZEm,
                { durations: n, currentDaysPaused: a } = (0, f.AT)(t),
                r = [];
            for (let t of n) {
                let n = o.T[t];
                r.push({
                    name: p.intl.formatToPlainString(e, { days: n - a }),
                    value: n,
                    radioItemIconClassName: b.radioOption,
                });
            }
            return (
                r.sort((t, e) => t.value - e.value),
                r.push({
                    name: p.intl.string(p.t.OCPUM6),
                    value: 0,
                    radioBarClassName: b.cancelText,
                    radioItemIconClassName: b.cancelText,
                }),
                r
            );
        })(u);
    return (
        (0, d.ZP)(() => {
            S.length < 1 || i(S[0].value);
        }),
        (0, a.jsx)(s.Modal, {
            transitionState: t,
            title: p.intl.string(p.t["f3nnB/"]),
            subtitle: y,
            onClose: async () => {
                await e();
            },
            actions: [
                {
                    variant: "secondary",
                    text: p.intl.string(p.t.h9tkAK),
                    onClick: e,
                },
                {
                    variant: "primary",
                    disabled: null === l,
                    text: p.intl.string(p.t["3PatSz"]),
                    onClick: () => {
                        0 === l ? n(O.R.WHAT_YOU_LOSE) : n(O.R.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(c.Gu, {
                "data-migration-pending": !0,
                options: S,
                onChange: m,
                value: l,
            }),
        })
    );
}
function C() {
    let {
            transitionState: t,
            onClose: e,
            pauseDuration: n,
            premiumSubscription: i,
            analyticsLocation: o,
            setStep: c,
            analyticsLocations: u,
        } = (0, _.a)(),
        [d, m] = r.useState(!1),
        [f, S] = r.useState(!1);
    if (null == n) return void c(O.R.PAUSE_SELECT);
    let C = null,
        P = [E.O0b.PAST_DUE, E.O0b.PAUSED].includes(i.status) ? i.currentPeriodStart : i.currentPeriodEnd,
        v = l()(P).add(n, "days").toDate();
    switch (i.status) {
        case E.O0b.PAST_DUE:
            C = p.intl.format(p.t["xaS18/"], {
                pauseDuration: n,
                resumeDate: v,
            });
            break;
        case E.O0b.PAUSED:
            C = p.intl.format(p.t.Vur3Fc, { resumeDate: v });
            break;
        default:
            C = p.intl.format(p.t.W85vFA, {
                pauseDate: P,
                resumeDate: v,
                pauseDuration: n,
            });
    }
    return (0, a.jsxs)(s.Modal, {
        title: p.intl.string(p.t.AnMG5x),
        transitionState: t,
        actions: [
            {
                text: p.intl.string(p.t.h9tkAK),
                variant: "primary",
                onClick: e,
            },
            {
                text: p.intl.string(p.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: f || null == n,
                onClick: async () => {
                    await y({
                        premiumSubscription: i,
                        pauseDuration: n,
                        setIsCancelling: S,
                        setHasError: m,
                        onClose: e,
                        analyticsLocations: u,
                        analyticsLocation: o,
                    });
                },
            },
        ],
        onClose: async () => {
            await e();
        },
        children: [
            d
                ? (0, a.jsx)("div", {
                      className: b.errorBlock,
                      children: (0, a.jsx)(s.M14, {
                          type: "critical",
                          children: p.intl.string(p.t["5mlOCW"]),
                      }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: b.body,
                children: C,
            }),
        ],
    });
}
