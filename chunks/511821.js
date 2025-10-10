n.d(t, { jM: () => E });
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
    p = n(927699),
    v = n(96848),
    x = n(311821),
    h = n(703656),
    C = n(321051),
    b = n(430824),
    j = n(594174),
    _ = n(55563),
    I = n(937615),
    P = n(73346),
    w = n(591759),
    y = n(981631),
    N = n(176505),
    T = n(474936),
    S = n(231338),
    O = n(388032),
    k = n(397263);
let E = {
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
        useBreadcrumbLabel: () => O.intl.string(O.t["W685+f"]),
    },
};
function M(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: l = !1, disabled: a = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, g.JL)(),
        d = o ? f.h8.REVIEW : f.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.zxk, {
                onClick: () => t(d),
                disabled: a,
                loading: s,
                text: O.intl.string(O.t.XiOHRU),
            }),
            l ? (0, i.jsx)(x.Z, { onClick: n }) : null,
        ],
    });
}
function Z(e) {
    var t, n, f, x, h;
    let { handleStepChange: y, handleClose: N } = e,
        {
            customGiftMessage: E = "",
            setCustomGiftMessage: Z,
            giftRecipient: A,
            emojiConfetti: B,
            soundEffect: L,
            setEmojiConfetti: W,
            setSoundEffect: R,
        } = (0, u.wD)(),
        { selectedSkuId: D, application: U } = (0, g.JL)(),
        F = (0, a.e7)([j.default], () => j.default.getCurrentUser()),
        H = (0, a.e7)([_.Z], () => (null != D ? _.Z.get(D) : null), [D]),
        J = null == U ? void 0 : U.guildId,
        z = (0, a.e7)([b.Z], () => (null != J ? b.Z.getGuild(J) : null), [J]);
    l.useEffect(() => {
        null == z && null != H && s.ZP.fetchApplication(H.applicationId, !0);
    }, [z, H]);
    let K =
            (null == H || null == (n = H.tenantMetadata) || null == (t = n.socialLayer)
                ? void 0
                : t.cardImageAssetId) != null && (null == H ? void 0 : H.applicationId) != null
                ? w.Z.toURLSafe((0, P._W)(H.applicationId, H.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))
                : void 0,
        V =
            (null == H || null == (x = H.tenantMetadata) || null == (f = x.socialLayer)
                ? void 0
                : f.cardBackgroundImageAssetId) != null && (null == H ? void 0 : H.applicationId) != null
                ? w.Z.toURLSafe(
                      (0, P._W)(H.applicationId, H.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"),
                  )
                : void 0,
        X = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.C3, {
                children: (0, i.jsxs)("div", {
                    className: k.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: k.bodyColumnLeft,
                            children: [
                                null != K &&
                                    (0, i.jsx)("div", {
                                        className: k.cardContainer,
                                        style:
                                            null != V ? { backgroundImage: "url(".concat(V.toString(), ")") } : void 0,
                                        children: (0, i.jsx)("img", {
                                            src: K.toString(),
                                            alt: null != (h = null == H ? void 0 : H.name) ? h : "",
                                            className: k.skuImage,
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: k.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            sound: L,
                                            onSelect: (e) => {
                                                null != R && R(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            setEmojiConfetti: W,
                                            emojiConfetti: null == B ? void 0 : B,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: k.bodyColumnRight,
                            children: [
                                (0, i.jsx)(o.Z, {
                                    selectedSkuId: D,
                                    validateSelectedGift: X,
                                    searchableSelectWrapperClassName: k.recipientPickerSelectWrapper,
                                }),
                                (0, i.jsx)(p.Z, {
                                    sectionTitle: O.intl.string(O.t.B3miEx),
                                    onTextChange: (e) => (null == Z ? void 0 : Z(e)),
                                    pendingText: E,
                                    currentText: E,
                                    disableThemedBackground: !0,
                                    className: k.customGiftMessageWrapper,
                                    innerClassName: k.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, l;
                                    if (null == H) return null;
                                    let a = (0, I.T4)(
                                        null != (n = null == (e = H.price) ? void 0 : e.amount) ? n : 0,
                                        null != (l = null == (t = H.price) ? void 0 : t.currency) ? l : S.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: k.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(r.vwX, {
                                                className: k.giftPreviewTitle,
                                                children: O.intl.string(O.t.PpoJzs),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: k.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: k.giftPreviewImageContainer,
                                                        children:
                                                            null != K &&
                                                            (0, i.jsx)("div", {
                                                                className: k.giftPreviewCardContainer,
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
                                                                    alt: H.name,
                                                                    className: k.giftPreviewImage,
                                                                }),
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: k.giftPreviewTextContainer,
                                                        children: [
                                                            null != z &&
                                                                (0, i.jsxs)("div", {
                                                                    className: k.guildNameContainer,
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
                                                                children: H.name,
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
                                    (0, i.jsx)(G, {
                                        handleClose: N,
                                        selectedSkuId: D,
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
                    className: k.footer,
                    children: (0, i.jsx)(M, {
                        onStepChange: y,
                        onBackClick: N,
                        disabled: null == A || A.id === (null == F ? void 0 : F.id) || E.length > T.$n,
                    }),
                }),
            }),
        ],
    });
}
function G(e) {
    let { handleClose: t, guild: n } = e;
    return (0, i.jsx)("div", {
        className: k.viewItemButton,
        children: (0, i.jsx)(r.Avr, {
            text: O.intl.string(O.t.ImioFB),
            onClick: function () {
                t(), (0, r.pTH)(), (0, h.uL)(y.Z5c.CHANNEL(n.id, N.oC.GUILD_SHOP));
            },
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
