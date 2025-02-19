n.d(t, {
    default: () => B,
    s: () => G
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
    O = n(84040),
    S = n(287941),
    I = n(235894),
    T = n(883998),
    N = n(576645),
    A = n(981631),
    C = n(921944),
    R = n(388032),
    P = n(959791),
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = 190,
    j = 178,
    U = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    G = (e) => {
        let { channelId: t, message: i, onRedeem: o, onClose: a, buttonUseState: c = 'activate', source: u } = e,
            d = h.Z.getChannel(t);
        null != d &&
            ((0, f.EW)(s.z.CONFETTI_POTION_UPSELL, { dismissAction: C.L.INDIRECT_ACTION }),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 135793));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            M(x({}, t), {
                                channel: d,
                                message: i,
                                onRedeem: o,
                                onUnmount: a,
                                source: u,
                                buttonUseState: c
                            })
                        );
                },
                { modalKey: U }
            ));
    };
function B(e) {
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
            children: (0, r.jsx)(Z, {
                channel: n,
                message: a,
                onRedeem: s,
                buttonUseState: u
            })
        })
    );
}
function Z(e) {
    let { channel: t, message: n, onRedeem: o, buttonUseState: s } = e,
        c = (0, O.Z)(t, n),
        f = null != n,
        p = f && (0, I.Uw)(n),
        h = (0, v.Qj)(t.id, f),
        { price: m, fetchingPrice: g, error: b } = (0, N.R2)(y.D1),
        { entitlement: S, fetchedEntitlement: T, error: C } = (0, N.t6)(y.D1),
        R = b || C,
        { analyticsLocations: P } = (0, d.ZP)([u.Z.CONFETTI_POTION_MODAL]),
        w = null != S && !S.consumed,
        D = g || !T;
    (0, i.useEffect)(
        () => () => {
            R && (0, E.SN)(y.D1);
        },
        [R, f]
    );
    let x = (0, i.useCallback)(() => {
            null != h && ((0, l.pTH)(), o(h));
        }, [h, o]),
        L = (0, i.useCallback)(() => {
            (0, _.Z)({
                skuId: y.D1,
                analyticsLocations: P,
                onComplete: () => {
                    x(), (0, E.gA)(y.D1);
                },
                variantsReturnStyle: a.v.INDIVIDUAL_PRODUCTS
            });
        }, [x, P]),
        M = (0, i.useCallback)(() => (w ? x() : L()), [x, L, w]),
        k = (0, i.useMemo)(() => {
            if (null != S) {
                if ('apply' === s) return 3;
                if (S.type === A.qc2.DEVELOPER_GIFT) return 1;
                if (w) return 2;
            }
            return 0;
        }, [S, w, s]),
        j = (0, i.useMemo)(() => (p ? 2 : c ? 3 * (null == h) : 1), [p, c, h]);
    return (0, r.jsx)(F, {
        channel: t,
        buttonPurchaseState: k,
        buttonDisabledState: j,
        price: m,
        onActionClick: M,
        loading: D,
        selectedEmoji: null != h ? h : void 0,
        isReaction: f
    });
}
let F = (e) => {
        let { channel: t, buttonPurchaseState: n, buttonDisabledState: o, price: a, onActionClick: s, loading: l, selectedEmoji: c, isReaction: u } = e,
            d = (0, i.useRef)(null);
        return ((0, i.useEffect)(() => {
            var e;
            if (null == c) return;
            let t = null === (e = d.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = (0, I.NV)(c),
                { x: r, y: i, width: o, height: a } = t;
            (0, S.I)(
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
            ? (0, r.jsx)(q, {})
            : null == a
              ? (0, r.jsx)(z, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: P.modal,
                            ref: d,
                            children: (0, r.jsx)(V, {
                                channel: t,
                                selectedEmoji: c,
                                isReaction: u
                            })
                        }),
                        (0, r.jsx)(W, {
                            buttonPurchaseState: n,
                            buttonDisabledState: o,
                            price: a,
                            onActionClick: s
                        })
                    ]
                });
    },
    V = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: i } = e;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
                className: P.body,
                children: [
                    (0, r.jsxs)('div', {
                        className: P.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: P.heading,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-lg/bold',
                                        children: R.NW.string(R.t['5/knv7'])
                                    }),
                                    (0, r.jsx)(p.Z, {})
                                ]
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: R.NW.string(R.t.NFTQoa)
                            }),
                            (0, r.jsx)(l.Text, {
                                color: 'text-link',
                                variant: 'text-sm/normal',
                                children: R.NW.format(R.t['jerM9/'], { helpCenterLink: m.Z.getArticleURL(A.BhN.CONFETTI_POTION) })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: P.divider }),
                    (0, r.jsxs)('div', {
                        className: P.selectContainer,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'eyebrow',
                                children: R.NW.string(R.t.o8XwoK)
                            }),
                            (0, r.jsx)(H, {
                                channel: t,
                                selectedEmoji: n,
                                isReaction: i
                            })
                        ]
                    })
                ]
            })
        });
    },
    H = (e) => {
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
                              selectionText: R.NW.string(R.t.KgK5qq)
                          }
                        : {
                              emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
                              selectionText: n.name.replace(/_/g, ' ')
                          },
                [n]
            ),
            _ = (0, i.useRef)(null);
        return (0, r.jsx)(T.Z, {
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
                    className: P.emojiSelect,
                    innerClassName: P.innerEmojiSelect,
                    children: (0, r.jsxs)('div', {
                        className: P.emojiContent,
                        children: [
                            (0, r.jsxs)('div', {
                                className: P.selectedEmoji,
                                children: [
                                    (0, r.jsx)('div', {
                                        ref: _,
                                        children:
                                            null == n
                                                ? (0, r.jsx)(l.EO4, {
                                                      color: 'currentColor',
                                                      size: 'custom',
                                                      className: P.emojiIcon
                                                  })
                                                : (0, r.jsx)(c.Z, {
                                                      animated: !1,
                                                      emojiId: n.id,
                                                      emojiName: f,
                                                      className: P.emojiIcon
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
                                      className: P.chevron
                                  })
                                : (0, r.jsx)(l.CJ0, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: P.chevron
                                  })
                        ]
                    })
                })
        });
    },
    W = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: i, onActionClick: o } = e;
        return (0, r.jsxs)('div', {
            className: P.footer,
            children: [
                (0, r.jsx)(l.zxk, {
                    onClick: () => {
                        (0, l.Mr3)(U);
                    },
                    color: l.zxk.Colors.PRIMARY,
                    children: R.NW.string(R.t.w2Qbd3)
                }),
                (0, r.jsxs)('div', {
                    className: P.footerRight,
                    children: [
                        (0, r.jsx)(Y, {}),
                        (0, r.jsx)(K, {
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
    Y = () => {
        let { entitlement: e, numPotions: t } = (0, N.t6)(y.D1);
        if (null == t || 0 === t) return null;
        let n = (null == e ? void 0 : e.type) === A.qc2.DEVELOPER_GIFT ? R.t['b+P6ra'] : R.t.RiQ4cn;
        return (0, r.jsxs)('div', {
            className: P.remaining,
            children: [
                (0, r.jsx)(l.l22, {
                    color: 'currentColor',
                    className: P.shootingStar
                }),
                (0, r.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    children: R.NW.formatToPlainString(n, { numPotions: t })
                })
            ]
        });
    },
    K = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: o, onActionClick: a } = e,
            {
                isDisabled: s,
                copy: c,
                tooltipCopy: u
            } = (0, i.useMemo)(() => {
                let e = {
                        0: R.NW.formatToPlainString(R.t.POGRmp, {
                            amount: y.pe,
                            price: (0, g.T4)(o.amount, o.currency)
                        }),
                        1: R.NW.string(R.t.RrKeDw),
                        2: R.NW.string(R.t.WOXaWF),
                        3: R.NW.string(R.t['1Qm829'])
                    },
                    r = {
                        1: R.NW.string(R.t['Cb8/7+']),
                        2: R.NW.string(R.t.fMkB9P),
                        3: R.NW.string(R.t['59ElNj'])
                    },
                    i = 0 !== n;
                return {
                    isDisabled: i,
                    copy: e[t],
                    tooltipCopy: i ? r[n] : ''
                };
            }, [n, t, o.amount, o.currency]);
        return (0, r.jsx)(l.ua7, {
            tooltipContentClassName: P.tooltip,
            text: u,
            shouldShow: !!s,
            children: (e) =>
                (0, r.jsx)(
                    l.zxk,
                    M(x({}, e), {
                        onClick: a,
                        disabled: s,
                        children: (0, r.jsx)('div', {
                            className: P.buttonCopy,
                            children: c
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
                    (0, r.jsx)(l.Eep, {
                        src: w,
                        width: j,
                        height: k
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: R.NW.string(R.t.oKJdSk)
                    })
                ]
            })
        }),
    q = () =>
        (0, r.jsx)('div', {
            className: P.anomaly,
            children: (0, r.jsx)('div', {
                className: P.spinner,
                children: (0, r.jsx)(l.$jN, {})
            })
        });
