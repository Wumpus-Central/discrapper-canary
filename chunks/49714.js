n.d(t, { default: () => A, p: () => C });
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
    y = n(682901),
    S = n(792996);
function A(e) {
    let {
            onClose: t,
            analyticsLocations: n,
            showBetaBadge: r = !1,
            upsellType: A = y.e.SOUND_QUICK_ACCESS_PICKER_SOUND_CLICKED,
            location: C,
            ...I
        } = e,
        b = (0, g.TM)()
            ? "https://cdn.discordapp.com/assets/content/c23ef35b05707f9b0183b9f65d246337619cd7a5e27af5cb0a5a895915cfcfdc.mov"
            : "https://cdn.discordapp.com/assets/content/1817f476e92da9ec4b59da365313dca77246e4f07a24c7c64a78b06eea62211a.webm",
        { analyticsLocations: v } = (0, o.Ay)(n, a.A.PREMIUM_UPSELL),
        N = A === y.e.SOUND_PICKER_SOUND_CLICKED;
    (0, s.Ay)(() => {
        (p.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
            type: A,
            is_external: !0,
            ...(null != C ? { location: C } : { location_section: E.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL }),
            location_stack: v,
            sku_id: x.Ay.getSkuIdForPremiumType(y.PremiumTypes.TIER_2),
            voice_guild_id: f.A.getGuildId() ?? null,
        }),
            (0, c.sq)(E.U7l.PREMIUM_UPSELL_VIEWED, v, () => (0, d.uq)(A)));
    });
    let j = (0, i.useCallback)(() => {
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
            title: S.intl.string(S.t.jGDYF0),
            subtitle: S.intl.string(S.t["grL/hg"]),
            graphic: { type: "video", src: b, loop: !0, loopAt: 5 },
            badgeType: r ? "beta" : null,
            badgeVariant: r ? "primary" : void 0,
            premiumModalAnalyticsLocation: N
                ? { section: E.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL, object: E.ZSU.BUTTON_CTA }
                : void 0,
            secondaryCTA: S.intl.string(S.t.ZnqyZ2),
            onSecondaryClick: j,
            onClose: t,
            ...I,
        }),
    });
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, r.mM)(async () => {
        let { default: i } = await Promise.resolve().then(n.bind(n, 49714));
        return (n) => (0, l.jsx)(i, { ...n, ...t, analyticsLocations: e });
    });
}
