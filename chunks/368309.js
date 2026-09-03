n.d(t, { default: () => S, p: () => N });
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
    A = n(174459),
    h = n(676279),
    I = n(158045),
    f = n(652215),
    p = n(202541),
    T = n(375708),
    m = n(644242),
    g = n(309427);
function S(e) {
    let { onClose: t, analyticsLocations: n, ...a } = e,
        S = (0, h.TM)() ? m.A : g.A,
        { analyticsLocations: N } = (0, o.Ay)(n, l.A.PREMIUM_UPSELL);
    (0, s.Ay)(() => {
        A.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
            type: p.e.SOUND_PICKER_SOUND_CLICKED,
            is_external: !0,
            location_section: f.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
            location_stack: N,
            sku_id: I.Ay.getSkuIdForPremiumType(p.PremiumTypes.TIER_2),
        }),
            (0, c.sq)(f.U7l.PREMIUM_UPSELL_VIEWED, N, () => (0, u.uq)(p.e.SOUND_PICKER_SOUND_CLICKED));
    });
    let C = (0, r.useCallback)(() => {
        A.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
            location_section: f.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
            location_object: f.ZSU.NAVIGATION_LINK,
        }),
            (0, d.A)(),
            t(),
            (0, E.pX)(f.BVt.APPLICATION_STORE);
    }, [t]);
    return (0, i.jsx)(o.f5, {
        value: N,
        children: (0, i.jsx)(_.A, {
            title: T.intl.string(T.t.jGDYF0),
            subtitle: T.intl.string(T.t["grL/hg"]),
            graphic: { type: "video", src: S, loop: !0, loopAt: 5 },
            gradientColor: "nitro-green",
            secondaryCTA: T.intl.string(T.t.ZnqyZ2),
            onSecondaryClick: C,
            onClose: t,
            ...a,
        }),
    });
}
function N(e) {
    (0, a.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 368309));
        return (n) => (0, i.jsx)(t, { ...n, analyticsLocations: e });
    });
}
