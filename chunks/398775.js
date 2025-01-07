n.d(t, {
    Sz: function () {
        return f;
    },
    of: function () {
        return _;
    }
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
    h = n(906732),
    g = n(600164),
    p = n(296848),
    x = n(798769),
    S = n(981631),
    T = n(388032),
    E = n(612711);
async function C(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: s, setIsCancelling: r, analyticsLocations: l, analyticsLocation: a } = e;
    try {
        r(!0), s(!1), await (0, d.Mg)(t, { pauseDuration: n }, l, a), i();
    } catch {
        s(!0), r(!1);
    }
}
function _(e) {
    let { premiumType: t, onClose: n, pauseDuration: r, setPauseDuration: l, footer: o, premiumSubscription: d } = e,
        m = s.useCallback(
            (e) => {
                let { value: t } = e;
                l(t);
            },
            [l]
        ),
        h = d.status === S.O0b.PAUSED ? T.intl.string(T.t.Lp9WoK) : T.intl.string(T.t.eSR83d),
        C = (function (e) {
            let t = e.status === S.O0b.PAUSED ? T.t.o3upfX : T.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, p.AT)(e),
                s = [];
            for (let e of n) {
                let n = a.T[e];
                s.push({
                    name: T.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: E.radioOption
                });
            }
            return (
                s.sort((e, t) => e.value - t.value),
                s.push({
                    name: T.intl.string(T.t.OCPUMz),
                    value: 0,
                    radioBarClassName: E.cancelText,
                    radioItemIconClassName: E.cancelText
                }),
                s
            );
        })(d);
    return (
        (0, u.Z)(() => {
            if (!(C.length < 1)) l(C[0].value);
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
                                children: T.intl.string(T.t.f3nnBw)
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-sm/medium',
                                className: E.subtitle,
                                children: h
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
                    justify: g.Z.Justify.START,
                    children: o
                })
            ]
        })
    );
}
function f(e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, pauseDuration: a, analyticsLocation: d } = e,
        [u, p] = s.useState(!1),
        { analyticsLocations: _ } = (0, h.ZP)(),
        [f, I] = s.useState(!1),
        N = (0, m.ZP)(),
        A = null,
        b = null,
        v = [S.O0b.PAST_DUE, S.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        j = l()(v).add(a, 'days').toDate();
    switch (t.status) {
        case S.O0b.PAST_DUE:
            b = T.intl.format(T.t['xaS18/'], {
                pauseDuration: a,
                resumeDate: j
            });
            break;
        case S.O0b.PAUSED:
            b = T.intl.format(T.t.Vur3FR, { resumeDate: j });
            break;
        default:
            b = T.intl.format(T.t.W85vFB, {
                pauseDate: v,
                resumeDate: j,
                pauseDuration: a
            });
    }
    return (
        (A = (0, i.jsx)('div', {
            className: E.body,
            children: b
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
                            children: T.intl.string(T.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(c.ModalContent, {
                    className: E.body,
                    children: [
                        u
                            ? (0, i.jsx)(c.FormErrorBlock, {
                                  className: E.errorBlock,
                                  children: T.intl.string(T.t['5mlOCQ'])
                              })
                            : null,
                        A
                    ]
                }),
                (0, i.jsx)(c.ModalFooter, {
                    justify: g.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: E.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(c.Button, {
                                color: c.Button.Colors.RED,
                                disabled: f || null == a,
                                onClick: async () => {
                                    await C({
                                        premiumSubscription: t,
                                        pauseDuration: a,
                                        setIsCancelling: I,
                                        setHasError: p,
                                        onClose: r,
                                        analyticsLocations: _,
                                        analyticsLocation: d
                                    });
                                },
                                children: T.intl.string(T.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, o.wj)(N) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
                                onClick: r,
                                children: T.intl.string(T.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
