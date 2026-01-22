n.d(t, {
    Nn: () => u,
    fI: () => g,
    p_: () => f,
});
var r = n(627968),
    i = n(397927),
    l = n(58149),
    s = n(503566),
    a = n(631305),
    c = n(473145),
    o = n(997509),
    d = n(652215);
function u(e) {
    let {
        uploadType: t,
        maxFileSizeBytes: l,
        onComplete: s,
        showUpsellHeader: a = !0,
        analyticsLocation: c,
        analyticsLocations: o,
    } = e;
    (0, i.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("79149"), n.e("53653"), n.e("61417")]).then(n.bind(n, 551028));
        return (n) =>
            (0, r.jsx)(
                e,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        maxFileSizeBytes: l,
                        onComplete: s,
                        uploadType: t,
                        showUpsellHeader: a,
                        analyticsLocation: c,
                        analyticsLocations: o,
                    },
                    n,
                ),
            );
    });
}
function f(e) {
    let {
        guild: t,
        analyticsLocations: n,
        analyticsSection: r,
        analyticsObject: i,
        perks: s,
        targetPremiumGuildTier: o,
    } = e;
    (0, l.zV)(d.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
            section: r,
            object: d.ZSU.LEARN_MORE,
            objectType: o ? (0, c.k1)(o) : void 0,
        },
        guild_id: t.id,
        location_stack: n,
    }),
        (0, a.A)({
            analyticsLocations: n,
            analyticsSourceLocation: {
                section: r,
                object: i,
                page: d.liQ.GUILD_SETTINGS,
            },
            guild: t,
            perks: s,
        });
}
function g(e, t, n, r) {
    let i = null == r ? void 0 : r.type,
        l = {
            page: d.liQ.GUILD_SETTINGS,
            section: d.JJy.ANIMATED_GUILD_BANNER_UPSELL,
            object: "temp",
        };
    if (null != i && null != n)
        if ("image/gif" !== i || e.features.has(d.GuildFeatures.ANIMATED_BANNER)) {
            if (!e.features.has(d.GuildFeatures.BANNER)) {
                (l.object = d.ZSU.IMAGE_CROPPING_MODAL),
                    (0, s._)({
                        guild: e,
                        analyticsLocations: t,
                        analyticsLocation: l,
                        banner: n,
                        isGIF: !1,
                    });
                return;
            }
        } else {
            (l.object = d.ZSU.GIF_CROPPING_MODAL),
                (0, s._)({
                    guild: e,
                    analyticsLocations: t,
                    analyticsLocation: l,
                    banner: n,
                    isGIF: !0,
                });
            return;
        }
    o.A.updateGuild({ banner: n });
}
