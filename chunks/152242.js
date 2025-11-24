n.d(t, { jM: () => A }), n(388685), n(539854), n(642613);
var i = n(54381),
    l = n(473749),
    a = n(442837),
    r = n(481060),
    s = n(358221),
    o = n(225657),
    c = n(334636),
    d = n(600164),
    u = n(987209),
    f = n(563132),
    g = n(409813),
    m = n(614277),
    p = n(927699),
    h = n(96848),
    x = n(311821),
    v = n(251660),
    C = n(321051),
    _ = n(19780),
    j = n(594174),
    b = n(55563),
    I = n(937615),
    P = n(164670),
    w = n(210218),
    y = n(705338),
    S = n(703400),
    T = n(242723),
    N = n(848118),
    E = n(981631),
    k = n(354459),
    O = n(474936),
    Z = n(231338),
    G = n(388032),
    M = n(397263);
let A = {
    key: g.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, i.jsx)(
            R,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, e),
        ),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => G.intl.string(G.t["W685+b"]),
    },
};
function L(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: l = !1, disabled: a = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, f.JL)(),
        c = o ? g.h8.REVIEW : g.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Button, {
                onClick: () => t(c),
                disabled: a,
                loading: s,
                text: G.intl.string(G.t.XiOHRX),
            }),
            l ? (0, i.jsx)(x.Z, { onClick: n }) : null,
        ],
    });
}
function R(e) {
    var t;
    let { handleStepChange: n, handleClose: g } = e,
        {
            customGiftMessage: x = "",
            setCustomGiftMessage: w,
            giftRecipient: y,
            emojiConfetti: E,
            soundEffect: A,
            setEmojiConfetti: R,
            setSoundEffect: B,
            giftingOrigin: D,
        } = (0, u.wD)(),
        { selectedSkuId: H, application: F } = (0, f.JL)(),
        U = (0, a.e7)([j.default], () => j.default.getCurrentUser()),
        K = (function (e) {
            let t = (0, a.e7)([_.Z], () => (_.Z.isConnected() ? _.Z.getChannelId() : null)),
                [n, i] = l.useState([]);
            return (
                l.useEffect(() => {
                    let n = null != t ? s.Z.getParticipants(t) : [],
                        l = [],
                        a = new Set();
                    for (let t of n)
                        (!(0, k.Io)(t) && !(0, k._5)(t)) ||
                            t.user.id === e ||
                            a.has(t.user.id) ||
                            (a.add(t.user.id), l.push(t));
                    l.sort((e, t) => ((0, k._5)(e) && !(0, k._5)(t) ? -1 : (0, k._5)(t) && !(0, k._5)(e) ? 1 : 0)),
                        i(l.map((e) => e.user.id));
                }, [t, e]),
                n
            );
        })(null == U ? void 0 : U.id),
        J = (0, c.Z)({
            location: "Slayer Storefront Gift Customization Step",
            additionalRecipientIds: K,
        }),
        q = (0, a.e7)([b.Z], () => (null != H ? b.Z.get(H) : null), [H]),
        V = (0, P.Do)(q),
        z = (0, P.a7)(q),
        Y = (0, T.K)(q, { shouldFetchIfMissing: !0 }),
        X = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.C3, {
                children: (0, i.jsxs)("div", {
                    className: M.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: M.bodyColumnLeft,
                            children: [
                                null != V &&
                                    (0, i.jsx)(N.p, {
                                        containerClassName: M.skuCardImage,
                                        cardImage: V,
                                        cardBackgroundImage: z,
                                        altText: null != (t = null == q ? void 0 : q.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: M.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            sound: A,
                                            onSelect: (e) => {
                                                null != B && B(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(h.Z, {
                                            setEmojiConfetti: R,
                                            emojiConfetti: null == E ? void 0 : E,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: M.bodyColumnRight,
                            children: [
                                null != y && (D === O.Wt.USER_PROFILE_WISHLIST || D === O.Wt.DM_CHANNEL_WISHLIST)
                                    ? (0, i.jsx)(v.s, { giftRecipient: y })
                                    : (0, i.jsx)(o.Z, {
                                          selectedSkuId: H,
                                          validateSelectedGift: X,
                                          searchableSelectWrapperClassName: M.recipientPickerSelectWrapper,
                                          recipients: J,
                                      }),
                                (0, i.jsx)(p.Z, {
                                    sectionTitle: G.intl.string(G.t.B3miE8),
                                    onTextChange: (e) => (null == w ? void 0 : w(e)),
                                    pendingText: x,
                                    currentText: x,
                                    disableThemedBackground: !0,
                                    className: M.customGiftMessageWrapper,
                                    innerClassName: M.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, l;
                                    if (null == q) return null;
                                    let a = (0, I.T4)(
                                        null != (n = null == (e = q.price) ? void 0 : e.amount) ? n : 0,
                                        null != (l = null == (t = q.price) ? void 0 : t.currency) ? l : Z.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: M.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(r.vwX, {
                                                className: M.giftPreviewTitle,
                                                children: G.intl.string(G.t.PpoJzt),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: M.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: M.giftPreviewImageContainer,
                                                        children:
                                                            null != q &&
                                                            null != V &&
                                                            (0, i.jsx)(N.p, {
                                                                containerClassName: M.giftPreviewCardContainer,
                                                                cardImage: V,
                                                                cardBackgroundImage: z,
                                                                altText: q.name,
                                                                shape: "square",
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: M.giftPreviewTextContainer,
                                                        children: [
                                                            null != F && (0, i.jsx)(S.e, { application: F }),
                                                            (0, i.jsx)(r.Text, {
                                                                variant: "text-sm/semibold",
                                                                children: q.name,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)(r.Text, {
                                                        variant: "text-md/semibold",
                                                        children: a,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                })(),
                                null != Y &&
                                    null != q &&
                                    (0, i.jsx)(W, {
                                        handleClose: g,
                                        sku: q,
                                        guild: Y,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(m.O3, {
                children: (0, i.jsx)(r.mzw, {
                    "data-migration-pending": !0,
                    justify: d.Z.Justify.BETWEEN,
                    align: d.Z.Align.CENTER,
                    className: M.footer,
                    children: (0, i.jsx)(L, {
                        onStepChange: n,
                        onBackClick: g,
                        disabled: null == y || y.id === (null == U ? void 0 : U.id) || x.length > O.$n,
                    }),
                }),
            }),
        ],
    });
}
function W(e) {
    let { handleClose: t, guild: n, sku: l } = e;
    return (0, i.jsx)("div", {
        className: M.viewItemButton,
        children: (0, i.jsx)(r.Avr, {
            text: n.id === (0, P.ac)() ? G.intl.string(G.t.nyIcya) : G.intl.string(G.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let i = null == (e = w.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(E.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) ||
                    ((0, r.pTH)(),
                    (0, y.Z)({
                        guildId: n.id,
                        pageIndex: null != i ? i : 0,
                        skuId: l.id,
                        slug: l.slug,
                    }));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
