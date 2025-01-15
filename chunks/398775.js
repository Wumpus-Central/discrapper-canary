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
    s = n(192379),
    r = n(913527),
    a = n.n(r),
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
    _ = n(388032),
    E = n(612711);
async function C(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: s, setIsCancelling: r, analyticsLocations: a, analyticsLocation: l } = e;
    try {
        r(!0), s(!1), await (0, d.Mg)(t, { pauseDuration: n }, a, l), i();
    } catch {
        s(!0), r(!1);
    }
}
function T(e) {
    let { premiumType: t, onClose: n, pauseDuration: r, setPauseDuration: a, footer: o, premiumSubscription: d } = e,
        m = s.useCallback(
            (e) => {
                let { value: t } = e;
                a(t);
            },
            [a]
        ),
        g = d.status === f.O0b.PAUSED ? _.intl.string(_.t.Lp9WoK) : _.intl.string(_.t.eSR83d),
        C = (function (e) {
            let t = e.status === f.O0b.PAUSED ? _.t.o3upfX : _.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, p.AT)(e),
                s = [];
            for (let e of n) {
                let n = l.T[e];
                s.push({
                    name: _.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: E.radioOption
                });
            }
            return (
                s.sort((e, t) => e.value - t.value),
                s.push({
                    name: _.intl.string(_.t.OCPUMz),
                    value: 0,
                    radioBarClassName: E.cancelText,
                    radioItemIconClassName: E.cancelText
                }),
                s
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
                        className: E.__invalid_header,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-xl/bold',
                                className: E.__invalid_modalHeader,
                                children: _.intl.string(_.t.f3nnBw)
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-sm/medium',
                                className: E.subtitle,
                                children: g
                            })
                        ]
                    })
                }),
                (0, i.jsx)(c.ModalContent, {
                    className: E.body,
                    children: (0, i.jsx)(c.RadioGroup, {
                        options: C,
                        onChange: m,
                        value: r
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
    let { premiumSubscription: t, premiumType: n, onClose: r, pauseDuration: l, analyticsLocation: d } = e,
        [u, p] = s.useState(!1),
        { analyticsLocations: T } = (0, g.ZP)(),
        [S, b] = s.useState(!1),
        I = (0, m.ZP)(),
        N = null,
        v = null,
        A = [f.O0b.PAST_DUE, f.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        j = a()(A).add(l, 'days').toDate();
    switch (t.status) {
        case f.O0b.PAST_DUE:
            v = _.intl.format(_.t['xaS18/'], {
                pauseDuration: l,
                resumeDate: j
            });
            break;
        case f.O0b.PAUSED:
            v = _.intl.format(_.t.Vur3FR, { resumeDate: j });
            break;
        default:
            v = _.intl.format(_.t.W85vFB, {
                pauseDate: A,
                resumeDate: j,
                pauseDuration: l
            });
    }
    return (
        (N = (0, i.jsx)('div', {
            className: E.body,
            children: v
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Z, {
                    premiumType: n,
                    onClose: r
                }),
                (0, i.jsx)(c.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsx)('div', {
                        className: E.__invalid_header,
                        children: (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            className: E.__invalid_modalHeader,
                            children: _.intl.string(_.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(c.ModalContent, {
                    className: E.body,
                    children: [
                        u
                            ? (0, i.jsx)(c.FormErrorBlock, {
                                  className: E.errorBlock,
                                  children: _.intl.string(_.t['5mlOCQ'])
                              })
                            : null,
                        N
                    ]
                }),
                (0, i.jsx)(c.ModalFooter, {
                    justify: h.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: E.whatYouLoseButtonContainer,
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
                                        onClose: r,
                                        analyticsLocations: T,
                                        analyticsLocation: d
                                    });
                                },
                                children: _.intl.string(_.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, o.wj)(I) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
                                onClick: r,
                                children: _.intl.string(_.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
