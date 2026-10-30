i.d(e, { default: () => M });
var _ = i(477900);
i(582128);
var l = i(964486),
    n = i(793574),
    o = i(688810),
    a = i(523527),
    u = i(976860),
    A = i(763827),
    c = i(174459),
    r = i(676279),
    E = i(255438),
    s = i(24482),
    L = i(10392),
    P = i(82498),
    d = i(219882),
    I = i(831318),
    O = i(202541),
    T = i(652215),
    p = i(212524),
    U = i(105292),
    D = i(206433),
    S = i(323454);
function f(t) {
    return (0, E.Xq)(t / 1024, { useKibibytes: !0, useSpace: !1 });
}
function M(t) {
    let { onClose: e, viewerPremiumType: i, ...E } = t,
        { analyticsLocations: M } = (0, o.Ay)(n.A.NITRO_UPLOAD_BADGE, n.A.PREMIUM_UPSELL_MODAL);
    (0, l.Ay)(() => {
        (c.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, {
            type: O.e.NITRO_UPLOAD_BADGE_UPSELL,
            location_section: T.JJy.NITRO_UPLOAD_BADGE_UPSELL_MODAL,
            location_stack: M,
            sku_id: (0, s.mH)(O.pe.TIER_2),
            voice_guild_id: A.A.getGuildId() ?? null,
        }),
            (0, L.sq)(T.U7l.PREMIUM_UPSELL_VIEWED, M, () => (0, P.uq)(O.e.NITRO_UPLOAD_BADGE_UPSELL)));
    });
    let R = f((0, d.ew)({ autoTrackExposure: !1 })),
        N =
            null != i && i !== O.PremiumTypes.TIER_2
                ? U.intl.formatToPlainString(p.default.TaT999, { currentMaxSize: f(O.f5[i].fileSize), maxSize: R })
                : U.intl.formatToPlainString(p.default["2op/Su"], { maxSize: R }),
        k = (0, r.TM)() ? D.A : S.A;
    return (0, _.jsx)(o.f5, {
        value: M,
        children: (0, _.jsx)(I.A, {
            title: U.intl.string(p.default["5x18pr"]),
            subtitle: N,
            graphic: { type: "video", src: k, loop: !0, loopAt: 2.1 },
            secondaryCTA: U.intl.string(U.t.PcTCB7),
            onSecondaryClick: function () {
                ((0, a.A)(),
                    e(),
                    c.default.track(T.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: T.JJy.NITRO_UPLOAD_BADGE_UPSELL_MODAL,
                        location_object: T.ZSU.NAVIGATION_LINK,
                    }),
                    (0, u.pX)(T.BVt.APPLICATION_STORE));
            },
            onClose: e,
            ...E,
        }),
    });
}
