n.d(t, { jM: () => k });
var i = n(951288),
    l = n(647438),
    a = n(442837),
    r = n(481060),
    s = n(728345),
    o = n(225657),
    d = n(600164),
    c = n(565138),
    u = n(987209),
    g = n(563132),
    f = n(409813),
    m = n(614277),
    v = n(927699),
    p = n(96848),
    h = n(311821),
    x = n(703656),
    C = n(321051),
    b = n(430824),
    _ = n(594174),
    j = n(55563),
    I = n(937615),
    P = n(73346),
    w = n(591759),
    y = n(210218),
    N = n(981631),
    S = n(474936),
    T = n(231338),
    E = n(388032),
    O = n(397263);
let k = {
    key: f.h8.GIFT_CUSTOMIZATION,
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
        useBreadcrumbLabel: () => E.intl.string(E.t["W685+f"]),
    },
};
function M(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: l = !1, disabled: a = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, g.JL)(),
        d = o ? f.h8.REVIEW : f.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Button, {
                onClick: () => t(d),
                disabled: a,
                loading: s,
                text: E.intl.string(E.t.XiOHRU),
            }),
            l ? (0, i.jsx)(h.Z, { onClick: n }) : null,
        ],
    });
}
function Z(e) {
    var t, n, f, h, x;
    let { handleStepChange: y, handleClose: N } = e,
        {
            customGiftMessage: k = "",
            setCustomGiftMessage: Z,
            giftRecipient: G,
            emojiConfetti: B,
            soundEffect: L,
            setEmojiConfetti: W,
            setSoundEffect: R,
        } = (0, u.wD)(),
        { selectedSkuId: D, application: H } = (0, g.JL)(),
        U = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        F = (0, a.e7)([j.Z], () => (null != D ? j.Z.get(D) : null), [D]),
        J = null == H ? void 0 : H.guildId,
        z = (0, a.e7)([b.Z], () => (null != J ? b.Z.getGuild(J) : null), [J]);
    l.useEffect(() => {
        null == z && null != F && s.ZP.fetchApplication(F.applicationId, !0);
    }, [z, F]);
    let K =
            (null == F || null == (n = F.tenantMetadata) || null == (t = n.socialLayer)
                ? void 0
                : t.cardImageAssetId) != null && (null == F ? void 0 : F.applicationId) != null
                ? w.Z.toURLSafe((0, P._W)(F.applicationId, F.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))
                : void 0,
        V =
            (null == F || null == (h = F.tenantMetadata) || null == (f = h.socialLayer)
                ? void 0
                : f.cardBackgroundImageAssetId) != null && (null == F ? void 0 : F.applicationId) != null
                ? w.Z.toURLSafe(
                      (0, P._W)(F.applicationId, F.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"),
                  )
                : void 0,
        Y = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.C3, {
                children: (0, i.jsxs)("div", {
                    className: O.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: O.bodyColumnLeft,
                            children: [
                                null != K &&
                                    (0, i.jsx)("div", {
                                        className: O.cardContainer,
                                        style:
                                            null != V ? { backgroundImage: "url(".concat(V.toString(), ")") } : void 0,
                                        children: (0, i.jsx)("img", {
                                            src: K.toString(),
                                            alt: null != (x = null == F ? void 0 : F.name) ? x : "",
                                            className: O.skuImage,
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: O.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            sound: L,
                                            onSelect: (e) => {
                                                null != R && R(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(p.Z, {
                                            setEmojiConfetti: W,
                                            emojiConfetti: null == B ? void 0 : B,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: O.bodyColumnRight,
                            children: [
                                (0, i.jsx)(o.Z, {
                                    selectedSkuId: D,
                                    validateSelectedGift: Y,
                                    searchableSelectWrapperClassName: O.recipientPickerSelectWrapper,
                                }),
                                (0, i.jsx)(v.Z, {
                                    sectionTitle: E.intl.string(E.t.B3miEx),
                                    onTextChange: (e) => (null == Z ? void 0 : Z(e)),
                                    pendingText: k,
                                    currentText: k,
                                    disableThemedBackground: !0,
                                    className: O.customGiftMessageWrapper,
                                    innerClassName: O.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, l;
                                    if (null == F) return null;
                                    let a = (0, I.T4)(
                                        null != (n = null == (e = F.price) ? void 0 : e.amount) ? n : 0,
                                        null != (l = null == (t = F.price) ? void 0 : t.currency) ? l : T.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: O.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(r.vwX, {
                                                className: O.giftPreviewTitle,
                                                children: E.intl.string(E.t.PpoJzs),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: O.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: O.giftPreviewImageContainer,
                                                        children:
                                                            null != K &&
                                                            (0, i.jsx)("div", {
                                                                className: O.giftPreviewCardContainer,
                                                                style:
                                                                    null != V
                                                                        ? {
                                                                              backgroundImage: "url(".concat(
                                                                                  V.toString(),
                                                                                  ")",
                                                                              ),
                                                                          }
                                                                        : void 0,
                                                                children: (0, i.jsx)("img", {
                                                                    src: K.toString(),
                                                                    alt: F.name,
                                                                    className: O.giftPreviewImage,
                                                                }),
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: O.giftPreviewTextContainer,
                                                        children: [
                                                            null != z &&
                                                                (0, i.jsxs)("div", {
                                                                    className: O.guildNameContainer,
                                                                    children: [
                                                                        (0, i.jsx)(c.Z, {
                                                                            guild: z,
                                                                            size: c.Z.Sizes.MINI,
                                                                            active: !1,
                                                                            showBadge: !1,
                                                                        }),
                                                                        (0, i.jsx)(r.Text, {
                                                                            variant: "text-xs/medium",
                                                                            color: "text-muted",
                                                                            children: z.name,
                                                                        }),
                                                                    ],
                                                                }),
                                                            (0, i.jsx)(r.Text, {
                                                                variant: "text-md/semibold",
                                                                children: F.name,
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
                                null != z &&
                                    null != F &&
                                    (0, i.jsx)(A, {
                                        handleClose: N,
                                        sku: F,
                                        guild: z,
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
                    className: O.footer,
                    children: (0, i.jsx)(M, {
                        onStepChange: y,
                        onBackClick: N,
                        disabled: null == G || G.id === (null == U ? void 0 : U.id) || k.length > S.$n,
                    }),
                }),
            }),
        ],
    });
}
function A(e) {
    let { handleClose: t, guild: n, sku: l } = e;
    return (0, i.jsx)("div", {
        className: O.viewItemButton,
        children: (0, i.jsx)(r.Avr, {
            text: E.intl.string(E.t.ImioFB),
            onClick: function () {
                var e;
                t();
                let i = null == (e = y.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(N.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) ||
                    ((0, r.pTH)(), (0, x.uL)(N.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id, l.slug)));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
