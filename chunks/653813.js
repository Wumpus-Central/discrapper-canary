"use strict";
i.d(t, { default: () => f });
var n = i(627968),
    s = i(64700),
    r = i(397927),
    l = i(937008),
    a = i(156312),
    o = i(532794),
    d = i(232516),
    c = i(788868),
    u = i(652215),
    _ = i(985018),
    m = i(431389);
function I(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: l,
            analyticsLocations: I,
            analyticsLocation: f,
            analyticsObject: p,
            giftMessage: g,
        } = e,
        { priceOptions: h } = (0, a.P5)(),
        S = s.useCallback(
            (e) => {
                (0, o.A)({
                    isGift: !0,
                    giftRecipient: t,
                    subscriptionTier: e,
                    giftingOrigin: c.vQ.DM_CHANNEL,
                    analyticsLocations: I ?? [],
                    analyticsLocation: f,
                    analyticsObject: p ?? {
                        page: u.liQ.DM_CHANNEL,
                        section: u.JJy.CHANNEL_TEXT_AREA,
                        object: u.ZSU.BUTTON_ICON,
                        objectType: u.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: g,
                }),
                    i();
            },
            [t, I, f, p, g, i],
        );
    return (0, n.jsxs)(r.EOs, {
        transitionState: l,
        size: r.rIJ.DYNAMIC,
        className: m.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(r.rQ0, {
                className: m.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(r.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: _.intl.string(_.t["wg/30i"]),
                        }),
                        (0, n.jsx)(r.s_y, { onClick: i, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(r.$mQ, {
                className: m.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(d.A, {
                    onSelectSku: S,
                    giftRecipient: t,
                    priceOptions: h,
                    onWishlistItemClick: i,
                }),
            }),
        ],
    });
}
function f(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: s,
        analyticsLocations: r,
        analyticsLocation: o,
        analyticsObject: d,
        giftMessage: u,
    } = e;
    return (0, n.jsx)(a.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: c.T7,
        isGift: !0,
        children: (0, n.jsx)(l.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: c.vQ.DM_CHANNEL,
            children: (0, n.jsx)(I, {
                giftRecipient: t,
                onClose: i,
                transitionState: s,
                analyticsLocations: r,
                analyticsLocation: o,
                analyticsObject: d,
                giftMessage: u,
            }),
        }),
    });
}
