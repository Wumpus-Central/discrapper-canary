n.d(t, { jM: () => T });
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
    v = n(703656),
    b = n(321051),
    h = n(594174),
    x = n(55563),
    j = n(937615),
    C = n(164670),
    _ = n(210218),
    y = n(703400),
    P = n(242723),
    w = n(848118),
    O = n(981631),
    I = n(474936),
    N = n(231338),
    E = n(388032),
    S = n(397263);
let T = {
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
        useBreadcrumbLabel: () => E.intl.string(E.t["W685+b"]),
    },
};
function k(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: a = !1, loading: o = !1 } = e,
        { hasPaymentSources: s } = (0, c.JL)(),
        u = s ? d.h8.REVIEW : d.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Button, {
                onClick: () => t(u),
                disabled: a,
                loading: o,
                text: E.intl.string(E.t.XiOHRX),
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
            setCustomGiftMessage: v,
            giftRecipient: _,
            emojiConfetti: O,
            soundEffect: T,
            setEmojiConfetti: Z,
            setSoundEffect: G,
            giftingOrigin: A,
        } = (0, s.wD)(),
        { selectedSkuId: L, application: W } = (0, c.JL)(),
        B = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        D = (0, r.e7)([x.Z], () => (null != L ? x.Z.get(L) : null), [L]),
        H = (0, C.Do)(D),
        R = (0, C.a7)(D),
        F = (0, P.K)(D, { shouldFetchIfMissing: !0 }),
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
                                        cardBackgroundImage: R,
                                        altText: null != (t = null == D ? void 0 : D.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: S.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            sound: T,
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
                            className: S.bodyColumnRight,
                            children: [
                                null != _ && (A === I.Wt.USER_PROFILE_WISHLIST || A === I.Wt.DM_CHANNEL_WISHLIST)
                                    ? (0, i.jsx)(m.s, { giftRecipient: _ })
                                    : (0, i.jsx)(a.Z, {
                                          selectedSkuId: L,
                                          validateSelectedGift: U,
                                          searchableSelectWrapperClassName: S.recipientPickerSelectWrapper,
                                      }),
                                (0, i.jsx)(f.Z, {
                                    sectionTitle: E.intl.string(E.t.B3miE8),
                                    onTextChange: (e) => (null == v ? void 0 : v(e)),
                                    pendingText: p,
                                    currentText: p,
                                    disableThemedBackground: !0,
                                    className: S.customGiftMessageWrapper,
                                    innerClassName: S.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, r;
                                    if (null == D) return null;
                                    let a = (0, j.T4)(
                                        null != (n = null == (e = D.price) ? void 0 : e.amount) ? n : 0,
                                        null != (r = null == (t = D.price) ? void 0 : t.currency) ? r : N.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: S.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(l.vwX, {
                                                className: S.giftPreviewTitle,
                                                children: E.intl.string(E.t.PpoJzt),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: S.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: S.giftPreviewImageContainer,
                                                        children:
                                                            null != D &&
                                                            null != H &&
                                                            (0, i.jsx)(w.p, {
                                                                containerClassName: S.giftPreviewCardContainer,
                                                                cardImage: H,
                                                                cardBackgroundImage: R,
                                                                altText: D.name,
                                                                shape: "square",
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: S.giftPreviewTextContainer,
                                                        children: [
                                                            null != W && (0, i.jsx)(y.e, { application: W }),
                                                            (0, i.jsx)(l.Text, {
                                                                variant: "text-md/semibold",
                                                                children: D.name,
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
                                    null != D &&
                                    (0, i.jsx)(M, {
                                        handleClose: d,
                                        sku: D,
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
                    className: S.footer,
                    children: (0, i.jsx)(k, {
                        onStepChange: n,
                        onBackClick: d,
                        disabled: null == _ || _.id === (null == B ? void 0 : B.id) || p.length > I.$n,
                    }),
                }),
            }),
        ],
    });
}
function M(e) {
    let { handleClose: t, guild: n, sku: r } = e;
    return (0, i.jsx)("div", {
        className: S.viewItemButton,
        children: (0, i.jsx)(l.Avr, {
            text: E.intl.string(E.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let i = null == (e = _.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id)) ||
                    ((0, l.pTH)(), (0, v.uL)(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id, r.slug)));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
