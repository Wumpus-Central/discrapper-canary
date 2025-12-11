n.d(t, { Z: () => I });
var r = n(54381),
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
    f = n(424218),
    p = n(267642),
    b = n(63063),
    h = n(999382),
    x = n(981631),
    j = n(611480),
    v = n(388032),
    O = n(708881);
let C = {
        page: x.ZY5.GUILD_SETTINGS,
        section: x.jXE.GUILD_SETTINGS_STICKERS,
        object: x.qAy.BOOSTING_BANNER,
    },
    y = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, s.ZP)(),
            i = (0, u.Z)(t.id).available,
            a = x.oCV[x.Eu4.TIER_1] - i;
        return (0, r.jsxs)("div", {
            className: O.upsellContainer,
            children: [
                (0, r.jsx)(l.Heading, {
                    className: O.upsellHeader,
                    variant: "heading-xl/semibold",
                    children: v.intl.string(v.t.hzCkyg),
                }),
                (0, r.jsx)(l.Text, {
                    className: O.upsellDescription,
                    variant: "text-md/normal",
                    children: v.intl.string(v.t.jcesAE),
                }),
                (0, r.jsxs)(l.ButtonGroup, {
                    className: O.upsellButtons,
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "overlay-primary",
                            text: v.intl.string(v.t.Q5dbTi),
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: C,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: a,
                                }),
                        }),
                        (0, r.jsx)(l.Button, {
                            variant: "overlay-primary",
                            text: v.intl.string(v.t.hvVgAZ),
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: x.jXE.GUILD_SETTINGS_STICKERS },
                                }),
                        }),
                    ],
                }),
            ],
        });
    },
    N = () =>
        (0, r.jsxs)(l.Kqy, {
            gap: 8,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    children: v.intl.string(v.t["9N2OWD"]),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: v.intl.format(v.t.hxLviw, { fileSize: (0, f.IC)(j.Ht, { useKibibytes: !0 }) }),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: v.intl.format(v.t.UBj0aX, { articleUrl: b.Z.getArticleURL(x.BhN.STICKERS_UPLOAD) }),
                }),
            ],
        }),
    E = (e) => {
        let t,
            n,
            i,
            { guild: l, guildStickers: a } = e,
            s = l.premiumTier,
            o = (0, p.Qi)(a, s),
            d = (0, p.FZ)(s),
            u = (0, p.A3)(s),
            g = a.length;
        return null == d || s === x.Eu4.TIER_3 || o > 0
            ? null
            : (g > u
                  ? ((t = v.intl.formatToPlainString(v.t.ZtAY1f, { level: d })),
                    (n = v.intl.formatToPlainString(v.t["13hOWm"], { level: d })),
                    (i = x.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = v.intl.string(v.t.zT9SxY)),
                    (n = v.intl.formatToPlainString(v.t.YaW9wI, {
                        level: d,
                        numAdditional: (0, p.ig)(d),
                    })),
                    (i = x.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(c.Z, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: x.ZY5.GUILD_SETTINGS,
                      section: x.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, p.ge)(d),
                  },
              }));
    },
    I = () => {
        let e = (0, i.e7)([h.Z], () => h.Z.getGuild()),
            t = (0, i.e7)([g.Z], () => {
                var t;
                return null != e && null != (t = g.Z.getStickersByGuildId(e.id)) ? t : [];
            }, [e]),
            { analyticsLocations: n } = (0, s.ZP)(a.Z.STICKERS);
        if (null == e) return null;
        let o = e.premiumTier !== x.Eu4.NONE || t.length > 0;
        return (0, r.jsx)(s.Gt, {
            value: n,
            children: (0, r.jsxs)(l.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        children: v.intl.string(v.t.R5nQkS),
                    }),
                    o
                        ? (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)(E, {
                                      guild: e,
                                      guildStickers: t,
                                  }),
                                  (0, r.jsx)(N, {}),
                              ],
                          })
                        : (0, r.jsx)(y, { guild: e }),
                    (0, r.jsx)(l.izJ, { className: O.divider }),
                    (0, r.jsx)(m.Z, { guild: e }),
                ],
            }),
        });
    };
