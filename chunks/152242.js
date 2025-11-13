n.d(t, { jM: () => S });
var i = n(951288);
n(647438);
var l = n(442837),
    a = n(481060),
    r = n(225657),
    s = n(600164),
    o = n(987209),
    d = n(563132),
    c = n(409813),
    u = n(614277),
    f = n(927699),
    g = n(96848),
    m = n(311821),
    p = n(251660),
    x = n(321051),
    v = n(594174),
    h = n(55563),
    C = n(937615),
    j = n(164670),
    b = n(210218),
    _ = n(705338),
    I = n(703400),
    P = n(242723),
    w = n(848118),
    N = n(981631),
    T = n(474936),
    y = n(231338),
    k = n(388032),
    E = n(397263);
let S = {
    key: c.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, i.jsx)(
            Z,
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
        useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"]),
    },
};
function O(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: l = !1, disabled: r = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, d.JL)(),
        u = o ? c.h8.REVIEW : c.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Button, {
                onClick: () => t(u),
                disabled: r,
                loading: s,
                text: k.intl.string(k.t.XiOHRX),
            }),
            l ? (0, i.jsx)(m.Z, { onClick: n }) : null,
        ],
    });
}
function Z(e) {
    var t;
    let { handleStepChange: n, handleClose: c } = e,
        {
            customGiftMessage: m = "",
            setCustomGiftMessage: b,
            giftRecipient: _,
            emojiConfetti: N,
            soundEffect: S,
            setEmojiConfetti: Z,
            setSoundEffect: G,
            giftingOrigin: A,
        } = (0, o.wD)(),
        { selectedSkuId: W, application: B } = (0, d.JL)(),
        L = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        H = (0, l.e7)([h.Z], () => (null != W ? h.Z.get(W) : null), [W]),
        R = (0, j.Do)(H),
        D = (0, j.a7)(H),
        F = (0, P.K)(H, { shouldFetchIfMissing: !0 }),
        U = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.C3, {
                children: (0, i.jsxs)("div", {
                    className: E.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: E.bodyColumnLeft,
                            children: [
                                null != R &&
                                    (0, i.jsx)(w.p, {
                                        containerClassName: E.skuCardImage,
                                        cardImage: R,
                                        cardBackgroundImage: D,
                                        altText: null != (t = null == H ? void 0 : H.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: E.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(x.Z, {
                                            sound: S,
                                            onSelect: (e) => {
                                                null != G && G(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            setEmojiConfetti: Z,
                                            emojiConfetti: null == N ? void 0 : N,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: E.bodyColumnRight,
                            children: [
                                null != _ && (A === T.Wt.USER_PROFILE_WISHLIST || A === T.Wt.DM_CHANNEL_WISHLIST)
                                    ? (0, i.jsx)(p.s, { giftRecipient: _ })
                                    : (0, i.jsx)(r.Z, {
                                          selectedSkuId: W,
                                          validateSelectedGift: U,
                                          searchableSelectWrapperClassName: E.recipientPickerSelectWrapper,
                                      }),
                                (0, i.jsx)(f.Z, {
                                    sectionTitle: k.intl.string(k.t.B3miE8),
                                    onTextChange: (e) => (null == b ? void 0 : b(e)),
                                    pendingText: m,
                                    currentText: m,
                                    disableThemedBackground: !0,
                                    className: E.customGiftMessageWrapper,
                                    innerClassName: E.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, l;
                                    if (null == H) return null;
                                    let r = (0, C.T4)(
                                        null != (n = null == (e = H.price) ? void 0 : e.amount) ? n : 0,
                                        null != (l = null == (t = H.price) ? void 0 : t.currency) ? l : y.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: E.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(a.vwX, {
                                                className: E.giftPreviewTitle,
                                                children: k.intl.string(k.t.PpoJzt),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: E.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: E.giftPreviewImageContainer,
                                                        children:
                                                            null != H &&
                                                            null != R &&
                                                            (0, i.jsx)(w.p, {
                                                                containerClassName: E.giftPreviewCardContainer,
                                                                cardImage: R,
                                                                cardBackgroundImage: D,
                                                                altText: H.name,
                                                                shape: "square",
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: E.giftPreviewTextContainer,
                                                        children: [
                                                            null != B && (0, i.jsx)(I.e, { application: B }),
                                                            (0, i.jsx)(a.Text, {
                                                                variant: "text-md/semibold",
                                                                children: H.name,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)(a.Text, {
                                                        variant: "text-md/semibold",
                                                        children: r,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                })(),
                                null != F &&
                                    null != H &&
                                    (0, i.jsx)(M, {
                                        handleClose: c,
                                        sku: H,
                                        guild: F,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(u.O3, {
                children: (0, i.jsx)(a.mzw, {
                    "data-migration-pending": !0,
                    justify: s.Z.Justify.BETWEEN,
                    align: s.Z.Align.CENTER,
                    className: E.footer,
                    children: (0, i.jsx)(O, {
                        onStepChange: n,
                        onBackClick: c,
                        disabled: null == _ || _.id === (null == L ? void 0 : L.id) || m.length > T.$n,
                    }),
                }),
            }),
        ],
    });
}
function M(e) {
    let { handleClose: t, guild: n, sku: l } = e;
    return (0, i.jsx)("div", {
        className: E.viewItemButton,
        children: (0, i.jsx)(a.Avr, {
            text: k.intl.string(k.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let i = null == (e = b.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(N.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) ||
                    ((0, a.pTH)(),
                    (0, _.Z)({
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
