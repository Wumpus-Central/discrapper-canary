n.d(t, { jM: () => E });
var i = n(951288);
n(647438);
var r = n(442837),
    l = n(481060),
    a = n(225657),
    o = n(600164),
    s = n(987209),
    c = n(563132),
    d = n(409813),
    u = n(614277),
    f = n(927699),
    g = n(96848),
    p = n(311821),
    m = n(251660),
    v = n(321051),
    b = n(594174),
    h = n(55563),
    x = n(937615),
    j = n(164670),
    C = n(210218),
    y = n(705338),
    _ = n(703400),
    P = n(242723),
    w = n(848118),
    O = n(981631),
    I = n(474936),
    N = n(231338),
    T = n(388032),
    k = n(397263);
let E = {
    key: d.h8.GIFT_CUSTOMIZATION,
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
        useBreadcrumbLabel: () => T.intl.string(T.t["W685+b"]),
    },
};
function S(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: a = !1, loading: o = !1 } = e,
        { hasPaymentSources: s } = (0, c.JL)(),
        u = s ? d.h8.REVIEW : d.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Button, {
                onClick: () => t(u),
                disabled: a,
                loading: o,
                text: T.intl.string(T.t.XiOHRX),
            }),
            r ? (0, i.jsx)(p.Z, { onClick: n }) : null,
        ],
    });
}
function Z(e) {
    var t;
    let { handleStepChange: n, handleClose: d } = e,
        {
            customGiftMessage: p = "",
            setCustomGiftMessage: C,
            giftRecipient: y,
            emojiConfetti: O,
            soundEffect: E,
            setEmojiConfetti: Z,
            setSoundEffect: G,
            giftingOrigin: A,
        } = (0, s.wD)(),
        { selectedSkuId: W, application: B } = (0, c.JL)(),
        D = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
        L = (0, r.e7)([h.Z], () => (null != W ? h.Z.get(W) : null), [W]),
        H = (0, j.Do)(L),
        R = (0, j.a7)(L),
        F = (0, P.K)(L, { shouldFetchIfMissing: !0 }),
        U = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.C3, {
                children: (0, i.jsxs)("div", {
                    className: k.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: k.bodyColumnLeft,
                            children: [
                                null != H &&
                                    (0, i.jsx)(w.p, {
                                        containerClassName: k.skuCardImage,
                                        cardImage: H,
                                        cardBackgroundImage: R,
                                        altText: null != (t = null == L ? void 0 : L.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: k.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(v.Z, {
                                            sound: E,
                                            onSelect: (e) => {
                                                null != G && G(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            setEmojiConfetti: Z,
                                            emojiConfetti: null == O ? void 0 : O,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: k.bodyColumnRight,
                            children: [
                                null != y && (A === I.Wt.USER_PROFILE_WISHLIST || A === I.Wt.DM_CHANNEL_WISHLIST)
                                    ? (0, i.jsx)(m.s, { giftRecipient: y })
                                    : (0, i.jsx)(a.Z, {
                                          selectedSkuId: W,
                                          validateSelectedGift: U,
                                          searchableSelectWrapperClassName: k.recipientPickerSelectWrapper,
                                      }),
                                (0, i.jsx)(f.Z, {
                                    sectionTitle: T.intl.string(T.t.B3miE8),
                                    onTextChange: (e) => (null == C ? void 0 : C(e)),
                                    pendingText: p,
                                    currentText: p,
                                    disableThemedBackground: !0,
                                    className: k.customGiftMessageWrapper,
                                    innerClassName: k.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, r;
                                    if (null == L) return null;
                                    let a = (0, x.T4)(
                                        null != (n = null == (e = L.price) ? void 0 : e.amount) ? n : 0,
                                        null != (r = null == (t = L.price) ? void 0 : t.currency) ? r : N.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: k.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(l.vwX, {
                                                className: k.giftPreviewTitle,
                                                children: T.intl.string(T.t.PpoJzt),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: k.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: k.giftPreviewImageContainer,
                                                        children:
                                                            null != L &&
                                                            null != H &&
                                                            (0, i.jsx)(w.p, {
                                                                containerClassName: k.giftPreviewCardContainer,
                                                                cardImage: H,
                                                                cardBackgroundImage: R,
                                                                altText: L.name,
                                                                shape: "square",
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: k.giftPreviewTextContainer,
                                                        children: [
                                                            null != B && (0, i.jsx)(_.e, { application: B }),
                                                            (0, i.jsx)(l.Text, {
                                                                variant: "text-md/semibold",
                                                                children: L.name,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)(l.Text, {
                                                        variant: "text-md/semibold",
                                                        children: a,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                })(),
                                null != F &&
                                    null != L &&
                                    (0, i.jsx)(M, {
                                        handleClose: d,
                                        sku: L,
                                        guild: F,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(u.O3, {
                children: (0, i.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    justify: o.Z.Justify.BETWEEN,
                    align: o.Z.Align.CENTER,
                    className: k.footer,
                    children: (0, i.jsx)(S, {
                        onStepChange: n,
                        onBackClick: d,
                        disabled: null == y || y.id === (null == D ? void 0 : D.id) || p.length > I.$n,
                    }),
                }),
            }),
        ],
    });
}
function M(e) {
    let { handleClose: t, guild: n, sku: r } = e;
    return (0, i.jsx)("div", {
        className: k.viewItemButton,
        children: (0, i.jsx)(l.Avr, {
            text: T.intl.string(T.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let i = null == (e = C.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id)) ||
                    ((0, l.pTH)(),
                    (0, y.Z)({
                        guildId: n.id,
                        pageIndex: null != i ? i : 0,
                        skuId: r.id,
                        slug: r.slug,
                    }));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
