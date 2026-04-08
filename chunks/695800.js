"use strict";
n.d(t, { Nn: () => u, fI: () => g, p_: () => m });
var i = n(627968),
    s = n(397927),
    l = n(58149),
    r = n(503566),
    a = n(631305),
    o = n(473145),
    d = n(997509),
    c = n(652215);
function u(e) {
    let {
        uploadType: t,
        maxFileSizeBytes: l,
        onComplete: r,
        showUpsellHeader: a = !0,
        analyticsLocation: o,
        analyticsLocations: d,
    } = e;
    (0, s.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("79149"), n.e("53653"), n.e("18153")]).then(n.bind(n, 551028));
        return (n) =>
            (0, i.jsx)(e, {
                maxFileSizeBytes: l,
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
        analyticsObject: s,
        perks: r,
        targetPremiumGuildTier: d,
    } = e;
    (0, l.zV)(c.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: { section: i, object: c.ZSU.LEARN_MORE, objectType: null != d ? (0, o.k1)(d) : void 0 },
        guild_id: t.id,
        location_stack: n,
    }),
        (0, a.A)({
            analyticsLocations: n,
            analyticsSourceLocation: { section: i, object: s, page: c.liQ.GUILD_SETTINGS },
            guild: t,
            perks: r,
        });
}
function g(e, t, n, i) {
    let s = i?.type,
        l = { page: c.liQ.GUILD_SETTINGS, section: c.JJy.ANIMATED_GUILD_BANNER_UPSELL, object: "temp" };
    if (null != s && null != n)
        if ("image/gif" !== s || e.features.has(c.GuildFeatures.ANIMATED_BANNER)) {
            if (!e.features.has(c.GuildFeatures.BANNER)) {
                (l.object = c.ZSU.IMAGE_CROPPING_MODAL),
                    (0, r._)({ guild: e, analyticsLocations: t, analyticsLocation: l, banner: n, isGIF: !1 });
                return;
            }
        } else {
            (l.object = c.ZSU.GIF_CROPPING_MODAL),
                (0, r._)({ guild: e, analyticsLocations: t, analyticsLocation: l, banner: n, isGIF: !0 });
            return;
        }
    d.A.updateGuild({ banner: n });
}
