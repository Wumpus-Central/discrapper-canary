n.d(e, {
    PremiumSubscriptionPauseModalSelect: () => C,
    Sz: () => P,
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
    u = n(755721),
    c = n(481060),
    d = n(355467),
    _ = n(493773),
    m = n(74538),
    f = n(296848),
    O = n(45474),
    E = n(594135),
    p = n(981631),
    y = n(388032),
    b = n(353680);
async function S(t) {
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
            await (0, d.Mg)(
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
        m = c.status === p.O0b.PAUSED ? y.intl.string(y.t.Lp9WoG) : y.intl.string(y.t.eSR83U),
        S = (function (t) {
            let e = t.status === p.O0b.PAUSED ? y.t.o3upfT : y.t.dBXZEm,
                { durations: n, currentDaysPaused: a } = (0, f.AT)(t),
                r = [];
            for (let t of n) {
                let n = o.T[t];
                r.push({
                    name: y.intl.formatToPlainString(e, { days: n - a }),
                    value: n,
                    radioItemIconClassName: b.radioOption,
                });
            }
            return (
                r.sort((t, e) => t.value - e.value),
                r.push({
                    name: y.intl.string(y.t.OCPUM6),
                    value: 0,
                    radioBarClassName: b.cancelText,
                    radioItemIconClassName: b.cancelText,
                }),
                r
            );
        })(c);
    return (
        (0, _.ZP)(() => {
            S.length < 1 || i(S[0].value);
        }),
        (0, a.jsx)(s.Modal, {
            transitionState: t,
            title: y.intl.string(y.t["f3nnB/"]),
            subtitle: m,
            onClose: async () => {
                await e();
            },
            actions: [
                {
                    variant: "secondary",
                    text: y.intl.string(y.t.h9tkAK),
                    onClick: e,
                },
                {
                    variant: "primary",
                    disabled: null === l,
                    text: y.intl.string(y.t["3PatSz"]),
                    onClick: () => {
                        0 === l ? n(O.R.WHAT_YOU_LOSE) : n(O.R.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(u.Gu, {
                options: S,
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
            analyticsLocation: o,
            setStep: u,
            analyticsLocations: d,
        } = (0, E.a)(),
        [_, m] = r.useState(!1),
        [f, C] = r.useState(!1);
    if (null == n) return void u(O.R.PAUSE_SELECT);
    let P = null,
        v = [p.O0b.PAST_DUE, p.O0b.PAUSED].includes(i.status) ? i.currentPeriodStart : i.currentPeriodEnd,
        T = l()(v).add(n, "days").toDate();
    switch (i.status) {
        case p.O0b.PAST_DUE:
            P = y.intl.format(y.t["xaS18/"], {
                pauseDuration: n,
                resumeDate: T,
            });
            break;
        case p.O0b.PAUSED:
            P = y.intl.format(y.t.Vur3Fc, { resumeDate: T });
            break;
        default:
            P = y.intl.format(y.t.W85vFA, {
                pauseDate: v,
                resumeDate: T,
                pauseDuration: n,
            });
    }
    return (0, a.jsxs)(s.Modal, {
        title: y.intl.string(y.t.AnMG5x),
        transitionState: t,
        actions: [
            {
                text: y.intl.string(y.t.h9tkAK),
                variant: "primary",
                onClick: e,
            },
            {
                text: y.intl.string(y.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: f || null == n,
                onClick: async () => {
                    await S({
                        premiumSubscription: i,
                        pauseDuration: n,
                        setIsCancelling: C,
                        setHasError: m,
                        onClose: e,
                        analyticsLocations: d,
                        analyticsLocation: o,
                    });
                },
            },
        ],
        onClose: async () => {
            await e();
        },
        children: [
            _
                ? (0, a.jsx)(c.Wn, {
                      messageType: c.QYI.ERROR,
                      className: b.errorBlock,
                      children: y.intl.string(y.t["5mlOCW"]),
                  })
                : null,
            (0, a.jsx)("div", {
                className: b.body,
                children: P,
            }),
        ],
    });
}
