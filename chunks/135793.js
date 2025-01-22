t.r(n),
    t.d(n, {
        MESSAGE_CONFETTI_POTION_MODAL_KEY: function () {
            return b;
        },
        default: function () {
            return C;
        },
        openMessageConfettiModal: function () {
            return A;
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
    d = t(481060),
    c = t(596454),
    m = t(100527),
    g = t(906732),
    f = t(688465),
    h = t(333867),
    E = t(63063),
    I = t(937615),
    v = t(980463),
    p = t(317951),
    x = t(84040),
    M = t(235894),
    S = t(883998),
    Z = t(576645),
    j = t(981631),
    N = t(388032),
    T = t(694638),
    _ = t(99713);
let b = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    A = (e, n) => {
        (0, d.openModalLazy)(
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
function C(e) {
    let { transitionState: n, channel: t, message: i } = e;
    return (0, o.jsx)(d.ModalRoot, {
        size: d.ModalSize.DYNAMIC,
        transitionState: n,
        children: (0, o.jsx)(P, {
            channel: t,
            message: i
        })
    });
}
function P(e) {
    let { channel: n, message: t } = e,
        i = (0, x.Z)(t, n),
        l = (0, M.U)(t),
        [r, a] = (0, s.useState)(!1),
        [c, f] = (0, s.useState)(),
        { price: E, fetchingPrice: I, error: S } = (0, Z.R2)(p.D1),
        { entitlement: N, fetchedEntitlement: T, error: _ } = (0, Z.t6)(p.D1),
        b = S || _,
        { analyticsLocations: A } = (0, g.ZP)([m.Z.CONFETTI_POTION_MODAL]),
        C = null != N && !N.consumed;
    (0, s.useEffect)(
        () => () => {
            b && (0, v.SN)(p.D1);
        },
        [N, n.id, t.id, c, r, b]
    );
    let P = (0, s.useCallback)(() => {
            null != c && ((0, v.qc)(n.id, t.id, c, p.D1), (0, d.closeAllModals)());
        }, [c, n.id, t.id]),
        D = (0, s.useCallback)(() => {
            (0, h.Z)({
                skuId: p.D1,
                analyticsLocations: A,
                onComplete: P,
                variantsReturnStyle: u.v.INDIVIDUAL_PRODUCTS
            });
        }, [P, A]),
        L = (0, s.useMemo)(() => ((null == N ? void 0 : N.type) === j.qc2.DEVELOPER_GIFT ? 1 : C ? 2 : 0), [null == N ? void 0 : N.type, C]),
        O = (0, s.useMemo)(() => (l ? 2 : i ? (null == c ? 3 : 0) : 1), [l, i, c]);
    return (0, o.jsx)(y, {
        channel: n,
        buttonPurchaseState: L,
        buttonDisabledState: O,
        price: E,
        onActionClick: () => {
            a(!0), (C ? P : D)();
        },
        loading: I || !T,
        selectedEmoji: null != c ? c : void 0,
        setSelectedEmoji: f
    });
}
let y = (e) => {
        let { channel: n, buttonPurchaseState: t, buttonDisabledState: i, price: l, onActionClick: r, loading: a, selectedEmoji: s, setSelectedEmoji: u } = e;
        return a
            ? (0, o.jsx)(U, {})
            : null == l
              ? (0, o.jsx)(w, {})
              : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: T.modal,
                            children: (0, o.jsx)(D, {
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
    D = (e) => {
        let { channel: n, selectedEmoji: t, setSelectedEmoji: i } = e;
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
                                    (0, o.jsx)(d.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: N.intl.string(N.t['5/knv7'])
                                    }),
                                    (0, o.jsx)(f.Z, {})
                                ]
                            }),
                            (0, o.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: N.intl.string(N.t.NFTQoa)
                            }),
                            (0, o.jsx)(d.Text, {
                                color: 'text-link',
                                variant: 'text-sm/normal',
                                children: N.intl.format(N.t['jerM9/'], { helpCenterLink: E.Z.getArticleURL(j.BhN.CONFETTI_POTION) })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: T.divider }),
                    (0, o.jsxs)('div', {
                        className: T.selectContainer,
                        children: [
                            (0, o.jsx)(d.Text, {
                                variant: 'eyebrow',
                                children: N.intl.string(N.t.o8XwoK)
                            }),
                            (0, o.jsx)(L, {
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
    L = (e) => {
        let { channel: n, selectedEmoji: t, setSelectedEmoji: i } = e,
            [l, r] = (0, s.useState)(!1),
            a = (0, s.useCallback)(() => {
                r(!1);
            }, []),
            { emojiName: u, selectionText: m } = (0, s.useMemo)(
                () =>
                    null == t
                        ? {
                              emojiName: null,
                              selectionText: N.intl.string(N.t.KgK5qq)
                          }
                        : {
                              emojiName: null == t.id ? t.optionallyDiverseSequence : t.name,
                              selectionText: t.name.replace(/_/g, ' ')
                          },
                [t]
            );
        return (0, o.jsx)(S.Z, {
            channel: n,
            shouldShow: l,
            onRequestClose: a,
            setEmojiConfetti: i,
            position: 'left',
            align: 'top',
            children: () =>
                (0, o.jsx)(d.Button, {
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.NONE,
                    onClick: () => r(!l),
                    className: T.emojiSelect,
                    innerClassName: T.innerEmojiSelect,
                    children: (0, o.jsxs)('div', {
                        className: T.emojiContent,
                        children: [
                            (0, o.jsxs)('div', {
                                className: T.selectedEmoji,
                                children: [
                                    null == t
                                        ? (0, o.jsx)(d.ReactionIcon, {
                                              color: 'currentColor',
                                              size: 'custom',
                                              className: T.emojiIcon
                                          })
                                        : (0, o.jsx)(c.Z, {
                                              animated: !1,
                                              emojiId: t.id,
                                              emojiName: u,
                                              className: T.emojiIcon
                                          }),
                                    (0, o.jsx)(d.Text, {
                                        color: 'interactive-active',
                                        variant: 'text-sm/normal',
                                        children: m
                                    })
                                ]
                            }),
                            l
                                ? (0, o.jsx)(d.ChevronSmallUpIcon, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: T.chevron
                                  })
                                : (0, o.jsx)(d.ChevronSmallDownIcon, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: T.chevron
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
            className: T.footer,
            children: [
                (0, o.jsx)(d.Button, {
                    onClick: () => {
                        (0, d.closeModal)(b);
                    },
                    color: d.Button.Colors.PRIMARY,
                    children: N.intl.string(N.t.w2Qbd3)
                }),
                (0, o.jsxs)('div', {
                    className: T.footerRight,
                    children: [
                        (0, o.jsx)(R, {}),
                        (0, o.jsx)(G, {
                            buttonPurchaseState: n,
                            buttonDisabledState: t,
                            price: i,
                            onActionClick: l
                        })
                    ]
                })
            ]
        });
    },
    R = () => {
        let { entitlement: e, numPotions: n } = (0, Z.t6)(p.D1);
        if (null == n || 0 === n) return null;
        let t = (null == e ? void 0 : e.type) === j.qc2.DEVELOPER_GIFT ? N.t['b+P6ra'] : N.t.RiQ4cn;
        return (0, o.jsxs)('div', {
            className: T.remaining,
            children: [
                (0, o.jsx)(d.ExperimentalConfettiIcon, { className: T.shootingStar }),
                (0, o.jsx)(d.Text, {
                    variant: 'text-sm/semibold',
                    children: N.intl.formatToPlainString(t, { numPotions: n })
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
                        0: N.intl.formatToPlainString(N.t.Wh82U1, { price: (0, I.T4)(i.amount, i.currency) }),
                        1: N.intl.string(N.t.RrKeDw),
                        2: N.intl.string(N.t.WOXaWF)
                    },
                    l = {
                        1: N.intl.string(N.t['Cb8/7+']),
                        2: N.intl.string(N.t.fMkB9P),
                        3: N.intl.string(N.t['59ElNj'])
                    },
                    r = 0 !== t;
                return {
                    isDisabled: r,
                    copy: e[n],
                    tooltipCopy: r ? l[t] : ''
                };
            }, [t, n, i.amount, i.currency]);
        return (0, o.jsx)(d.Tooltip, {
            tooltipContentClassName: T.tooltip,
            text: u,
            shouldShow: !!r,
            children: (e) =>
                (0, o.jsx)(d.Button, {
                    ...e,
                    onClick: l,
                    disabled: r,
                    children: (0, o.jsx)('div', {
                        className: T.buttonCopy,
                        children: a
                    })
                })
        });
    },
    w = () =>
        (0, o.jsx)('div', {
            className: T.anomaly,
            children: (0, o.jsxs)('div', {
                className: T.error,
                children: [
                    (0, o.jsx)(d.Image, {
                        src: _,
                        width: 178,
                        height: 190
                    }),
                    (0, o.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t.oKJdSk)
                    })
                ]
            })
        }),
    U = () =>
        (0, o.jsx)('div', {
            className: T.anomaly,
            children: (0, o.jsx)('div', {
                className: T.spinner,
                children: (0, o.jsx)(d.Spinner, {})
            })
        });
