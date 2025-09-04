n.d(e, {
    Sz: () => N,
    of: () => b,
}),
    n(539854),
    n(388685),
    n(642613);
var i = n(951288),
    a = n(647438),
    r = n(913527),
    s = n.n(r),
    l = n(99945),
    o = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    m = n(493773),
    p = n(410030),
    x = n(906732),
    f = n(600164),
    _ = n(74538),
    y = n(296848),
    h = n(798769),
    j = n(981631),
    E = n(388032),
    g = n(353680);
async function C(t) {
    let {
        premiumSubscription: e,
        pauseDuration: n,
        onClose: i,
        setHasError: a,
        setIsCancelling: r,
        analyticsLocations: s,
        analyticsLocation: l,
    } = t;
    try {
        r(!0),
            a(!1),
            await (0, d.Mg)(
                e,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: e.currency,
                },
                (0, _.UX)(e.items, e.currency, e.paymentSourceId),
                s,
                l,
            ),
            i();
    } catch (t) {
        a(!0), r(!1);
    }
}
function b(t) {
    let { premiumType: e, onClose: n, pauseDuration: r, setPauseDuration: s, footer: o, premiumSubscription: d } = t,
        p = a.useCallback(
            (t) => {
                let { value: e } = t;
                s(e);
            },
            [s],
        ),
        x = d.status === j.O0b.PAUSED ? E.intl.string(E.t.Lp9WoK) : E.intl.string(E.t.eSR83d),
        _ = (function (t) {
            let e = t.status === j.O0b.PAUSED ? E.t.o3upfX : E.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, y.AT)(t),
                a = [];
            for (let t of n) {
                let n = l.T[t];
                a.push({
                    name: E.intl.formatToPlainString(e, { days: n - i }),
                    value: n,
                    radioItemIconClassName: g.radioOption,
                });
            }
            return (
                a.sort((t, e) => t.value - e.value),
                a.push({
                    name: E.intl.string(E.t.OCPUMz),
                    value: 0,
                    radioBarClassName: g.cancelText,
                    radioItemIconClassName: g.cancelText,
                }),
                a
            );
        })(d);
    return (
        (0, m.ZP)(() => {
            _.length < 1 || s(_[0].value);
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.Z, {
                    premiumType: e,
                    onClose: n,
                }),
                (0, i.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, i.jsxs)("div", {
                        className: g.__invalid_header,
                        children: [
                            (0, i.jsx)(u.X6q, {
                                variant: "heading-xl/bold",
                                className: g.__invalid_modalHeader,
                                children: E.intl.string(E.t.f3nnBw),
                            }),
                            (0, i.jsx)(u.X6q, {
                                variant: "heading-sm/medium",
                                className: g.subtitle,
                                children: x,
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(u.hzk, {
                    className: g.body,
                    children: (0, i.jsx)(c.Gu, {
                        options: _,
                        onChange: p,
                        value: r,
                    }),
                }),
                (0, i.jsx)(u.mzw, {
                    justify: f.Z.Justify.START,
                    children: o,
                }),
            ],
        })
    );
}
function N(t) {
    let { premiumSubscription: e, premiumType: n, onClose: r, pauseDuration: l, analyticsLocation: d } = t,
        [m, _] = a.useState(!1),
        { analyticsLocations: y } = (0, x.ZP)(),
        [b, N] = a.useState(!1),
        O = (0, p.ZP)(),
        P = null,
        I = null,
        T = [j.O0b.PAST_DUE, j.O0b.PAUSED].includes(e.status) ? e.currentPeriodStart : e.currentPeriodEnd,
        R = s()(T).add(l, "days").toDate();
    switch (e.status) {
        case j.O0b.PAST_DUE:
            I = E.intl.format(E.t["xaS18/"], {
                pauseDuration: l,
                resumeDate: R,
            });
            break;
        case j.O0b.PAUSED:
            I = E.intl.format(E.t.Vur3FR, { resumeDate: R });
            break;
        default:
            I = E.intl.format(E.t.W85vFB, {
                pauseDate: T,
                resumeDate: R,
                pauseDuration: l,
            });
    }
    return (
        (P = (0, i.jsx)("div", {
            className: g.body,
            children: I,
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.Z, {
                    premiumType: n,
                    onClose: r,
                }),
                (0, i.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, i.jsx)("div", {
                        className: g.__invalid_header,
                        children: (0, i.jsx)(u.X6q, {
                            variant: "heading-xl/bold",
                            className: g.__invalid_modalHeader,
                            children: E.intl.string(E.t["AnMG5+"]),
                        }),
                    }),
                }),
                (0, i.jsxs)(u.hzk, {
                    className: g.body,
                    children: [
                        m
                            ? (0, i.jsx)(u.kzN, {
                                  className: g.errorBlock,
                                  children: E.intl.string(E.t["5mlOCQ"]),
                              })
                            : null,
                        P,
                    ],
                }),
                (0, i.jsx)(u.mzw, {
                    justify: f.Z.Justify.START,
                    children: (0, i.jsxs)("div", {
                        className: g.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(u.zxk, {
                                variant: "critical-primary",
                                text: E.intl.string(E.t["cY+Ooa"]),
                                disabled: b || null == l,
                                onClick: async () => {
                                    await C({
                                        premiumSubscription: e,
                                        pauseDuration: l,
                                        setIsCancelling: N,
                                        setHasError: _,
                                        onClose: r,
                                        analyticsLocations: y,
                                        analyticsLocation: d,
                                    });
                                },
                            }),
                            (0, i.jsx)(c.zx, {
                                look: c.zx.Looks.LINK,
                                color: (0, o.wj)(O) ? c.zx.Colors.WHITE : c.zx.Colors.PRIMARY,
                                onClick: r,
                                children: E.intl.string(E.t.h9tkAA),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
