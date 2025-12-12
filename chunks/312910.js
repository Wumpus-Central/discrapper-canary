n.d(t, { Z: () => E });
var r = n(54381),
    i = n(442837),
    l = n(481060),
    s = n(100527),
    a = n(906732),
    o = n(623624),
    c = n(372444),
    u = n(852679),
    d = n(317169),
    g = n(926491),
    m = n(145499),
    p = n(424218),
    f = n(267642),
    h = n(63063),
    x = n(999382),
    b = n(981631),
    j = n(611480),
    _ = n(388032),
    v = n(96761);
let O = {
        page: b.ZY5.GUILD_SETTINGS,
        section: b.jXE.GUILD_SETTINGS_STICKERS,
        object: b.qAy.BOOSTING_BANNER,
    },
    C = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, a.ZP)(),
            i = (0, d.Z)(t.id).available,
            s = b.oCV[b.Eu4.TIER_1] - i;
        return (0, r.jsxs)("div", {
            className: v.upsellContainer,
            children: [
                (0, r.jsx)(l.Heading, {
                    className: v.upsellHeader,
                    variant: "heading-xl/semibold",
                    children: _.intl.string(_.t.hzCkyg),
                }),
                (0, r.jsx)(l.Text, {
                    className: v.upsellDescription,
                    variant: "text-md/normal",
                    children: _.intl.string(_.t.jcesAE),
                }),
                (0, r.jsxs)(l.ButtonGroup, {
                    className: v.upsellButtons,
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "overlay-primary",
                            text: _.intl.string(_.t.Q5dbTi),
                            onClick: () =>
                                (0, u.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: O,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: s,
                                }),
                        }),
                        (0, r.jsx)(l.Button, {
                            variant: "overlay-primary",
                            text: _.intl.string(_.t.hvVgAZ),
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
                    children: _.intl.string(_.t["9N2OWD"]),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: _.intl.format(_.t.hxLviw, { fileSize: (0, p.IC)(j.Ht, { useKibibytes: !0 }) }),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: _.intl.format(_.t.UBj0aX, { articleUrl: h.Z.getArticleURL(b.BhN.STICKERS_UPLOAD) }),
                }),
            ],
        }),
    N = (e) => {
        let t,
            n,
            i,
            { guild: l, guildStickers: s } = e,
            a = l.premiumTier,
            o = (0, f.Qi)(s, a),
            u = (0, f.FZ)(a),
            d = (0, f.A3)(a),
            g = s.length;
        return null == u || a === b.Eu4.TIER_3 || o > 0
            ? null
            : (g > d
                  ? ((t = _.intl.formatToPlainString(_.t.ZtAY1f, { level: u })),
                    (n = _.intl.formatToPlainString(_.t["13hOWm"], { level: u })),
                    (i = b.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = _.intl.string(_.t.zT9SxY)),
                    (n = _.intl.formatToPlainString(_.t.YaW9wI, {
                        level: u,
                        numAdditional: (0, f.ig)(u),
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
                      objectType: (0, f.ge)(u),
                  },
              }));
    },
    E = () => {
        let e = (0, i.e7)([x.Z], () => x.Z.getGuild()),
            t = (0, i.e7)([g.Z], () => {
                var t;
                return null != e && null != (t = g.Z.getStickersByGuildId(e.id)) ? t : [];
            }, [e]),
            { analyticsLocations: n } = (0, a.ZP)(s.Z.STICKERS);
        if (null == e) return null;
        let o = e.premiumTier !== b.Eu4.NONE || t.length > 0;
        return (0, r.jsx)(a.Gt, {
            value: n,
            children: (0, r.jsxs)(l.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        children: _.intl.string(_.t.R5nQkS),
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
                        : (0, r.jsx)(C, { guild: e }),
                    (0, r.jsx)(l.izJ, { className: v.divider }),
                    (0, r.jsx)(m.Z, { guild: e }),
                ],
            }),
        });
    };
