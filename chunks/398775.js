n.d(t, {
    Sz: () => O,
    of: () => j,
}),
    n(539854),
    n(388685),
    n(642613);
var i = n(255367),
    r = n(73800),
    a = n(913527),
    s = n.n(a),
    o = n(99945),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    m = n(493773),
    p = n(410030),
    _ = n(906732),
    f = n(600164),
    b = n(74538),
    x = n(296848),
    y = n(798769),
    h = n(981631),
    g = n(388032),
    C = n(714421);
async function E(e) {
    let {
        premiumSubscription: t,
        pauseDuration: n,
        onClose: i,
        setHasError: r,
        setIsCancelling: a,
        analyticsLocations: s,
        analyticsLocation: o,
    } = e;
    try {
        a(!0),
            r(!1),
            await (0, d.Mg)(
                t,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: t.currency,
                },
                (0, b.UX)(t.items, t.currency, t.paymentSourceId),
                s,
                o,
            ),
            i();
    } catch (e) {
        r(!0), a(!1);
    }
}
function j(e) {
    let { premiumType: t, onClose: n, pauseDuration: a, setPauseDuration: s, footer: l, premiumSubscription: c } = e,
        d = r.useCallback(
            (e) => {
                let { value: t } = e;
                s(t);
            },
            [s],
        ),
        p = c.status === h.O0b.PAUSED ? g.intl.string(g.t.Lp9WoK) : g.intl.string(g.t.eSR83d),
        _ = (function (e) {
            let t = e.status === h.O0b.PAUSED ? g.t.o3upfX : g.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, x.AT)(e),
                r = [];
            for (let e of n) {
                let n = o.T[e];
                r.push({
                    name: g.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: C.radioOption,
                });
            }
            return (
                r.sort((e, t) => e.value - t.value),
                r.push({
                    name: g.intl.string(g.t.OCPUMz),
                    value: 0,
                    radioBarClassName: C.cancelText,
                    radioItemIconClassName: C.cancelText,
                }),
                r
            );
        })(c);
    return (
        (0, m.ZP)(() => {
            _.length < 1 || s(_[0].value);
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(y.Z, {
                    premiumType: t,
                    onClose: n,
                }),
                (0, i.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, i.jsxs)("div", {
                        className: C.__invalid_header,
                        children: [
                            (0, i.jsx)(u.X6q, {
                                variant: "heading-xl/bold",
                                className: C.__invalid_modalHeader,
                                children: g.intl.string(g.t.f3nnBw),
                            }),
                            (0, i.jsx)(u.X6q, {
                                variant: "heading-sm/medium",
                                className: C.subtitle,
                                children: p,
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(u.hzk, {
                    className: C.body,
                    children: (0, i.jsx)(u.FXm, {
                        options: _,
                        onChange: d,
                        value: a,
                    }),
                }),
                (0, i.jsx)(u.mzw, {
                    justify: f.Z.Justify.START,
                    children: l,
                }),
            ],
        })
    );
}
function O(e) {
    let { premiumSubscription: t, premiumType: n, onClose: a, pauseDuration: o, analyticsLocation: d } = e,
        [m, b] = r.useState(!1),
        { analyticsLocations: x } = (0, _.ZP)(),
        [j, O] = r.useState(!1),
        P = (0, p.ZP)(),
        N = null,
        v = null,
        I = [h.O0b.PAST_DUE, h.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        T = s()(I).add(o, "days").toDate();
    switch (t.status) {
        case h.O0b.PAST_DUE:
            v = g.intl.format(g.t["xaS18/"], {
                pauseDuration: o,
                resumeDate: T,
            });
            break;
        case h.O0b.PAUSED:
            v = g.intl.format(g.t.Vur3FR, { resumeDate: T });
            break;
        default:
            v = g.intl.format(g.t.W85vFB, {
                pauseDate: I,
                resumeDate: T,
                pauseDuration: o,
            });
    }
    return (
        (N = (0, i.jsx)("div", {
            className: C.body,
            children: v,
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(y.Z, {
                    premiumType: n,
                    onClose: a,
                }),
                (0, i.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, i.jsx)("div", {
                        className: C.__invalid_header,
                        children: (0, i.jsx)(u.X6q, {
                            variant: "heading-xl/bold",
                            className: C.__invalid_modalHeader,
                            children: g.intl.string(g.t["AnMG5+"]),
                        }),
                    }),
                }),
                (0, i.jsxs)(u.hzk, {
                    className: C.body,
                    children: [
                        m
                            ? (0, i.jsx)(u.kzN, {
                                  className: C.errorBlock,
                                  children: g.intl.string(g.t["5mlOCQ"]),
                              })
                            : null,
                        N,
                    ],
                }),
                (0, i.jsx)(u.mzw, {
                    justify: f.Z.Justify.START,
                    children: (0, i.jsxs)("div", {
                        className: C.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(u.zxk, {
                                variant: "critical-primary",
                                text: g.intl.string(g.t["cY+Ooa"]),
                                disabled: j || null == o,
                                onClick: async () => {
                                    await E({
                                        premiumSubscription: t,
                                        pauseDuration: o,
                                        setIsCancelling: O,
                                        setHasError: b,
                                        onClose: a,
                                        analyticsLocations: x,
                                        analyticsLocation: d,
                                    });
                                },
                            }),
                            (0, i.jsx)(c.zx, {
                                look: c.zx.Looks.LINK,
                                color: (0, l.wj)(P) ? c.zx.Colors.WHITE : c.zx.Colors.PRIMARY,
                                onClick: a,
                                children: g.intl.string(g.t.h9tkAA),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
