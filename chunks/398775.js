n.d(t, {
    Sz: () => j,
    of: () => E
}),
    n(539854),
    n(388685),
    n(642613);
var r = n(200651),
    i = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(99945),
    o = n(780384),
    c = n(481060),
    d = n(355467),
    u = n(493773),
    m = n(410030),
    g = n(906732),
    p = n(600164),
    h = n(296848),
    f = n(798769),
    b = n(981631),
    _ = n(388032),
    N = n(714421);
async function x(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: r, setHasError: i, setIsCancelling: s, analyticsLocations: a, analyticsLocation: l } = e;
    try {
        s(!0), i(!1), await (0, d.Mg)(t, { pauseDuration: n }, a, l), r();
    } catch (e) {
        i(!0), s(!1);
    }
}
function E(e) {
    let { premiumType: t, onClose: n, pauseDuration: s, setPauseDuration: a, footer: o, premiumSubscription: d } = e,
        m = i.useCallback(
            (e) => {
                let { value: t } = e;
                a(t);
            },
            [a]
        ),
        g = d.status === b.O0b.PAUSED ? _.NW.string(_.t.Lp9WoK) : _.NW.string(_.t.eSR83d),
        x = (function (e) {
            let t = e.status === b.O0b.PAUSED ? _.t.o3upfX : _.t.dBXZEh,
                { durations: n, currentDaysPaused: r } = (0, h.AT)(e),
                i = [];
            for (let e of n) {
                let n = l.T[e];
                i.push({
                    name: _.NW.formatToPlainString(t, { days: n - r }),
                    value: n,
                    radioItemIconClassName: N.radioOption
                });
            }
            return (
                i.sort((e, t) => e.value - t.value),
                i.push({
                    name: _.NW.string(_.t.OCPUMz),
                    value: 0,
                    radioBarClassName: N.cancelText,
                    radioItemIconClassName: N.cancelText
                }),
                i
            );
        })(d);
    return (
        (0, u.ZP)(() => {
            x.length < 1 || a(x[0].value);
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.Z, {
                    premiumType: t,
                    onClose: n
                }),
                (0, r.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, r.jsxs)('div', {
                        className: N.__invalid_header,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-xl/bold',
                                className: N.__invalid_modalHeader,
                                children: _.NW.string(_.t.f3nnBw)
                            }),
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-sm/medium',
                                className: N.subtitle,
                                children: g
                            })
                        ]
                    })
                }),
                (0, r.jsx)(c.hzk, {
                    className: N.body,
                    children: (0, r.jsx)(c.FXm, {
                        options: x,
                        onChange: m,
                        value: s
                    })
                }),
                (0, r.jsx)(c.mzw, {
                    justify: p.Z.Justify.START,
                    children: o
                })
            ]
        })
    );
}
function j(e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, pauseDuration: l, analyticsLocation: d } = e,
        [u, h] = i.useState(!1),
        { analyticsLocations: E } = (0, g.ZP)(),
        [j, C] = i.useState(!1),
        O = (0, m.ZP)(),
        S = null,
        v = null,
        T = [b.O0b.PAST_DUE, b.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        I = a()(T).add(l, 'days').toDate();
    switch (t.status) {
        case b.O0b.PAST_DUE:
            v = _.NW.format(_.t['xaS18/'], {
                pauseDuration: l,
                resumeDate: I
            });
            break;
        case b.O0b.PAUSED:
            v = _.NW.format(_.t.Vur3FR, { resumeDate: I });
            break;
        default:
            v = _.NW.format(_.t.W85vFB, {
                pauseDate: T,
                resumeDate: I,
                pauseDuration: l
            });
    }
    return (
        (S = (0, r.jsx)('div', {
            className: N.body,
            children: v
        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.Z, {
                    premiumType: n,
                    onClose: s
                }),
                (0, r.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, r.jsx)('div', {
                        className: N.__invalid_header,
                        children: (0, r.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: N.__invalid_modalHeader,
                            children: _.NW.string(_.t['AnMG5+'])
                        })
                    })
                }),
                (0, r.jsxs)(c.hzk, {
                    className: N.body,
                    children: [
                        u
                            ? (0, r.jsx)(c.kzN, {
                                  className: N.errorBlock,
                                  children: _.NW.string(_.t['5mlOCQ'])
                              })
                            : null,
                        S
                    ]
                }),
                (0, r.jsx)(c.mzw, {
                    justify: p.Z.Justify.START,
                    children: (0, r.jsxs)('div', {
                        className: N.whatYouLoseButtonContainer,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                color: c.zxk.Colors.RED,
                                disabled: j || null == l,
                                onClick: async () => {
                                    await x({
                                        premiumSubscription: t,
                                        pauseDuration: l,
                                        setIsCancelling: C,
                                        setHasError: h,
                                        onClose: s,
                                        analyticsLocations: E,
                                        analyticsLocation: d
                                    });
                                },
                                children: _.NW.string(_.t['cY+Ooa'])
                            }),
                            (0, r.jsx)(c.zxk, {
                                look: c.zxk.Looks.LINK,
                                color: (0, o.wj)(O) ? c.zxk.Colors.WHITE : c.zxk.Colors.PRIMARY,
                                onClick: s,
                                children: _.NW.string(_.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
