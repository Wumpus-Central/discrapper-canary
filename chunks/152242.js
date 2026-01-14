n.d(t, {
    jM: () => F,
    n3: () => Y,
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
    T = n(823379),
    C = n(937615),
    A = n(164670),
    N = n(210218),
    P = n(705338),
    R = n(703400),
    w = n(242723),
    D = n(848118),
    x = n(981631),
    L = n(354459),
    j = n(474936),
    M = n(231338),
    k = n(388032),
    U = n(442538);
function G(e, t, n) {
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
function Z(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
let F = {
    key: m.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(W, Z({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"]),
    },
};
function B(e) {
    let t = (0, s.e7)([v.Z], () => (v.Z.isConnected() ? v.Z.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? c.Z.getParticipants(t) : [],
                i = [],
                a = new Set();
            for (let t of n)
                (!(0, L.Io)(t) && !(0, L._5)(t)) ||
                    t.user.id === e ||
                    a.has(t.user.id) ||
                    (a.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, L._5)(e) && !(0, L._5)(t) ? -1 : (0, L._5)(t) && !(0, L._5)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}
function V(e, t, n) {
    let r = (0, d.Z)(),
        a = B(e),
        l = (0, s.Wu)([S.default], () => {
            var e;
            return null != (e = null == n ? void 0 : n.map(S.default.getUser).filter(T.lm)) ? e : [];
        }, [n]);
    return i.useMemo(
        () => o().uniqWith([...(null != t ? [t] : []), ...l, ...a, ...r], (e, t) => e.id === t.id),
        [t, l, a, r],
    );
}
function H(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: a = !1, loading: o = !1 } = e,
        { hasPaymentSources: s } = (0, _.JL)(),
        c = s ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Button, {
                onClick: () => t(c),
                disabled: a,
                loading: o,
                text: k.intl.string(k.t.XiOHRX),
            }),
            i ? (0, r.jsx)(b.Z, { onClick: n }) : null,
        ],
    });
}
let Y = (e) => {
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
            additionalUserIds: b,
        } = (0, p.wD)(),
        { selectedSkuId: v, application: T } = (0, _.JL)(),
        N = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        P = V(null == N ? void 0 : N.id, o, b),
        x = (0, s.e7)([I.Z], () => (null != v ? I.Z.get(v) : null), [v]),
        L = (0, A.Do)(x),
        G = (0, A.a7)(x),
        Z = (0, w.K)(x, { shouldFetchIfMissing: !0 }),
        F = async (e, t) => {},
        B = () =>
            (0, r.jsx)(g.Z, {
                onTextChange: (e) => (null == a ? void 0 : a(e)),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: U.customGiftMessageWrapper,
                innerClassName: U.customGiftMessage,
            }),
        H = () =>
            null != o && (h === j.Wt.USER_PROFILE_WISHLIST || h === j.Wt.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(y.s, { giftRecipient: o })
                : (0, r.jsx)(u.Z, {
                      selectedSkuId: v,
                      validateSelectedGift: F,
                      searchableSelectWrapperClassName: U.recipientPickerSelectWrapper,
                      recipients: P,
                  }),
        Y = (e) => {
            null != m && m(null == e ? void 0 : e);
        },
        W = () => {
            var e;
            return (0, r.jsxs)("div", {
                className: U.bodyColumnLeft,
                children: [
                    null != L &&
                        (0, r.jsx)(D.p, {
                            containerClassName: U.skuCardImage,
                            cardImage: L,
                            cardBackgroundImage: G,
                            altText: null != (e = null == x ? void 0 : x.name) ? e : "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: U.giftEffectsContainer,
                        children: [
                            (0, r.jsx)(O.Z, {
                                sound: d,
                                onSelect: Y,
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
        z = () => {
            var e, t, n, i;
            if (null == x) return null;
            let a = (0, C.T4)(
                null != (n = null == (e = x.price) ? void 0 : e.amount) ? n : 0,
                null != (i = null == (t = x.price) ? void 0 : t.currency) ? i : M.pK.USD,
            );
            return (0, r.jsxs)("div", {
                className: U.giftPreviewContainer,
                children: [
                    (0, r.jsx)(l.vwX, {
                        className: U.giftPreviewTitle,
                        children: k.intl.string(k.t.PpoJzt),
                    }),
                    (0, r.jsxs)("div", {
                        className: U.giftPreviewContent,
                        children: [
                            (0, r.jsx)("div", {
                                className: U.giftPreviewImageContainer,
                                children:
                                    null != x &&
                                    null != L &&
                                    (0, r.jsx)(D.p, {
                                        containerClassName: U.giftPreviewCardContainer,
                                        cardImage: L,
                                        cardBackgroundImage: G,
                                        altText: x.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: U.giftPreviewTextContainer,
                                children: [
                                    null != T && (0, r.jsx)(R.e, { application: T }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-sm/semibold",
                                        children: x.name,
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
        q = () =>
            (0, r.jsxs)("div", {
                className: U.bodyColumnRight,
                children: [
                    H(),
                    B(),
                    z(),
                    null != Z &&
                        null != x &&
                        (0, r.jsx)(K, {
                            handleClose: n,
                            sku: x,
                            guild: Z,
                        }),
                ],
            });
    return {
        renderStepBody: () =>
            (0, r.jsxs)("div", {
                className: U.stepBody,
                children: [W(), q()],
            }),
        getLeftColumnComponent: W,
        getRightColumnComponent: q,
        onStepChange: t,
        onBackClick: n,
        disabled: null == o || o.id === (null == N ? void 0 : N.id) || i.length > j.$n,
    };
};
function W(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            renderStepBody: i,
            onStepChange: a,
            onBackClick: o,
            disabled: s,
        } = Y({
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
                    className: U.footer,
                    children: (0, r.jsx)(H, {
                        onStepChange: a,
                        onBackClick: o,
                        disabled: s,
                    }),
                }),
            }),
        ],
    });
}
function K(e) {
    let { handleClose: t, guild: n, sku: a } = e,
        o = i.useCallback(() => {
            (0, P.eagerNavigateToSocialLayerStorefront)({ guildId: n.id });
        }, [n.id]),
        s = i.useCallback(() => {
            var e;
            t();
            let r = null == (e = N.Z.getStorefrontState(n.id)) ? void 0 : e.activePage;
            window.location.pathname.includes(x.Z5c.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, a.id)) ||
                ((0, l.pTH)(),
                (0, P.default)({
                    guildId: n.id,
                    pageIndex: null != r ? r : 0,
                    skuId: a.id,
                    slug: a.slug,
                }));
        }, [n.id, a.id, a.slug, t]);
    return (0, r.jsx)("div", {
        className: U.viewItemButton,
        children: (0, r.jsx)(l.Avr, {
            text: n.id === (0, A.ac)() ? k.intl.string(k.t.nyIcya) : k.intl.string(k.t.ImioFL),
            onMouseDown: o,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
