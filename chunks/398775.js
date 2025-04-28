n.d(t, {
    Sz: () => C,
    of: () => j
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
    h = n(296848),
    f = n(798769),
    b = n(981631),
    _ = n(388032),
    x = n(714421);
async function E(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: r, setIsCancelling: s, analyticsLocations: l, analyticsLocation: a } = e;
    try {
        s(!0), r(!1), await (0, d.Mg)(t, { pauseDuration: n }, l, a), i();
    } catch (e) {
        r(!0), s(!1);
    }
}
function j(e) {
    let { premiumType: t, onClose: n, pauseDuration: s, setPauseDuration: l, footer: o, premiumSubscription: d } = e,
        m = r.useCallback(
            (e) => {
                let { value: t } = e;
                l(t);
            },
            [l]
        ),
        p = d.status === b.O0b.PAUSED ? _.intl.string(_.t.Lp9WoK) : _.intl.string(_.t.eSR83d),
        E = (function (e) {
            let t = e.status === b.O0b.PAUSED ? _.t.o3upfX : _.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, h.AT)(e),
                r = [];
            for (let e of n) {
                let n = a.T[e];
                r.push({
                    name: _.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: x.radioOption
                });
            }
            return (
                r.sort((e, t) => e.value - t.value),
                r.push({
                    name: _.intl.string(_.t.OCPUMz),
                    value: 0,
                    radioBarClassName: x.cancelText,
                    radioItemIconClassName: x.cancelText
                }),
                r
            );
        })(d);
    return (
        (0, u.ZP)(() => {
            E.length < 1 || l(E[0].value);
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.Z, {
                    premiumType: t,
                    onClose: n
                }),
                (0, i.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, i.jsxs)('div', {
                        className: x.__invalid_header,
                        children: [
                            (0, i.jsx)(c.X6q, {
                                variant: 'heading-xl/bold',
                                className: x.__invalid_modalHeader,
                                children: _.intl.string(_.t.f3nnBw)
                            }),
                            (0, i.jsx)(c.X6q, {
                                variant: 'heading-sm/medium',
                                className: x.subtitle,
                                children: p
                            })
                        ]
                    })
                }),
                (0, i.jsx)(c.hzk, {
                    className: x.body,
                    children: (0, i.jsx)(c.FXm, {
                        options: E,
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
function C(e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, pauseDuration: a, analyticsLocation: d } = e,
        [u, h] = r.useState(!1),
        { analyticsLocations: j } = (0, p.ZP)(),
        [C, O] = r.useState(!1),
        S = (0, m.ZP)(),
        v = null,
        T = null,
        N = [b.O0b.PAST_DUE, b.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        I = l()(N).add(a, 'days').toDate();
    switch (t.status) {
        case b.O0b.PAST_DUE:
            T = _.intl.format(_.t['xaS18/'], {
                pauseDuration: a,
                resumeDate: I
            });
            break;
        case b.O0b.PAUSED:
            T = _.intl.format(_.t.Vur3FR, { resumeDate: I });
            break;
        default:
            T = _.intl.format(_.t.W85vFB, {
                pauseDate: N,
                resumeDate: I,
                pauseDuration: a
            });
    }
    return (
        (v = (0, i.jsx)('div', {
            className: x.body,
            children: T
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.Z, {
                    premiumType: n,
                    onClose: s
                }),
                (0, i.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, i.jsx)('div', {
                        className: x.__invalid_header,
                        children: (0, i.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: x.__invalid_modalHeader,
                            children: _.intl.string(_.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(c.hzk, {
                    className: x.body,
                    children: [
                        u
                            ? (0, i.jsx)(c.kzN, {
                                  className: x.errorBlock,
                                  children: _.intl.string(_.t['5mlOCQ'])
                              })
                            : null,
                        v
                    ]
                }),
                (0, i.jsx)(c.mzw, {
                    justify: g.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: x.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(c.zxk, {
                                color: c.zxk.Colors.RED,
                                disabled: C || null == a,
                                onClick: async () => {
                                    await E({
                                        premiumSubscription: t,
                                        pauseDuration: a,
                                        setIsCancelling: O,
                                        setHasError: h,
                                        onClose: s,
                                        analyticsLocations: j,
                                        analyticsLocation: d
                                    });
                                },
                                children: _.intl.string(_.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(c.zxk, {
                                look: c.zxk.Looks.LINK,
                                color: (0, o.wj)(S) ? c.zxk.Colors.WHITE : c.zxk.Colors.PRIMARY,
                                onClick: s,
                                children: _.intl.string(_.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
