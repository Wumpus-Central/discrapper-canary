n.d(t, { jM: () => O });
var i = n(951288);
n(647438);
var l = n(442837),
    r = n(481060),
    a = n(225657),
    s = n(600164),
    o = n(987209),
    c = n(563132),
    d = n(409813),
    u = n(614277),
    f = n(927699),
    g = n(96848),
    m = n(311821),
    p = n(703656),
    v = n(321051),
    h = n(594174),
    C = n(55563),
    x = n(937615),
    b = n(164670),
    j = n(210218),
    _ = n(703400),
    P = n(242723),
    w = n(848118),
    I = n(981631),
    y = n(474936),
    N = n(231338),
    T = n(388032),
    E = n(397263);
let O = {
    key: d.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, i.jsx)(
            k,
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
        useBreadcrumbLabel: () => T.intl.string(T.t["W685+f"]),
    },
};
function S(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: l = !1, disabled: a = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, c.JL)(),
        u = o ? d.h8.REVIEW : d.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Button, {
                onClick: () => t(u),
                disabled: a,
                loading: s,
                text: T.intl.string(T.t.XiOHRU),
            }),
            l ? (0, i.jsx)(m.Z, { onClick: n }) : null,
        ],
    });
}
function k(e) {
    var t;
    let { handleStepChange: n, handleClose: d } = e,
        {
            customGiftMessage: m = "",
            setCustomGiftMessage: p,
            giftRecipient: j,
            emojiConfetti: I,
            soundEffect: O,
            setEmojiConfetti: k,
            setSoundEffect: Z,
        } = (0, o.wD)(),
        { selectedSkuId: M, application: A } = (0, c.JL)(),
        B = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        L = (0, l.e7)([C.Z], () => (null != M ? C.Z.get(M) : null), [M]),
        W = (0, b.Do)(L),
        D = (0, b.a7)(L),
        H = (0, P.K)(L, { shouldFetchIfMissing: !0 }),
        R = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.C3, {
                children: (0, i.jsxs)("div", {
                    className: E.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: E.bodyColumnLeft,
                            children: [
                                null != W &&
                                    (0, i.jsx)(w.p, {
                                        className: E.skuCardImage,
                                        cardImage: W,
                                        cardBackgroundImage: D,
                                        altText: null != (t = null == L ? void 0 : L.name) ? t : "",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: E.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(v.Z, {
                                            sound: O,
                                            onSelect: (e) => {
                                                null != Z && Z(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            setEmojiConfetti: k,
                                            emojiConfetti: null == I ? void 0 : I,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: E.bodyColumnRight,
                            children: [
                                (0, i.jsx)(a.Z, {
                                    selectedSkuId: M,
                                    validateSelectedGift: R,
                                    searchableSelectWrapperClassName: E.recipientPickerSelectWrapper,
                                }),
                                (0, i.jsx)(f.Z, {
                                    sectionTitle: T.intl.string(T.t.B3miEx),
                                    onTextChange: (e) => (null == p ? void 0 : p(e)),
                                    pendingText: m,
                                    currentText: m,
                                    disableThemedBackground: !0,
                                    className: E.customGiftMessageWrapper,
                                    innerClassName: E.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, l;
                                    if (null == L) return null;
                                    let a = (0, x.T4)(
                                        null != (n = null == (e = L.price) ? void 0 : e.amount) ? n : 0,
                                        null != (l = null == (t = L.price) ? void 0 : t.currency) ? l : N.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: E.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(r.vwX, {
                                                className: E.giftPreviewTitle,
                                                children: T.intl.string(T.t.PpoJzs),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: E.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: E.giftPreviewImageContainer,
                                                        children:
                                                            null != L &&
                                                            null != W &&
                                                            (0, i.jsx)(w.p, {
                                                                className: E.giftPreviewCardContainer,
                                                                cardImage: W,
                                                                cardBackgroundImage: D,
                                                                altText: L.name,
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: E.giftPreviewTextContainer,
                                                        children: [
                                                            null != A && (0, i.jsx)(_.e, { application: A }),
                                                            (0, i.jsx)(r.Text, {
                                                                variant: "text-md/semibold",
                                                                children: L.name,
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
                                null != H &&
                                    null != L &&
                                    (0, i.jsx)(G, {
                                        handleClose: d,
                                        sku: L,
                                        guild: H,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(u.O3, {
                children: (0, i.jsx)(r.mzw, {
                    "data-migration-pending": !0,
                    justify: s.Z.Justify.BETWEEN,
                    align: s.Z.Align.CENTER,
                    className: E.footer,
                    children: (0, i.jsx)(S, {
                        onStepChange: n,
                        onBackClick: d,
                        disabled: null == j || j.id === (null == B ? void 0 : B.id) || m.length > y.$n,
                    }),
                }),
            }),
        ],
    });
}
function G(e) {
    let { handleClose: t, guild: n, sku: l } = e;
    return (0, i.jsx)("div", {
        className: E.viewItemButton,
        children: (0, i.jsx)(r.Avr, {
            text: T.intl.string(T.t.ImioFB),
            onClick: function () {
                var e;
                t();
                let i = null == (e = j.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(I.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) ||
                    ((0, r.pTH)(), (0, p.uL)(I.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id, l.slug)));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
