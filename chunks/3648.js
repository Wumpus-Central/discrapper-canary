"use strict";
n.d(t, { A: () => j, Z: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(192308),
    o = n(342494),
    c = n(397927),
    d = n(793574),
    u = n(627363),
    h = n(576030),
    A = n(932001),
    m = n(957785),
    p = n(186111),
    g = n(533406),
    _ = n(366523),
    f = n(188275),
    x = n(49999),
    C = n(788868),
    E = n(985018),
    I = n(673892),
    N = n(754558),
    b = n(585048);
function S(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: s } = e;
    return (0, i.jsx)(o.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: E.intl.string(E.t.uB4Gax), variant: "primary", onClick: s }],
        targetElementRef: t,
        title: E.intl.string(E.t.qh9t5c),
        body: E.intl.string(E.t.iM6fxV),
        graphic: { type: "image", src: b.A },
    });
}
function T(e) {
    let { showPopover: t, onViewWishlist: n, onCardClick: o, ...c } = e,
        d = s.useRef(null),
        u = (0, a.useHasAnyModalOpen)(),
        h = (0, l.bG)([p.A], () => p.A.hasLayers()),
        [g, _] = (0, A.kn)([], x.m.SIDEBAR, !0),
        f = s.useCallback(() => {
            _(x.i.USER_DISMISS), o();
        }, [o, _]),
        C = s.useCallback(() => {
            _(x.i.USER_DISMISS);
        }, [_]),
        E = s.useCallback(() => {
            _(x.i.USER_DISMISS), n();
        }, [n, _]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.A, { ...c, onCardClick: f, ref: d }),
            t &&
                g === r.M.GAME_SHOP_WISHLIST_POPOVER &&
                !u &&
                !h &&
                (0, i.jsx)(S, { targetElementRef: d, onRequestClose: C, onActionClick: E }),
        ],
    });
}
function v(e, t) {
    let {
            index: n,
            moreCount: s,
            onViewWishlist: l,
            isSingleCard: r = !1,
            profileOwner: a,
            wishlistId: o,
            cardSize: c,
            analyticsLocations: u,
        } = t,
        A = null != s && s > 0,
        m = {
            title: A ? E.intl.string(E.t.TxBQzD) : E.intl.string(E.t["4yiU7x"]),
            body: A ? void 0 : E.intl.string(E.t.ilhtIa),
            renderIcon: A ? void 0 : h.GM,
            shouldShow: !0,
        };
    return (0, i.jsx)(
        T,
        {
            wishlistItem: e,
            onCardClick: () => {
                A
                    ? l()
                    : (0, g.a)(
                          e.sku,
                          { isGift: !0, giftRecipient: a, giftingOrigin: C.vQ.USER_PROFILE_WISHLIST },
                          {
                              analyticsLocations: [
                                  ...u,
                                  d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                              ],
                          },
                      );
            },
            tooltipConfig: m,
            shouldScalePreview: !1,
            renderPreview: () =>
                (0, i.jsx)(_.e, {
                    containerClassName: I.Nr,
                    backgroundImageClassName: I.GC,
                    foregroundImageClassName: I.wP,
                    sku: e.sku,
                    shape: "custom",
                }),
            moreCount: s,
            isSingleCard: r,
            wishlistId: o,
            showPopover: 0 === n && e.sku.applicationId === f.XR,
            onViewWishlist: l,
            cardSize: c,
        },
        e.skuId,
    );
}
function y(e) {
    let { item: t, card: n, analyticsLocations: s, profileOwner: l } = e,
        { data: r } = (0, u.YY)(t.sku.applicationId);
    return (0, i.jsxs)("div", {
        className: N.D5,
        children: [
            n,
            (0, i.jsx)("div", {
                className: N.S7,
                children: (0, i.jsxs)(c.DUT, {
                    onClick: () => {
                        (0, g.a)(
                            t.sku,
                            { isGift: !0, giftRecipient: l, giftingOrigin: C.vQ.USER_PROFILE_WISHLIST },
                            {
                                analyticsLocations: [
                                    ...s,
                                    d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                                ],
                            },
                        );
                    },
                    className: N.Hh,
                    "aria-label": E.intl.string(E.t.pLPjsb),
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: t.skuName,
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: E.intl.format(E.t["CqpEC+"], { applicationName: r?.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function j(e, t) {
    let { profileOwner: n, analyticsLocations: s, wishlistId: l, onViewWishlist: r } = t,
        a = v(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: s,
            onViewWishlist: r,
            isSingleCard: !0,
            wishlistId: l,
        });
    return (0, i.jsx)(y, { item: e, card: a, profileOwner: n, analyticsLocations: s });
}
