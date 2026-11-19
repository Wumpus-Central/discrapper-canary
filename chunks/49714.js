n.d(t, { default: () => C, p: () => A });
var l = n(477900),
    i = n(582128),
    r = n(192308),
    s = n(964486),
    a = n(793574),
    o = n(688810),
    u = n(523527),
    c = n(739053),
    d = n(82498),
    h = n(831318),
    m = n(976860),
    f = n(495867),
    p = n(129230),
    g = n(676279),
    x = n(448645),
    E = n(652215),
    S = n(682901),
    y = n(792996);
function C(e) {
    let {
            onClose: t,
            analyticsLocations: n,
            showBetaBadge: r = !1,
            upsellType: C = S.e.SOUND_QUICK_ACCESS_PICKER_SOUND_CLICKED,
            location: A,
            ...b
        } = e,
        I = (0, g.TM)()
            ? "https://cdn.discordapp.com/assets/content/c23ef35b05707f9b0183b9f65d246337619cd7a5e27af5cb0a5a895915cfcfdc.mov"
            : "https://cdn.discordapp.com/assets/content/1817f476e92da9ec4b59da365313dca77246e4f07a24c7c64a78b06eea62211a.webm",
        { analyticsLocations: v } = (0, o.Ay)(n, a.A.PREMIUM_UPSELL),
        N = C === S.e.SOUND_PICKER_SOUND_CLICKED;
    (0, s.Ay)(() => {
        (p.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
            type: C,
            is_external: !0,
            ...(null != A ? { location: A } : { location_section: E.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL }),
            location_stack: v,
            sku_id: x.Ay.getSkuIdForPremiumType(S.PremiumTypes.TIER_2),
            voice_guild_id: f.A.getGuildId() ?? null,
        }),
            (0, c.sq)(E.U7l.PREMIUM_UPSELL_VIEWED, v, () => (0, d.uq)(C)));
    });
    let T = (0, i.useCallback)(() => {
        (p.default.track(E.HAw.PREMIUM_PROMOTION_OPENED, {
            location_section: E.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
            location_object: E.ZSU.NAVIGATION_LINK,
        }),
            (0, u.A)(),
            t(),
            (0, m.pX)(E.BVt.APPLICATION_STORE));
    }, [t]);
    return (0, l.jsx)(o.f5, {
        value: N ? n : v,
        children: (0, l.jsx)(h.A, {
            title: y.intl.string(y.t.jGDYF0),
            subtitle: y.intl.string(y.t["grL/hg"]),
            graphic: { type: "video", src: I, loop: !0, loopAt: 5 },
            badgeType: r ? "beta" : null,
            badgeVariant: r ? "primary" : void 0,
            premiumModalAnalyticsLocation: N
                ? { section: E.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL, object: E.ZSU.BUTTON_CTA }
                : void 0,
            secondaryCTA: y.intl.string(y.t.ZnqyZ2),
            onSecondaryClick: T,
            onClose: t,
            ...b,
        }),
    });
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, r.mM)(async () => {
        let { default: i } = await Promise.resolve().then(n.bind(n, 49714));
        return (n) => (0, l.jsx)(i, { ...n, ...t, analyticsLocations: e });
    });
}
