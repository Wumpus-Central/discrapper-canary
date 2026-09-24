n.d(t, { default: () => N, p: () => C });
var i = n(477900),
    r = n(582128),
    a = n(192308),
    s = n(964486),
    l = n(793574),
    o = n(688810),
    d = n(523527),
    c = n(10392),
    u = n(82498),
    _ = n(831318),
    E = n(976860),
    A = n(763827),
    h = n(174459),
    I = n(676279),
    f = n(158045),
    p = n(652215),
    T = n(202541),
    m = n(375708),
    g = n(644242),
    S = n(309427);
function N(e) {
    let { onClose: t, analyticsLocations: n, ...a } = e,
        N = (0, I.TM)() ? g.A : S.A,
        { analyticsLocations: C } = (0, o.Ay)(n, l.A.PREMIUM_UPSELL);
    (0, s.Ay)(() => {
        (h.default.track(p.HAw.PREMIUM_UPSELL_VIEWED, {
            type: T.e.SOUND_QUICK_ACCESS_PICKER_SOUND_CLICKED,
            is_external: !0,
            location_section: p.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
            location_stack: C,
            sku_id: f.Ay.getSkuIdForPremiumType(T.PremiumTypes.TIER_2),
            voice_guild_id: A.A.getGuildId() ?? null,
        }),
            (0, c.sq)(p.U7l.PREMIUM_UPSELL_VIEWED, C, () => (0, u.uq)(T.e.SOUND_QUICK_ACCESS_PICKER_SOUND_CLICKED)));
    });
    let O = (0, r.useCallback)(() => {
        (h.default.track(p.HAw.PREMIUM_PROMOTION_OPENED, {
            location_section: p.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
            location_object: p.ZSU.NAVIGATION_LINK,
        }),
            (0, d.A)(),
            t(),
            (0, E.pX)(p.BVt.APPLICATION_STORE));
    }, [t]);
    return (0, i.jsx)(o.f5, {
        value: C,
        children: (0, i.jsx)(_.A, {
            title: m.intl.string(m.t.jGDYF0),
            subtitle: m.intl.string(m.t["grL/hg"]),
            graphic: { type: "video", src: N, loop: !0, loopAt: 5 },
            gradientColor: "nitro-green",
            secondaryCTA: m.intl.string(m.t.ZnqyZ2),
            onSecondaryClick: O,
            onClose: t,
            ...a,
        }),
    });
}
function C(e) {
    (0, a.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 368309));
        return (n) => (0, i.jsx)(t, { ...n, analyticsLocations: e });
    });
}
