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
    c = n(755721),
    u = n(481060),
    d = n(355467),
    m = n(493773),
    O = n(74538),
    f = n(296848),
    _ = n(45474),
    E = n(594135),
    p = n(981631),
    b = n(388032),
    y = n(278900);
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
                (0, O.UX)(e.items, e.currency, e.paymentSourceId),
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
            premiumSubscription: u,
        } = (0, E.a)(),
        d = r.useCallback(
            (t) => {
                let { value: e } = t;
                i(e);
            },
            [i],
        ),
        O = u.status === p.O0b.PAUSED ? b.intl.string(b.t.Lp9WoG) : b.intl.string(b.t.eSR83U),
        S = (function (t) {
            let e = t.status === p.O0b.PAUSED ? b.t.o3upfT : b.t.dBXZEm,
                { durations: n, currentDaysPaused: a } = (0, f.AT)(t),
                r = [];
            for (let t of n) {
                let n = o.T[t];
                r.push({
                    name: b.intl.formatToPlainString(e, { days: n - a }),
                    value: n,
                    radioItemIconClassName: y.radioOption,
                });
            }
            return (
                r.sort((t, e) => t.value - e.value),
                r.push({
                    name: b.intl.string(b.t.OCPUM6),
                    value: 0,
                    radioBarClassName: y.cancelText,
                    radioItemIconClassName: y.cancelText,
                }),
                r
            );
        })(u);
    return (
        (0, m.ZP)(() => {
            S.length < 1 || i(S[0].value);
        }),
        (0, a.jsx)(s.Modal, {
            transitionState: t,
            title: b.intl.string(b.t["f3nnB/"]),
            subtitle: O,
            onClose: async () => {
                await e();
            },
            actions: [
                {
                    variant: "secondary",
                    text: b.intl.string(b.t.h9tkAK),
                    onClick: e,
                },
                {
                    variant: "primary",
                    disabled: null === l,
                    text: b.intl.string(b.t["3PatSz"]),
                    onClick: () => {
                        0 === l ? n(_.R.WHAT_YOU_LOSE) : n(_.R.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(c.Gu, {
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
            setStep: c,
            analyticsLocations: d,
        } = (0, E.a)(),
        [m, O] = r.useState(!1),
        [f, C] = r.useState(!1);
    if (null == n) return void c(_.R.PAUSE_SELECT);
    let P = null,
        T = [p.O0b.PAST_DUE, p.O0b.PAUSED].includes(i.status) ? i.currentPeriodStart : i.currentPeriodEnd,
        v = l()(T).add(n, "days").toDate();
    switch (i.status) {
        case p.O0b.PAST_DUE:
            P = b.intl.format(b.t["xaS18/"], {
                pauseDuration: n,
                resumeDate: v,
            });
            break;
        case p.O0b.PAUSED:
            P = b.intl.format(b.t.Vur3Fc, { resumeDate: v });
            break;
        default:
            P = b.intl.format(b.t.W85vFA, {
                pauseDate: T,
                resumeDate: v,
                pauseDuration: n,
            });
    }
    return (0, a.jsxs)(s.Modal, {
        title: b.intl.string(b.t.AnMG5x),
        transitionState: t,
        actions: [
            {
                text: b.intl.string(b.t.h9tkAK),
                variant: "primary",
                onClick: e,
            },
            {
                text: b.intl.string(b.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: f || null == n,
                onClick: async () => {
                    await S({
                        premiumSubscription: i,
                        pauseDuration: n,
                        setIsCancelling: C,
                        setHasError: O,
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
            m
                ? (0, a.jsx)(u.Wn, {
                      messageType: u.QYI.ERROR,
                      className: y.errorBlock,
                      children: b.intl.string(b.t["5mlOCW"]),
                  })
                : null,
            (0, a.jsx)("div", {
                className: y.body,
                children: P,
            }),
        ],
    });
}
