t.d(i, {
    default: () => f,
});
var n = t(627968),
    s = t(64700),
    l = t(397927),
    r = t(937008),
    a = t(156312),
    o = t(532794),
    c = t(232516),
    d = t(788868),
    u = t(652215),
    m = t(985018),
    p = t(431389);

function h(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: r,
            analyticsLocations: h,
            analyticsLocation: f,
            analyticsObject: g,
            giftMessage: I,
        } = e,
        { priceOptions: j } = (0, a.P5)(),
        x = s.useCallback(
            (e) => {
                (0, o.A)({
                    isGift: !0,
                    giftRecipient: i,
                    subscriptionTier: e,
                    giftingOrigin: d.vQ.DM_CHANNEL,
                    analyticsLocations: null != h ? h : [],
                    analyticsLocation: f,
                    analyticsObject:
                        null != g
                            ? g
                            : {
                                  page: u.liQ.DM_CHANNEL,
                                  section: u.JJy.CHANNEL_TEXT_AREA,
                                  object: u.ZSU.BUTTON_ICON,
                                  objectType: u.AnalyticsObjectTypes.GIFT,
                              },
                    giftMessage: I,
                }),
                    t();
            },
            [i, h, f, g, I, t],
        );
    return (0, n.jsxs)(l.EOs, {
        transitionState: r,
        size: l.rIJ.DYNAMIC,
        className: p.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ0, {
                className: p.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(l.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, n.jsx)(l.s_y, {
                            onClick: t,
                            "data-migration-pending": !0,
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$mQ, {
                className: p.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(c.A, {
                    onSelectSku: x,
                    giftRecipient: i,
                    priceOptions: j,
                    onWishlistItemClick: t,
                }),
            }),
        ],
    });
}

function f(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: o,
        analyticsObject: c,
        giftMessage: u,
    } = e;
    return (0, n.jsx)(a.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.T7,
        isGift: !0,
        children: (0, n.jsx)(r.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: d.vQ.DM_CHANNEL,
            children: (0, n.jsx)(h, {
                giftRecipient: i,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: o,
                analyticsObject: c,
                giftMessage: u,
            }),
        }),
    });
}
