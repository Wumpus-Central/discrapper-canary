n.d(e, {
    Sz: () => v,
    of: () => S,
}),
    n(539854),
    n(388685),
    n(642613);
var a = n(951288),
    r = n(647438),
    i = n(913527),
    l = n.n(i),
    o = n(99945),
    s = n(82659),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    _ = n(493773),
    f = n(74538),
    O = n(296848),
    E = n(45474),
    m = n(594135),
    p = n(981631),
    y = n(388032),
    b = n(353680);
async function C(t) {
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
                (0, f.UX)(e.items, e.currency, e.paymentSourceId),
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
        } = (0, m.a)(),
        d = r.useCallback(
            (t) => {
                let { value: e } = t;
                i(e);
            },
            [i],
        ),
        f = u.status === p.O0b.PAUSED ? y.intl.string(y.t.Lp9WoK) : y.intl.string(y.t.eSR83d),
        C = (function (t) {
            let e = t.status === p.O0b.PAUSED ? y.t.o3upfX : y.t.dBXZEh,
                { durations: n, currentDaysPaused: a } = (0, O.AT)(t),
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
                    name: y.intl.string(y.t.OCPUMz),
                    value: 0,
                    radioBarClassName: b.cancelText,
                    radioItemIconClassName: b.cancelText,
                }),
                r
            );
        })(u);
    return (
        (0, _.ZP)(() => {
            C.length < 1 || i(C[0].value);
        }),
        (0, a.jsx)(s.Modal, {
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
                    disabled: null === l,
                    text: y.intl.string(y.t["3PatS0"]),
                    onClick: () => {
                        0 === l ? n(E.R.WHAT_YOU_LOSE) : n(E.R.PAUSE_CONFIRM);
                    },
                },
            ],
            children: (0, a.jsx)(c.Gu, {
                options: C,
                onChange: d,
                value: l,
            }),
        })
    );
}
function v() {
    let {
            transitionState: t,
            onClose: e,
            pauseDuration: n,
            premiumSubscription: i,
            analyticsLocation: o,
            setStep: c,
            analyticsLocations: d,
        } = (0, m.a)(),
        [_, f] = r.useState(!1),
        [O, S] = r.useState(!1);
    if (null == n) return void c(E.R.PAUSE_SELECT);
    let v = null,
        R = [p.O0b.PAST_DUE, p.O0b.PAUSED].includes(i.status) ? i.currentPeriodStart : i.currentPeriodEnd,
        P = l()(R).add(n, "days").toDate();
    switch (i.status) {
        case p.O0b.PAST_DUE:
            v = y.intl.format(y.t["xaS18/"], {
                pauseDuration: n,
                resumeDate: P,
            });
            break;
        case p.O0b.PAUSED:
            v = y.intl.format(y.t.Vur3FR, { resumeDate: P });
            break;
        default:
            v = y.intl.format(y.t.W85vFB, {
                pauseDate: R,
                resumeDate: P,
                pauseDuration: n,
            });
    }
    return (0, a.jsxs)(s.Modal, {
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
                disabled: O || null == n,
                onClick: async () => {
                    await C({
                        premiumSubscription: i,
                        pauseDuration: n,
                        setIsCancelling: S,
                        setHasError: f,
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
                ? (0, a.jsx)(u.Wn, {
                      messageType: u.QYI.ERROR,
                      className: b.errorBlock,
                      children: y.intl.string(y.t["5mlOCQ"]),
                  })
                : null,
            (0, a.jsx)("div", {
                className: b.body,
                children: v,
            }),
        ],
    });
}
