n.d(t, {
    default: () => k,
    s: () => M
}),
    n(47120),
    n(757143);
var i = n(200651),
    r = n(192379),
    a = n(990547),
    s = n(311570),
    o = n(704215),
    l = n(481060),
    u = n(596454),
    c = n(100527),
    d = n(906732),
    f = n(605236),
    _ = n(688465),
    p = n(333867),
    h = n(592125),
    m = n(63063),
    g = n(937615),
    E = n(980463),
    v = n(328908),
    y = n(992970),
    I = n(317951),
    T = n(84040),
    b = n(287941),
    S = n(235894),
    A = n(883998),
    N = n(576645),
    C = n(981631),
    R = n(921944),
    O = n(388032),
    D = n(940814),
    L = n(99713);
let x = 190,
    P = 178,
    w = 'MESSAGE_CONFETTI_POTION_MODAL_KEY',
    M = (e) => {
        let { channelId: t, message: r, onRedeem: a, onClose: s, buttonUseState: u = 'activate', source: c } = e,
            d = h.Z.getChannel(t);
        null != d &&
            ((0, f.EW)(o.z.CONFETTI_POTION_UPSELL, { dismissAction: R.L.INDIRECT_ACTION }),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 135793));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            channel: d,
                            message: r,
                            onRedeem: a,
                            onUnmount: s,
                            source: c,
                            buttonUseState: u
                        });
                },
                { modalKey: w }
            ));
    };
function k(e) {
    let { transitionState: t, channel: n, message: s, onRedeem: o, onUnmount: u, buttonUseState: c, source: d } = e;
    return (
        (0, r.useEffect)(() => u, [u]),
        (0, i.jsx)(l.Y0X, {
            size: l.CgR.DYNAMIC,
            transitionState: t,
            impression: {
                impressionName: a.ImpressionNames.CONFETTI_POTION_MODAL,
                impressionProperties: { source: d }
            },
            children: (0, i.jsx)(U, {
                channel: n,
                message: s,
                onRedeem: o,
                buttonUseState: c
            })
        })
    );
}
function U(e) {
    let { channel: t, message: n, onRedeem: a, buttonUseState: o } = e,
        u = (0, T.Z)(t, n),
        f = null != n,
        _ = f && (0, S.Uw)(n),
        h = (0, v.Qj)(t.id, f),
        { price: m, fetchingPrice: g, error: y } = (0, N.R2)(I.D1),
        { entitlement: b, fetchedEntitlement: A, error: R } = (0, N.t6)(I.D1),
        O = y || R,
        { analyticsLocations: D } = (0, d.ZP)([c.Z.CONFETTI_POTION_MODAL]),
        L = null != b && !b.consumed,
        x = g || !A;
    (0, r.useEffect)(
        () => () => {
            O && (0, E.SN)(I.D1);
        },
        [O, f]
    );
    let P = (0, r.useCallback)(() => {
            null != h && ((0, l.pTH)(), a(h));
        }, [h, a]),
        w = (0, r.useCallback)(() => {
            (0, p.Z)({
                skuId: I.D1,
                analyticsLocations: D,
                onComplete: () => {
                    P(), (0, E.gA)(I.D1);
                },
                variantsReturnStyle: s.v.INDIVIDUAL_PRODUCTS
            });
        }, [P, D]),
        M = (0, r.useCallback)(() => (L ? P() : w()), [P, w, L]),
        k = (0, r.useMemo)(() => {
            if (null != b) {
                if ('apply' === o) return 3;
                if (b.type === C.qc2.DEVELOPER_GIFT) return 1;
                if (L) return 2;
            }
            return 0;
        }, [b, L, o]),
        U = (0, r.useMemo)(() => (_ ? 2 : u ? (null == h ? 3 : 0) : 1), [_, u, h]);
    return (0, i.jsx)(G, {
        channel: t,
        buttonPurchaseState: k,
        buttonDisabledState: U,
        price: m,
        onActionClick: M,
        loading: x,
        selectedEmoji: null != h ? h : void 0,
        isReaction: f
    });
}
let G = (e) => {
        let { channel: t, buttonPurchaseState: n, buttonDisabledState: a, price: s, onActionClick: o, loading: l, selectedEmoji: u, isReaction: c } = e,
            d = (0, r.useRef)(null);
        return ((0, r.useEffect)(() => {
            var e;
            if (null == u) return;
            let t = null === (e = d.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = (0, S.NV)(u),
                { x: i, y: r, width: a, height: s } = t;
            (0, b.I)(
                n,
                {
                    x: i,
                    y: r,
                    w: a,
                    h: s
                },
                !0,
                y.LL.ConfettiPreview
            );
        }, [u]),
        l)
            ? (0, i.jsx)(Y, {})
            : null == s
              ? (0, i.jsx)(H, {})
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            className: D.modal,
                            ref: d,
                            children: (0, i.jsx)(B, {
                                channel: t,
                                selectedEmoji: u,
                                isReaction: c
                            })
                        }),
                        (0, i.jsx)(F, {
                            buttonPurchaseState: n,
                            buttonDisabledState: a,
                            price: s,
                            onActionClick: o
                        })
                    ]
                });
    },
    B = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: r } = e;
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: D.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: D.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: D.heading,
                                children: [
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-lg/bold',
                                        children: O.intl.string(O.t['5/knv7'])
                                    }),
                                    (0, i.jsx)(_.Z, {})
                                ]
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: O.intl.string(O.t.NFTQoa)
                            }),
                            (0, i.jsx)(l.Text, {
                                color: 'text-link',
                                variant: 'text-sm/normal',
                                children: O.intl.format(O.t['jerM9/'], { helpCenterLink: m.Z.getArticleURL(C.BhN.CONFETTI_POTION) })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: D.divider }),
                    (0, i.jsxs)('div', {
                        className: D.selectContainer,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'eyebrow',
                                children: O.intl.string(O.t.o8XwoK)
                            }),
                            (0, i.jsx)(Z, {
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
    Z = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: a } = e,
            [s, o] = (0, r.useState)(!1),
            c = (0, r.useCallback)(() => {
                o(!1);
            }, []),
            d = (0, r.useCallback)((e) => (0, v.t0)(e, t.id, a), [a, t.id]),
            { emojiName: f, selectionText: _ } = (0, r.useMemo)(
                () =>
                    null == n
                        ? {
                              emojiName: null,
                              selectionText: O.intl.string(O.t.KgK5qq)
                          }
                        : {
                              emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
                              selectionText: n.name.replace(/_/g, ' ')
                          },
                [n]
            ),
            p = (0, r.useRef)(null);
        return (0, i.jsx)(A.Z, {
            channel: t,
            shouldShow: s,
            onRequestClose: c,
            setEmojiConfetti: d,
            positionRef: p,
            position: 'left',
            align: 'top',
            children: () =>
                (0, i.jsx)(l.zxk, {
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.NONE,
                    onClick: () => o(!s),
                    className: D.emojiSelect,
                    innerClassName: D.innerEmojiSelect,
                    children: (0, i.jsxs)('div', {
                        className: D.emojiContent,
                        children: [
                            (0, i.jsxs)('div', {
                                className: D.selectedEmoji,
                                children: [
                                    (0, i.jsx)('div', {
                                        ref: p,
                                        children:
                                            null == n
                                                ? (0, i.jsx)(l.EO4, {
                                                      color: 'currentColor',
                                                      size: 'custom',
                                                      className: D.emojiIcon
                                                  })
                                                : (0, i.jsx)(u.Z, {
                                                      animated: !1,
                                                      emojiId: n.id,
                                                      emojiName: f,
                                                      className: D.emojiIcon
                                                  })
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        color: 'interactive-active',
                                        variant: 'text-sm/normal',
                                        children: _
                                    })
                                ]
                            }),
                            s
                                ? (0, i.jsx)(l.u04, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: D.chevron
                                  })
                                : (0, i.jsx)(l.CJ0, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      className: D.chevron
                                  })
                        ]
                    })
                })
        });
    },
    F = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: r, onActionClick: a } = e;
        return (0, i.jsxs)('div', {
            className: D.footer,
            children: [
                (0, i.jsx)(l.zxk, {
                    onClick: () => {
                        (0, l.Mr3)(w);
                    },
                    color: l.zxk.Colors.PRIMARY,
                    children: O.intl.string(O.t.w2Qbd3)
                }),
                (0, i.jsxs)('div', {
                    className: D.footerRight,
                    children: [
                        (0, i.jsx)(V, {}),
                        (0, i.jsx)(j, {
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
    V = () => {
        let { entitlement: e, numPotions: t } = (0, N.t6)(I.D1);
        if (null == t || 0 === t) return null;
        let n = (null == e ? void 0 : e.type) === C.qc2.DEVELOPER_GIFT ? O.t['b+P6ra'] : O.t.RiQ4cn;
        return (0, i.jsxs)('div', {
            className: D.remaining,
            children: [
                (0, i.jsx)(l.l22, {
                    color: 'currentColor',
                    className: D.shootingStar
                }),
                (0, i.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    children: O.intl.formatToPlainString(n, { numPotions: t })
                })
            ]
        });
    },
    j = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: a, onActionClick: s } = e,
            {
                isDisabled: o,
                copy: u,
                tooltipCopy: c
            } = (0, r.useMemo)(() => {
                let e = {
                        0: O.intl.formatToPlainString(O.t.POGRmp, {
                            amount: I.pe,
                            price: (0, g.T4)(a.amount, a.currency)
                        }),
                        1: O.intl.string(O.t.RrKeDw),
                        2: O.intl.string(O.t.WOXaWF),
                        3: O.intl.string(O.t['1Qm829'])
                    },
                    i = {
                        1: O.intl.string(O.t['Cb8/7+']),
                        2: O.intl.string(O.t.fMkB9P),
                        3: O.intl.string(O.t['59ElNj'])
                    },
                    r = 0 !== n;
                return {
                    isDisabled: r,
                    copy: e[t],
                    tooltipCopy: r ? i[n] : ''
                };
            }, [n, t, a.amount, a.currency]);
        return (0, i.jsx)(l.ua7, {
            tooltipContentClassName: D.tooltip,
            text: c,
            shouldShow: !!o,
            children: (e) =>
                (0, i.jsx)(l.zxk, {
                    ...e,
                    onClick: s,
                    disabled: o,
                    children: (0, i.jsx)('div', {
                        className: D.buttonCopy,
                        children: u
                    })
                })
        });
    },
    H = () =>
        (0, i.jsx)('div', {
            className: D.anomaly,
            children: (0, i.jsxs)('div', {
                className: D.error,
                children: [
                    (0, i.jsx)(l.Eep, {
                        src: L,
                        width: P,
                        height: x
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: O.intl.string(O.t.oKJdSk)
                    })
                ]
            })
        }),
    Y = () =>
        (0, i.jsx)('div', {
            className: D.anomaly,
            children: (0, i.jsx)('div', {
                className: D.spinner,
                children: (0, i.jsx)(l.$jN, {})
            })
        });
