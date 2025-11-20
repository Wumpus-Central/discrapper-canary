n.d(t, { jM: () => k });
var i = n(54381);
n(473749);
var l = n(442837),
    a = n(481060),
    r = n(225657),
    s = n(600164),
    o = n(987209),
    d = n(563132),
    c = n(409813),
    u = n(614277),
    g = n(927699),
    f = n(96848),
    m = n(311821),
    p = n(251660),
    x = n(321051),
    h = n(594174),
    v = n(55563),
    C = n(937615),
    j = n(164670),
    b = n(210218),
    _ = n(705338),
    I = n(703400),
    P = n(242723),
    w = n(848118),
    y = n(981631),
    T = n(474936),
    N = n(231338),
    E = n(388032),
    S = n(397263);
let k = {
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
        useBreadcrumbLabel: () => E.intl.string(E.t["W685+b"]),
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
                text: E.intl.string(E.t.XiOHRX),
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
            emojiConfetti: y,
            soundEffect: k,
            setEmojiConfetti: Z,
            setSoundEffect: M,
            giftingOrigin: A,
        } = (0, o.wD)(),
        { selectedSkuId: L, application: W } = (0, d.JL)(),
        B = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        R = (0, l.e7)([v.Z], () => (null != L ? v.Z.get(L) : null), [L]),
        H = (0, j.Do)(R),
        D = (0, j.a7)(R),
        F = (0, P.K)(R, { shouldFetchIfMissing: !0 }),
        U = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.C3, {
                children: (0, i.jsxs)("div", {
                    className: S.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: S.bodyColumnLeft,
                            children: [
                                null != H &&
                                    (0, i.jsx)(w.p, {
                                        containerClassName: S.skuCardImage,
                                        cardImage: H,
                                        cardBackgroundImage: D,
                                        altText: null != (t = null == R ? void 0 : R.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: S.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(x.Z, {
                                            sound: k,
                                            onSelect: (e) => {
                                                null != M && M(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(f.Z, {
                                            setEmojiConfetti: Z,
                                            emojiConfetti: null == y ? void 0 : y,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: S.bodyColumnRight,
                            children: [
                                null != _ && (A === T.Wt.USER_PROFILE_WISHLIST || A === T.Wt.DM_CHANNEL_WISHLIST)
                                    ? (0, i.jsx)(p.s, { giftRecipient: _ })
                                    : (0, i.jsx)(r.Z, {
                                          selectedSkuId: L,
                                          validateSelectedGift: U,
                                          searchableSelectWrapperClassName: S.recipientPickerSelectWrapper,
                                      }),
                                (0, i.jsx)(g.Z, {
                                    sectionTitle: E.intl.string(E.t.B3miE8),
                                    onTextChange: (e) => (null == b ? void 0 : b(e)),
                                    pendingText: m,
                                    currentText: m,
                                    disableThemedBackground: !0,
                                    className: S.customGiftMessageWrapper,
                                    innerClassName: S.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, l;
                                    if (null == R) return null;
                                    let r = (0, C.T4)(
                                        null != (n = null == (e = R.price) ? void 0 : e.amount) ? n : 0,
                                        null != (l = null == (t = R.price) ? void 0 : t.currency) ? l : N.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: S.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(a.vwX, {
                                                className: S.giftPreviewTitle,
                                                children: E.intl.string(E.t.PpoJzt),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: S.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: S.giftPreviewImageContainer,
                                                        children:
                                                            null != R &&
                                                            null != H &&
                                                            (0, i.jsx)(w.p, {
                                                                containerClassName: S.giftPreviewCardContainer,
                                                                cardImage: H,
                                                                cardBackgroundImage: D,
                                                                altText: R.name,
                                                                shape: "square",
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: S.giftPreviewTextContainer,
                                                        children: [
                                                            null != W && (0, i.jsx)(I.e, { application: W }),
                                                            (0, i.jsx)(a.Text, {
                                                                variant: "text-md/semibold",
                                                                children: R.name,
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
                                    null != R &&
                                    (0, i.jsx)(G, {
                                        handleClose: c,
                                        sku: R,
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
                    className: S.footer,
                    children: (0, i.jsx)(O, {
                        onStepChange: n,
                        onBackClick: c,
                        disabled: null == _ || _.id === (null == B ? void 0 : B.id) || m.length > T.$n,
                    }),
                }),
            }),
        ],
    });
}
function G(e) {
    let { handleClose: t, guild: n, sku: l } = e;
    return (0, i.jsx)("div", {
        className: S.viewItemButton,
        children: (0, i.jsx)(a.Avr, {
            text: n.id === (0, j.ac)() ? E.intl.string(E.t.nyIcya) : E.intl.string(E.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let i = null == (e = b.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(y.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) ||
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
