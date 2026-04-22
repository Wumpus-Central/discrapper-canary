i.d(e, { b: () => o });
var s = i(627968),
    l = i(192308),
    n = i(954571),
    a = i(188275),
    r = i(652215);
let o = (t) => {
    let {
        sku: e,
        giftCode: o,
        channelContext: u,
        customGiftMessage: d,
        analyticsLocations: c,
        emojiName: p,
        soundId: h,
    } = t;
    (0, l.openModalLazy)(
        async () => {
            let { default: t } = await i.e("94544").then(i.bind(i, 173971));
            return (i) =>
                (0, s.jsx)(t, {
                    ...i,
                    sku: e,
                    giftCode: o,
                    channelContext: u,
                    customGiftMessage: d,
                    analyticsLocations: c,
                    emojiName: p,
                    soundId: h,
                });
        },
        {
            modalKey: "social-layer-storefront-gift-code-claim-modal",
            onCloseCallback: () => {
                n.default.track(r.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                    type: a.Nu,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: c ?? [],
                });
            },
        },
    );
};
