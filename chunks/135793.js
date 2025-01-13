t.r(n),
    t.d(n, {
        MESSAGE_CONFETTI_POTION_MODAL_KEY: function () {
            return b;
        },
        default: function () {
            return P;
        },
        openMessageConfettiModal: function () {
            return A;
        }
    }),
    t(47120);
var i,
    l,
    r,
    a,
    o = t(200651),
    s = t(192379),
    u = t(311570),
    d = t(692547),
    c = t(481060),
    m = t(100527),
    g = t(906732),
    f = t(688465),
    h = t(333867),
    E = t(96848),
    I = t(63063),
    v = t(937615),
    M = t(980463),
    p = t(317951),
    x = t(84040),
    Z = t(235894),
    S = t(576645),
    j = t(981631),
    T = t(388032),
    N = t(694638),
    _ = t(99713);
let b = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    A = (e, n) => {
        (0, c.openModalLazy)(
            async () => {
                let { default: i } = await Promise.resolve().then(t.bind(t, 135793));
                return (t) =>
                    (0, o.jsx)(i, {
                        channel: e,
                        message: n,
                        ...t
                    });
            },
            { modalKey: b }
        );
    };
function P(e) {
    let { transitionState: n, channel: t, message: i } = e;
    return (0, o.jsx)(c.ModalRoot, {
        size: c.ModalSize.DYNAMIC,
        transitionState: n,
        children: (0, o.jsx)(C, {
            channel: t,
            message: i
        })
    });
}
function C(e) {
    let { channel: n, message: t } = e,
        i = (0, x.Z)(t, n),
        l = (0, Z.U)(t),
        [r, a] = (0, s.useState)(!1),
        [d, f] = (0, s.useState)(),
        { price: E, fetchingPrice: I, error: v } = (0, S.R2)(p.D1),
        { entitlement: T, fetchedEntitlement: N, error: _ } = (0, S.t6)(p.D1),
        b = v || _,
        { analyticsLocations: A } = (0, g.ZP)([m.Z.CONFETTI_POTION_MODAL]),
        P = null != T && !T.consumed;
    (0, s.useEffect)(
        () => () => {
            b && (0, M.SN)(p.D1);
        },
        [T, n.id, t.id, d, r, b]
    );
    let C = (0, s.useCallback)(() => {
            null != d && ((0, M.qc)(n.id, t.id, d, p.D1), (0, c.closeAllModals)());
        }, [d, n.id, t.id]),
        D = (0, s.useCallback)(() => {
            (0, h.Z)({
                skuId: p.D1,
                analyticsLocations: A,
                onComplete: C,
                variantsReturnStyle: u.v.INDIVIDUAL_PRODUCTS
            });
        }, [C, A]),
        L = (0, s.useMemo)(() => ((null == T ? void 0 : T.type) === j.qc2.DEVELOPER_GIFT ? 1 : P ? 2 : 0), [null == T ? void 0 : T.type, P]),
        O = (0, s.useMemo)(() => (l ? 2 : i ? (null == d ? 3 : 0) : 1), [l, i, d]);
    return (0, o.jsx)(y, {
        buttonPurchaseState: L,
        buttonDisabledState: O,
        price: E,
        onActionClick: () => {
            a(!0), (P ? C : D)();
        },
        loading: I || !N,
        selectedEmoji: null != d ? d : void 0,
        setSelectedEmoji: f
    });
}
let y = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l, loading: r, selectedEmoji: a, setSelectedEmoji: s } = e;
        return r
            ? (0, o.jsx)(G, {})
            : null == i
              ? (0, o.jsx)(R, {})
              : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: N.modal,
                            children: (0, o.jsx)(D, {
                                selectedEmoji: a,
                                setSelectedEmoji: s
                            })
                        }),
                        (0, o.jsx)(L, {
                            buttonPurchaseState: n,
                            buttonDisabledState: t,
                            price: i,
                            onActionClick: l
                        })
                    ]
                });
    },
    D = (e) => {
        let { selectedEmoji: n, setSelectedEmoji: t } = e;
        return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)('div', {
                className: N.body,
                children: [
                    (0, o.jsxs)('div', {
                        className: N.header,
                        children: [
                            (0, o.jsxs)('div', {
                                className: N.heading,
                                children: [
                                    (0, o.jsx)(c.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: T.intl.string(T.t['5/knv7'])
                                    }),
                                    (0, o.jsx)(f.Z, {})
                                ]
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: T.intl.string(T.t.NFTQoa)
                            }),
                            (0, o.jsx)(c.Text, {
                                color: 'text-link',
                                variant: 'text-sm/normal',
                                children: T.intl.format(T.t['jerM9/'], { helpCenterLink: I.Z.getArticleURL(j.BhN.CONFETTI_POTION) })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: N.divider }),
                    (0, o.jsxs)('div', {
                        className: N.select,
                        children: [
                            (0, o.jsx)(c.Text, {
                                variant: 'eyebrow',
                                children: T.intl.string(T.t.o8XwoK)
                            }),
                            (0, o.jsx)(E.Z, {
                                setEmojiConfetti: (e) => {
                                    t(e);
                                },
                                emojiConfetti: n
                            })
                        ]
                    })
                ]
            })
        });
    };
((r = i || (i = {}))[(r.BUY = 0)] = 'BUY'), (r[(r.REDEEM = 1)] = 'REDEEM'), (r[(r.ACTIVATE = 2)] = 'ACTIVATE'), ((a = l || (l = {}))[(a.ENABLED = 0)] = 'ENABLED'), (a[(a.INELIGIBLE = 1)] = 'INELIGIBLE'), (a[(a.ALREADY_ACTIVE = 2)] = 'ALREADY_ACTIVE'), (a[(a.MISSING_SELECTION = 3)] = 'MISSING_SELECTION');
let L = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l } = e;
        return (0, o.jsxs)('div', {
            className: N.footer,
            children: [
                (0, o.jsx)(c.Button, {
                    onClick: () => {
                        (0, c.closeModal)(b);
                    },
                    color: c.Button.Colors.PRIMARY,
                    children: T.intl.string(T.t.w2Qbd3)
                }),
                (0, o.jsx)(O, {
                    buttonPurchaseState: n,
                    buttonDisabledState: t,
                    price: i,
                    onActionClick: l
                })
            ]
        });
    },
    O = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l } = e,
            {
                isDisabled: r,
                copy: a,
                tooltipCopy: u
            } = (0, s.useMemo)(() => {
                let e = {
                        0: T.intl.formatToPlainString(T.t.Wh82U1, { price: (0, v.T4)(i.amount, i.currency) }),
                        1: T.intl.string(T.t.RrKeDw),
                        2: T.intl.string(T.t['F/H7u7'])
                    },
                    l = {
                        1: T.intl.string(T.t['Cb8/7+']),
                        2: T.intl.string(T.t.fMkB9P),
                        3: T.intl.string(T.t['59ElNj'])
                    },
                    r = 0 !== t;
                return {
                    isDisabled: r,
                    copy: e[n],
                    tooltipCopy: r ? l[t] : ''
                };
            }, [t, n, i.amount, i.currency]);
        return (0, o.jsx)(c.Tooltip, {
            tooltipContentClassName: N.tooltip,
            text: u,
            shouldShow: !!r,
            children: (e) =>
                (0, o.jsx)(c.Button, {
                    ...e,
                    onClick: l,
                    disabled: r,
                    children: (0, o.jsxs)('div', {
                        className: N.buttonCopy,
                        children: [
                            (0, o.jsx)(c.PotionIcon, {
                                color: d.Z.colors.WHITE,
                                size: 'sm'
                            }),
                            a
                        ]
                    })
                })
        });
    },
    R = () =>
        (0, o.jsx)('div', {
            className: N.anomaly,
            children: (0, o.jsxs)('div', {
                className: N.error,
                children: [
                    (0, o.jsx)(c.Image, {
                        src: _,
                        width: 178,
                        height: 190
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: T.intl.string(T.t.oKJdSk)
                    })
                ]
            })
        }),
    G = () =>
        (0, o.jsx)('div', {
            className: N.anomaly,
            children: (0, o.jsx)('div', {
                className: N.spinner,
                children: (0, o.jsx)(c.Spinner, {})
            })
        });
