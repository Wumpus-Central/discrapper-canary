t.r(n),
    t.d(n, {
        MESSAGE_CONFETTI_POTION_MODAL_KEY: function () {
            return _;
        },
        default: function () {
            return N;
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
    f = t(997323),
    h = t(324085),
    E = t(688465),
    I = t(333867),
    v = t(96848),
    M = t(937615),
    p = t(84040),
    x = t(981631),
    Z = t(215023),
    S = t(388032),
    j = t(694638),
    T = t(99713);
let _ = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
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
            { modalKey: _ }
        );
    };
function N(e) {
    let { transitionState: n, channel: t, message: i } = e;
    return (0, o.jsx)(c.ModalRoot, {
        size: c.ModalSize.DYNAMIC,
        transitionState: n,
        children: (0, o.jsx)(b, {
            channel: t,
            message: i
        })
    });
}
function b(e) {
    let { channel: n, message: t } = e,
        i = (0, p.Z)(t, n),
        l = t.hasPotions(),
        [r, a] = (0, s.useState)(!1),
        [d, E] = (0, s.useState)(),
        { price: v, fetchingPrice: M, error: S } = (0, h.R2)(Z.D1),
        { entitlement: j, fetchedEntitlement: T, error: _ } = (0, h.t6)(Z.D1),
        A = S || _,
        { analyticsLocations: N } = (0, g.ZP)([m.Z.CONFETTI_POTION_MODAL]),
        b = null != j && !j.consumed;
    (0, s.useEffect)(
        () => (
            null != d && null != j && !1 === j.consumed && r && j.type !== x.qc2.DEVELOPER_GIFT && (0, f.qc)(n.id, t.id, d, Z.D1),
            () => {
                A && (0, f.SN)(Z.D1);
            }
        ),
        [j, n.id, t.id, d, r, A]
    );
    let C = (0, s.useMemo)(
            () => () =>
                (0, I.Z)({
                    skuId: Z.D1,
                    analyticsLocations: N,
                    onComplete: c.closeAllModals,
                    variantsReturnStyle: u.v.INDIVIDUAL_PRODUCTS
                }),
            [N]
        ),
        y = (0, s.useMemo)(
            () => () => {
                null != d && ((0, f.qc)(n.id, t.id, d, Z.D1), (0, c.closeAllModals)());
            },
            [d, n.id, t.id]
        ),
        D = (0, s.useMemo)(() => ((null == j ? void 0 : j.type) === x.qc2.DEVELOPER_GIFT ? 1 : b ? 2 : 0), [null == j ? void 0 : j.type, b]),
        L = (0, s.useMemo)(() => (l ? 2 : i ? (null == d ? 3 : 0) : 1), [l, i, d]);
    return (0, o.jsx)(P, {
        buttonPurchaseState: D,
        buttonDisabledState: L,
        price: v,
        onActionClick: () => {
            a(!0), (b ? y : C)();
        },
        loading: M || !T,
        selectedEmoji: null != d ? d : void 0,
        setSelectedEmoji: E
    });
}
let P = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l, loading: r, selectedEmoji: a, setSelectedEmoji: s } = e;
        return r
            ? (0, o.jsx)(R, {})
            : null == i
              ? (0, o.jsx)(L, {})
              : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: j.modal,
                            children: (0, o.jsx)(C, {
                                selectedEmoji: a,
                                setSelectedEmoji: s
                            })
                        }),
                        (0, o.jsx)(y, {
                            buttonPurchaseState: n,
                            buttonDisabledState: t,
                            price: i,
                            onActionClick: l
                        })
                    ]
                });
    },
    C = (e) => {
        let { selectedEmoji: n, setSelectedEmoji: t } = e;
        return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)('div', {
                className: j.body,
                children: [
                    (0, o.jsxs)('div', {
                        className: j.header,
                        children: [
                            (0, o.jsxs)('div', {
                                className: j.heading,
                                children: [
                                    (0, o.jsx)(c.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: S.intl.string(S.t['5/knv7'])
                                    }),
                                    (0, o.jsx)(E.Z, {})
                                ]
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: S.intl.string(S.t.NFTQoa)
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: j.divider }),
                    (0, o.jsxs)('div', {
                        className: j.select,
                        children: [
                            (0, o.jsx)(c.Text, {
                                variant: 'eyebrow',
                                children: S.intl.string(S.t.o8XwoK)
                            }),
                            (0, o.jsx)(v.Z, {
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
let y = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l } = e;
        return (0, o.jsxs)('div', {
            className: j.footer,
            children: [
                (0, o.jsx)(c.Button, {
                    onClick: () => {
                        (0, c.closeModal)(_);
                    },
                    color: c.Button.Colors.PRIMARY,
                    children: S.intl.string(S.t.w2Qbd3)
                }),
                (0, o.jsx)(D, {
                    buttonPurchaseState: n,
                    buttonDisabledState: t,
                    price: i,
                    onActionClick: l
                })
            ]
        });
    },
    D = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l } = e,
            {
                isDisabled: r,
                copy: a,
                tooltipCopy: u
            } = (0, s.useMemo)(() => {
                let e = {
                        0: S.intl.formatToPlainString(S.t.Wh82U1, { price: (0, M.T4)(i.amount, i.currency) }),
                        1: S.intl.string(S.t.RrKeDw),
                        2: S.intl.string(S.t['F/H7u7'])
                    },
                    l = {
                        1: S.intl.string(S.t['Cb8/7+']),
                        2: S.intl.string(S.t.fMkB9P),
                        3: S.intl.string(S.t['59ElNj'])
                    },
                    r = 0 !== t;
                return {
                    isDisabled: r,
                    copy: e[n],
                    tooltipCopy: r ? l[t] : ''
                };
            }, [t, n, i.amount, i.currency]);
        return (0, o.jsx)(c.Tooltip, {
            tooltipContentClassName: j.tooltip,
            text: u,
            shouldShow: !!r,
            children: (e) =>
                (0, o.jsx)(c.Button, {
                    ...e,
                    onClick: l,
                    disabled: r,
                    children: (0, o.jsxs)('div', {
                        className: j.buttonCopy,
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
    L = () =>
        (0, o.jsx)('div', {
            className: j.anomaly,
            children: (0, o.jsxs)('div', {
                className: j.error,
                children: [
                    (0, o.jsx)(c.Image, {
                        src: T,
                        width: 178,
                        height: 190
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: S.intl.string(S.t.oKJdSk)
                    })
                ]
            })
        }),
    R = () =>
        (0, o.jsx)('div', {
            className: j.anomaly,
            children: (0, o.jsx)('div', {
                className: j.spinner,
                children: (0, o.jsx)(c.Spinner, {})
            })
        });
