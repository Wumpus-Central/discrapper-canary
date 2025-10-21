e.d(a, {
    PremiumSubscriptionPauseModalSelect: () => x,
    Sz: () => O,
}),
    e(539854),
    e(388685),
    e(642613);
var n = e(951288),
    i = e(647438),
    r = e(913527),
    s = e.n(r),
    l = e(99945),
    o = e(793030),
    c = e(755721),
    u = e(481060),
    d = e(355467),
    m = e(493773),
    p = e(74538),
    S = e(296848),
    b = e(45474),
    y = e(594135),
    h = e(981631),
    C = e(388032),
    f = e(353680);
async function k(t) {
    let {
        premiumSubscription: a,
        pauseDuration: e,
        onClose: n,
        setHasError: i,
        setIsCancelling: r,
        analyticsLocations: s,
        analyticsLocation: l,
    } = t;
    try {
        r(!0),
            i(!1),
            await (0, d.Mg)(
                a,
                { pauseDuration: e },
                {
                    amount: 0,
                    currency: a.currency,
                },
                (0, p.UX)(a.items, a.currency, a.paymentSourceId),
                s,
                l,
            ),
            n();
    } catch (t) {
        i(!0), r(!1);
    }
}
function x() {
    let {
            transitionState: t,
            onClose: a,
            setStep: e,
            setPauseDuration: r,
            pauseDuration: s,
            premiumSubscription: u,
        } = (0, y.a)(),
        d = i.useCallback(
            (t) => {
                let { value: a } = t;
                r(a);
            },
            [r],
        ),
        p = u.status === h.O0b.PAUSED ? C.intl.string(C.t.Lp9WoG) : C.intl.string(C.t.eSR83U),
        k = (function (t) {
            let a = t.status === h.O0b.PAUSED ? C.t.o3upfT : C.t.dBXZEm,
                { durations: e, currentDaysPaused: n } = (0, S.AT)(t),
                i = [];
            for (let t of e) {
                let e = l.T[t];
                i.push({
                    name: C.intl.formatToPlainString(a, { days: e - n }),
                    value: e,
                    radioItemIconClassName: f.radioOption,
                });
            }
            return (
                i.sort((t, a) => t.value - a.value),
                i.push({
                    name: C.intl.string(C.t.OCPUM6),
                    value: 0,
                    radioBarClassName: f.cancelText,
                    radioItemIconClassName: f.cancelText,
                }),
                i
            );
        })(u);
    return (
        (0, m.ZP)(() => {
            k.length < 1 || r(k[0].value);
        }),
        (0, n.jsx)(o.Modal, {
            transitionState: t,
            title: C.intl.string(C.t["f3nnB/"]),
            subtitle: p,
            onClose: async () => {
                await a();
            },
            actions: [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t.h9tkAK),
                    onClick: a,
                },
                {
                    variant: "primary",
                    disabled: null === s,
                    text: C.intl.string(C.t["3PatSz"]),
                    onClick: () => {
                        0 === s ? e(b.R.WHAT_YOU_LOSE) : e(b.R.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, n.jsx)(c.Gu, {
                options: k,
                onChange: d,
                value: s,
            }),
        })
    );
}
function O() {
    let {
            transitionState: t,
            onClose: a,
            pauseDuration: e,
            premiumSubscription: r,
            analyticsLocation: l,
            setStep: c,
            analyticsLocations: d,
        } = (0, y.a)(),
        [m, p] = i.useState(!1),
        [S, x] = i.useState(!1);
    if (null == e) return void c(b.R.PAUSE_SELECT);
    let O = null,
        P = [h.O0b.PAST_DUE, h.O0b.PAUSED].includes(r.status) ? r.currentPeriodStart : r.currentPeriodEnd,
        g = s()(P).add(e, "days").toDate();
    switch (r.status) {
        case h.O0b.PAST_DUE:
            O = C.intl.format(C.t["xaS18/"], {
                pauseDuration: e,
                resumeDate: g,
            });
            break;
        case h.O0b.PAUSED:
            O = C.intl.format(C.t.Vur3Fc, { resumeDate: g });
            break;
        default:
            O = C.intl.format(C.t.W85vFA, {
                pauseDate: P,
                resumeDate: g,
                pauseDuration: e,
            });
    }
    return (0, n.jsxs)(o.Modal, {
        title: C.intl.string(C.t.AnMG5x),
        transitionState: t,
        actions: [
            {
                text: C.intl.string(C.t.h9tkAK),
                variant: "primary",
                onClick: a,
            },
            {
                text: C.intl.string(C.t["cY+Oob"]),
                variant: "critical-primary",
                disabled: S || null == e,
                onClick: async () => {
                    await k({
                        premiumSubscription: r,
                        pauseDuration: e,
                        setIsCancelling: x,
                        setHasError: p,
                        onClose: a,
                        analyticsLocations: d,
                        analyticsLocation: l,
                    });
                },
            },
        ],
        onClose: async () => {
            await a();
        },
        children: [
            m
                ? (0, n.jsx)(u.Wn, {
                      messageType: u.QYI.ERROR,
                      className: f.errorBlock,
                      children: C.intl.string(C.t["5mlOCW"]),
                  })
                : null,
            (0, n.jsx)("div", {
                className: f.body,
                children: O,
            }),
        ],
    });
}
