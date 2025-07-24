(n.d(e, {
    Sz: () => P,
    of: () => j
}),
    n(539854),
    n(388685),
    n(642613));
var r = n(255367),
    i = n(73800),
    o = n(913527),
    a = n.n(o),
    s = n(99945),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    m = n(493773),
    _ = n(410030),
    p = n(906732),
    f = n(600164),
    C = n(74538),
    h = n(296848),
    x = n(798769),
    y = n(981631),
    b = n(388032),
    g = n(714421);
async function I(t) {
    let { premiumSubscription: e, pauseDuration: n, onClose: r, setHasError: i, setIsCancelling: o, analyticsLocations: a, analyticsLocation: s } = t;
    try {
        (o(!0),
            i(!1),
            await (0, d.Mg)(
                e,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: e.currency
                },
                (0, C.UX)(e.items, e.currency, e.paymentSourceId),
                a,
                s
            ),
            r());
    } catch (t) {
        (i(!0), o(!1));
    }
}
function j(t) {
    let { premiumType: e, onClose: n, pauseDuration: o, setPauseDuration: a, footer: l, premiumSubscription: c } = t,
        d = i.useCallback(
            (t) => {
                let { value: e } = t;
                a(e);
            },
            [a]
        ),
        _ = c.status === y.O0b.PAUSED ? b.intl.string(b.t.Lp9WoK) : b.intl.string(b.t.eSR83d),
        p = (function (t) {
            let e = t.status === y.O0b.PAUSED ? b.t.o3upfX : b.t.dBXZEh,
                { durations: n, currentDaysPaused: r } = (0, h.AT)(t),
                i = [];
            for (let t of n) {
                let n = s.T[t];
                i.push({
                    name: b.intl.formatToPlainString(e, { days: n - r }),
                    value: n,
                    radioItemIconClassName: g.radioOption
                });
            }
            return (
                i.sort((t, e) => t.value - e.value),
                i.push({
                    name: b.intl.string(b.t.OCPUMz),
                    value: 0,
                    radioBarClassName: g.cancelText,
                    radioItemIconClassName: g.cancelText
                }),
                i
            );
        })(c);
    return (
        (0, m.ZP)(() => {
            p.length < 1 || a(p[0].value);
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x.Z, {
                    premiumType: e,
                    onClose: n
                }),
                (0, r.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, r.jsxs)('div', {
                        className: g.__invalid_header,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                variant: 'heading-xl/bold',
                                className: g.__invalid_modalHeader,
                                children: b.intl.string(b.t.f3nnBw)
                            }),
                            (0, r.jsx)(u.X6q, {
                                variant: 'heading-sm/medium',
                                className: g.subtitle,
                                children: _
                            })
                        ]
                    })
                }),
                (0, r.jsx)(u.hzk, {
                    className: g.body,
                    children: (0, r.jsx)(u.FXm, {
                        options: p,
                        onChange: d,
                        value: o
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
function P(t) {
    let { premiumSubscription: e, premiumType: n, onClose: o, pauseDuration: s, analyticsLocation: d } = t,
        [m, C] = i.useState(!1),
        { analyticsLocations: h } = (0, p.ZP)(),
        [j, P] = i.useState(!1),
        v = (0, _.ZP)(),
        T = null,
        E = null,
        O = [y.O0b.PAST_DUE, y.O0b.PAUSED].includes(e.status) ? e.currentPeriodStart : e.currentPeriodEnd,
        S = a()(O).add(s, 'days').toDate();
    switch (e.status) {
        case y.O0b.PAST_DUE:
            E = b.intl.format(b.t['xaS18/'], {
                pauseDuration: s,
                resumeDate: S
            });
            break;
        case y.O0b.PAUSED:
            E = b.intl.format(b.t.Vur3FR, { resumeDate: S });
            break;
        default:
            E = b.intl.format(b.t.W85vFB, {
                pauseDate: O,
                resumeDate: S,
                pauseDuration: s
            });
    }
    return (
        (T = (0, r.jsx)('div', {
            className: g.body,
            children: E
        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x.Z, {
                    premiumType: n,
                    onClose: o
                }),
                (0, r.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, r.jsx)('div', {
                        className: g.__invalid_header,
                        children: (0, r.jsx)(u.X6q, {
                            variant: 'heading-xl/bold',
                            className: g.__invalid_modalHeader,
                            children: b.intl.string(b.t['AnMG5+'])
                        })
                    })
                }),
                (0, r.jsxs)(u.hzk, {
                    className: g.body,
                    children: [
                        m
                            ? (0, r.jsx)(u.kzN, {
                                  className: g.errorBlock,
                                  children: b.intl.string(b.t['5mlOCQ'])
                              })
                            : null,
                        T
                    ]
                }),
                (0, r.jsx)(u.mzw, {
                    justify: f.Z.Justify.START,
                    children: (0, r.jsxs)('div', {
                        className: g.whatYouLoseButtonContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                variant: 'critical-primary',
                                text: b.intl.string(b.t['cY+Ooa']),
                                disabled: j || null == s,
                                onClick: async () => {
                                    await I({
                                        premiumSubscription: e,
                                        pauseDuration: s,
                                        setIsCancelling: P,
                                        setHasError: C,
                                        onClose: o,
                                        analyticsLocations: h,
                                        analyticsLocation: d
                                    });
                                }
                            }),
                            (0, r.jsx)(c.zx, {
                                look: c.zx.Looks.LINK,
                                color: (0, l.wj)(v) ? c.zx.Colors.WHITE : c.zx.Colors.PRIMARY,
                                onClick: o,
                                children: b.intl.string(b.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
