n.d(t, { jM: () => T });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(225657),
    o = n(600164),
    c = n(987209),
    s = n(563132),
    u = n(409813),
    d = n(614277),
    f = n(927699),
    p = n(96848),
    g = n(311821),
    b = n(703656),
    m = n(321051),
    v = n(594174),
    j = n(55563),
    O = n(937615),
    y = n(164670),
    h = n(210218),
    x = n(703400),
    C = n(242723),
    P = n(848118),
    _ = n(981631),
    w = n(474936),
    S = n(231338),
    I = n(388032),
    E = n(397263);
let T = {
    key: u.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, r.jsx)(
            k,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e),
        ),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => I.intl.string(I.t["W685+b"]),
    },
};
function N(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: a = !1, loading: o = !1 } = e,
        { hasPaymentSources: c } = (0, s.JL)(),
        d = c ? u.h8.REVIEW : u.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Button, {
                onClick: () => t(d),
                disabled: a,
                loading: o,
                text: I.intl.string(I.t.XiOHRX),
            }),
            i ? (0, r.jsx)(g.Z, { onClick: n }) : null,
        ],
    });
}
function k(e) {
    var t;
    let { handleStepChange: n, handleClose: u } = e,
        {
            customGiftMessage: g = "",
            setCustomGiftMessage: b,
            giftRecipient: h,
            emojiConfetti: _,
            soundEffect: T,
            setEmojiConfetti: k,
            setSoundEffect: Z,
        } = (0, c.wD)(),
        { selectedSkuId: L, application: D } = (0, s.JL)(),
        M = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
        R = (0, i.e7)([j.Z], () => (null != L ? j.Z.get(L) : null), [L]),
        G = (0, y.Do)(R),
        B = (0, y.a7)(R),
        H = (0, C.K)(R, { shouldFetchIfMissing: !0 }),
        W = async (e, t) => {};
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.C3, {
                children: (0, r.jsxs)("div", {
                    className: E.stepBody,
                    children: [
                        (0, r.jsxs)("div", {
                            className: E.bodyColumnLeft,
                            children: [
                                null != G &&
                                    (0, r.jsx)(P.p, {
                                        containerClassName: E.skuCardImage,
                                        cardImage: G,
                                        cardBackgroundImage: B,
                                        altText: null != (t = null == R ? void 0 : R.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, r.jsxs)("div", {
                                    className: E.giftEffectsContainer,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            sound: T,
                                            onSelect: (e) => {
                                                null != Z && Z(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, r.jsx)(p.Z, {
                                            setEmojiConfetti: k,
                                            emojiConfetti: null == _ ? void 0 : _,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: E.bodyColumnRight,
                            children: [
                                (0, r.jsx)(a.Z, {
                                    selectedSkuId: L,
                                    validateSelectedGift: W,
                                    searchableSelectWrapperClassName: E.recipientPickerSelectWrapper,
                                }),
                                (0, r.jsx)(f.Z, {
                                    sectionTitle: I.intl.string(I.t.B3miE8),
                                    onTextChange: (e) => (null == b ? void 0 : b(e)),
                                    pendingText: g,
                                    currentText: g,
                                    disableThemedBackground: !0,
                                    className: E.customGiftMessageWrapper,
                                    innerClassName: E.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, i;
                                    if (null == R) return null;
                                    let a = (0, O.T4)(
                                        null != (n = null == (e = R.price) ? void 0 : e.amount) ? n : 0,
                                        null != (i = null == (t = R.price) ? void 0 : t.currency) ? i : S.pK.USD,
                                    );
                                    return (0, r.jsxs)("div", {
                                        className: E.giftPreviewContainer,
                                        children: [
                                            (0, r.jsx)(l.vwX, {
                                                className: E.giftPreviewTitle,
                                                children: I.intl.string(I.t.PpoJzt),
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: E.giftPreviewContent,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: E.giftPreviewImageContainer,
                                                        children:
                                                            null != R &&
                                                            null != G &&
                                                            (0, r.jsx)(P.p, {
                                                                containerClassName: E.giftPreviewCardContainer,
                                                                cardImage: G,
                                                                cardBackgroundImage: B,
                                                                altText: R.name,
                                                                shape: "square",
                                                            }),
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                        className: E.giftPreviewTextContainer,
                                                        children: [
                                                            null != D && (0, r.jsx)(x.e, { application: D }),
                                                            (0, r.jsx)(l.Text, {
                                                                variant: "text-md/semibold",
                                                                children: R.name,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsx)(l.Text, {
                                                        variant: "text-md/semibold",
                                                        children: a,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                })(),
                                null != H &&
                                    null != R &&
                                    (0, r.jsx)(A, {
                                        handleClose: u,
                                        sku: R,
                                        guild: H,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(d.O3, {
                children: (0, r.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    justify: o.Z.Justify.BETWEEN,
                    align: o.Z.Align.CENTER,
                    className: E.footer,
                    children: (0, r.jsx)(N, {
                        onStepChange: n,
                        onBackClick: u,
                        disabled: null == h || h.id === (null == M ? void 0 : M.id) || g.length > w.$n,
                    }),
                }),
            }),
        ],
    });
}
function A(e) {
    let { handleClose: t, guild: n, sku: i } = e;
    return (0, r.jsx)("div", {
        className: E.viewItemButton,
        children: (0, r.jsx)(l.Avr, {
            text: I.intl.string(I.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let r = null == (e = h.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(_.Z5c.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, i.id)) ||
                    ((0, l.pTH)(), (0, b.uL)(_.Z5c.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, i.id, i.slug)));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
