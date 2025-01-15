t.r(n),
    t.d(n, {
        MESSAGE_CONFETTI_POTION_MODAL_KEY: function () {
            return A;
        },
        default: function () {
            return P;
        },
        openMessageConfettiModal: function () {
            return C;
        }
    }),
    t(47120),
    t(757143);
var i,
    l,
    r,
    a,
    o = t(200651),
    s = t(192379),
    u = t(311570),
    d = t(692547),
    c = t(481060),
    m = t(596454),
    g = t(100527),
    f = t(906732),
    h = t(688465),
    E = t(333867),
    I = t(63063),
    v = t(937615),
    p = t(980463),
    M = t(317951),
    x = t(84040),
    S = t(235894),
    Z = t(883998),
    j = t(576645),
    N = t(981631),
    T = t(388032),
    _ = t(855797),
    b = t(99713);
let A = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    C = (e, n) => {
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
            { modalKey: A }
        );
    };
function P(e) {
    let { transitionState: n, channel: t, message: i } = e;
    return (0, o.jsx)(c.ModalRoot, {
        size: c.ModalSize.DYNAMIC,
        transitionState: n,
        children: (0, o.jsx)(y, {
            channel: t,
            message: i
        })
    });
}
function y(e) {
    let { channel: n, message: t } = e,
        i = (0, x.Z)(t, n),
        l = (0, S.U)(t),
        [r, a] = (0, s.useState)(!1),
        [d, m] = (0, s.useState)(),
        { price: h, fetchingPrice: I, error: v } = (0, j.R2)(M.D1),
        { entitlement: Z, fetchedEntitlement: T, error: _ } = (0, j.t6)(M.D1),
        b = v || _,
        { analyticsLocations: A } = (0, f.ZP)([g.Z.CONFETTI_POTION_MODAL]),
        C = null != Z && !Z.consumed;
    (0, s.useEffect)(
        () => () => {
            b && (0, p.SN)(M.D1);
        },
        [Z, n.id, t.id, d, r, b]
    );
    let P = (0, s.useCallback)(() => {
            null != d && ((0, p.qc)(n.id, t.id, d, M.D1), (0, c.closeAllModals)());
        }, [d, n.id, t.id]),
        y = (0, s.useCallback)(() => {
            (0, E.Z)({
                skuId: M.D1,
                analyticsLocations: A,
                onComplete: P,
                variantsReturnStyle: u.v.INDIVIDUAL_PRODUCTS
            });
        }, [P, A]),
        L = (0, s.useMemo)(() => ((null == Z ? void 0 : Z.type) === N.qc2.DEVELOPER_GIFT ? 1 : C ? 2 : 0), [null == Z ? void 0 : Z.type, C]),
        R = (0, s.useMemo)(() => (l ? 2 : i ? (null == d ? 3 : 0) : 1), [l, i, d]);
    return (0, o.jsx)(D, {
        channel: n,
        buttonPurchaseState: L,
        buttonDisabledState: R,
        price: h,
        onActionClick: () => {
            a(!0), (C ? P : y)();
        },
        loading: I || !T,
        selectedEmoji: null != d ? d : void 0,
        setSelectedEmoji: m
    });
}
let D = (e) => {
        let { channel: n, buttonPurchaseState: t, buttonDisabledState: i, price: l, onActionClick: r, loading: a, selectedEmoji: s, setSelectedEmoji: u } = e;
        return a
            ? (0, o.jsx)(U, {})
            : null == l
              ? (0, o.jsx)(w, {})
              : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: _.modal,
                            children: (0, o.jsx)(L, {
                                channel: n,
                                selectedEmoji: s,
                                setSelectedEmoji: u
                            })
                        }),
                        (0, o.jsx)(O, {
                            buttonPurchaseState: t,
                            buttonDisabledState: i,
                            price: l,
                            onActionClick: r
                        })
                    ]
                });
    },
    L = (e) => {
        let { channel: n, selectedEmoji: t, setSelectedEmoji: i } = e;
        return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)('div', {
                className: _.body,
                children: [
                    (0, o.jsxs)('div', {
                        className: _.header,
                        children: [
                            (0, o.jsxs)('div', {
                                className: _.heading,
                                children: [
                                    (0, o.jsx)(c.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: T.intl.string(T.t['5/knv7'])
                                    }),
                                    (0, o.jsx)(h.Z, {})
                                ]
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: T.intl.string(T.t.NFTQoa)
                            }),
                            (0, o.jsx)(c.Text, {
                                color: 'text-link',
                                variant: 'text-sm/normal',
                                children: T.intl.format(T.t['jerM9/'], { helpCenterLink: I.Z.getArticleURL(N.BhN.CONFETTI_POTION) })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: _.divider }),
                    (0, o.jsxs)('div', {
                        className: _.selectContainer,
                        children: [
                            (0, o.jsx)(c.Text, {
                                variant: 'eyebrow',
                                children: T.intl.string(T.t.o8XwoK)
                            }),
                            (0, o.jsx)(R, {
                                channel: n,
                                selectedEmoji: t,
                                setSelectedEmoji: i
                            })
                        ]
                    })
                ]
            })
        });
    },
    R = (e) => {
        let { channel: n, selectedEmoji: t, setSelectedEmoji: i } = e,
            [l, r] = (0, s.useState)(!1),
            a = (0, s.useCallback)(() => {
                r(!1);
            }, []),
            { emojiName: u, selectionText: d } = (0, s.useMemo)(
                () =>
                    null == t
                        ? {
                              emojiName: null,
                              selectionText: T.intl.string(T.t.KgK5qq)
                          }
                        : {
                              emojiName: null == t.id ? t.optionallyDiverseSequence : t.name,
                              selectionText: t.name.replace(/_/g, ' ')
                          },
                [t]
            );
        return (0, o.jsx)(Z.Z, {
            channel: n,
            shouldShow: l,
            onRequestClose: a,
            setEmojiConfetti: i,
            position: 'left',
            align: 'top',
            children: () =>
                (0, o.jsx)(c.Button, {
                    look: c.Button.Looks.BLANK,
                    size: c.Button.Sizes.NONE,
                    onClick: () => r(!l),
                    className: _.emojiSelect,
                    innerClassName: _.innerEmojiSelect,
                    children: (0, o.jsxs)('div', {
                        className: _.emojiContent,
                        children: [
                            (0, o.jsxs)('div', {
                                className: _.selectedEmoji,
                                children: [
                                    null == t
                                        ? (0, o.jsx)(c.ReactionIcon, {
                                              color: 'currentColor',
                                              size: 'custom',
                                              className: _.emojiIcon
                                          })
                                        : (0, o.jsx)(m.Z, {
                                              animated: !1,
                                              emojiId: t.id,
                                              emojiName: u,
                                              className: _.emojiIcon
                                          }),
                                    (0, o.jsx)(c.Text, {
                                        color: 'interactive-active',
                                        variant: 'text-sm/normal',
                                        children: d
                                    })
                                ]
                            }),
                            l
                                ? (0, o.jsx)(c.ChevronSmallUpIcon, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: _.chevron
                                  })
                                : (0, o.jsx)(c.ChevronSmallDownIcon, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: _.chevron
                                  })
                        ]
                    })
                })
        });
    };
((r = i || (i = {}))[(r.BUY = 0)] = 'BUY'), (r[(r.REDEEM = 1)] = 'REDEEM'), (r[(r.ACTIVATE = 2)] = 'ACTIVATE'), ((a = l || (l = {}))[(a.ENABLED = 0)] = 'ENABLED'), (a[(a.INELIGIBLE = 1)] = 'INELIGIBLE'), (a[(a.ALREADY_ACTIVE = 2)] = 'ALREADY_ACTIVE'), (a[(a.MISSING_SELECTION = 3)] = 'MISSING_SELECTION');
let O = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: t, price: i, onActionClick: l } = e;
        return (0, o.jsxs)('div', {
            className: _.footer,
            children: [
                (0, o.jsx)(c.Button, {
                    onClick: () => {
                        (0, c.closeModal)(A);
                    },
                    color: c.Button.Colors.PRIMARY,
                    children: T.intl.string(T.t.w2Qbd3)
                }),
                (0, o.jsx)(G, {
                    buttonPurchaseState: n,
                    buttonDisabledState: t,
                    price: i,
                    onActionClick: l
                })
            ]
        });
    },
    G = (e) => {
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
            tooltipContentClassName: _.tooltip,
            text: u,
            shouldShow: !!r,
            children: (e) =>
                (0, o.jsx)(c.Button, {
                    ...e,
                    onClick: l,
                    disabled: r,
                    children: (0, o.jsxs)('div', {
                        className: _.buttonCopy,
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
    w = () =>
        (0, o.jsx)('div', {
            className: _.anomaly,
            children: (0, o.jsxs)('div', {
                className: _.error,
                children: [
                    (0, o.jsx)(c.Image, {
                        src: b,
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
    U = () =>
        (0, o.jsx)('div', {
            className: _.anomaly,
            children: (0, o.jsx)('div', {
                className: _.spinner,
                children: (0, o.jsx)(c.Spinner, {})
            })
        });
