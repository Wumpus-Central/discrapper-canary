n.d(e, {
    Sz: () => R,
    of: () => C,
}),
    n(539854),
    n(388685),
    n(642613);
var a = n(951288),
    r = n(647438),
    l = n(913527),
    i = n.n(l),
    s = n(99945),
    o = n(793030),
    u = n(755721),
    c = n(481060),
    d = n(355467),
    O = n(493773),
    f = n(74538),
    _ = n(296848),
    E = n(45474),
    m = n(594135),
    p = n(981631),
    y = n(388032),
    S = n(353680);
async function b(t) {
    let {
        premiumSubscription: e,
        pauseDuration: n,
        onClose: a,
        setHasError: r,
        setIsCancelling: l,
        analyticsLocations: i,
        analyticsLocation: s,
    } = t;
    try {
        l(!0),
            r(!1),
            await (0, d.Mg)(
                e,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: e.currency,
                },
                (0, f.UX)(e.items, e.currency, e.paymentSourceId),
                i,
                s,
            ),
            a();
    } catch (t) {
        r(!0), l(!1);
    }
}
function C() {
    let {
            transitionState: t,
            onClose: e,
            setStep: n,
            setPauseDuration: l,
            pauseDuration: i,
            premiumSubscription: c,
        } = (0, m.a)(),
        d = r.useCallback(
            (t) => {
                let { value: e } = t;
                l(e);
            },
            [l],
        ),
        f = c.status === p.O0b.PAUSED ? y.intl.string(y.t.Lp9WoK) : y.intl.string(y.t.eSR83d),
        b = (function (t) {
            let e = t.status === p.O0b.PAUSED ? y.t.o3upfX : y.t.dBXZEh,
                { durations: n, currentDaysPaused: a } = (0, _.AT)(t),
                r = [];
            for (let t of n) {
                let n = s.T[t];
                r.push({
                    name: y.intl.formatToPlainString(e, { days: n - a }),
                    value: n,
                    radioItemIconClassName: S.radioOption,
                });
            }
            return (
                r.sort((t, e) => t.value - e.value),
                r.push({
                    name: y.intl.string(y.t.OCPUMz),
                    value: 0,
                    radioBarClassName: S.cancelText,
                    radioItemIconClassName: S.cancelText,
                }),
                r
            );
        })(c);
    return (
        (0, O.ZP)(() => {
            b.length < 1 || l(b[0].value);
        }),
        (0, a.jsx)(o.Modal, {
            transitionState: t,
            title: y.intl.string(y.t.f3nnBw),
            subtitle: f,
            onClose: async () => {
                await e();
            },
            actions: [
                {
                    variant: "secondary",
                    text: y.intl.string(y.t.h9tkAA),
                    onClick: e,
                },
                {
                    variant: "primary",
                    disabled: null === i,
                    text: y.intl.string(y.t["3PatS0"]),
                    onClick: () => {
                        0 === i ? n(E.R.WHAT_YOU_LOSE) : n(E.R.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(u.Gu, {
                options: b,
                onChange: d,
                value: i,
            }),
        })
    );
}
function R() {
    let {
            transitionState: t,
            onClose: e,
            pauseDuration: n,
            premiumSubscription: l,
            analyticsLocation: s,
            setStep: u,
            analyticsLocations: d,
        } = (0, m.a)(),
        [O, f] = r.useState(!1),
        [_, C] = r.useState(!1);
    if (null == n) return void u(E.R.PAUSE_SELECT);
    let R = null,
        P = [p.O0b.PAST_DUE, p.O0b.PAUSED].includes(l.status) ? l.currentPeriodStart : l.currentPeriodEnd,
        v = i()(P).add(n, "days").toDate();
    switch (l.status) {
        case p.O0b.PAST_DUE:
            R = y.intl.format(y.t["xaS18/"], {
                pauseDuration: n,
                resumeDate: v,
            });
            break;
        case p.O0b.PAUSED:
            R = y.intl.format(y.t.Vur3FR, { resumeDate: v });
            break;
        default:
            R = y.intl.format(y.t.W85vFB, {
                pauseDate: P,
                resumeDate: v,
                pauseDuration: n,
            });
    }
    return (0, a.jsxs)(o.Modal, {
        title: y.intl.string(y.t["AnMG5+"]),
        transitionState: t,
        actions: [
            {
                text: y.intl.string(y.t.h9tkAA),
                variant: "primary",
                onClick: e,
            },
            {
                text: y.intl.string(y.t["cY+Ooa"]),
                variant: "critical-primary",
                disabled: _ || null == n,
                onClick: async () => {
                    await b({
                        premiumSubscription: l,
                        pauseDuration: n,
                        setIsCancelling: C,
                        setHasError: f,
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
            O
                ? (0, a.jsx)(c.Wn, {
                      messageType: c.QYI.ERROR,
                      className: S.errorBlock,
                      children: y.intl.string(y.t["5mlOCQ"]),
                  })
                : null,
            (0, a.jsx)("div", {
                className: S.body,
                children: R,
            }),
        ],
    });
}
