(n.d(t, {
    Sz: () => P,
    of: () => O
}),
    n(539854),
    n(388685),
    n(642613));
var r = n(255367),
    i = n(73800),
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
    C = n(388032),
    j = n(714421);
async function E(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: r, setHasError: i, setIsCancelling: a, analyticsLocations: s, analyticsLocation: o } = e;
    try {
        (a(!0),
            i(!1),
            await (0, d.Mg)(
                t,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: t.currency
                },
                (0, b.UX)(t.items, t.currency, t.paymentSourceId),
                s,
                o
            ),
            r());
    } catch (e) {
        (i(!0), a(!1));
    }
}
function O(e) {
    let { premiumType: t, onClose: n, pauseDuration: a, setPauseDuration: s, footer: l, premiumSubscription: c } = e,
        d = i.useCallback(
            (e) => {
                let { value: t } = e;
                s(t);
            },
            [s]
        ),
        p = c.status === h.O0b.PAUSED ? C.intl.string(C.t.Lp9WoK) : C.intl.string(C.t.eSR83d),
        _ = (function (e) {
            let t = e.status === h.O0b.PAUSED ? C.t.o3upfX : C.t.dBXZEh,
                { durations: n, currentDaysPaused: r } = (0, x.AT)(e),
                i = [];
            for (let e of n) {
                let n = o.T[e];
                i.push({
                    name: C.intl.formatToPlainString(t, { days: n - r }),
                    value: n,
                    radioItemIconClassName: j.radioOption
                });
            }
            return (
                i.sort((e, t) => e.value - t.value),
                i.push({
                    name: C.intl.string(C.t.OCPUMz),
                    value: 0,
                    radioBarClassName: j.cancelText,
                    radioItemIconClassName: j.cancelText
                }),
                i
            );
        })(c);
    return (
        (0, m.ZP)(() => {
            _.length < 1 || s(_[0].value);
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.Z, {
                    premiumType: t,
                    onClose: n
                }),
                (0, r.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, r.jsxs)('div', {
                        className: j.__invalid_header,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                variant: 'heading-xl/bold',
                                className: j.__invalid_modalHeader,
                                children: C.intl.string(C.t.f3nnBw)
                            }),
                            (0, r.jsx)(u.X6q, {
                                variant: 'heading-sm/medium',
                                className: j.subtitle,
                                children: p
                            })
                        ]
                    })
                }),
                (0, r.jsx)(u.hzk, {
                    className: j.body,
                    children: (0, r.jsx)(u.FXm, {
                        options: _,
                        onChange: d,
                        value: a
                    })
                }),
                (0, r.jsx)(u.mzw, {
                    justify: f.Z.Justify.START,
                    children: l
                })
            ]
        })
    );
}
function P(e) {
    let { premiumSubscription: t, premiumType: n, onClose: a, pauseDuration: o, analyticsLocation: d } = e,
        [m, b] = i.useState(!1),
        { analyticsLocations: x } = (0, _.ZP)(),
        [O, P] = i.useState(!1),
        g = (0, p.ZP)(),
        v = null,
        N = null,
        I = [h.O0b.PAST_DUE, h.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        T = s()(I).add(o, 'days').toDate();
    switch (t.status) {
        case h.O0b.PAST_DUE:
            N = C.intl.format(C.t['xaS18/'], {
                pauseDuration: o,
                resumeDate: T
            });
            break;
        case h.O0b.PAUSED:
            N = C.intl.format(C.t.Vur3FR, { resumeDate: T });
            break;
        default:
            N = C.intl.format(C.t.W85vFB, {
                pauseDate: I,
                resumeDate: T,
                pauseDuration: o
            });
    }
    return (
        (v = (0, r.jsx)('div', {
            className: j.body,
            children: N
        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.Z, {
                    premiumType: n,
                    onClose: a
                }),
                (0, r.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, r.jsx)('div', {
                        className: j.__invalid_header,
                        children: (0, r.jsx)(u.X6q, {
                            variant: 'heading-xl/bold',
                            className: j.__invalid_modalHeader,
                            children: C.intl.string(C.t['AnMG5+'])
                        })
                    })
                }),
                (0, r.jsxs)(u.hzk, {
                    className: j.body,
                    children: [
                        m
                            ? (0, r.jsx)(u.kzN, {
                                  className: j.errorBlock,
                                  children: C.intl.string(C.t['5mlOCQ'])
                              })
                            : null,
                        v
                    ]
                }),
                (0, r.jsx)(u.mzw, {
                    justify: f.Z.Justify.START,
                    children: (0, r.jsxs)('div', {
                        className: j.whatYouLoseButtonContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                variant: 'critical-primary',
                                text: C.intl.string(C.t['cY+Ooa']),
                                disabled: O || null == o,
                                onClick: async () => {
                                    await E({
                                        premiumSubscription: t,
                                        pauseDuration: o,
                                        setIsCancelling: P,
                                        setHasError: b,
                                        onClose: a,
                                        analyticsLocations: x,
                                        analyticsLocation: d
                                    });
                                }
                            }),
                            (0, r.jsx)(c.zx, {
                                look: c.zx.Looks.LINK,
                                color: (0, l.wj)(g) ? c.zx.Colors.WHITE : c.zx.Colors.PRIMARY,
                                onClick: a,
                                children: C.intl.string(C.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
