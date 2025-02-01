n.d(t, {
    default: () => L,
    s: () => x
}),
    n(47120),
    n(757143);
var i = n(200651),
    r = n(192379),
    a = n(311570),
    s = n(481060),
    o = n(596454),
    l = n(100527),
    u = n(906732),
    c = n(688465),
    d = n(333867),
    f = n(592125),
    _ = n(63063),
    p = n(937615),
    h = n(980463),
    m = n(328908),
    g = n(992970),
    E = n(317951),
    v = n(84040),
    y = n(287941),
    I = n(235894),
    T = n(883998),
    b = n(576645),
    S = n(981631),
    A = n(388032),
    N = n(694638),
    C = n(99713);
let R = 190,
    O = 178,
    D = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    x = (e) => {
        let { channelId: t, message: r, onRedeem: a, onClose: o, buttonUseState: l = 'activate' } = e,
            u = f.Z.getChannel(t);
        null != u &&
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 135793));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            channel: u,
                            message: r,
                            onRedeem: a,
                            onUnmount: o,
                            buttonUseState: l
                        });
                },
                { modalKey: D }
            );
    };
function L(e) {
    let { transitionState: t, channel: n, message: a, onRedeem: o, onUnmount: l, buttonUseState: u } = e;
    return (
        (0, r.useEffect)(() => l, [l]),
        (0, i.jsx)(s.Y0X, {
            size: s.CgR.DYNAMIC,
            transitionState: t,
            children: (0, i.jsx)(P, {
                channel: n,
                message: a,
                onRedeem: o,
                buttonUseState: u
            })
        })
    );
}
function P(e) {
    let { channel: t, message: n, onRedeem: o, buttonUseState: c } = e,
        f = (0, v.Z)(t, n),
        _ = null != n,
        p = _ && (0, I.Uw)(n),
        g = (0, m.Qj)(t.id, _),
        { price: y, fetchingPrice: T, error: A } = (0, b.R2)(E.D1),
        { entitlement: N, fetchedEntitlement: C, error: R } = (0, b.t6)(E.D1),
        O = A || R,
        { analyticsLocations: D } = (0, u.ZP)([l.Z.CONFETTI_POTION_MODAL]),
        x = null != N && !N.consumed,
        L = T || !C;
    (0, r.useEffect)(
        () => () => {
            O && (0, h.SN)(E.D1);
        },
        [O, _]
    );
    let P = (0, r.useCallback)(() => {
            null != g && ((0, s.pTH)(), o(g));
        }, [g, o]),
        M = (0, r.useCallback)(() => {
            (0, d.Z)({
                skuId: E.D1,
                analyticsLocations: D,
                onComplete: () => {
                    P(), (0, h.gA)(E.D1);
                },
                variantsReturnStyle: a.v.INDIVIDUAL_PRODUCTS
            });
        }, [P, D]),
        k = (0, r.useCallback)(() => (x ? P() : M()), [P, M, x]),
        U = (0, r.useMemo)(() => {
            if (null != N) {
                if ('apply' === c) return 3;
                if (N.type === S.qc2.DEVELOPER_GIFT) return 1;
                if (x) return 2;
            }
            return 0;
        }, [N, x, c]),
        G = (0, r.useMemo)(() => (p ? 2 : f ? (null == g ? 3 : 0) : 1), [p, f, g]);
    return (0, i.jsx)(w, {
        channel: t,
        buttonPurchaseState: U,
        buttonDisabledState: G,
        price: y,
        onActionClick: k,
        loading: L,
        selectedEmoji: null != g ? g : void 0,
        isReaction: _
    });
}
let w = (e) => {
        let { channel: t, buttonPurchaseState: n, buttonDisabledState: a, price: s, onActionClick: o, loading: l, selectedEmoji: u, isReaction: c } = e,
            d = (0, r.useRef)(null);
        return ((0, r.useEffect)(() => {
            var e;
            if (null == u) return;
            let t = null === (e = d.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = (0, I.NV)(u),
                { x: i, y: r, width: a, height: s } = t;
            (0, y.I)(
                n,
                {
                    x: i,
                    y: r,
                    w: a,
                    h: s
                },
                !0,
                g.LL.ConfettiPreview
            );
        }, [u]),
        l)
            ? (0, i.jsx)(F, {})
            : null == s
              ? (0, i.jsx)(Z, {})
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            className: N.modal,
                            ref: d,
                            children: (0, i.jsx)(M, {
                                channel: t,
                                selectedEmoji: u,
                                isReaction: c
                            })
                        }),
                        (0, i.jsx)(U, {
                            buttonPurchaseState: n,
                            buttonDisabledState: a,
                            price: s,
                            onActionClick: o
                        })
                    ]
                });
    },
    M = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: r } = e;
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: N.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: N.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: N.heading,
                                children: [
                                    (0, i.jsx)(s.X6q, {
                                        variant: 'heading-lg/bold',
                                        children: A.intl.string(A.t['5/knv7'])
                                    }),
                                    (0, i.jsx)(c.Z, {})
                                ]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: A.intl.string(A.t.NFTQoa)
                            }),
                            (0, i.jsx)(s.Text, {
                                color: 'text-link',
                                variant: 'text-sm/normal',
                                children: A.intl.format(A.t['jerM9/'], { helpCenterLink: _.Z.getArticleURL(S.BhN.CONFETTI_POTION) })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: N.divider }),
                    (0, i.jsxs)('div', {
                        className: N.selectContainer,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'eyebrow',
                                children: A.intl.string(A.t.o8XwoK)
                            }),
                            (0, i.jsx)(k, {
                                channel: t,
                                selectedEmoji: n,
                                isReaction: r
                            })
                        ]
                    })
                ]
            })
        });
    },
    k = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: a } = e,
            [l, u] = (0, r.useState)(!1),
            c = (0, r.useCallback)(() => {
                u(!1);
            }, []),
            d = (0, r.useCallback)((e) => (0, m.t0)(e, t.id, a), [a, t.id]),
            { emojiName: f, selectionText: _ } = (0, r.useMemo)(
                () =>
                    null == n
                        ? {
                              emojiName: null,
                              selectionText: A.intl.string(A.t.KgK5qq)
                          }
                        : {
                              emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
                              selectionText: n.name.replace(/_/g, ' ')
                          },
                [n]
            );
        return (0, i.jsx)(T.Z, {
            channel: t,
            shouldShow: l,
            onRequestClose: c,
            setEmojiConfetti: d,
            position: 'left',
            align: 'top',
            children: () =>
                (0, i.jsx)(s.zxk, {
                    look: s.zxk.Looks.BLANK,
                    size: s.zxk.Sizes.NONE,
                    onClick: () => u(!l),
                    className: N.emojiSelect,
                    innerClassName: N.innerEmojiSelect,
                    children: (0, i.jsxs)('div', {
                        className: N.emojiContent,
                        children: [
                            (0, i.jsxs)('div', {
                                className: N.selectedEmoji,
                                children: [
                                    null == n
                                        ? (0, i.jsx)(s.EO4, {
                                              color: 'currentColor',
                                              size: 'custom',
                                              className: N.emojiIcon
                                          })
                                        : (0, i.jsx)(o.Z, {
                                              animated: !1,
                                              emojiId: n.id,
                                              emojiName: f,
                                              className: N.emojiIcon
                                          }),
                                    (0, i.jsx)(s.Text, {
                                        color: 'interactive-active',
                                        variant: 'text-sm/normal',
                                        children: _
                                    })
                                ]
                            }),
                            l
                                ? (0, i.jsx)(s.u04, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: N.chevron
                                  })
                                : (0, i.jsx)(s.CJ0, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: N.chevron
                                  })
                        ]
                    })
                })
        });
    },
    U = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: r, onActionClick: a } = e;
        return (0, i.jsxs)('div', {
            className: N.footer,
            children: [
                (0, i.jsx)(s.zxk, {
                    onClick: () => {
                        (0, s.Mr3)(D);
                    },
                    color: s.zxk.Colors.PRIMARY,
                    children: A.intl.string(A.t.w2Qbd3)
                }),
                (0, i.jsxs)('div', {
                    className: N.footerRight,
                    children: [
                        (0, i.jsx)(G, {}),
                        (0, i.jsx)(B, {
                            buttonPurchaseState: t,
                            buttonDisabledState: n,
                            price: r,
                            onActionClick: a
                        })
                    ]
                })
            ]
        });
    },
    G = () => {
        let { entitlement: e, numPotions: t } = (0, b.t6)(E.D1);
        if (null == t || 0 === t) return null;
        let n = (null == e ? void 0 : e.type) === S.qc2.DEVELOPER_GIFT ? A.t['b+P6ra'] : A.t.RiQ4cn;
        return (0, i.jsxs)('div', {
            className: N.remaining,
            children: [
                (0, i.jsx)(s.l22, {
                    color: 'currentColor',
                    className: N.shootingStar
                }),
                (0, i.jsx)(s.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    children: A.intl.formatToPlainString(n, { numPotions: t })
                })
            ]
        });
    },
    B = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: a, onActionClick: o } = e,
            {
                isDisabled: l,
                copy: u,
                tooltipCopy: c
            } = (0, r.useMemo)(() => {
                let e = {
                        0: A.intl.formatToPlainString(A.t.POGRmp, {
                            amount: E.pe,
                            price: (0, p.T4)(a.amount, a.currency)
                        }),
                        1: A.intl.string(A.t.RrKeDw),
                        2: A.intl.string(A.t.WOXaWF),
                        3: A.intl.string(A.t['1Qm829'])
                    },
                    i = {
                        1: A.intl.string(A.t['Cb8/7+']),
                        2: A.intl.string(A.t.fMkB9P),
                        3: A.intl.string(A.t['59ElNj'])
                    },
                    r = 0 !== n;
                return {
                    isDisabled: r,
                    copy: e[t],
                    tooltipCopy: r ? i[n] : ''
                };
            }, [n, t, a.amount, a.currency]);
        return (0, i.jsx)(s.ua7, {
            tooltipContentClassName: N.tooltip,
            text: c,
            shouldShow: !!l,
            children: (e) =>
                (0, i.jsx)(s.zxk, {
                    ...e,
                    onClick: o,
                    disabled: l,
                    children: (0, i.jsx)('div', {
                        className: N.buttonCopy,
                        children: u
                    })
                })
        });
    },
    Z = () =>
        (0, i.jsx)('div', {
            className: N.anomaly,
            children: (0, i.jsxs)('div', {
                className: N.error,
                children: [
                    (0, i.jsx)(s.Eep, {
                        src: C,
                        width: O,
                        height: R
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: A.intl.string(A.t.oKJdSk)
                    })
                ]
            })
        }),
    F = () =>
        (0, i.jsx)('div', {
            className: N.anomaly,
            children: (0, i.jsx)('div', {
                className: N.spinner,
                children: (0, i.jsx)(s.$jN, {})
            })
        });
