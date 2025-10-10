n.d(t, { Z: () => E });
var r = n(951288),
    i = n(442837),
    l = n(481060),
    a = n(100527),
    s = n(906732),
    o = n(623624),
    c = n(372444),
    d = n(852679),
    u = n(317169),
    g = n(926491),
    m = n(145499),
    p = n(424218),
    f = n(267642),
    h = n(63063),
    x = n(999382),
    b = n(981631),
    j = n(611480),
    v = n(388032),
    _ = n(96761);
let C = {
        page: b.ZY5.GUILD_SETTINGS,
        section: b.jXE.GUILD_SETTINGS_STICKERS,
        object: b.qAy.BOOSTING_BANNER,
    },
    O = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, s.ZP)(),
            i = (0, u.Z)(t.id).available,
            a = b.oCV[b.Eu4.TIER_1] - i;
        return (0, r.jsxs)("div", {
            className: _.upsellContainer,
            children: [
                (0, r.jsx)(l.X6q, {
                    className: _.upsellHeader,
                    variant: "heading-xl/semibold",
                    children: v.intl.string(v.t.hzCkys),
                }),
                (0, r.jsx)(l.Text, {
                    className: _.upsellDescription,
                    variant: "text-md/normal",
                    children: v.intl.string(v.t.jcesAA),
                }),
                (0, r.jsxs)(l.hE2, {
                    className: _.upsellButtons,
                    children: [
                        (0, r.jsx)(l.zxk, {
                            variant: "overlay-primary",
                            text: v.intl.string(v.t.Q5dbTk),
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: C,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: a,
                                }),
                        }),
                        (0, r.jsx)(l.zxk, {
                            variant: "overlay-primary",
                            text: v.intl.string(v.t.hvVgAQ),
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: b.jXE.GUILD_SETTINGS_STICKERS },
                                }),
                        }),
                    ],
                }),
            ],
        });
    },
    y = () =>
        (0, r.jsxs)(l.Kqy, {
            gap: 8,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    children: v.intl.string(v.t["9N2OWF"]),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: v.intl.format(v.t.hxLvi4, { fileSize: (0, p.IC)(j.Ht, { useKibibytes: !0 }) }),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: v.intl.format(v.t.UBj0aW, { articleUrl: h.Z.getArticleURL(b.BhN.STICKERS_UPLOAD) }),
                }),
            ],
        }),
    N = (e) => {
        let t,
            n,
            i,
            { guild: l, guildStickers: a } = e,
            s = l.premiumTier,
            o = (0, f.Qi)(a, s),
            d = (0, f.FZ)(s),
            u = (0, f.A3)(s),
            g = a.length;
        return null == d || s === b.Eu4.TIER_3 || o > 0
            ? null
            : (g > u
                  ? ((t = v.intl.formatToPlainString(v.t.ZtAY1d, { level: d })),
                    (n = v.intl.formatToPlainString(v.t["13hOWl"], { level: d })),
                    (i = b.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = v.intl.string(v.t.zT9Sxc)),
                    (n = v.intl.formatToPlainString(v.t.YaW9wM, {
                        level: d,
                        numAdditional: (0, f.ig)(d),
                    })),
                    (i = b.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(c.Z, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: b.ZY5.GUILD_SETTINGS,
                      section: b.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, f.ge)(d),
                  },
              }));
    },
    E = () => {
        let e = (0, i.e7)([x.Z], () => x.Z.getGuild()),
            t = (0, i.e7)([g.Z], () => {
                var t;
                return null != e && null != (t = g.Z.getStickersByGuildId(e.id)) ? t : [];
            }, [e]),
            { analyticsLocations: n } = (0, s.ZP)(a.Z.STICKERS);
        if (null == e) return null;
        let o = e.premiumTier !== b.Eu4.NONE || t.length > 0;
        return (0, r.jsx)(s.Gt, {
            value: n,
            children: (0, r.jsxs)(l.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-lg/semibold",
                        children: v.intl.string(v.t.R5nQkZ),
                    }),
                    o
                        ? (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)(N, {
                                      guild: e,
                                      guildStickers: t,
                                  }),
                                  (0, r.jsx)(y, {}),
                              ],
                          })
                        : (0, r.jsx)(O, { guild: e }),
                    (0, r.jsx)(l.izJ, { className: _.divider }),
                    (0, r.jsx)(m.Z, { guild: e }),
                ],
            }),
        });
    };
