n.d(t, { jM: () => T });
var i = n(951288);
n(647438);
var r = n(442837),
    a = n(481060),
    l = n(225657),
    s = n(600164),
    o = n(987209),
    c = n(563132),
    d = n(409813),
    u = n(614277),
    f = n(927699),
    g = n(96848),
    m = n(311821),
    p = n(703656),
    b = n(321051),
    v = n(594174),
    h = n(55563),
    x = n(937615),
    j = n(164670),
    C = n(210218),
    y = n(703400),
    _ = n(242723),
    P = n(848118),
    w = n(981631),
    O = n(474936),
    I = n(231338),
    N = n(388032),
    k = n(397263);
let T = {
    key: d.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, i.jsx)(
            S,
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
        useBreadcrumbLabel: () => N.intl.string(N.t["W685+b"]),
    },
};
function E(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: l = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, c.JL)(),
        u = o ? d.h8.REVIEW : d.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Button, {
                onClick: () => t(u),
                disabled: l,
                loading: s,
                text: N.intl.string(N.t.XiOHRX),
            }),
            r ? (0, i.jsx)(m.Z, { onClick: n }) : null,
        ],
    });
}
function S(e) {
    var t;
    let { handleStepChange: n, handleClose: d } = e,
        {
            customGiftMessage: m = "",
            setCustomGiftMessage: p,
            giftRecipient: C,
            emojiConfetti: w,
            soundEffect: T,
            setEmojiConfetti: S,
            setSoundEffect: G,
        } = (0, o.wD)(),
        { selectedSkuId: Z, application: A } = (0, c.JL)(),
        B = (0, r.e7)([v.default], () => v.default.getCurrentUser()),
        D = (0, r.e7)([h.Z], () => (null != Z ? h.Z.get(Z) : null), [Z]),
        L = (0, j.Do)(D),
        H = (0, j.a7)(D),
        W = (0, _.K)(D, { shouldFetchIfMissing: !0 }),
        R = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.C3, {
                children: (0, i.jsxs)("div", {
                    className: k.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: k.bodyColumnLeft,
                            children: [
                                null != L &&
                                    (0, i.jsx)(P.p, {
                                        containerClassName: k.skuCardImage,
                                        cardImage: L,
                                        cardBackgroundImage: H,
                                        altText: null != (t = null == D ? void 0 : D.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: k.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            sound: T,
                                            onSelect: (e) => {
                                                null != G && G(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            setEmojiConfetti: S,
                                            emojiConfetti: null == w ? void 0 : w,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: k.bodyColumnRight,
                            children: [
                                (0, i.jsx)(l.Z, {
                                    selectedSkuId: Z,
                                    validateSelectedGift: R,
                                    searchableSelectWrapperClassName: k.recipientPickerSelectWrapper,
                                }),
                                (0, i.jsx)(f.Z, {
                                    sectionTitle: N.intl.string(N.t.B3miE8),
                                    onTextChange: (e) => (null == p ? void 0 : p(e)),
                                    pendingText: m,
                                    currentText: m,
                                    disableThemedBackground: !0,
                                    className: k.customGiftMessageWrapper,
                                    innerClassName: k.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, r;
                                    if (null == D) return null;
                                    let l = (0, x.T4)(
                                        null != (n = null == (e = D.price) ? void 0 : e.amount) ? n : 0,
                                        null != (r = null == (t = D.price) ? void 0 : t.currency) ? r : I.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: k.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(a.vwX, {
                                                className: k.giftPreviewTitle,
                                                children: N.intl.string(N.t.PpoJzt),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: k.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: k.giftPreviewImageContainer,
                                                        children:
                                                            null != D &&
                                                            null != L &&
                                                            (0, i.jsx)(P.p, {
                                                                containerClassName: k.giftPreviewCardContainer,
                                                                cardImage: L,
                                                                cardBackgroundImage: H,
                                                                altText: D.name,
                                                                shape: "square",
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: k.giftPreviewTextContainer,
                                                        children: [
                                                            null != A && (0, i.jsx)(y.e, { application: A }),
                                                            (0, i.jsx)(a.Text, {
                                                                variant: "text-md/semibold",
                                                                children: D.name,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)(a.Text, {
                                                        variant: "text-md/semibold",
                                                        children: l,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                })(),
                                null != W &&
                                    null != D &&
                                    (0, i.jsx)(M, {
                                        handleClose: d,
                                        sku: D,
                                        guild: W,
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
                    className: k.footer,
                    children: (0, i.jsx)(E, {
                        onStepChange: n,
                        onBackClick: d,
                        disabled: null == C || C.id === (null == B ? void 0 : B.id) || m.length > O.$n,
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
        children: (0, i.jsx)(a.Avr, {
            text: N.intl.string(N.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let i = null == (e = C.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(w.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id)) ||
                    ((0, a.pTH)(), (0, p.uL)(w.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id, r.slug)));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
