n.d(t, { default: () => T, p: () => S });
var i = n(477900),
    r = n(582128),
    a = n(192308),
    s = n(964486),
    l = n(793574),
    o = n(688810),
    d = n(523527),
    c = n(739053),
    u = n(82498),
    _ = n(831318),
    E = n(976860),
    A = n(495867),
    f = n(129230),
    h = n(676279),
    I = n(448645),
    p = n(652215),
    m = n(682901),
    g = n(792996);
function T(e) {
    let { onClose: t, analyticsLocations: n, ...a } = e,
        T = (0, h.TM)()
            ? "https://cdn.discordapp.com/assets/content/c23ef35b05707f9b0183b9f65d246337619cd7a5e27af5cb0a5a895915cfcfdc.mov"
            : "https://cdn.discordapp.com/assets/content/1817f476e92da9ec4b59da365313dca77246e4f07a24c7c64a78b06eea62211a.webm",
        { analyticsLocations: S } = (0, o.Ay)(n, l.A.PREMIUM_UPSELL);
    (0, s.Ay)(() => {
        (f.default.track(p.HAw.PREMIUM_UPSELL_VIEWED, {
            type: m.e.SOUND_QUICK_ACCESS_PICKER_SOUND_CLICKED,
            is_external: !0,
            location_section: p.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
            location_stack: S,
            sku_id: I.Ay.getSkuIdForPremiumType(m.PremiumTypes.TIER_2),
            voice_guild_id: A.A.getGuildId() ?? null,
        }),
            (0, c.sq)(p.U7l.PREMIUM_UPSELL_VIEWED, S, () => (0, u.uq)(m.e.SOUND_QUICK_ACCESS_PICKER_SOUND_CLICKED)));
    });
    let N = (0, r.useCallback)(() => {
        (f.default.track(p.HAw.PREMIUM_PROMOTION_OPENED, {
            location_section: p.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
            location_object: p.ZSU.NAVIGATION_LINK,
        }),
            (0, d.A)(),
            t(),
            (0, E.pX)(p.BVt.APPLICATION_STORE));
    }, [t]);
    return (0, i.jsx)(o.f5, {
        value: S,
        children: (0, i.jsx)(_.A, {
            title: g.intl.string(g.t.jGDYF0),
            subtitle: g.intl.string(g.t["grL/hg"]),
            graphic: { type: "video", src: T, loop: !0, loopAt: 5 },
            secondaryCTA: g.intl.string(g.t.ZnqyZ2),
            onSecondaryClick: N,
            onClose: t,
            ...a,
        }),
    });
}
function S(e) {
    (0, a.mM)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 49714));
        return (n) => (0, i.jsx)(t, { ...n, analyticsLocations: e });
    });
}
