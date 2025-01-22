r.r(n),
    r.d(n, {
        MESSAGE_CONFETTI_POTION_MODAL_KEY: function () {
            return w;
        },
        default: function () {
            return M;
        },
        openMessageConfettiModal: function () {
            return P;
        }
    });
var i,
    a,
    o = r(47120);
var s = r(757143);
var l = r(200651),
    u = r(192379),
    c = r(311570),
    d = r(481060),
    f = r(596454),
    p = r(100527),
    h = r(906732),
    _ = r(688465),
    m = r(333867),
    g = r(592125),
    E = r(63063),
    v = r(937615),
    y = r(980463),
    b = r(328908),
    I = r(317951),
    T = r(84040),
    S = r(235894),
    A = r(883998),
    C = r(576645),
    N = r(981631),
    R = r(388032),
    O = r(694638),
    D = r(99713);
let L = 190,
    x = 178,
    w = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    P = (e) => {
        let { channelId: n, message: i, onRedeem: a, onClose: o } = e,
            s = g.Z.getChannel(n);
        if (null != s)
            (0, d.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(r.bind(r, 135793));
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            channel: s,
                            message: i,
                            onRedeem: a,
                            onUnmount: o
                        });
                },
                { modalKey: w }
            );
    };
function M(e) {
    let { transitionState: n, channel: r, message: i, onRedeem: a, onUnmount: o } = e;
    return (
        (0, u.useEffect)(() => o, [o]),
        (0, l.jsx)(d.ModalRoot, {
            size: d.ModalSize.DYNAMIC,
            transitionState: n,
            children: (0, l.jsx)(k, {
                channel: r,
                message: i,
                onRedeem: a
            })
        })
    );
}
function k(e) {
    let { channel: n, message: r, onRedeem: i } = e,
        a = (0, T.Z)(n, r),
        o = null != r,
        s = o && (0, S.U)(r),
        f = (0, b.Qj)(n.id, o),
        { price: _, fetchingPrice: g, error: E } = (0, C.R2)(I.D1),
        { entitlement: v, fetchedEntitlement: A, error: R } = (0, C.t6)(I.D1),
        O = E || R,
        { analyticsLocations: D } = (0, h.ZP)([p.Z.CONFETTI_POTION_MODAL]),
        L = null != v && !v.consumed,
        x = g || !A;
    (0, u.useEffect)(
        () => () => {
            O && (0, y.SN)(I.D1);
        },
        [O, o]
    );
    let w = (0, u.useCallback)(() => {
            null != f && ((0, d.closeAllModals)(), i(f));
        }, [f, i]),
        P = (0, u.useCallback)(() => {
            (0, m.Z)({
                skuId: I.D1,
                analyticsLocations: D,
                onComplete: w,
                variantsReturnStyle: c.v.INDIVIDUAL_PRODUCTS
            });
        }, [w, D]),
        M = (0, u.useCallback)(() => (L ? w() : P()), [w, P, L]),
        k = (0, u.useMemo)(() => ((null == v ? void 0 : v.type) === N.qc2.DEVELOPER_GIFT ? 1 : L ? 2 : 0), [null == v ? void 0 : v.type, L]),
        B = (0, u.useMemo)(() => (s ? 2 : a ? (null == f ? 3 : 0) : 1), [s, a, f]);
    return (0, l.jsx)(U, {
        channel: n,
        buttonPurchaseState: k,
        buttonDisabledState: B,
        price: _,
        onActionClick: M,
        loading: x,
        selectedEmoji: null != f ? f : void 0,
        isReaction: o
    });
}
let U = (e) => {
        let { channel: n, buttonPurchaseState: r, buttonDisabledState: i, price: a, onActionClick: o, loading: s, selectedEmoji: u, isReaction: c } = e;
        return s
            ? (0, l.jsx)(H, {})
            : null == a
              ? (0, l.jsx)(j, {})
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)('div', {
                            className: O.modal,
                            children: (0, l.jsx)(B, {
                                channel: n,
                                selectedEmoji: u,
                                isReaction: c
                            })
                        }),
                        (0, l.jsx)(Z, {
                            buttonPurchaseState: r,
                            buttonDisabledState: i,
                            price: a,
                            onActionClick: o
                        })
                    ]
                });
    },
    B = (e) => {
        let { channel: n, selectedEmoji: r, isReaction: i } = e;
        return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)('div', {
                className: O.body,
                children: [
                    (0, l.jsxs)('div', {
                        className: O.header,
                        children: [
                            (0, l.jsxs)('div', {
                                className: O.heading,
                                children: [
                                    (0, l.jsx)(d.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: R.intl.string(R.t['5/knv7'])
                                    }),
                                    (0, l.jsx)(_.Z, {})
                                ]
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: R.intl.string(R.t.NFTQoa)
                            }),
                            (0, l.jsx)(d.Text, {
                                color: 'text-link',
                                variant: 'text-sm/normal',
                                children: R.intl.format(R.t['jerM9/'], { helpCenterLink: E.Z.getArticleURL(N.BhN.CONFETTI_POTION) })
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { className: O.divider }),
                    (0, l.jsxs)('div', {
                        className: O.selectContainer,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'eyebrow',
                                children: R.intl.string(R.t.o8XwoK)
                            }),
                            (0, l.jsx)(G, {
                                channel: n,
                                selectedEmoji: r,
                                isReaction: i
                            })
                        ]
                    })
                ]
            })
        });
    },
    G = (e) => {
        let { channel: n, selectedEmoji: r, isReaction: i } = e,
            [a, o] = (0, u.useState)(!1),
            s = (0, u.useCallback)(() => {
                o(!1);
            }, []),
            c = (0, u.useCallback)((e) => (0, b.t0)(e, n.id, i), [i, n.id]),
            { emojiName: p, selectionText: h } = (0, u.useMemo)(
                () =>
                    null == r
                        ? {
                              emojiName: null,
                              selectionText: R.intl.string(R.t.KgK5qq)
                          }
                        : {
                              emojiName: null == r.id ? r.optionallyDiverseSequence : r.name,
                              selectionText: r.name.replace(/_/g, ' ')
                          },
                [r]
            );
        return (0, l.jsx)(A.Z, {
            channel: n,
            shouldShow: a,
            onRequestClose: s,
            setEmojiConfetti: c,
            position: 'left',
            align: 'top',
            children: () =>
                (0, l.jsx)(d.Button, {
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.NONE,
                    onClick: () => o(!a),
                    className: O.emojiSelect,
                    innerClassName: O.innerEmojiSelect,
                    children: (0, l.jsxs)('div', {
                        className: O.emojiContent,
                        children: [
                            (0, l.jsxs)('div', {
                                className: O.selectedEmoji,
                                children: [
                                    null == r
                                        ? (0, l.jsx)(d.ReactionIcon, {
                                              color: 'currentColor',
                                              size: 'custom',
                                              className: O.emojiIcon
                                          })
                                        : (0, l.jsx)(f.Z, {
                                              animated: !1,
                                              emojiId: r.id,
                                              emojiName: p,
                                              className: O.emojiIcon
                                          }),
                                    (0, l.jsx)(d.Text, {
                                        color: 'interactive-active',
                                        variant: 'text-sm/normal',
                                        children: h
                                    })
                                ]
                            }),
                            a
                                ? (0, l.jsx)(d.ChevronSmallUpIcon, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: O.chevron
                                  })
                                : (0, l.jsx)(d.ChevronSmallDownIcon, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: O.chevron
                                  })
                        ]
                    })
                })
        });
    };
!(function (e) {
    (e[(e.BUY = 0)] = 'BUY'), (e[(e.REDEEM = 1)] = 'REDEEM'), (e[(e.ACTIVATE = 2)] = 'ACTIVATE');
})(i || (i = {})),
    !(function (e) {
        (e[(e.ENABLED = 0)] = 'ENABLED'), (e[(e.INELIGIBLE = 1)] = 'INELIGIBLE'), (e[(e.ALREADY_ACTIVE = 2)] = 'ALREADY_ACTIVE'), (e[(e.MISSING_SELECTION = 3)] = 'MISSING_SELECTION');
    })(a || (a = {}));
let Z = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: r, price: i, onActionClick: a } = e;
        return (0, l.jsxs)('div', {
            className: O.footer,
            children: [
                (0, l.jsx)(d.Button, {
                    onClick: () => {
                        (0, d.closeModal)(w);
                    },
                    color: d.Button.Colors.PRIMARY,
                    children: R.intl.string(R.t.w2Qbd3)
                }),
                (0, l.jsxs)('div', {
                    className: O.footerRight,
                    children: [
                        (0, l.jsx)(F, {}),
                        (0, l.jsx)(V, {
                            buttonPurchaseState: n,
                            buttonDisabledState: r,
                            price: i,
                            onActionClick: a
                        })
                    ]
                })
            ]
        });
    },
    F = () => {
        let { entitlement: e, numPotions: n } = (0, C.t6)(I.D1);
        if (null == n || 0 === n) return null;
        let r = (null == e ? void 0 : e.type) === N.qc2.DEVELOPER_GIFT ? R.t['b+P6ra'] : R.t.RiQ4cn;
        return (0, l.jsxs)('div', {
            className: O.remaining,
            children: [
                (0, l.jsx)(d.ExperimentalConfettiIcon, { className: O.shootingStar }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-sm/semibold',
                    children: R.intl.formatToPlainString(r, { numPotions: n })
                })
            ]
        });
    },
    V = (e) => {
        let { buttonPurchaseState: n, buttonDisabledState: r, price: i, onActionClick: a } = e,
            {
                isDisabled: o,
                copy: s,
                tooltipCopy: c
            } = (0, u.useMemo)(() => {
                let e = {
                        0: R.intl.formatToPlainString(R.t.Wh82U1, { price: (0, v.T4)(i.amount, i.currency) }),
                        1: R.intl.string(R.t.RrKeDw),
                        2: R.intl.string(R.t.WOXaWF)
                    },
                    a = {
                        1: R.intl.string(R.t['Cb8/7+']),
                        2: R.intl.string(R.t.fMkB9P),
                        3: R.intl.string(R.t['59ElNj'])
                    },
                    o = 0 !== r;
                return {
                    isDisabled: o,
                    copy: e[n],
                    tooltipCopy: o ? a[r] : ''
                };
            }, [r, n, i.amount, i.currency]);
        return (0, l.jsx)(d.Tooltip, {
            tooltipContentClassName: O.tooltip,
            text: c,
            shouldShow: !!o,
            children: (e) =>
                (0, l.jsx)(d.Button, {
                    ...e,
                    onClick: a,
                    disabled: o,
                    children: (0, l.jsx)('div', {
                        className: O.buttonCopy,
                        children: s
                    })
                })
        });
    },
    j = () =>
        (0, l.jsx)('div', {
            className: O.anomaly,
            children: (0, l.jsxs)('div', {
                className: O.error,
                children: [
                    (0, l.jsx)(d.Image, {
                        src: D,
                        width: x,
                        height: L
                    }),
                    (0, l.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: R.intl.string(R.t.oKJdSk)
                    })
                ]
            })
        }),
    H = () =>
        (0, l.jsx)('div', {
            className: O.anomaly,
            children: (0, l.jsx)('div', {
                className: O.spinner,
                children: (0, l.jsx)(d.Spinner, {})
            })
        });
