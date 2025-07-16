(n.d(t, {
    default: () => B,
    s: () => G
}),
    n(388685),
    n(704826),
    n(35282));
var r = n(255367),
    i = n(73800),
    a = n(990547),
    o = n(311570),
    s = n(704215),
    l = n(755721),
    c = n(481060),
    u = n(596454),
    d = n(100527),
    f = n(906732),
    _ = n(266454),
    p = n(688465),
    h = n(333867),
    m = n(592125),
    g = n(63063),
    E = n(937615),
    b = n(980463),
    y = n(328908),
    O = n(992970),
    v = n(317951),
    I = n(287941),
    T = n(235894),
    S = n(883998),
    A = n(576645),
    N = n(981631),
    C = n(921944),
    R = n(388032),
    P = n(956589),
    w = n(99713);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            }));
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = 190,
    j = 178,
    U = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    G = (e) => {
        let { channelId: t, message: i, onRedeem: a, onClose: o, buttonUseState: l = 'activate', source: u } = e,
            d = m.Z.getChannel(t);
        null != d &&
            ((0, _.Q3)(s.z.CONFETTI_POTION_UPSELL, { dismissAction: C.L.INDIRECT_ACTION }),
            (0, c.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 135793));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            k(L({}, t), {
                                channel: d,
                                message: i,
                                onRedeem: a,
                                onUnmount: o,
                                source: u,
                                buttonUseState: l
                            })
                        );
                },
                { modalKey: U }
            ));
    };
function B(e) {
    let { transitionState: t, channel: n, message: o, onRedeem: s, onUnmount: l, buttonUseState: u, source: d } = e;
    return (
        (0, i.useEffect)(() => l, [l]),
        (0, r.jsx)(c.Y0X, {
            size: c.CgR.DYNAMIC,
            transitionState: t,
            impression: {
                impressionName: a.ImpressionNames.CONFETTI_POTION_MODAL,
                impressionProperties: { source: d }
            },
            parentComponent: 'MessageConfettiConsumableModal',
            children: (0, r.jsx)(V, {
                channel: n,
                message: o,
                onRedeem: s,
                buttonUseState: u
            })
        })
    );
}
function V(e) {
    let { channel: t, message: n, onRedeem: a, buttonUseState: s } = e,
        l = null != n,
        u = l && (0, T.Uw)(n),
        _ = (0, y.Qj)(t.id, l),
        { price: p, fetchingPrice: m, error: g } = (0, A.R2)(v.D1),
        { entitlement: E, fetchedEntitlement: O, error: I } = (0, A.t6)(v.D1),
        S = g || I,
        { analyticsLocations: C } = (0, f.ZP)([d.Z.CONFETTI_POTION_MODAL]),
        R = null != E && !E.consumed,
        P = m || !O;
    (0, i.useEffect)(
        () => () => {
            S && (0, b.SN)(v.D1);
        },
        [S, l]
    );
    let w = (0, i.useCallback)(() => {
            null != _ && ((0, c.pTH)(), a(_));
        }, [_, a]),
        D = (0, i.useCallback)(() => {
            (0, h.Z)({
                skuId: v.D1,
                analyticsLocations: C,
                onComplete: () => {
                    (w(), (0, b.gA)(v.D1));
                },
                variantsReturnStyle: o.v.INDIVIDUAL_PRODUCTS
            });
        }, [w, C]),
        L = (0, i.useCallback)(() => (R ? w() : D()), [w, D, R]),
        x = (0, i.useMemo)(() => {
            if (null != E) {
                if ('apply' === s) return 3;
                if (E.type === N.qc2.DEVELOPER_GIFT) return 1;
                if (R) return 2;
            }
            return 0;
        }, [E, R, s]),
        k = (0, i.useMemo)(() => (0 === x ? 1 : u ? 2 : 3 * (null == _)), [u, _, x]);
    return (0, r.jsx)(F, {
        channel: t,
        buttonPurchaseState: x,
        buttonDisabledState: k,
        price: p,
        onActionClick: L,
        loading: P,
        selectedEmoji: null != _ ? _ : void 0,
        isReaction: l
    });
}
let F = (e) => {
        let { channel: t, buttonPurchaseState: n, buttonDisabledState: a, price: o, onActionClick: s, loading: l, selectedEmoji: c, isReaction: u } = e,
            d = (0, i.useRef)(null);
        return ((0, i.useEffect)(() => {
            var e;
            if (null == c) return;
            let t = null == (e = d.current) ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = (0, T.NV)(c),
                { x: r, y: i, width: a, height: o } = t;
            (0, I.I)(
                n,
                {
                    x: r,
                    y: i,
                    w: a,
                    h: o
                },
                !0,
                O.LL.ConfettiPreview
            );
        }, [c]),
        l)
            ? (0, r.jsx)(q, {})
            : null == o
              ? (0, r.jsx)(z, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: P.modal,
                            ref: d,
                            children: (0, r.jsx)(Z, {
                                channel: t,
                                selectedEmoji: c,
                                isReaction: u
                            })
                        }),
                        (0, r.jsx)(Y, {
                            buttonPurchaseState: n,
                            buttonDisabledState: a,
                            price: o,
                            onActionClick: s
                        })
                    ]
                });
    },
    Z = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: i } = e;
        return (0, r.jsxs)('div', {
            className: P.body,
            children: [
                (0, r.jsxs)('div', {
                    className: P.header,
                    children: [
                        (0, r.jsxs)('div', {
                            className: P.heading,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-lg/bold',
                                    children: R.intl.string(R.t['5/knv7'])
                                }),
                                (0, r.jsx)(p.Z, {})
                            ]
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: R.intl.string(R.t.NFTQoa)
                        }),
                        (0, r.jsx)(c.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: R.intl.format(R.t['jerM9/'], { helpCenterLink: g.Z.getArticleURL(N.BhN.CONFETTI_POTION) })
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: P.divider }),
                (0, r.jsxs)('div', {
                    className: P.selectContainer,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: R.intl.string(R.t.o8XwoK)
                        }),
                        (0, r.jsx)(H, {
                            channel: t,
                            selectedEmoji: n,
                            isReaction: i
                        })
                    ]
                })
            ]
        });
    },
    H = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: a } = e,
            [o, s] = (0, i.useState)(!1),
            d = (0, i.useCallback)(() => {
                s(!1);
            }, []),
            f = (0, i.useCallback)((e) => (0, y.t0)(e, t.id, a), [a, t.id]),
            { emojiName: _, selectionText: p } = (0, i.useMemo)(
                () =>
                    null == n
                        ? {
                              emojiName: null,
                              selectionText: R.intl.string(R.t.KgK5qq)
                          }
                        : {
                              emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
                              selectionText: n.name.replace(/_/g, ' ')
                          },
                [n]
            ),
            h = (0, i.useRef)(null);
        return (0, r.jsx)(S.Z, {
            channel: t,
            shouldShow: o,
            onRequestClose: d,
            setEmojiConfetti: f,
            positionRef: h,
            position: 'left',
            align: 'top',
            children: () =>
                (0, r.jsx)(l.zx, {
                    look: l.zx.Looks.BLANK,
                    size: l.zx.Sizes.NONE,
                    onClick: () => s(!o),
                    className: P.emojiSelect,
                    innerClassName: P.innerEmojiSelect,
                    children: (0, r.jsxs)('div', {
                        className: P.emojiContent,
                        children: [
                            (0, r.jsxs)('div', {
                                className: P.selectedEmoji,
                                children: [
                                    (0, r.jsx)('div', {
                                        ref: h,
                                        children:
                                            null == n
                                                ? (0, r.jsx)(c.EO4, {
                                                      color: 'currentColor',
                                                      size: 'custom',
                                                      className: P.emojiIcon
                                                  })
                                                : (0, r.jsx)(u.Z, {
                                                      animated: !1,
                                                      emojiId: n.id,
                                                      emojiName: _,
                                                      className: P.emojiIcon
                                                  })
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        color: 'interactive-active',
                                        variant: 'text-sm/normal',
                                        children: p
                                    })
                                ]
                            }),
                            o
                                ? (0, r.jsx)(c.u04, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: P.chevron
                                  })
                                : (0, r.jsx)(c.CJ0, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: P.chevron
                                  })
                        ]
                    })
                })
        });
    },
    Y = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: i, onActionClick: a } = e;
        return (0, r.jsxs)('div', {
            className: P.footer,
            children: [
                (0, r.jsx)(c.zxk, {
                    variant: 'secondary',
                    text: R.intl.string(R.t.w2Qbd3),
                    onClick: () => {
                        (0, c.Mr3)(U);
                    }
                }),
                (0, r.jsxs)('div', {
                    className: P.footerRight,
                    children: [
                        (0, r.jsx)(W, {}),
                        (0, r.jsx)(K, {
                            buttonPurchaseState: t,
                            buttonDisabledState: n,
                            price: i,
                            onActionClick: a
                        })
                    ]
                })
            ]
        });
    },
    W = () => {
        let { entitlement: e, numPotions: t } = (0, A.t6)(v.D1);
        if (null == t || 0 === t) return null;
        let n = (null == e ? void 0 : e.type) === N.qc2.DEVELOPER_GIFT ? R.t['b+P6ra'] : R.t.RiQ4cn;
        return (0, r.jsxs)('div', {
            className: P.remaining,
            children: [
                (0, r.jsx)(c.l22, {
                    color: 'currentColor',
                    className: P.shootingStar
                }),
                (0, r.jsx)(c.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    children: R.intl.formatToPlainString(n, { numPotions: t })
                })
            ]
        });
    },
    K = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: a, onActionClick: o } = e,
            {
                isDisabled: s,
                copy: u,
                tooltipCopy: d
            } = (0, i.useMemo)(() => {
                let e = {
                        0: R.intl.formatToPlainString(R.t.POGRmp, {
                            amount: v.pe,
                            price: (0, E.T4)(a.amount, a.currency)
                        }),
                        1: R.intl.string(R.t.RrKeDw),
                        2: R.intl.string(R.t.WOXaWF),
                        3: R.intl.string(R.t['1Qm829'])
                    },
                    r = {
                        1: R.intl.string(R.t['Cb8/7+']),
                        2: R.intl.string(R.t.fMkB9P),
                        3: R.intl.string(R.t['59ElNj'])
                    },
                    i = 0 !== n;
                return {
                    isDisabled: i,
                    copy: e[t],
                    tooltipCopy: i ? r[n] : ''
                };
            }, [n, t, a.amount, a.currency]);
        return (0, r.jsx)(c.ua7, {
            tooltipContentClassName: P.tooltip,
            text: d,
            shouldShow: !!s,
            children: (e) =>
                (0, r.jsx)(
                    l.zx,
                    k(L({}, e), {
                        onClick: o,
                        disabled: s,
                        children: (0, r.jsx)('div', {
                            className: P.buttonCopy,
                            children: u
                        })
                    })
                )
        });
    },
    z = () =>
        (0, r.jsx)('div', {
            className: P.anomaly,
            children: (0, r.jsxs)('div', {
                className: P.error,
                children: [
                    (0, r.jsx)(c.Eep, {
                        src: w,
                        width: j,
                        height: M
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: R.intl.string(R.t.oKJdSk)
                    })
                ]
            })
        }),
    q = () =>
        (0, r.jsx)('div', {
            className: P.anomaly,
            children: (0, r.jsx)('div', {
                className: P.spinner,
                children: (0, r.jsx)(c.$jN, {})
            })
        });
