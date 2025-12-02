n.d(t, {
    default: () => B,
    s: () => Z,
}),
    n(388685),
    n(704826),
    n(35282);
var r = n(54381),
    i = n(473749),
    a = n(990547),
    o = n(311570),
    s = n(793030),
    l = n(704215),
    c = n(28664),
    u = n(481060),
    d = n(596454),
    f = n(100527),
    p = n(906732),
    _ = n(266454),
    m = n(688465),
    h = n(333867),
    g = n(592125),
    E = n(63063),
    b = n(937615),
    y = n(980463),
    O = n(328908),
    v = n(992970),
    S = n(317951),
    I = n(287941),
    T = n(235894),
    A = n(883998),
    C = n(576645),
    N = n(981631),
    P = n(921944),
    R = n(388032),
    w = n(393919),
    D = n(99713);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = 190,
    U = 178,
    G = "MESSAGE_CONFETTI_POTION_MODAL_KEY",
    Z = (e) => {
        let { channelId: t, message: i, onRedeem: a, onClose: o, buttonUseState: s = "activate", source: c } = e,
            d = g.Z.getChannel(t);
        null != d &&
            ((0, _.Q3)(l.z.CONFETTI_POTION_UPSELL, { dismissAction: P.L.INDIRECT_ACTION }),
            (0, u.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 135793));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            M(L({}, t), {
                                channel: d,
                                message: i,
                                onRedeem: a,
                                onUnmount: o,
                                source: c,
                                buttonUseState: s,
                            }),
                        );
                },
                { modalKey: G },
            ));
    };
function B(e) {
    let { transitionState: t, channel: n, message: o, onRedeem: l, onUnmount: c, buttonUseState: d, source: f } = e;
    (0, i.useEffect)(() => c, [c]);
    let p = (0, i.useCallback)(() => ((0, u.Mr3)(G), Promise.resolve()), []);
    return (0, r.jsx)(s.IX, {
        transitionState: t,
        onClose: p,
        trackingProps: {
            impression: {
                impressionName: a.ImpressionNames.CONFETTI_POTION_MODAL,
                impressionProperties: { source: f },
            },
        },
        children: (0, r.jsx)(F, {
            channel: n,
            message: o,
            onRedeem: l,
            buttonUseState: d,
        }),
    });
}
function F(e) {
    let { channel: t, message: n, onRedeem: a, buttonUseState: s } = e,
        l = null != n,
        c = l && (0, T.Uw)(n),
        d = (0, O.Qj)(t.id, l),
        { price: _, fetchingPrice: m, error: g } = (0, C.R2)(S.D1),
        { entitlement: E, fetchedEntitlement: b, error: v } = (0, C.t6)(S.D1),
        I = g || v,
        { analyticsLocations: A } = (0, p.ZP)([f.Z.CONFETTI_POTION_MODAL]),
        P = null != E && !E.consumed,
        R = m || !b;
    (0, i.useEffect)(
        () => () => {
            I && (0, y.SN)(S.D1);
        },
        [I, l],
    );
    let w = (0, i.useCallback)(() => {
            null != d && ((0, u.pTH)(), a(d));
        }, [d, a]),
        D = (0, i.useCallback)(() => {
            (0, h.Z)({
                skuId: S.D1,
                analyticsLocations: A,
                onComplete: () => {
                    w(), (0, y.gA)(S.D1);
                },
                variantsReturnStyle: o.v.INDIVIDUAL_PRODUCTS,
            });
        }, [w, A]),
        x = (0, i.useCallback)(() => (P ? w() : D()), [w, D, P]),
        L = (0, i.useMemo)(() => {
            if (null != E) {
                if ("apply" === s) return 3;
                if (E.type === N.qc2.DEVELOPER_GIFT) return 1;
                if (P) return 2;
            }
            return 0;
        }, [E, P, s]),
        j = (0, i.useMemo)(() => (0 === L ? 1 : c ? 2 : 3 * (null == d)), [c, d, L]);
    return (0, r.jsx)(V, {
        channel: t,
        buttonPurchaseState: L,
        buttonDisabledState: j,
        price: _,
        onActionClick: x,
        loading: R,
        selectedEmoji: null != d ? d : void 0,
        isReaction: l,
    });
}
let V = (e) => {
        let {
                channel: t,
                buttonPurchaseState: n,
                buttonDisabledState: a,
                price: o,
                onActionClick: s,
                loading: l,
                selectedEmoji: c,
                isReaction: u,
            } = e,
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
                    h: o,
                },
                !0,
                v.LL.ConfettiPreview,
            );
        }, [c]),
        l)
            ? (0, r.jsx)(X, {})
            : null == o
              ? (0, r.jsx)(q, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: w.modal,
                            ref: d,
                            children: (0, r.jsx)(H, {
                                channel: t,
                                selectedEmoji: c,
                                isReaction: u,
                            }),
                        }),
                        (0, r.jsx)(W, {
                            buttonPurchaseState: n,
                            buttonDisabledState: a,
                            price: o,
                            onActionClick: s,
                        }),
                    ],
                });
    },
    H = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: i } = e;
        return (0, r.jsxs)("div", {
            className: w.body,
            children: [
                (0, r.jsxs)("div", {
                    className: w.header,
                    children: [
                        (0, r.jsxs)("div", {
                            className: w.heading,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/bold",
                                    children: R.intl.string(R.t["5/knv4"]),
                                }),
                                (0, r.jsx)(m.Z, {}),
                            ],
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: R.intl.string(R.t.NFTQoc),
                        }),
                        (0, r.jsx)(u.Text, {
                            color: "text-link",
                            variant: "text-sm/normal",
                            children: R.intl.format(R.t.jerM90, {
                                helpCenterLink: E.Z.getArticleURL(N.BhN.CONFETTI_POTION),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", { className: w.divider }),
                (0, r.jsxs)("div", {
                    className: w.selectContainer,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "eyebrow",
                            children: R.intl.string(R.t.o8XwoI),
                        }),
                        (0, r.jsx)(Y, {
                            channel: t,
                            selectedEmoji: n,
                            isReaction: i,
                        }),
                    ],
                }),
            ],
        });
    },
    Y = (e) => {
        let { channel: t, selectedEmoji: n, isReaction: a } = e,
            [o, s] = (0, i.useState)(!1),
            l = (0, i.useCallback)(() => {
                s(!1);
            }, []),
            c = (0, i.useCallback)((e) => (0, O.t0)(e, t.id, a), [a, t.id]),
            { emojiName: f, selectionText: p } = (0, i.useMemo)(
                () =>
                    null == n
                        ? {
                              emojiName: null,
                              selectionText: R.intl.string(R.t.KgK5qg),
                          }
                        : {
                              emojiName: null == n.id ? n.optionallyDiverseSequence : n.name,
                              selectionText: n.name.replace(/_/g, " "),
                          },
                [n],
            ),
            _ = (0, i.useRef)(null);
        return (0, r.jsx)(A.Z, {
            channel: t,
            shouldShow: o,
            onRequestClose: l,
            setEmojiConfetti: c,
            positionRef: _,
            position: "left",
            align: "top",
            children: () =>
                (0, r.jsx)(u.P3F, {
                    onClick: () => s(!o),
                    className: w.emojiSelect,
                    children: (0, r.jsxs)("div", {
                        className: w.emojiContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: w.selectedEmoji,
                                children: [
                                    (0, r.jsx)("div", {
                                        ref: _,
                                        children:
                                            null == n
                                                ? (0, r.jsx)(u.EO4, {
                                                      color: "currentColor",
                                                      size: "custom",
                                                      className: w.emojiIcon,
                                                  })
                                                : (0, r.jsx)(d.Z, {
                                                      animated: !1,
                                                      emojiId: n.id,
                                                      emojiName: f,
                                                      className: w.emojiIcon,
                                                  }),
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "interactive-active",
                                        variant: "text-sm/normal",
                                        children: p,
                                    }),
                                ],
                            }),
                            o
                                ? (0, r.jsx)(u.u04, {
                                      color: "currentColor",
                                      size: "custom",
                                      className: w.chevron,
                                  })
                                : (0, r.jsx)(u.CJ0, {
                                      color: "currentColor",
                                      size: "custom",
                                      className: w.chevron,
                                  }),
                        ],
                    }),
                }),
        });
    },
    W = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: i, onActionClick: a } = e;
        return (0, r.jsxs)("div", {
            className: w.footer,
            children: [
                (0, r.jsx)(u.Button, {
                    variant: "secondary",
                    text: R.intl.string(R.t.w2Qbd6),
                    onClick: () => {
                        (0, u.Mr3)(G);
                    },
                }),
                (0, r.jsxs)("div", {
                    className: w.footerRight,
                    children: [
                        (0, r.jsx)(K, {}),
                        (0, r.jsx)(z, {
                            buttonPurchaseState: t,
                            buttonDisabledState: n,
                            price: i,
                            onActionClick: a,
                        }),
                    ],
                }),
            ],
        });
    },
    K = () => {
        let { entitlement: e, numPotions: t } = (0, C.t6)(S.D1);
        if (null == t || 0 === t) return null;
        let n = (null == e ? void 0 : e.type) === N.qc2.DEVELOPER_GIFT ? R.t["b+P6ra"] : R.t.RiQ4ci;
        return (0, r.jsxs)("div", {
            className: w.remaining,
            children: [
                (0, r.jsx)(u.l22, {
                    color: "currentColor",
                    className: w.shootingStar,
                }),
                (0, r.jsx)(u.Text, {
                    color: "none",
                    variant: "text-sm/semibold",
                    children: R.intl.formatToPlainString(n, { numPotions: t }),
                }),
            ],
        });
    },
    z = (e) => {
        let { buttonPurchaseState: t, buttonDisabledState: n, price: a, onActionClick: o } = e,
            {
                isDisabled: s,
                copy: l,
                tooltipCopy: d,
            } = (0, i.useMemo)(() => {
                let e = {
                        0: R.intl.formatToPlainString(R.t.POGRmi, {
                            amount: S.pe,
                            price: (0, b.T4)(a.amount, a.currency),
                        }),
                        1: R.intl.string(R.t.RrKeD5),
                        2: R.intl.string(R.t.WOXaWH),
                        3: R.intl.string(R.t["1Qm822"]),
                    },
                    r = {
                        1: R.intl.string(R.t["Cb8/70"]),
                        2: R.intl.string(R.t.fMkB9K),
                        3: R.intl.string(R.t["59ElNn"]),
                    },
                    i = 0 !== n;
                return {
                    isDisabled: i,
                    copy: e[t],
                    tooltipCopy: i ? r[n] : "",
                };
            }, [n, t, a.amount, a.currency]);
        return (0, r.jsx)(c.u, {
            text: d,
            shouldShow: !!s,
            children: (0, r.jsx)(u.Button, {
                onClick: o,
                disabled: s,
                text: l,
            }),
        });
    },
    q = () =>
        (0, r.jsx)("div", {
            className: w.anomaly,
            children: (0, r.jsxs)("div", {
                className: w.error,
                children: [
                    (0, r.jsx)(u.Eep, {
                        src: D,
                        width: U,
                        height: k,
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: R.intl.string(R.t.oKJdSs),
                    }),
                ],
            }),
        }),
    X = () =>
        (0, r.jsx)("div", {
            className: w.anomaly,
            children: (0, r.jsx)("div", {
                className: w.spinner,
                children: (0, r.jsx)(u.$jN, {}),
            }),
        });
