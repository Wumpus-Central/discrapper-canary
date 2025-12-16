n.d(t, {
    jM: () => Z,
    n3: () => H,
}),
    n(388685),
    n(539854),
    n(642613);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(358221),
    u = n(225657),
    d = n(725243),
    f = n(600164),
    p = n(987209),
    _ = n(563132),
    m = n(409813),
    h = n(614277),
    g = n(927699),
    E = n(96848),
    b = n(311821),
    y = n(251660),
    O = n(321051),
    v = n(19780),
    S = n(594174),
    I = n(55563),
    T = n(937615),
    C = n(164670),
    A = n(210218),
    N = n(705338),
    P = n(703400),
    R = n(242723),
    w = n(848118),
    D = n(981631),
    x = n(354459),
    L = n(474936),
    j = n(231338),
    M = n(388032),
    k = n(442538);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
let Z = {
    key: m.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(Y, G({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => M.intl.string(M.t["W685+b"]),
    },
};
function F(e) {
    let t = (0, s.e7)([v.Z], () => (v.Z.isConnected() ? v.Z.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? c.Z.getParticipants(t) : [],
                i = [],
                a = new Set();
            for (let t of n)
                (!(0, x.Io)(t) && !(0, x._5)(t)) ||
                    t.user.id === e ||
                    a.has(t.user.id) ||
                    (a.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, x._5)(e) && !(0, x._5)(t) ? -1 : (0, x._5)(t) && !(0, x._5)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}
function B(e) {
    let t = (0, d.Z)({ location: "Slayer Storefront Gift Customization Step" }),
        n = F(e);
    return i.useMemo(() => o().uniqWith([...n, ...t], (e, t) => e.id === t.id), [t, n]);
}
function V(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: a = !1, loading: o = !1 } = e,
        { hasPaymentSources: s } = (0, _.JL)(),
        c = s ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Button, {
                onClick: () => t(c),
                disabled: a,
                loading: o,
                text: M.intl.string(M.t.XiOHRX),
            }),
            i ? (0, r.jsx)(b.Z, { onClick: n }) : null,
        ],
    });
}
let H = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: i = "",
            setCustomGiftMessage: a,
            giftRecipient: o,
            emojiConfetti: c,
            soundEffect: d,
            setEmojiConfetti: f,
            setSoundEffect: m,
            giftingOrigin: h,
        } = (0, p.wD)(),
        { selectedSkuId: b, application: v } = (0, _.JL)(),
        A = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        N = B(null == A ? void 0 : A.id),
        D = (0, s.e7)([I.Z], () => (null != b ? I.Z.get(b) : null), [b]),
        x = (0, C.Do)(D),
        U = (0, C.a7)(D),
        G = (0, R.K)(D, { shouldFetchIfMissing: !0 }),
        Z = async (e, t) => {},
        F = () =>
            (0, r.jsx)(g.Z, {
                sectionTitle: M.intl.string(M.t.B3miE8),
                onTextChange: (e) => (null == a ? void 0 : a(e)),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: k.customGiftMessageWrapper,
                innerClassName: k.customGiftMessage,
            }),
        V = () =>
            null != o && (h === L.Wt.USER_PROFILE_WISHLIST || h === L.Wt.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(y.s, { giftRecipient: o })
                : (0, r.jsx)(u.Z, {
                      selectedSkuId: b,
                      validateSelectedGift: Z,
                      searchableSelectWrapperClassName: k.recipientPickerSelectWrapper,
                      recipients: N,
                  }),
        H = (e) => {
            null != m && m(null == e ? void 0 : e);
        },
        Y = () => {
            var e;
            return (0, r.jsxs)("div", {
                className: k.bodyColumnLeft,
                children: [
                    null != x &&
                        (0, r.jsx)(w.p, {
                            containerClassName: k.skuCardImage,
                            cardImage: x,
                            cardBackgroundImage: U,
                            altText: null != (e = null == D ? void 0 : D.name) ? e : "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: k.giftEffectsContainer,
                        children: [
                            (0, r.jsx)(O.Z, {
                                sound: d,
                                onSelect: H,
                            }),
                            (0, r.jsx)(E.Z, {
                                setEmojiConfetti: f,
                                emojiConfetti: null == c ? void 0 : c,
                            }),
                        ],
                    }),
                ],
            });
        },
        K = () => {
            var e, t, n, i;
            if (null == D) return null;
            let a = (0, T.T4)(
                null != (n = null == (e = D.price) ? void 0 : e.amount) ? n : 0,
                null != (i = null == (t = D.price) ? void 0 : t.currency) ? i : j.pK.USD,
            );
            return (0, r.jsxs)("div", {
                className: k.giftPreviewContainer,
                children: [
                    (0, r.jsx)(l.vwX, {
                        className: k.giftPreviewTitle,
                        children: M.intl.string(M.t.PpoJzt),
                    }),
                    (0, r.jsxs)("div", {
                        className: k.giftPreviewContent,
                        children: [
                            (0, r.jsx)("div", {
                                className: k.giftPreviewImageContainer,
                                children:
                                    null != D &&
                                    null != x &&
                                    (0, r.jsx)(w.p, {
                                        containerClassName: k.giftPreviewCardContainer,
                                        cardImage: x,
                                        cardBackgroundImage: U,
                                        altText: D.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: k.giftPreviewTextContainer,
                                children: [
                                    null != v && (0, r.jsx)(P.e, { application: v }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-sm/semibold",
                                        children: D.name,
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
        },
        z = () =>
            (0, r.jsxs)("div", {
                className: k.bodyColumnRight,
                children: [
                    V(),
                    F(),
                    K(),
                    null != G &&
                        null != D &&
                        (0, r.jsx)(W, {
                            handleClose: n,
                            sku: D,
                            guild: G,
                        }),
                ],
            });
    return {
        renderStepBody: () =>
            (0, r.jsxs)("div", {
                className: k.stepBody,
                children: [Y(), z()],
            }),
        getLeftColumnComponent: Y,
        getRightColumnComponent: z,
        onStepChange: t,
        onBackClick: n,
        disabled: null == o || o.id === (null == A ? void 0 : A.id) || i.length > L.$n,
    };
};
function Y(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            renderStepBody: i,
            onStepChange: a,
            onBackClick: o,
            disabled: s,
        } = H({
            handleStepChange: t,
            handleClose: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.C3, { children: i() }),
            (0, r.jsx)(h.O3, {
                children: (0, r.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    className: k.footer,
                    children: (0, r.jsx)(V, {
                        onStepChange: a,
                        onBackClick: o,
                        disabled: s,
                    }),
                }),
            }),
        ],
    });
}
function W(e) {
    let { handleClose: t, guild: n, sku: a } = e,
        o = i.useCallback(() => {
            (0, N.eagerNavigateToSocialLayerStorefront)({ guildId: n.id });
        }, [n.id]),
        s = i.useCallback(() => {
            var e;
            t();
            let r = null == (e = A.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
            window.location.pathname.includes(D.Z5c.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, a.id)) ||
                ((0, l.pTH)(),
                (0, N.default)({
                    guildId: n.id,
                    pageIndex: null != r ? r : 0,
                    skuId: a.id,
                    slug: a.slug,
                }));
        }, [n.id, a.id, a.slug, t]);
    return (0, r.jsx)("div", {
        className: k.viewItemButton,
        children: (0, r.jsx)(l.Avr, {
            text: n.id === (0, C.ac)() ? M.intl.string(M.t.nyIcya) : M.intl.string(M.t.ImioFL),
            onMouseDown: o,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
