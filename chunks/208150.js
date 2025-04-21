n.d(t, { Z: () => I });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    s = n(100527),
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
    _ = n(388032),
    v = n(776739);
let O = {
        page: b.ZY5.GUILD_SETTINGS,
        section: b.jXE.GUILD_SETTINGS_STICKERS,
        object: b.qAy.BOOSTING_BANNER
    },
    C = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, a.ZP)(),
            i = (0, u.Z)(t.id).available,
            s = b.oCV[b.Eu4.TIER_1] - i;
        return (0, r.jsxs)('div', {
            className: v.upsellContainer,
            children: [
                (0, r.jsx)(l.X6q, {
                    className: v.upsellHeader,
                    variant: 'heading-xl/semibold',
                    children: _.intl.string(_.t.hzCkys)
                }),
                (0, r.jsx)(l.Text, {
                    className: v.upsellDescription,
                    variant: 'text-md/normal',
                    children: _.intl.string(_.t.jcesAA)
                }),
                (0, r.jsxs)('div', {
                    className: v.upsellButtons,
                    children: [
                        (0, r.jsx)(l.zxk, {
                            className: v.upsellButtonPrimary,
                            innerClassName: v.upsellButton,
                            color: l.zxk.Colors.WHITE,
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: O,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: s
                                }),
                            children: _.intl.string(_.t.Q5dbTk)
                        }),
                        (0, r.jsx)(l.zxk, {
                            innerClassName: v.upsellButton,
                            color: l.zxk.Colors.WHITE,
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: b.jXE.GUILD_SETTINGS_STICKERS }
                                }),
                            children: _.intl.string(_.t.hvVgAQ)
                        })
                    ]
                })
            ]
        });
    },
    y = () =>
        (0, r.jsxs)(l.hjN, {
            title: _.intl.string(_.t['9N2OWF']),
            children: [
                (0, r.jsx)(l.R94, {
                    type: l.geA.DESCRIPTION,
                    children: _.intl.format(_.t.hxLvi4, { fileSize: (0, p.IC)(j.Ht, { useKibibytes: !0 }) })
                }),
                (0, r.jsx)(l.R94, {
                    type: l.geA.DESCRIPTION,
                    children: _.intl.format(_.t.UBj0aW, { articleUrl: f.Z.getArticleURL(b.BhN.STICKERS_UPLOAD) })
                })
            ]
        }),
    N = (e) => {
        let t,
            n,
            i,
            { guild: l, guildStickers: s } = e,
            a = l.premiumTier,
            o = (0, h.Qi)(s, a),
            d = (0, h.FZ)(a),
            u = (0, h.A3)(a),
            m = s.length;
        return null == d || a === b.Eu4.TIER_3 || o > 0
            ? null
            : (m > u
                  ? ((t = _.intl.formatToPlainString(_.t.ZtAY1d, { level: d })), (n = _.intl.formatToPlainString(_.t['13hOWl'], { level: d })), (i = b.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = _.intl.string(_.t.zT9Sxc)),
                    (n = _.intl.formatToPlainString(_.t.YaW9wM, {
                        level: d,
                        numAdditional: (0, h.ig)(d)
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
            { analyticsLocations: n } = (0, a.ZP)(s.Z.STICKERS);
        if (null == e) return null;
        let o = e.premiumTier !== b.Eu4.NONE || t.length > 0;
        return (0, r.jsx)(a.Gt, {
            value: n,
            children: (0, r.jsxs)(l.hjN, {
                title: _.intl.string(_.t.R5nQkZ),
                tag: l.RB0.H1,
                children: [
                    o
                        ? (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(N, {
                                      guild: e,
                                      guildStickers: t
                                  }),
                                  (0, r.jsx)(y, {})
                              ]
                          })
                        : (0, r.jsx)(C, { guild: e }),
                    (0, r.jsx)(l.$i$, { className: v.divider }),
                    (0, r.jsx)(g.Z, { guild: e })
                ]
            })
        });
    };
