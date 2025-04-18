n.d(t, { Z: () => I });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    l = n(100527),
    a = n(906732),
    o = n(623624),
    c = n(372444),
    d = n(852679),
    u = n(317169),
    m = n(926491),
    g = n(145499),
    p = n(424218),
    h = n(267642),
    f = n(63063),
    x = n(999382),
    b = n(981631),
    j = n(611480),
    N = n(388032),
    _ = n(776739);
let v = {
        page: b.ZY5.GUILD_SETTINGS,
        section: b.jXE.GUILD_SETTINGS_STICKERS,
        object: b.qAy.BOOSTING_BANNER
    },
    O = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, a.ZP)(),
            i = (0, u.Z)(t.id).available,
            l = b.oCV[b.Eu4.TIER_1] - i;
        return (0, r.jsxs)('div', {
            className: _.upsellContainer,
            children: [
                (0, r.jsx)(s.X6q, {
                    className: _.upsellHeader,
                    variant: 'heading-xl/semibold',
                    children: N.NW.string(N.t.hzCkys)
                }),
                (0, r.jsx)(s.Text, {
                    className: _.upsellDescription,
                    variant: 'text-md/normal',
                    children: N.NW.string(N.t.jcesAA)
                }),
                (0, r.jsxs)('div', {
                    className: _.upsellButtons,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            className: _.upsellButtonPrimary,
                            innerClassName: _.upsellButton,
                            color: s.zxk.Colors.WHITE,
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: v,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: l
                                }),
                            children: N.NW.string(N.t.Q5dbTk)
                        }),
                        (0, r.jsx)(s.zxk, {
                            innerClassName: _.upsellButton,
                            color: s.zxk.Colors.WHITE,
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: b.jXE.GUILD_SETTINGS_STICKERS }
                                }),
                            children: N.NW.string(N.t.hvVgAQ)
                        })
                    ]
                })
            ]
        });
    },
    C = () =>
        (0, r.jsxs)(s.hjN, {
            title: N.NW.string(N.t['9N2OWF']),
            children: [
                (0, r.jsx)(s.R94, {
                    type: s.geA.DESCRIPTION,
                    children: N.NW.format(N.t.hxLvi4, { fileSize: (0, p.IC)(j.Ht, { useKibibytes: !0 }) })
                }),
                (0, r.jsx)(s.R94, {
                    type: s.geA.DESCRIPTION,
                    children: N.NW.format(N.t.UBj0aW, { articleUrl: f.Z.getArticleURL(b.BhN.STICKERS_UPLOAD) })
                })
            ]
        }),
    y = (e) => {
        let t,
            n,
            i,
            { guild: s, guildStickers: l } = e,
            a = s.premiumTier,
            o = (0, h.Qi)(l, a),
            d = (0, h.FZ)(a),
            u = (0, h.A3)(a),
            m = l.length;
        return null == d || a === b.Eu4.TIER_3 || o > 0
            ? null
            : (m > u
                  ? ((t = N.NW.formatToPlainString(N.t.ZtAY1d, { level: d })), (n = N.NW.formatToPlainString(N.t['13hOWl'], { level: d })), (i = b.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = N.NW.string(N.t.zT9Sxc)),
                    (n = N.NW.formatToPlainString(N.t.YaW9wM, {
                        level: d,
                        numAdditional: (0, h.ig)(d)
                    })),
                    (i = b.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(c.Z, {
                  header: t,
                  text: n,
                  guild: s,
                  analyticsLocation: {
                      page: b.ZY5.GUILD_SETTINGS,
                      section: b.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, h.ge)(d)
                  }
              }));
    },
    I = () => {
        let e = (0, i.e7)([x.Z], () => x.Z.getGuild()),
            t = (0, i.e7)(
                [m.Z],
                () => {
                    var t;
                    return null != e && null != (t = m.Z.getStickersByGuildId(e.id)) ? t : [];
                },
                [e]
            ),
            { analyticsLocations: n } = (0, a.ZP)(l.Z.STICKERS);
        if (null == e) return null;
        let o = e.premiumTier !== b.Eu4.NONE || t.length > 0;
        return (0, r.jsx)(a.Gt, {
            value: n,
            children: (0, r.jsxs)(s.hjN, {
                title: N.NW.string(N.t.R5nQkZ),
                tag: s.RB0.H1,
                children: [
                    o
                        ? (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(y, {
                                      guild: e,
                                      guildStickers: t
                                  }),
                                  (0, r.jsx)(C, {})
                              ]
                          })
                        : (0, r.jsx)(O, { guild: e }),
                    (0, r.jsx)(s.$i$, { className: _.divider }),
                    (0, r.jsx)(g.Z, { guild: e })
                ]
            })
        });
    };
