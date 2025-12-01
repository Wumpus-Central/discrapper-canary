n.d(t, { jM: () => L }), n(388685), n(539854), n(642613);
var i = n(54381),
    l = n(473749),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(358221),
    d = n(225657),
    u = n(725243),
    f = n(600164),
    g = n(987209),
    m = n(563132),
    p = n(409813),
    h = n(614277),
    x = n(927699),
    v = n(96848),
    C = n(311821),
    _ = n(251660),
    j = n(321051),
    b = n(19780),
    I = n(594174),
    P = n(55563),
    w = n(937615),
    y = n(164670),
    S = n(210218),
    T = n(705338),
    N = n(703400),
    E = n(242723),
    k = n(848118),
    O = n(981631),
    Z = n(354459),
    G = n(474936),
    M = n(231338),
    A = n(388032),
    W = n(397263);
let L = {
    key: p.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) =>
        (0, i.jsx)(
            R,
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
        useBreadcrumbLabel: () => A.intl.string(A.t["W685+b"]),
    },
};
function B(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: l = !1, disabled: a = !1, loading: r = !1 } = e,
        { hasPaymentSources: s } = (0, m.JL)(),
        c = s ? p.h8.REVIEW : p.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Button, {
                onClick: () => t(c),
                disabled: a,
                loading: r,
                text: A.intl.string(A.t.XiOHRX),
            }),
            l ? (0, i.jsx)(C.Z, { onClick: n }) : null,
        ],
    });
}
function R(e) {
    var t;
    let { handleStepChange: n, handleClose: a } = e,
        {
            customGiftMessage: p = "",
            setCustomGiftMessage: C,
            giftRecipient: S,
            emojiConfetti: T,
            soundEffect: O,
            setEmojiConfetti: L,
            setSoundEffect: R,
            giftingOrigin: H,
        } = (0, g.wD)(),
        { selectedSkuId: F, application: U } = (0, m.JL)(),
        K = (0, s.e7)([I.default], () => I.default.getCurrentUser()),
        J = (function (e) {
            let t = (0, u.Z)({ location: "Slayer Storefront Gift Customization Step" }),
                n = (function (e) {
                    let t = (0, s.e7)([b.Z], () => (b.Z.isConnected() ? b.Z.getChannelId() : null)),
                        [n, i] = l.useState([]);
                    return (
                        l.useEffect(() => {
                            let n = null != t ? c.Z.getParticipants(t) : [],
                                l = [],
                                a = new Set();
                            for (let t of n)
                                (!(0, Z.Io)(t) && !(0, Z._5)(t)) ||
                                    t.user.id === e ||
                                    a.has(t.user.id) ||
                                    (a.add(t.user.id), l.push(t));
                            l.sort((e, t) =>
                                (0, Z._5)(e) && !(0, Z._5)(t) ? -1 : (0, Z._5)(t) && !(0, Z._5)(e) ? 1 : 0,
                            ),
                                i(l.map((e) => e.user));
                        }, [t, e]),
                        n
                    );
                })(e);
            return l.useMemo(() => r().uniqWith([...n, ...t], (e, t) => e.id === t.id), [t, n]);
        })(null == K ? void 0 : K.id),
        q = (0, s.e7)([P.Z], () => (null != F ? P.Z.get(F) : null), [F]),
        V = (0, y.Do)(q),
        z = (0, y.a7)(q),
        Y = (0, E.K)(q, { shouldFetchIfMissing: !0 }),
        X = async (e, t) => {};
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.C3, {
                children: (0, i.jsxs)("div", {
                    className: W.stepBody,
                    children: [
                        (0, i.jsxs)("div", {
                            className: W.bodyColumnLeft,
                            children: [
                                null != V &&
                                    (0, i.jsx)(k.p, {
                                        containerClassName: W.skuCardImage,
                                        cardImage: V,
                                        cardBackgroundImage: z,
                                        altText: null != (t = null == q ? void 0 : q.name) ? t : "",
                                        shape: "square",
                                    }),
                                (0, i.jsxs)("div", {
                                    className: W.giftEffectsContainer,
                                    children: [
                                        (0, i.jsx)(j.Z, {
                                            sound: O,
                                            onSelect: (e) => {
                                                null != R && R(null == e ? void 0 : e);
                                            },
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            setEmojiConfetti: L,
                                            emojiConfetti: null == T ? void 0 : T,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: W.bodyColumnRight,
                            children: [
                                null != S && (H === G.Wt.USER_PROFILE_WISHLIST || H === G.Wt.DM_CHANNEL_WISHLIST)
                                    ? (0, i.jsx)(_.s, { giftRecipient: S })
                                    : (0, i.jsx)(d.Z, {
                                          selectedSkuId: F,
                                          validateSelectedGift: X,
                                          searchableSelectWrapperClassName: W.recipientPickerSelectWrapper,
                                          recipients: J,
                                      }),
                                (0, i.jsx)(x.Z, {
                                    sectionTitle: A.intl.string(A.t.B3miE8),
                                    onTextChange: (e) => (null == C ? void 0 : C(e)),
                                    pendingText: p,
                                    currentText: p,
                                    disableThemedBackground: !0,
                                    className: W.customGiftMessageWrapper,
                                    innerClassName: W.customGiftMessage,
                                }),
                                (() => {
                                    var e, t, n, l;
                                    if (null == q) return null;
                                    let a = (0, w.T4)(
                                        null != (n = null == (e = q.price) ? void 0 : e.amount) ? n : 0,
                                        null != (l = null == (t = q.price) ? void 0 : t.currency) ? l : M.pK.USD,
                                    );
                                    return (0, i.jsxs)("div", {
                                        className: W.giftPreviewContainer,
                                        children: [
                                            (0, i.jsx)(o.vwX, {
                                                className: W.giftPreviewTitle,
                                                children: A.intl.string(A.t.PpoJzt),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: W.giftPreviewContent,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: W.giftPreviewImageContainer,
                                                        children:
                                                            null != q &&
                                                            null != V &&
                                                            (0, i.jsx)(k.p, {
                                                                containerClassName: W.giftPreviewCardContainer,
                                                                cardImage: V,
                                                                cardBackgroundImage: z,
                                                                altText: q.name,
                                                                shape: "square",
                                                            }),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: W.giftPreviewTextContainer,
                                                        children: [
                                                            null != U && (0, i.jsx)(N.e, { application: U }),
                                                            (0, i.jsx)(o.Text, {
                                                                variant: "text-sm/semibold",
                                                                children: q.name,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)(o.Text, {
                                                        variant: "text-md/semibold",
                                                        children: a,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                })(),
                                null != Y &&
                                    null != q &&
                                    (0, i.jsx)(D, {
                                        handleClose: a,
                                        sku: q,
                                        guild: Y,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(h.O3, {
                children: (0, i.jsx)(o.mzw, {
                    "data-migration-pending": !0,
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    className: W.footer,
                    children: (0, i.jsx)(B, {
                        onStepChange: n,
                        onBackClick: a,
                        disabled: null == S || S.id === (null == K ? void 0 : K.id) || p.length > G.$n,
                    }),
                }),
            }),
        ],
    });
}
function D(e) {
    let { handleClose: t, guild: n, sku: l } = e;
    return (0, i.jsx)("div", {
        className: W.viewItemButton,
        children: (0, i.jsx)(o.Avr, {
            text: n.id === (0, y.ac)() ? A.intl.string(A.t.nyIcya) : A.intl.string(A.t.ImioFL),
            onClick: function () {
                var e;
                t();
                let i = null == (e = S.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
                window.location.pathname.includes(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) ||
                    ((0, o.pTH)(),
                    (0, T.default)({
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
