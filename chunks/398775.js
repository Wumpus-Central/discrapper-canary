n.d(t, {
    Sz: () => N,
    of: () => T
}),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(99945),
    o = n(780384),
    c = n(481060),
    d = n(355467),
    u = n(493773),
    m = n(410030),
    g = n(906732),
    h = n(600164),
    x = n(296848),
    _ = n(798769),
    p = n(981631),
    E = n(388032),
    C = n(111605);
async function f(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: s, setIsCancelling: r, analyticsLocations: l, analyticsLocation: a } = e;
    try {
        r(!0), s(!1), await (0, d.Mg)(t, { pauseDuration: n }, l, a), i();
    } catch {
        s(!0), r(!1);
    }
}
function T(e) {
    let { premiumType: t, onClose: n, pauseDuration: r, setPauseDuration: l, footer: o, premiumSubscription: d } = e,
        m = s.useCallback(
            (e) => {
                let { value: t } = e;
                l(t);
            },
            [l]
        ),
        g = d.status === p.O0b.PAUSED ? E.intl.string(E.t.Lp9WoK) : E.intl.string(E.t.eSR83d),
        f = (function (e) {
            let t = e.status === p.O0b.PAUSED ? E.t.o3upfX : E.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, x.AT)(e),
                s = [];
            for (let e of n) {
                let n = a.T[e];
                s.push({
                    name: E.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: C.radioOption
                });
            }
            return (
                s.sort((e, t) => e.value - t.value),
                s.push({
                    name: E.intl.string(E.t.OCPUMz),
                    value: 0,
                    radioBarClassName: C.cancelText,
                    radioItemIconClassName: C.cancelText
                }),
                s
            );
        })(d);
    return (
        (0, u.ZP)(() => {
            !(f.length < 1) && l(f[0].value);
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.Z, {
                    premiumType: t,
                    onClose: n
                }),
                (0, i.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, i.jsxs)('div', {
                        className: C.__invalid_header,
                        children: [
                            (0, i.jsx)(c.X6q, {
                                variant: 'heading-xl/bold',
                                className: C.__invalid_modalHeader,
                                children: E.intl.string(E.t.f3nnBw)
                            }),
                            (0, i.jsx)(c.X6q, {
                                variant: 'heading-sm/medium',
                                className: C.subtitle,
                                children: g
                            })
                        ]
                    })
                }),
                (0, i.jsx)(c.hzk, {
                    className: C.body,
                    children: (0, i.jsx)(c.FXm, {
                        options: f,
                        onChange: m,
                        value: r
                    })
                }),
                (0, i.jsx)(c.mzw, {
                    justify: h.Z.Justify.START,
                    children: o
                })
            ]
        })
    );
}
function N(e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, pauseDuration: a, analyticsLocation: d } = e,
        [u, x] = s.useState(!1),
        { analyticsLocations: T } = (0, g.ZP)(),
        [N, S] = s.useState(!1),
        I = (0, m.ZP)(),
        b = null,
        v = null,
        j = [p.O0b.PAST_DUE, p.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        A = l()(j).add(a, 'days').toDate();
    switch (t.status) {
        case p.O0b.PAST_DUE:
            v = E.intl.format(E.t['xaS18/'], {
                pauseDuration: a,
                resumeDate: A
            });
            break;
        case p.O0b.PAUSED:
            v = E.intl.format(E.t.Vur3FR, { resumeDate: A });
            break;
        default:
            v = E.intl.format(E.t.W85vFB, {
                pauseDate: j,
                resumeDate: A,
                pauseDuration: a
            });
    }
    return (
        (b = (0, i.jsx)('div', {
            className: C.body,
            children: v
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.Z, {
                    premiumType: n,
                    onClose: r
                }),
                (0, i.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, i.jsx)('div', {
                        className: C.__invalid_header,
                        children: (0, i.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: C.__invalid_modalHeader,
                            children: E.intl.string(E.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(c.hzk, {
                    className: C.body,
                    children: [
                        u
                            ? (0, i.jsx)(c.kzN, {
                                  className: C.errorBlock,
                                  children: E.intl.string(E.t['5mlOCQ'])
                              })
                            : null,
                        b
                    ]
                }),
                (0, i.jsx)(c.mzw, {
                    justify: h.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: C.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(c.zxk, {
                                color: c.zxk.Colors.RED,
                                disabled: N || null == a,
                                onClick: async () => {
                                    await f({
                                        premiumSubscription: t,
                                        pauseDuration: a,
                                        setIsCancelling: S,
                                        setHasError: x,
                                        onClose: r,
                                        analyticsLocations: T,
                                        analyticsLocation: d
                                    });
                                },
                                children: E.intl.string(E.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(c.zxk, {
                                look: c.zxk.Looks.LINK,
                                color: (0, o.wj)(I) ? c.zxk.Colors.WHITE : c.zxk.Colors.PRIMARY,
                                onClick: r,
                                children: E.intl.string(E.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
