n.d(t, { jM: () => W }), n(388685), n(539854), n(642613);
var i = n(54381),
    a = n(473749),
    l = n(392711),
    r = n.n(l),
    s = n(442837),
    o = n(481060),
    d = n(358221),
    c = n(225657),
    u = n(725243),
    f = n(600164),
    g = n(987209),
    m = n(563132),
    p = n(409813),
    h = n(614277),
    C = n(927699),
    x = n(96848),
    v = n(311821),
    b = n(251660),
    j = n(321051),
    I = n(19780),
    P = n(594174),
    w = n(55563),
    S = n(937615),
    _ = n(164670),
    y = n(210218),
    T = n(705338),
    N = n(703400),
    k = n(242723),
    E = n(848118),
    O = n(981631),
    Z = n(354459),
    G = n(474936),
    M = n(231338),
    A = n(388032),
    L = n(442538);
let W = {
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
    let { onStepChange: t, onBackClick: n, showBackButton: a = !1, disabled: l = !1, loading: r = !1 } = e,
        { hasPaymentSources: s } = (0, m.JL)(),
        d = s ? p.h8.REVIEW : p.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Button, {
                onClick: () => t(d),
                disabled: l,
                loading: r,
                text: A.intl.string(A.t.XiOHRX),
            }),
            a ? (0, i.jsx)(v.Z, { onClick: n }) : null,
        ],
    });
}
function R(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            getLeftColumnComponent: l,
            getRightColumnComponent: p,
            onStepChange: v,
            onBackClick: y,
            disabled: T,
        } = ((e) => {
            let { handleStepChange: t, handleClose: n } = e,
                {
                    customGiftMessage: l = "",
                    setCustomGiftMessage: f,
                    giftRecipient: p,
                    emojiConfetti: h,
                    soundEffect: v,
                    setEmojiConfetti: y,
                    setSoundEffect: T,
                    giftingOrigin: O,
                } = (0, g.wD)(),
                { selectedSkuId: W, application: B } = (0, m.JL)(),
                R = (0, s.e7)([P.default], () => P.default.getCurrentUser()),
                H = (function (e) {
                    let t = (0, u.Z)({ location: "Slayer Storefront Gift Customization Step" }),
                        n = (function (e) {
                            let t = (0, s.e7)([I.Z], () => (I.Z.isConnected() ? I.Z.getChannelId() : null)),
                                [n, i] = a.useState([]);
                            return (
                                a.useEffect(() => {
                                    let n = null != t ? d.Z.getParticipants(t) : [],
                                        a = [],
                                        l = new Set();
                                    for (let t of n)
                                        (!(0, Z.Io)(t) && !(0, Z._5)(t)) ||
                                            t.user.id === e ||
                                            l.has(t.user.id) ||
                                            (l.add(t.user.id), a.push(t));
                                    a.sort((e, t) =>
                                        (0, Z._5)(e) && !(0, Z._5)(t) ? -1 : (0, Z._5)(t) && !(0, Z._5)(e) ? 1 : 0,
                                    ),
                                        i(a.map((e) => e.user));
                                }, [t, e]),
                                n
                            );
                        })(e);
                    return a.useMemo(() => r().uniqWith([...n, ...t], (e, t) => e.id === t.id), [t, n]);
                })(null == R ? void 0 : R.id),
                F = (0, s.e7)([w.Z], () => (null != W ? w.Z.get(W) : null), [W]),
                U = (0, _.Do)(F),
                K = (0, _.a7)(F),
                J = (0, k.K)(F, { shouldFetchIfMissing: !0 }),
                q = async (e, t) => {},
                V = (e) => {
                    null != T && T(null == e ? void 0 : e);
                };
            return {
                getLeftColumnComponent: () => {
                    var e;
                    return (0, i.jsxs)("div", {
                        className: L.bodyColumnLeft,
                        children: [
                            null != U &&
                                (0, i.jsx)(E.p, {
                                    containerClassName: L.skuCardImage,
                                    cardImage: U,
                                    cardBackgroundImage: K,
                                    altText: null != (e = null == F ? void 0 : F.name) ? e : "",
                                    shape: "square",
                                }),
                            (0, i.jsxs)("div", {
                                className: L.giftEffectsContainer,
                                children: [
                                    (0, i.jsx)(j.Z, {
                                        sound: v,
                                        onSelect: V,
                                    }),
                                    (0, i.jsx)(x.Z, {
                                        setEmojiConfetti: y,
                                        emojiConfetti: null == h ? void 0 : h,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                getRightColumnComponent: () =>
                    (0, i.jsxs)("div", {
                        className: L.bodyColumnRight,
                        children: [
                            null != p && (O === G.Wt.USER_PROFILE_WISHLIST || O === G.Wt.DM_CHANNEL_WISHLIST)
                                ? (0, i.jsx)(b.s, { giftRecipient: p })
                                : (0, i.jsx)(c.Z, {
                                      selectedSkuId: W,
                                      validateSelectedGift: q,
                                      searchableSelectWrapperClassName: L.recipientPickerSelectWrapper,
                                      recipients: H,
                                  }),
                            (0, i.jsx)(C.Z, {
                                sectionTitle: A.intl.string(A.t.B3miE8),
                                onTextChange: (e) => (null == f ? void 0 : f(e)),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: L.customGiftMessageWrapper,
                                innerClassName: L.customGiftMessage,
                            }),
                            (() => {
                                var e, t, n, a;
                                if (null == F) return null;
                                let l = (0, S.T4)(
                                    null != (n = null == (e = F.price) ? void 0 : e.amount) ? n : 0,
                                    null != (a = null == (t = F.price) ? void 0 : t.currency) ? a : M.pK.USD,
                                );
                                return (0, i.jsxs)("div", {
                                    className: L.giftPreviewContainer,
                                    children: [
                                        (0, i.jsx)(o.vwX, {
                                            className: L.giftPreviewTitle,
                                            children: A.intl.string(A.t.PpoJzt),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: L.giftPreviewContent,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: L.giftPreviewImageContainer,
                                                    children:
                                                        null != F &&
                                                        null != U &&
                                                        (0, i.jsx)(E.p, {
                                                            containerClassName: L.giftPreviewCardContainer,
                                                            cardImage: U,
                                                            cardBackgroundImage: K,
                                                            altText: F.name,
                                                            shape: "square",
                                                        }),
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: L.giftPreviewTextContainer,
                                                    children: [
                                                        null != B && (0, i.jsx)(N.e, { application: B }),
                                                        (0, i.jsx)(o.Text, {
                                                            variant: "text-sm/semibold",
                                                            children: F.name,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(o.Text, {
                                                    variant: "text-md/semibold",
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            })(),
                            null != J &&
                                null != F &&
                                (0, i.jsx)(D, {
                                    handleClose: n,
                                    sku: F,
                                    guild: J,
                                }),
                        ],
                    }),
                onStepChange: t,
                onBackClick: n,
                disabled: null == p || p.id === (null == R ? void 0 : R.id) || l.length > G.$n,
            };
        })({
            handleStepChange: t,
            handleClose: n,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.C3, {
                children: (0, i.jsxs)("div", {
                    className: L.stepBody,
                    children: [l(), p()],
                }),
            }),
            (0, i.jsx)(h.O3, {
                children: (0, i.jsx)(o.mzw, {
                    "data-migration-pending": !0,
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    className: L.footer,
                    children: (0, i.jsx)(B, {
                        onStepChange: v,
                        onBackClick: y,
                        disabled: T,
                    }),
                }),
            }),
        ],
    });
}
function D(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = a.useCallback(() => {
            (0, T.eagerNavigateToSocialLayerStorefront)({ guildId: n.id });
        }, [n.id]),
        s = a.useCallback(() => {
            var e;
            t();
            let i = null == (e = y.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
            window.location.pathname.includes(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) ||
                ((0, o.pTH)(),
                (0, T.default)({
                    guildId: n.id,
                    pageIndex: null != i ? i : 0,
                    skuId: l.id,
                    slug: l.slug,
                }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: L.viewItemButton,
        children: (0, i.jsx)(o.Avr, {
            text: n.id === (0, _.ac)() ? A.intl.string(A.t.nyIcya) : A.intl.string(A.t.ImioFL),
            onMouseDown: r,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
