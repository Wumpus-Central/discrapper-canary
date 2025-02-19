n.d(t, {
    Sz: () => j,
    of: () => E
}),
    n(653041),
    n(47120),
    n(230036);
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
    N = n(981631),
    x = n(388032),
    b = n(992572);
async function _(e) {
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
        g = d.status === N.O0b.PAUSED ? x.NW.string(x.t.Lp9WoK) : x.NW.string(x.t.eSR83d),
        _ = (function (e) {
            let t = e.status === N.O0b.PAUSED ? x.t.o3upfX : x.t.dBXZEh,
                { durations: n, currentDaysPaused: r } = (0, h.AT)(e),
                i = [];
            for (let e of n) {
                let n = l.T[e];
                i.push({
                    name: x.NW.formatToPlainString(t, { days: n - r }),
                    value: n,
                    radioItemIconClassName: b.radioOption
                });
            }
            return (
                i.sort((e, t) => e.value - t.value),
                i.push({
                    name: x.NW.string(x.t.OCPUMz),
                    value: 0,
                    radioBarClassName: b.cancelText,
                    radioItemIconClassName: b.cancelText
                }),
                i
            );
        })(d);
    return (
        (0, u.ZP)(() => {
            !(_.length < 1) && a(_[0].value);
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
                        className: b.__invalid_header,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-xl/bold',
                                className: b.__invalid_modalHeader,
                                children: x.NW.string(x.t.f3nnBw)
                            }),
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-sm/medium',
                                className: b.subtitle,
                                children: g
                            })
                        ]
                    })
                }),
                (0, r.jsx)(c.hzk, {
                    className: b.body,
                    children: (0, r.jsx)(c.FXm, {
                        options: _,
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
        v = null,
        S = null,
        T = [N.O0b.PAST_DUE, N.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        I = a()(T).add(l, 'days').toDate();
    switch (t.status) {
        case N.O0b.PAST_DUE:
            S = x.NW.format(x.t['xaS18/'], {
                pauseDuration: l,
                resumeDate: I
            });
            break;
        case N.O0b.PAUSED:
            S = x.NW.format(x.t.Vur3FR, { resumeDate: I });
            break;
        default:
            S = x.NW.format(x.t.W85vFB, {
                pauseDate: T,
                resumeDate: I,
                pauseDuration: l
            });
    }
    return (
        (v = (0, r.jsx)('div', {
            className: b.body,
            children: S
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
                        className: b.__invalid_header,
                        children: (0, r.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: b.__invalid_modalHeader,
                            children: x.NW.string(x.t['AnMG5+'])
                        })
                    })
                }),
                (0, r.jsxs)(c.hzk, {
                    className: b.body,
                    children: [
                        u
                            ? (0, r.jsx)(c.kzN, {
                                  className: b.errorBlock,
                                  children: x.NW.string(x.t['5mlOCQ'])
                              })
                            : null,
                        v
                    ]
                }),
                (0, r.jsx)(c.mzw, {
                    justify: p.Z.Justify.START,
                    children: (0, r.jsxs)('div', {
                        className: b.whatYouLoseButtonContainer,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                color: c.zxk.Colors.RED,
                                disabled: j || null == l,
                                onClick: async () => {
                                    await _({
                                        premiumSubscription: t,
                                        pauseDuration: l,
                                        setIsCancelling: C,
                                        setHasError: h,
                                        onClose: s,
                                        analyticsLocations: E,
                                        analyticsLocation: d
                                    });
                                },
                                children: x.NW.string(x.t['cY+Ooa'])
                            }),
                            (0, r.jsx)(c.zxk, {
                                look: c.zxk.Looks.LINK,
                                color: (0, o.wj)(O) ? c.zxk.Colors.WHITE : c.zxk.Colors.PRIMARY,
                                onClick: s,
                                children: x.NW.string(x.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
