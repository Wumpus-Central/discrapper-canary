var i = n(477900),
    l = n(855986),
    s = n(964486),
    r = n(793574),
    a = n(688810),
    o = n(495867),
    c = n(967198),
    u = n(129230),
    d = n(676279),
    h = n(453771),
    m = n(448645),
    g = n(739053),
    f = n(82498),
    p = n(831318),
    A = n(682901),
    E = n(652215),
    x = n(792996),
    _ = n(206433),
    j = n(323454);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { handleLearnMore: t, effectiveMaxSize: n, ...I } = e,
                N = (0, l.bG)([c.A], () => c.A.getGuildId()),
                { analyticsLocations: C } = (0, a.Ay)(r.A.FILE_UPLOAD_POPOUT, r.A.PREMIUM_UPSELL_MODAL);
            (0, s.Ay)(() => {
                (u.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: A.e.LARGER_FILE_UPLOAD_UPSELL,
                    location_section: E.JJy.FILE_UPLOAD_UPSELL_MODAL,
                    location_stack: C,
                    sku_id: (0, m.mH)(A.pe.TIER_2),
                    voice_guild_id: o.A.getGuildId() ?? null,
                }),
                    (0, g.sq)(E.U7l.PREMIUM_UPSELL_VIEWED, C, () => (0, f.uq)(A.e.LARGER_FILE_UPLOAD_UPSELL)));
            });
            let v = (0, h.Iu)({ guildId: N, maxSize: n }),
                y = (0, d.TM)() ? _.A : j.A;
            return (0, i.jsx)(a.f5, {
                value: C,
                children: (0, i.jsx)(p.A, {
                    title: x.intl.string(x.t["9C+41g"]),
                    subtitle: v,
                    graphic: { type: "video", src: y, loop: !0, loopAt: 2.1 },
                    secondaryCTA: x.intl.string(x.t.ZnqyZ2),
                    onSecondaryClick: t,
                    ...I,
                }),
            });
        },
    },
);
