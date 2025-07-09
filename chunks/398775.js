(n.d(t, {
    Sz: () => v,
    of: () => C
}),
    n(539854),
    n(388685),
    n(642613));
var i = n(255367),
    r = n(73800),
    s = n(913527),
    a = n.n(s),
    l = n(99945),
    o = n(780384),
    c = n(755721),
    d = n(481060),
    u = n(355467),
    m = n(493773),
    p = n(410030),
    g = n(906732),
    h = n(600164),
    f = n(74538),
    b = n(296848),
    x = n(798769),
    _ = n(981631),
    j = n(388032),
    E = n(714421);
async function O(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: r, setIsCancelling: s, analyticsLocations: a, analyticsLocation: l } = e;
    try {
        (s(!0),
            r(!1),
            await (0, u.Mg)(
                t,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: t.currency
                },
                (0, f.UX)(t.items, t.currency, t.paymentSourceId),
                a,
                l
            ),
            i());
    } catch (e) {
        (r(!0), s(!1));
    }
}
function C(e) {
    let { premiumType: t, onClose: n, pauseDuration: s, setPauseDuration: a, footer: o, premiumSubscription: c } = e,
        u = r.useCallback(
            (e) => {
                let { value: t } = e;
                a(t);
            },
            [a]
        ),
        p = c.status === _.O0b.PAUSED ? j.intl.string(j.t.Lp9WoK) : j.intl.string(j.t.eSR83d),
        g = (function (e) {
            let t = e.status === _.O0b.PAUSED ? j.t.o3upfX : j.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, b.AT)(e),
                r = [];
            for (let e of n) {
                let n = l.T[e];
                r.push({
                    name: j.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: E.radioOption
                });
            }
            return (
                r.sort((e, t) => e.value - t.value),
                r.push({
                    name: j.intl.string(j.t.OCPUMz),
                    value: 0,
                    radioBarClassName: E.cancelText,
                    radioItemIconClassName: E.cancelText
                }),
                r
            );
        })(c);
    return (
        (0, m.ZP)(() => {
            g.length < 1 || a(g[0].value);
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Z, {
                    premiumType: t,
                    onClose: n
                }),
                (0, i.jsx)(d.xBx, {
                    separator: !1,
                    children: (0, i.jsxs)('div', {
                        className: E.__invalid_header,
                        children: [
                            (0, i.jsx)(d.X6q, {
                                variant: 'heading-xl/bold',
                                className: E.__invalid_modalHeader,
                                children: j.intl.string(j.t.f3nnBw)
                            }),
                            (0, i.jsx)(d.X6q, {
                                variant: 'heading-sm/medium',
                                className: E.subtitle,
                                children: p
                            })
                        ]
                    })
                }),
                (0, i.jsx)(d.hzk, {
                    className: E.body,
                    children: (0, i.jsx)(d.FXm, {
                        options: g,
                        onChange: u,
                        value: s
                    })
                }),
                (0, i.jsx)(d.mzw, {
                    justify: h.Z.Justify.START,
                    children: o
                })
            ]
        })
    );
}
function v(e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, pauseDuration: l, analyticsLocation: u } = e,
        [m, f] = r.useState(!1),
        { analyticsLocations: b } = (0, g.ZP)(),
        [C, v] = r.useState(!1),
        S = (0, p.ZP)(),
        T = null,
        N = null,
        I = [_.O0b.PAST_DUE, _.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        y = a()(I).add(l, 'days').toDate();
    switch (t.status) {
        case _.O0b.PAST_DUE:
            N = j.intl.format(j.t['xaS18/'], {
                pauseDuration: l,
                resumeDate: y
            });
            break;
        case _.O0b.PAUSED:
            N = j.intl.format(j.t.Vur3FR, { resumeDate: y });
            break;
        default:
            N = j.intl.format(j.t.W85vFB, {
                pauseDate: I,
                resumeDate: y,
                pauseDuration: l
            });
    }
    return (
        (T = (0, i.jsx)('div', {
            className: E.body,
            children: N
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Z, {
                    premiumType: n,
                    onClose: s
                }),
                (0, i.jsx)(d.xBx, {
                    separator: !1,
                    children: (0, i.jsx)('div', {
                        className: E.__invalid_header,
                        children: (0, i.jsx)(d.X6q, {
                            variant: 'heading-xl/bold',
                            className: E.__invalid_modalHeader,
                            children: j.intl.string(j.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(d.hzk, {
                    className: E.body,
                    children: [
                        m
                            ? (0, i.jsx)(d.kzN, {
                                  className: E.errorBlock,
                                  children: j.intl.string(j.t['5mlOCQ'])
                              })
                            : null,
                        T
                    ]
                }),
                (0, i.jsx)(d.mzw, {
                    justify: h.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: E.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(d.zxk, {
                                variant: 'critical-primary',
                                text: j.intl.string(j.t['cY+Ooa']),
                                disabled: C || null == l,
                                onClick: async () => {
                                    await O({
                                        premiumSubscription: t,
                                        pauseDuration: l,
                                        setIsCancelling: v,
                                        setHasError: f,
                                        onClose: s,
                                        analyticsLocations: b,
                                        analyticsLocation: u
                                    });
                                }
                            }),
                            (0, i.jsx)(c.zx, {
                                look: c.zx.Looks.LINK,
                                color: (0, o.wj)(S) ? c.zx.Colors.WHITE : c.zx.Colors.PRIMARY,
                                onClick: s,
                                children: j.intl.string(j.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
