var l = n(477900),
    i = n(855986),
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
    E = n(682901),
    A = n(652215),
    _ = n(792996),
    x = n(206433),
    j = n(323454);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { handleLearnMore: t, effectiveMaxSize: n, ...I } = e,
                C = (0, i.bG)([c.A], () => c.A.getGuildId()),
                { analyticsLocations: N } = (0, a.Ay)(r.A.FILE_UPLOAD_POPOUT, r.A.PREMIUM_UPSELL_MODAL);
            (0, s.Ay)(() => {
                (u.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: E.e.LARGER_FILE_UPLOAD_UPSELL,
                    location_section: A.JJy.FILE_UPLOAD_UPSELL_MODAL,
                    location_stack: N,
                    sku_id: (0, m.mH)(E.pe.TIER_2),
                    voice_guild_id: o.A.getGuildId() ?? null,
                }),
                    (0, g.sq)(A.U7l.PREMIUM_UPSELL_VIEWED, N, () => (0, f.uq)(E.e.LARGER_FILE_UPLOAD_UPSELL)));
            });
            let v = (0, h.Iu)({ guildId: C, maxSize: n }),
                T = (0, d.TM)() ? x.A : j.A;
            return (0, l.jsx)(a.f5, {
                value: N,
                children: (0, l.jsx)(p.A, {
                    title: _.intl.string(_.t["9C+41g"]),
                    subtitle: v,
                    graphic: { type: "video", src: T, loop: !0, loopAt: 2.1 },
                    secondaryCTA: _.intl.string(_.t.ZnqyZ2),
                    onSecondaryClick: t,
                    ...I,
                }),
            });
        },
    },
);
