n.d(t, {
    Sz: function () {
        return S;
    },
    of: function () {
        return T;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(99945),
    o = n(780384),
    c = n(481060),
    d = n(355467),
    u = n(493773),
    m = n(410030),
    g = n(906732),
    h = n(600164),
    p = n(296848),
    x = n(798769),
    f = n(981631),
    E = n(388032),
    _ = n(612711);
async function C(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: r, setIsCancelling: s, analyticsLocations: a, analyticsLocation: l } = e;
    try {
        s(!0), r(!1), await (0, d.Mg)(t, { pauseDuration: n }, a, l), i();
    } catch {
        r(!0), s(!1);
    }
}
function T(e) {
    let { premiumType: t, onClose: n, pauseDuration: s, setPauseDuration: a, footer: o, premiumSubscription: d } = e,
        m = r.useCallback(
            (e) => {
                let { value: t } = e;
                a(t);
            },
            [a]
        ),
        g = d.status === f.O0b.PAUSED ? E.intl.string(E.t.Lp9WoK) : E.intl.string(E.t.eSR83d),
        C = (function (e) {
            let t = e.status === f.O0b.PAUSED ? E.t.o3upfX : E.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, p.AT)(e),
                r = [];
            for (let e of n) {
                let n = l.T[e];
                r.push({
                    name: E.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: _.radioOption
                });
            }
            return (
                r.sort((e, t) => e.value - t.value),
                r.push({
                    name: E.intl.string(E.t.OCPUMz),
                    value: 0,
                    radioBarClassName: _.cancelText,
                    radioItemIconClassName: _.cancelText
                }),
                r
            );
        })(d);
    return (
        (0, u.Z)(() => {
            if (!(C.length < 1)) a(C[0].value);
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Z, {
                    premiumType: t,
                    onClose: n
                }),
                (0, i.jsx)(c.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsxs)('div', {
                        className: _.__invalid_header,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-xl/bold',
                                className: _.__invalid_modalHeader,
                                children: E.intl.string(E.t.f3nnBw)
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-sm/medium',
                                className: _.subtitle,
                                children: g
                            })
                        ]
                    })
                }),
                (0, i.jsx)(c.ModalContent, {
                    className: _.body,
                    children: (0, i.jsx)(c.RadioGroup, {
                        options: C,
                        onChange: m,
                        value: s
                    })
                }),
                (0, i.jsx)(c.ModalFooter, {
                    justify: h.Z.Justify.START,
                    children: o
                })
            ]
        })
    );
}
function S(e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, pauseDuration: l, analyticsLocation: d } = e,
        [u, p] = r.useState(!1),
        { analyticsLocations: T } = (0, g.ZP)(),
        [S, b] = r.useState(!1),
        I = (0, m.ZP)(),
        N = null,
        v = null,
        A = [f.O0b.PAST_DUE, f.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        j = a()(A).add(l, 'days').toDate();
    switch (t.status) {
        case f.O0b.PAST_DUE:
            v = E.intl.format(E.t['xaS18/'], {
                pauseDuration: l,
                resumeDate: j
            });
            break;
        case f.O0b.PAUSED:
            v = E.intl.format(E.t.Vur3FR, { resumeDate: j });
            break;
        default:
            v = E.intl.format(E.t.W85vFB, {
                pauseDate: A,
                resumeDate: j,
                pauseDuration: l
            });
    }
    return (
        (N = (0, i.jsx)('div', {
            className: _.body,
            children: v
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Z, {
                    premiumType: n,
                    onClose: s
                }),
                (0, i.jsx)(c.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsx)('div', {
                        className: _.__invalid_header,
                        children: (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            className: _.__invalid_modalHeader,
                            children: E.intl.string(E.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(c.ModalContent, {
                    className: _.body,
                    children: [
                        u
                            ? (0, i.jsx)(c.FormErrorBlock, {
                                  className: _.errorBlock,
                                  children: E.intl.string(E.t['5mlOCQ'])
                              })
                            : null,
                        N
                    ]
                }),
                (0, i.jsx)(c.ModalFooter, {
                    justify: h.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: _.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(c.Button, {
                                color: c.Button.Colors.RED,
                                disabled: S || null == l,
                                onClick: async () => {
                                    await C({
                                        premiumSubscription: t,
                                        pauseDuration: l,
                                        setIsCancelling: b,
                                        setHasError: p,
                                        onClose: s,
                                        analyticsLocations: T,
                                        analyticsLocation: d
                                    });
                                },
                                children: E.intl.string(E.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, o.wj)(I) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
                                onClick: s,
                                children: E.intl.string(E.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
