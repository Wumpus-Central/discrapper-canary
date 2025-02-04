n.d(t, {
    default: () => P,
    s: () => L
}),
    n(47120),
    n(757143);
var i = n(200651),
    r = n(192379),
    a = n(990547),
    s = n(311570),
    o = n(481060),
    l = n(596454),
    u = n(100527),
    c = n(906732),
    d = n(688465),
    f = n(333867),
    _ = n(592125),
    p = n(63063),
    h = n(937615),
    m = n(980463),
    g = n(328908),
    E = n(992970),
    v = n(317951),
    y = n(84040),
    I = n(287941),
    b = n(235894),
    T = n(883998),
    S = n(576645),
    A = n(981631),
    N = n(388032),
    C = n(694638),
    R = n(99713);
let O = 190,
    D = 178,
    x = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    L = (e) => {
        let { channelId: t, message: r, onRedeem: a, onClose: s, buttonUseState: l = 'activate', source: u } = e,
            c = _.Z.getChannel(t);
        null != c &&
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 135793));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            channel: c,
                            message: r,
                            onRedeem: a,
                            onUnmount: s,
                            source: u,
                            buttonUseState: l
                        });
                },
                { modalKey: x }
            );
    };
function P(e) {
    let { transitionState: t, channel: n, message: s, onRedeem: l, onUnmount: u, buttonUseState: c, source: d } = e;
    return (
        (0, r.useEffect)(() => u, [u]),
        (0, i.jsx)(o.Y0X, {
            size: o.CgR.DYNAMIC,
            transitionState: t,
            impression: {
                impressionName: a.ImpressionNames.CONFETTI_POTION_MODAL,
                impressionProperties: { source: d }
            },
            children: (0, i.jsx)(w, {
                channel: n,
                message: s,
                onRedeem: l,
                buttonUseState: c
            })
        })
    );
}
function w(e) {
    let { channel: t, message: n, onRedeem: a, buttonUseState: l } = e,
        d = (0, y.Z)(t, n),
        _ = null != n,
        p = _ && (0, b.Uw)(n),
        h = (0, g.Qj)(t.id, _),
        { price: E, fetchingPrice: I, error: T } = (0, S.R2)(v.D1),
        { entitlement: N, fetchedEntitlement: C, error: R } = (0, S.t6)(v.D1),
        O = T || R,
        { analyticsLocations: D } = (0, c.ZP)([u.Z.CONFETTI_POTION_MODAL]),
        x = null != N && !N.consumed,
        L = I || !C;
    (0, r.useEffect)(
        () => () => {
            O && (0, m.SN)(v.D1);
        },
        [O, _]
    );
    let P = (0, r.useCallback)(() => {
            null != h && ((0, o.pTH)(), a(h));
        }, [h, a]),
        w = (0, r.useCallback)(() => {
            (0, f.Z)({
                skuId: v.D1,
                analyticsLocations: D,
                onComplete: () => {
                    P(), (0, m.gA)(v.D1);
                },
                variantsReturnStyle: s.v.INDIVIDUAL_PRODUCTS
            });
        }, [P, D]),
        k = (0, r.useCallback)(() => (x ? P() : w()), [P, w, x]),
        U = (0, r.useMemo)(() => {
            if (null != N) {
                if ('apply' === l) return 3;
                if (N.type === A.qc2.DEVELOPER_GIFT) return 1;
                if (x) return 2;
            }
            return 0;
        }, [N, x, l]),
        G = (0, r.useMemo)(() => (p ? 2 : d ? (null == h ? 3 : 0) : 1), [p, d, h]);
    return (0, i.jsx)(M, {
        channel: t,
        buttonPurchaseState: U,
        buttonDisabledState: G,
        price: E,
        onActionClick: k,
        loading: L,
        selectedEmoji: null != h ? h : void 0,
        isReaction: _
    });
}
let M = (e) => {
        let { channel: t, buttonPurchaseState: n, buttonDisabledState: a, price: s, onActionClick: o, loading: l, selectedEmoji: u, isReaction: c } = e,
            d = (0, r.useRef)(null);
        return ((0, r.useEffect)(() => {
            var e;
            if (null == u) return;
            let t = null === (e = d.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = (0, b.NV)(u),
                { x: i, y: r, width: a, height: s } = t;
            (0, I.I)(
                n,
                {
                    x: i,
                    y: r,
                    w: a,
                    h: s
                },
                !0,
                E.LL.ConfettiPreview
            );
        }, [u]),
        l)
            ? (0, i.jsx)(V, {})
            : null == s
              ? (0, i.jsx)(F, {})
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            className: C.modal,
                            ref: d,
                            children: (0, i.jsx)(k, {
                                channel: t,
                                selectedEmoji: u,
                                isReaction: c
                            })
                        }),
                        (0, i.jsx)(G, {
                            buttonPurchaseState: n,
                            buttonDisabledState: a,
                            price: s,
                            onActionClick: o
                        })
                    ]
                });
    },
    k = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: r } = e;
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: C.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: C.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: C.heading,
                                children: [
                                    (0, i.jsx)(o.X6q, {
                                        variant: 'heading-lg/bold',
                                        children: N.intl.string(N.t['5/knv7'])
                                    }),
                                    (0, i.jsx)(d.Z, {})
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                children: N.intl.string(N.t.NFTQoa)
                            }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-link',
                                variant: 'text-sm/normal',
                                children: N.intl.format(N.t['jerM9/'], { helpCenterLink: p.Z.getArticleURL(A.BhN.CONFETTI_POTION) })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: C.divider }),
                    (0, i.jsxs)('div', {
                        className: C.selectContainer,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'eyebrow',
                                children: N.intl.string(N.t.o8XwoK)
                            }),
                            (0, i.jsx)(U, {
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
    U = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: a } = e,
            [s, u] = (0, r.useState)(!1),
            c = (0, r.useCallback)(() => {
                u(!1);
            }, []),
            d = (0, r.useCallback)((e) => (0, g.t0)(e, t.id, a), [a, t.id]),
            { emojiName: f, selectionText: _ } = (0, r.useMemo)(
                () =>
                    null == n
                        ? {
                              emojiName: null,
                              selectionText: N.intl.string(N.t.KgK5qq)
                          }
                        : {
                              emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
                              selectionText: n.name.replace(/_/g, ' ')
                          },
                [n]
            ),
            p = (0, r.useRef)(null);
        return (0, i.jsx)(T.Z, {
            channel: t,
            shouldShow: s,
            onRequestClose: c,
            setEmojiConfetti: d,
            positionRef: p,
            position: 'left',
            align: 'top',
            children: () =>
                (0, i.jsx)(o.zxk, {
                    look: o.zxk.Looks.BLANK,
                    size: o.zxk.Sizes.NONE,
                    onClick: () => u(!s),
                    className: C.emojiSelect,
                    innerClassName: C.innerEmojiSelect,
                    children: (0, i.jsxs)('div', {
                        className: C.emojiContent,
                        children: [
                            (0, i.jsxs)('div', {
                                className: C.selectedEmoji,
                                children: [
                                    (0, i.jsx)('div', {
                                        ref: p,
                                        children:
                                            null == n
                                                ? (0, i.jsx)(o.EO4, {
                                                      color: 'currentColor',
                                                      size: 'custom',
                                                      className: C.emojiIcon
                                                  })
                                                : (0, i.jsx)(l.Z, {
                                                      animated: !1,
                                                      emojiId: n.id,
                                                      emojiName: f,
                                                      className: C.emojiIcon
                                                  })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        color: 'interactive-active',
                                        variant: 'text-sm/normal',
                                        children: _
                                    })
                                ]
                            }),
                            s
                                ? (0, i.jsx)(o.u04, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: C.chevron
                                  })
                                : (0, i.jsx)(o.CJ0, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: C.chevron
                                  })
                        ]
                    })
                })
        });
    },
    G = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: r, onActionClick: a } = e;
        return (0, i.jsxs)('div', {
            className: C.footer,
            children: [
                (0, i.jsx)(o.zxk, {
                    onClick: () => {
                        (0, o.Mr3)(x);
                    },
                    color: o.zxk.Colors.PRIMARY,
                    children: N.intl.string(N.t.w2Qbd3)
                }),
                (0, i.jsxs)('div', {
                    className: C.footerRight,
                    children: [
                        (0, i.jsx)(B, {}),
                        (0, i.jsx)(Z, {
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
    B = () => {
        let { entitlement: e, numPotions: t } = (0, S.t6)(v.D1);
        if (null == t || 0 === t) return null;
        let n = (null == e ? void 0 : e.type) === A.qc2.DEVELOPER_GIFT ? N.t['b+P6ra'] : N.t.RiQ4cn;
        return (0, i.jsxs)('div', {
            className: C.remaining,
            children: [
                (0, i.jsx)(o.l22, {
                    color: 'currentColor',
                    className: C.shootingStar
                }),
                (0, i.jsx)(o.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    children: N.intl.formatToPlainString(n, { numPotions: t })
                })
            ]
        });
    },
    Z = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: a, onActionClick: s } = e,
            {
                isDisabled: l,
                copy: u,
                tooltipCopy: c
            } = (0, r.useMemo)(() => {
                let e = {
                        0: N.intl.formatToPlainString(N.t.POGRmp, {
                            amount: v.pe,
                            price: (0, h.T4)(a.amount, a.currency)
                        }),
                        1: N.intl.string(N.t.RrKeDw),
                        2: N.intl.string(N.t.WOXaWF),
                        3: N.intl.string(N.t['1Qm829'])
                    },
                    i = {
                        1: N.intl.string(N.t['Cb8/7+']),
                        2: N.intl.string(N.t.fMkB9P),
                        3: N.intl.string(N.t['59ElNj'])
                    },
                    r = 0 !== n;
                return {
                    isDisabled: r,
                    copy: e[t],
                    tooltipCopy: r ? i[n] : ''
                };
            }, [n, t, a.amount, a.currency]);
        return (0, i.jsx)(o.ua7, {
            tooltipContentClassName: C.tooltip,
            text: c,
            shouldShow: !!l,
            children: (e) =>
                (0, i.jsx)(o.zxk, {
                    ...e,
                    onClick: s,
                    disabled: l,
                    children: (0, i.jsx)('div', {
                        className: C.buttonCopy,
                        children: u
                    })
                })
        });
    },
    F = () =>
        (0, i.jsx)('div', {
            className: C.anomaly,
            children: (0, i.jsxs)('div', {
                className: C.error,
                children: [
                    (0, i.jsx)(o.Eep, {
                        src: R,
                        width: D,
                        height: O
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t.oKJdSk)
                    })
                ]
            })
        }),
    V = () =>
        (0, i.jsx)('div', {
            className: C.anomaly,
            children: (0, i.jsx)('div', {
                className: C.spinner,
                children: (0, i.jsx)(o.$jN, {})
            })
        });
