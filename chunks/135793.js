n.d(t, {
    default: () => G,
    s: () => U
}),
    n(47120),
    n(757143),
    n(301563);
var r = n(200651),
    i = n(192379),
    o = n(990547),
    a = n(311570),
    s = n(704215),
    l = n(481060),
    c = n(596454),
    u = n(100527),
    d = n(906732),
    f = n(605236),
    p = n(688465),
    _ = n(333867),
    h = n(592125),
    m = n(63063),
    g = n(937615),
    E = n(980463),
    v = n(328908),
    b = n(992970),
    y = n(317951),
    O = n(287941),
    S = n(235894),
    I = n(883998),
    T = n(576645),
    N = n(981631),
    A = n(921944),
    C = n(388032),
    R = n(959791),
    P = n(99713);
function w(e, t, n) {
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
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
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
    k = 178,
    j = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    U = (e) => {
        let { channelId: t, message: i, onRedeem: o, onClose: a, buttonUseState: c = 'activate', source: u } = e,
            d = h.Z.getChannel(t);
        null != d &&
            ((0, f.EW)(s.z.CONFETTI_POTION_UPSELL, { dismissAction: A.L.INDIRECT_ACTION }),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 135793));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            L(D({}, t), {
                                channel: d,
                                message: i,
                                onRedeem: o,
                                onUnmount: a,
                                source: u,
                                buttonUseState: c
                            })
                        );
                },
                { modalKey: j }
            ));
    };
function G(e) {
    let { transitionState: t, channel: n, message: a, onRedeem: s, onUnmount: c, buttonUseState: u, source: d } = e;
    return (
        (0, i.useEffect)(() => c, [c]),
        (0, r.jsx)(l.Y0X, {
            size: l.CgR.DYNAMIC,
            transitionState: t,
            impression: {
                impressionName: o.ImpressionNames.CONFETTI_POTION_MODAL,
                impressionProperties: { source: d }
            },
            children: (0, r.jsx)(B, {
                channel: n,
                message: a,
                onRedeem: s,
                buttonUseState: u
            })
        })
    );
}
function B(e) {
    let { channel: t, message: n, onRedeem: o, buttonUseState: s } = e,
        c = null != n,
        f = c && (0, S.Uw)(n),
        p = (0, v.Qj)(t.id, c),
        { price: h, fetchingPrice: m, error: g } = (0, T.R2)(y.D1),
        { entitlement: b, fetchedEntitlement: O, error: I } = (0, T.t6)(y.D1),
        A = g || I,
        { analyticsLocations: C } = (0, d.ZP)([u.Z.CONFETTI_POTION_MODAL]),
        R = null != b && !b.consumed,
        P = m || !O;
    (0, i.useEffect)(
        () => () => {
            A && (0, E.SN)(y.D1);
        },
        [A, c]
    );
    let w = (0, i.useCallback)(() => {
            null != p && ((0, l.pTH)(), o(p));
        }, [p, o]),
        D = (0, i.useCallback)(() => {
            (0, _.Z)({
                skuId: y.D1,
                analyticsLocations: C,
                onComplete: () => {
                    w(), (0, E.gA)(y.D1);
                },
                variantsReturnStyle: a.v.INDIVIDUAL_PRODUCTS
            });
        }, [w, C]),
        x = (0, i.useCallback)(() => (R ? w() : D()), [w, D, R]),
        L = (0, i.useMemo)(() => {
            if (null != b) {
                if ('apply' === s) return 3;
                if (b.type === N.qc2.DEVELOPER_GIFT) return 1;
                if (R) return 2;
            }
            return 0;
        }, [b, R, s]),
        M = (0, i.useMemo)(() => (0 === L ? 1 : f ? 2 : 3 * (null == p)), [f, p, L]);
    return (0, r.jsx)(Z, {
        channel: t,
        buttonPurchaseState: L,
        buttonDisabledState: M,
        price: h,
        onActionClick: x,
        loading: P,
        selectedEmoji: null != p ? p : void 0,
        isReaction: c
    });
}
let Z = (e) => {
        let { channel: t, buttonPurchaseState: n, buttonDisabledState: o, price: a, onActionClick: s, loading: l, selectedEmoji: c, isReaction: u } = e,
            d = (0, i.useRef)(null);
        return ((0, i.useEffect)(() => {
            var e;
            if (null == c) return;
            let t = null === (e = d.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = (0, S.NV)(c),
                { x: r, y: i, width: o, height: a } = t;
            (0, O.I)(
                n,
                {
                    x: r,
                    y: i,
                    w: o,
                    h: a
                },
                !0,
                b.LL.ConfettiPreview
            );
        }, [c]),
        l)
            ? (0, r.jsx)(z, {})
            : null == a
              ? (0, r.jsx)(K, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: R.modal,
                            ref: d,
                            children: (0, r.jsx)(F, {
                                channel: t,
                                selectedEmoji: c,
                                isReaction: u
                            })
                        }),
                        (0, r.jsx)(H, {
                            buttonPurchaseState: n,
                            buttonDisabledState: o,
                            price: a,
                            onActionClick: s
                        })
                    ]
                });
    },
    F = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: i } = e;
        return (0, r.jsxs)('div', {
            className: R.body,
            children: [
                (0, r.jsxs)('div', {
                    className: R.header,
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.heading,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: 'heading-lg/bold',
                                    children: C.NW.string(C.t['5/knv7'])
                                }),
                                (0, r.jsx)(p.Z, {})
                            ]
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: C.NW.string(C.t.NFTQoa)
                        }),
                        (0, r.jsx)(l.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: C.NW.format(C.t['jerM9/'], { helpCenterLink: m.Z.getArticleURL(N.BhN.CONFETTI_POTION) })
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: R.divider }),
                (0, r.jsxs)('div', {
                    className: R.selectContainer,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'eyebrow',
                            children: C.NW.string(C.t.o8XwoK)
                        }),
                        (0, r.jsx)(V, {
                            channel: t,
                            selectedEmoji: n,
                            isReaction: i
                        })
                    ]
                })
            ]
        });
    },
    V = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: o } = e,
            [a, s] = (0, i.useState)(!1),
            u = (0, i.useCallback)(() => {
                s(!1);
            }, []),
            d = (0, i.useCallback)((e) => (0, v.t0)(e, t.id, o), [o, t.id]),
            { emojiName: f, selectionText: p } = (0, i.useMemo)(
                () =>
                    null == n
                        ? {
                              emojiName: null,
                              selectionText: C.NW.string(C.t.KgK5qq)
                          }
                        : {
                              emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
                              selectionText: n.name.replace(/_/g, ' ')
                          },
                [n]
            ),
            _ = (0, i.useRef)(null);
        return (0, r.jsx)(I.Z, {
            channel: t,
            shouldShow: a,
            onRequestClose: u,
            setEmojiConfetti: d,
            positionRef: _,
            position: 'left',
            align: 'top',
            children: () =>
                (0, r.jsx)(l.zxk, {
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.NONE,
                    onClick: () => s(!a),
                    className: R.emojiSelect,
                    innerClassName: R.innerEmojiSelect,
                    children: (0, r.jsxs)('div', {
                        className: R.emojiContent,
                        children: [
                            (0, r.jsxs)('div', {
                                className: R.selectedEmoji,
                                children: [
                                    (0, r.jsx)('div', {
                                        ref: _,
                                        children:
                                            null == n
                                                ? (0, r.jsx)(l.EO4, {
                                                      color: 'currentColor',
                                                      size: 'custom',
                                                      className: R.emojiIcon
                                                  })
                                                : (0, r.jsx)(c.Z, {
                                                      animated: !1,
                                                      emojiId: n.id,
                                                      emojiName: f,
                                                      className: R.emojiIcon
                                                  })
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        color: 'interactive-active',
                                        variant: 'text-sm/normal',
                                        children: p
                                    })
                                ]
                            }),
                            a
                                ? (0, r.jsx)(l.u04, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: R.chevron
                                  })
                                : (0, r.jsx)(l.CJ0, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: R.chevron
                                  })
                        ]
                    })
                })
        });
    },
    H = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: i, onActionClick: o } = e;
        return (0, r.jsxs)('div', {
            className: R.footer,
            children: [
                (0, r.jsx)(l.zxk, {
                    onClick: () => {
                        (0, l.Mr3)(j);
                    },
                    color: l.zxk.Colors.PRIMARY,
                    children: C.NW.string(C.t.w2Qbd3)
                }),
                (0, r.jsxs)('div', {
                    className: R.footerRight,
                    children: [
                        (0, r.jsx)(W, {}),
                        (0, r.jsx)(Y, {
                            buttonPurchaseState: t,
                            buttonDisabledState: n,
                            price: i,
                            onActionClick: o
                        })
                    ]
                })
            ]
        });
    },
    W = () => {
        let { entitlement: e, numPotions: t } = (0, T.t6)(y.D1);
        if (null == t || 0 === t) return null;
        let n = (null == e ? void 0 : e.type) === N.qc2.DEVELOPER_GIFT ? C.t['b+P6ra'] : C.t.RiQ4cn;
        return (0, r.jsxs)('div', {
            className: R.remaining,
            children: [
                (0, r.jsx)(l.l22, {
                    color: 'currentColor',
                    className: R.shootingStar
                }),
                (0, r.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    children: C.NW.formatToPlainString(n, { numPotions: t })
                })
            ]
        });
    },
    Y = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: o, onActionClick: a } = e,
            {
                isDisabled: s,
                copy: c,
                tooltipCopy: u
            } = (0, i.useMemo)(() => {
                let e = {
                        0: C.NW.formatToPlainString(C.t.POGRmp, {
                            amount: y.pe,
                            price: (0, g.T4)(o.amount, o.currency)
                        }),
                        1: C.NW.string(C.t.RrKeDw),
                        2: C.NW.string(C.t.WOXaWF),
                        3: C.NW.string(C.t['1Qm829'])
                    },
                    r = {
                        1: C.NW.string(C.t['Cb8/7+']),
                        2: C.NW.string(C.t.fMkB9P),
                        3: C.NW.string(C.t['59ElNj'])
                    },
                    i = 0 !== n;
                return {
                    isDisabled: i,
                    copy: e[t],
                    tooltipCopy: i ? r[n] : ''
                };
            }, [n, t, o.amount, o.currency]);
        return (0, r.jsx)(l.ua7, {
            tooltipContentClassName: R.tooltip,
            text: u,
            shouldShow: !!s,
            children: (e) =>
                (0, r.jsx)(
                    l.zxk,
                    L(D({}, e), {
                        onClick: a,
                        disabled: s,
                        children: (0, r.jsx)('div', {
                            className: R.buttonCopy,
                            children: c
                        })
                    })
                )
        });
    },
    K = () =>
        (0, r.jsx)('div', {
            className: R.anomaly,
            children: (0, r.jsxs)('div', {
                className: R.error,
                children: [
                    (0, r.jsx)(l.Eep, {
                        src: P,
                        width: k,
                        height: M
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: C.NW.string(C.t.oKJdSk)
                    })
                ]
            })
        }),
    z = () =>
        (0, r.jsx)('div', {
            className: R.anomaly,
            children: (0, r.jsx)('div', {
                className: R.spinner,
                children: (0, r.jsx)(l.$jN, {})
            })
        });
