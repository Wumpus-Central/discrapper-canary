n.d(t, { Nn: () => u, fI: () => g, p_: () => m });
var i = n(627968),
    l = n(192308),
    s = n(58149),
    r = n(503566),
    a = n(631305),
    o = n(473145),
    d = n(997509),
    c = n(652215);
function u(e) {
    let {
        uploadType: t,
        maxFileSizeBytes: s,
        onComplete: r,
        showUpsellHeader: a = !0,
        analyticsLocation: o,
        analyticsLocations: d,
    } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("79149"), n.e("53653"), n.e("8455")]).then(n.bind(n, 551028));
        return (n) =>
            (0, i.jsx)(e, {
                maxFileSizeBytes: s,
                onComplete: r,
                uploadType: t,
                showUpsellHeader: a,
                analyticsLocation: o,
                analyticsLocations: d,
                ...n,
            });
    });
}
function m(e) {
    let {
        guild: t,
        analyticsLocations: n,
        analyticsSection: i,
        analyticsObject: l,
        perks: r,
        targetPremiumGuildTier: d,
    } = e;
    (0, s.zV)(c.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: { section: i, object: c.ZSU.LEARN_MORE, objectType: null != d ? (0, o.k1)(d) : void 0 },
        guild_id: t.id,
        location_stack: n,
    }),
        (0, a.A)({
            analyticsLocations: n,
            analyticsSourceLocation: { section: i, object: l, page: c.liQ.GUILD_SETTINGS },
            guild: t,
            perks: r,
        });
}
function g(e, t, n, i) {
    let l = i?.type,
        s = { page: c.liQ.GUILD_SETTINGS, section: c.JJy.ANIMATED_GUILD_BANNER_UPSELL, object: "temp" };
    if (null != l && null != n)
        if ("image/gif" !== l || e.features.has(c.GuildFeatures.ANIMATED_BANNER)) {
            if (!e.features.has(c.GuildFeatures.BANNER)) {
                (s.object = c.ZSU.IMAGE_CROPPING_MODAL),
                    (0, r._)({ guild: e, analyticsLocations: t, analyticsLocation: s, banner: n, isGIF: !1 });
                return;
            }
        } else {
            (s.object = c.ZSU.GIF_CROPPING_MODAL),
                (0, r._)({ guild: e, analyticsLocations: t, analyticsLocation: s, banner: n, isGIF: !0 });
            return;
        }
    d.A.updateGuild({ banner: n });
}
