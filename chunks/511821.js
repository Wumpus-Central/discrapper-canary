n.d(t, { jM: () => O });
var i = n(951288),
    a = n(647438),
    l = n(442837),
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
    h = n(311821),
    b = n(321051),
    x = n(430824),
    C = n(594174),
    j = n(55563),
    _ = n(937615),
    I = n(73346),
    P = n(591759),
    y = n(474936),
    w = n(231338),
    N = n(388032),
    T = n(305745);
let O = {
    key: f.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, i.jsx)(
            E,
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
        useBreadcrumbLabel: () => N.intl.string(N.t["W685+f"]),
    },
};
function S(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: a = !1, disabled: l = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, g.JL)(),
        d = o ? f.h8.REVIEW : f.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.zxk, {
                onClick: () => t(d),
                disabled: l,
                loading: s,
                text: N.intl.string(N.t.XiOHRU),
            }),
            a ? (0, i.jsx)(h.Z, { onClick: n }) : null,
        ],
    });
}
function E(e) {
    var t, n, f, h, O;
    let { handleStepChange: E, handleClose: k } = e,
        {
            customGiftMessage: M = "",
            setCustomGiftMessage: Z,
            giftRecipient: G,
            emojiConfetti: A,
            soundEffect: L,
            setEmojiConfetti: B,
            setSoundEffect: W,
        } = (0, u.wD)(),
        { selectedSkuId: R, application: D } = (0, g.JL)(),
        U = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        F = (0, l.e7)([j.Z], () => (null != R ? j.Z.get(R) : null), [R]),
        J = null == D ? void 0 : D.guildId,
        z = (0, l.e7)([x.Z], () => (null != J ? x.Z.getGuild(J) : null), [J]);
    a.useEffect(() => {
        null == z && null != F && s.ZP.fetchApplication(F.applicationId, !0);
    }, [z, F]);
    let H =
            (null == F || null == (n = F.tenantMetadata) || null == (t = n.socialLayer)
                ? void 0
                : t.cardImageAssetId) != null && (null == F ? void 0 : F.applicationId) != null
                ? P.Z.toURLSafe((0, I._W)(F.applicationId, F.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))
                : void 0,
        K =
            (null == F || null == (h = F.tenantMetadata) || null == (f = h.socialLayer)
                ? void 0
                : f.cardBackgroundImageAssetId) != null && (null == F ? void 0 : F.applicationId) != null
                ? P.Z.toURLSafe(
                      (0, I._W)(F.applicationId, F.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"),
                  )
                : void 0,
        X = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.C3, {
                children: (0, i.jsxs)("div", {
                    className: T.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: T.bodyColumnLeft,
                            children: [
                                null != H &&
                                    (0, i.jsx)("div", {
                                        className: T.cardContainer,
                                        style:
                                            null != K ? { backgroundImage: "url(".concat(K.toString(), ")") } : void 0,
                                        children: (0, i.jsx)("img", {
                                            src: H.toString(),
                                            alt: null != (O = null == F ? void 0 : F.name) ? O : "",
                                            className: T.skuImage,
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: T.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            sound: L,
                                            onSelect: (e) => {
                                                null != W && W(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            setEmojiConfetti: B,
                                            emojiConfetti: null == A ? void 0 : A,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: T.bodyColumnRight,
                            children: [
                                (0, i.jsx)(o.Z, {
                                    selectedSkuId: R,
                                    validateSelectedGift: X,
                                    searchableSelectWrapperClassName: T.recipientPickerSelectWrapper,
                                }),
                                (0, i.jsx)(p.Z, {
                                    sectionTitle: N.intl.string(N.t.B3miEx),
                                    onTextChange: (e) => (null == Z ? void 0 : Z(e)),
                                    pendingText: M,
                                    currentText: M,
                                    disableThemedBackground: !0,
                                    className: T.customGiftMessageWrapper,
                                    innerClassName: T.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, a;
                                    if (null == F) return null;
                                    let l = (0, _.T4)(
                                        null != (n = null == (e = F.price) ? void 0 : e.amount) ? n : 0,
                                        null != (a = null == (t = F.price) ? void 0 : t.currency) ? a : w.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: T.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(r.vwX, {
                                                className: T.giftPreviewTitle,
                                                children: N.intl.string(N.t.PpoJzs),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: T.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: T.giftPreviewImageContainer,
                                                        children:
                                                            null != H &&
                                                            (0, i.jsx)("div", {
                                                                className: T.giftPreviewCardContainer,
                                                                style:
                                                                    null != K
                                                                        ? {
                                                                              backgroundImage: "url(".concat(
                                                                                  K.toString(),
                                                                                  ")",
                                                                              ),
                                                                          }
                                                                        : void 0,
                                                                children: (0, i.jsx)("img", {
                                                                    src: H.toString(),
                                                                    alt: F.name,
                                                                    className: T.giftPreviewImage,
                                                                }),
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: T.giftPreviewTextContainer,
                                                        children: [
                                                            null != z &&
                                                                (0, i.jsxs)("div", {
                                                                    className: T.guildNameContainer,
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
                                                        children: l,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                })(),
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
                    className: T.footer,
                    children: (0, i.jsx)(S, {
                        onStepChange: E,
                        onBackClick: k,
                        disabled: null == G || G.id === (null == U ? void 0 : U.id) || M.length > y.$n,
                    }),
                }),
            }),
        ],
    });
}
