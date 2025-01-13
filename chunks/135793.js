t.r(n),
    t.d(n, {
        MESSAGE_CONFETTI_POTION_MODAL_KEY: function () {
            return _;
        },
        default: function () {
            return A;
        },
        openMessageConfettiModal: function () {
            return N;
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
    g = t(100527),
    m = t(906732),
    f = t(688465),
    h = t(333867),
    E = t(96848),
    I = t(937615),
    v = t(980463),
    M = t(317951),
    p = t(84040),
    x = t(235894),
    Z = t(576645),
    S = t(981631),
    j = t(388032),
    T = t(694638),
    b = t(99713);
let _ = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    N = (e, n) => {
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
function A(e) {
    let { transitionState: n, channel: t, message: i } = e;
    return (0, o.jsx)(c.ModalRoot, {
        size: c.ModalSize.DYNAMIC,
        transitionState: n,
        children: (0, o.jsx)(P, {
            channel: t,
            message: i
        })
    });
}
function P(e) {
    let { channel: n, message: t } = e,
        i = (0, p.Z)(t, n),
        l = (0, x.U)(t),
        [r, a] = (0, s.useState)(!1),
        [d, f] = (0, s.useState)(),
        { price: E, fetchingPrice: I, error: j } = (0, Z.R2)(M.D1),
        { entitlement: T, fetchedEntitlement: b, error: _ } = (0, Z.t6)(M.D1),
        N = j || _,
        { analyticsLocations: A } = (0, m.ZP)([g.Z.CONFETTI_POTION_MODAL]),
        P = null != T && !T.consumed;
    (0, s.useEffect)(
        () => () => {
            N && (0, v.SN)(M.D1);
        },
        [T, n.id, t.id, d, r, N]
    );
    let y = (0, s.useCallback)(() => {
            null != d && ((0, v.qc)(n.id, t.id, d, M.D1), (0, c.closeAllModals)());
        }, [d, n.id, t.id]),
        D = (0, s.useCallback)(() => {
            (0, h.Z)({
                skuId: M.D1,
                analyticsLocations: A,
                onComplete: y,
                variantsReturnStyle: u.v.INDIVIDUAL_PRODUCTS
            });
        }, [y, A]),
        L = (0, s.useMemo)(() => ((null == T ? void 0 : T.type) === S.qc2.DEVELOPER_GIFT ? 1 : P ? 2 : 0), [null == T ? void 0 : T.type, P]),
        R = (0, s.useMemo)(() => (l ? 2 : i ? (null == d ? 3 : 0) : 1), [l, i, d]);
    return (0, o.jsx)(C, {
        buttonPurchaseState: L,
        buttonDisabledState: R,
        price: E,
        onActionClick: () => {
            a(!0), (P ? y : D)();
        },
        loading: I || !b,
        selectedEmoji: null != d ? d : void 0,
        setSelectedEmoji: f
    });
}
let C = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l, loading: r, selectedEmoji: a, setSelectedEmoji: s } = e;
        return r
            ? (0, o.jsx)(O, {})
            : null == i
              ? (0, o.jsx)(R, {})
              : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: T.modal,
                            children: (0, o.jsx)(y, {
                                selectedEmoji: a,
                                setSelectedEmoji: s
                            })
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
    y = (e) => {
        let { selectedEmoji: n, setSelectedEmoji: t } = e;
        return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)('div', {
                className: T.body,
                children: [
                    (0, o.jsxs)('div', {
                        className: T.header,
                        children: [
                            (0, o.jsxs)('div', {
                                className: T.heading,
                                children: [
                                    (0, o.jsx)(c.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: j.intl.string(j.t['5/knv7'])
                                    }),
                                    (0, o.jsx)(f.Z, {})
                                ]
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: j.intl.string(j.t.NFTQoa)
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: T.divider }),
                    (0, o.jsxs)('div', {
                        className: T.select,
                        children: [
                            (0, o.jsx)(c.Text, {
                                variant: 'eyebrow',
                                children: j.intl.string(j.t.o8XwoK)
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
let D = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l } = e;
        return (0, o.jsxs)('div', {
            className: T.footer,
            children: [
                (0, o.jsx)(c.Button, {
                    onClick: () => {
                        (0, c.closeModal)(_);
                    },
                    color: c.Button.Colors.PRIMARY,
                    children: j.intl.string(j.t.w2Qbd3)
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
    L = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l } = e,
            {
                isDisabled: r,
                copy: a,
                tooltipCopy: u
            } = (0, s.useMemo)(() => {
                let e = {
                        0: j.intl.formatToPlainString(j.t.Wh82U1, { price: (0, I.T4)(i.amount, i.currency) }),
                        1: j.intl.string(j.t.RrKeDw),
                        2: j.intl.string(j.t['F/H7u7'])
                    },
                    l = {
                        1: j.intl.string(j.t['Cb8/7+']),
                        2: j.intl.string(j.t.fMkB9P),
                        3: j.intl.string(j.t['59ElNj'])
                    },
                    r = 0 !== t;
                return {
                    isDisabled: r,
                    copy: e[n],
                    tooltipCopy: r ? l[t] : ''
                };
            }, [t, n, i.amount, i.currency]);
        return (0, o.jsx)(c.Tooltip, {
            tooltipContentClassName: T.tooltip,
            text: u,
            shouldShow: !!r,
            children: (e) =>
                (0, o.jsx)(c.Button, {
                    ...e,
                    onClick: l,
                    disabled: r,
                    children: (0, o.jsxs)('div', {
                        className: T.buttonCopy,
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
            className: T.anomaly,
            children: (0, o.jsxs)('div', {
                className: T.error,
                children: [
                    (0, o.jsx)(c.Image, {
                        src: b,
                        width: 178,
                        height: 190
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: j.intl.string(j.t.oKJdSk)
                    })
                ]
            })
        }),
    O = () =>
        (0, o.jsx)('div', {
            className: T.anomaly,
            children: (0, o.jsx)('div', {
                className: T.spinner,
                children: (0, o.jsx)(c.Spinner, {})
            })
        });
