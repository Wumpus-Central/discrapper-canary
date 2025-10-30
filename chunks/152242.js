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
    m = n(703656),
    v = n(321051),
    b = n(594174),
    h = n(55563),
    x = n(937615),
    j = n(164670),
    C = n(210218),
    y = n(703400),
    P = n(242723),
    _ = n(848118),
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
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: a = !1, loading: o = !1 } = e,
        { hasPaymentSources: s } = (0, c.JL)(),
        u = s ? d.h8.REVIEW : d.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Button, {
                onClick: () => t(u),
                disabled: a,
                loading: o,
                text: N.intl.string(N.t.XiOHRX),
            }),
            r ? (0, i.jsx)(p.Z, { onClick: n }) : null,
        ],
    });
}
function S(e) {
    var t;
    let { handleStepChange: n, handleClose: d } = e,
        {
            customGiftMessage: p = "",
            setCustomGiftMessage: m,
            giftRecipient: C,
            emojiConfetti: w,
            soundEffect: T,
            setEmojiConfetti: S,
            setSoundEffect: G,
        } = (0, s.wD)(),
        { selectedSkuId: M, application: A } = (0, c.JL)(),
        B = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
        D = (0, r.e7)([h.Z], () => (null != M ? h.Z.get(M) : null), [M]),
        L = (0, j.Do)(D),
        H = (0, j.a7)(D),
        W = (0, P.K)(D, { shouldFetchIfMissing: !0 }),
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
                                    (0, i.jsx)(_.p, {
                                        className: k.skuCardImage,
                                        cardImage: L,
                                        cardBackgroundImage: H,
                                        altText: null != (t = null == D ? void 0 : D.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: k.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(v.Z, {
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
                                (0, i.jsx)(a.Z, {
                                    selectedSkuId: M,
                                    validateSelectedGift: R,
                                    searchableSelectWrapperClassName: k.recipientPickerSelectWrapper,
                                }),
                                (0, i.jsx)(f.Z, {
                                    sectionTitle: N.intl.string(N.t.B3miE8),
                                    onTextChange: (e) => (null == m ? void 0 : m(e)),
                                    pendingText: p,
                                    currentText: p,
                                    disableThemedBackground: !0,
                                    className: k.customGiftMessageWrapper,
                                    innerClassName: k.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, r;
                                    if (null == D) return null;
                                    let a = (0, x.T4)(
                                        null != (n = null == (e = D.price) ? void 0 : e.amount) ? n : 0,
                                        null != (r = null == (t = D.price) ? void 0 : t.currency) ? r : I.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: k.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(l.vwX, {
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
                                                            (0, i.jsx)(_.p, {
                                                                className: k.giftPreviewCardContainer,
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
                                null != W &&
                                    null != D &&
                                    (0, i.jsx)(Z, {
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
                children: (0, i.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    justify: o.Z.Justify.BETWEEN,
                    align: o.Z.Align.CENTER,
                    className: k.footer,
                    children: (0, i.jsx)(E, {
                        onStepChange: n,
                        onBackClick: d,
                        disabled: null == C || C.id === (null == B ? void 0 : B.id) || p.length > O.$n,
                    }),
                }),
            }),
        ],
    });
}
function Z(e) {
    let { handleClose: t, guild: n, sku: r } = e;
    return (0, i.jsx)("div", {
        className: k.viewItemButton,
        children: (0, i.jsx)(l.Avr, {
            text: N.intl.string(N.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let i = null == (e = C.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(w.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id)) ||
                    ((0, l.pTH)(), (0, m.uL)(w.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id, r.slug)));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
