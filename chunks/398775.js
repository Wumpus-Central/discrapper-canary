n.d(t, {
    Sz: () => O,
    of: () => C
}),
    n(539854),
    n(388685),
    n(642613);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    l = n.n(s),
    a = n(99945),
    o = n(780384),
    c = n(481060),
    d = n(355467),
    u = n(493773),
    m = n(410030),
    p = n(906732),
    g = n(600164),
    h = n(74538),
    f = n(296848),
    b = n(798769),
    _ = n(981631),
    x = n(388032),
    E = n(714421);
async function j(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: r, setIsCancelling: s, analyticsLocations: l, analyticsLocation: a } = e;
    try {
        s(!0),
            r(!1),
            await (0, d.Mg)(
                t,
                { pauseDuration: n },
                {
                    amount: 0,
                    currency: t.currency
                },
                (0, h.UX)(t.items, t.currency, t.paymentSourceId),
                l,
                a
            ),
            i();
    } catch (e) {
        r(!0), s(!1);
    }
}
function C(e) {
    let { premiumType: t, onClose: n, pauseDuration: s, setPauseDuration: l, footer: o, premiumSubscription: d } = e,
        m = r.useCallback(
            (e) => {
                let { value: t } = e;
                l(t);
            },
            [l]
        ),
        p = d.status === _.O0b.PAUSED ? x.intl.string(x.t.Lp9WoK) : x.intl.string(x.t.eSR83d),
        h = (function (e) {
            let t = e.status === _.O0b.PAUSED ? x.t.o3upfX : x.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, f.AT)(e),
                r = [];
            for (let e of n) {
                let n = a.T[e];
                r.push({
                    name: x.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: E.radioOption
                });
            }
            return (
                r.sort((e, t) => e.value - t.value),
                r.push({
                    name: x.intl.string(x.t.OCPUMz),
                    value: 0,
                    radioBarClassName: E.cancelText,
                    radioItemIconClassName: E.cancelText
                }),
                r
            );
        })(d);
    return (
        (0, u.ZP)(() => {
            h.length < 1 || l(h[0].value);
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(b.Z, {
                    premiumType: t,
                    onClose: n
                }),
                (0, i.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, i.jsxs)('div', {
                        className: E.__invalid_header,
                        children: [
                            (0, i.jsx)(c.X6q, {
                                variant: 'heading-xl/bold',
                                className: E.__invalid_modalHeader,
                                children: x.intl.string(x.t.f3nnBw)
                            }),
                            (0, i.jsx)(c.X6q, {
                                variant: 'heading-sm/medium',
                                className: E.subtitle,
                                children: p
                            })
                        ]
                    })
                }),
                (0, i.jsx)(c.hzk, {
                    className: E.body,
                    children: (0, i.jsx)(c.FXm, {
                        options: h,
                        onChange: m,
                        value: s
                    })
                }),
                (0, i.jsx)(c.mzw, {
                    justify: g.Z.Justify.START,
                    children: o
                })
            ]
        })
    );
}
function O(e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, pauseDuration: a, analyticsLocation: d } = e,
        [u, h] = r.useState(!1),
        { analyticsLocations: f } = (0, p.ZP)(),
        [C, O] = r.useState(!1),
        S = (0, m.ZP)(),
        v = null,
        T = null,
        I = [_.O0b.PAST_DUE, _.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        N = l()(I).add(a, 'days').toDate();
    switch (t.status) {
        case _.O0b.PAST_DUE:
            T = x.intl.format(x.t['xaS18/'], {
                pauseDuration: a,
                resumeDate: N
            });
            break;
        case _.O0b.PAUSED:
            T = x.intl.format(x.t.Vur3FR, { resumeDate: N });
            break;
        default:
            T = x.intl.format(x.t.W85vFB, {
                pauseDate: I,
                resumeDate: N,
                pauseDuration: a
            });
    }
    return (
        (v = (0, i.jsx)('div', {
            className: E.body,
            children: T
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(b.Z, {
                    premiumType: n,
                    onClose: s
                }),
                (0, i.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, i.jsx)('div', {
                        className: E.__invalid_header,
                        children: (0, i.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: E.__invalid_modalHeader,
                            children: x.intl.string(x.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(c.hzk, {
                    className: E.body,
                    children: [
                        u
                            ? (0, i.jsx)(c.kzN, {
                                  className: E.errorBlock,
                                  children: x.intl.string(x.t['5mlOCQ'])
                              })
                            : null,
                        v
                    ]
                }),
                (0, i.jsx)(c.mzw, {
                    justify: g.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: E.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(c.zxk, {
                                color: c.zxk.Colors.RED,
                                disabled: C || null == a,
                                onClick: async () => {
                                    await j({
                                        premiumSubscription: t,
                                        pauseDuration: a,
                                        setIsCancelling: O,
                                        setHasError: h,
                                        onClose: s,
                                        analyticsLocations: f,
                                        analyticsLocation: d
                                    });
                                },
                                children: x.intl.string(x.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(c.zxk, {
                                look: c.zxk.Looks.LINK,
                                color: (0, o.wj)(S) ? c.zxk.Colors.WHITE : c.zxk.Colors.PRIMARY,
                                onClick: s,
                                children: x.intl.string(x.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
