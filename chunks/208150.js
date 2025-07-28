n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(755721),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(623624),
    d = n(372444),
    u = n(852679),
    m = n(317169),
    g = n(926491),
    p = n(145499),
    h = n(424218),
    f = n(267642),
    x = n(63063),
    b = n(999382),
    j = n(981631),
    v = n(611480),
    _ = n(388032),
    O = n(776739);
let y = {
        page: j.ZY5.GUILD_SETTINGS,
        section: j.jXE.GUILD_SETTINGS_STICKERS,
        object: j.qAy.BOOSTING_BANNER
    },
    C = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, o.ZP)(),
            i = (0, m.Z)(t.id).available,
            s = j.oCV[j.Eu4.TIER_1] - i;
        return (0, r.jsxs)('div', {
            className: O.upsellContainer,
            children: [
                (0, r.jsx)(a.X6q, {
                    className: O.upsellHeader,
                    variant: 'heading-xl/semibold',
                    children: _.intl.string(_.t.hzCkys)
                }),
                (0, r.jsx)(a.Text, {
                    className: O.upsellDescription,
                    variant: 'text-md/normal',
                    children: _.intl.string(_.t.jcesAA)
                }),
                (0, r.jsxs)('div', {
                    className: O.upsellButtons,
                    children: [
                        (0, r.jsx)(l.zx, {
                            className: O.upsellButtonPrimary,
                            innerClassName: O.upsellButton,
                            color: l.zx.Colors.WHITE,
                            onClick: () =>
                                (0, u.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: y,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: s
                                }),
                            children: _.intl.string(_.t.Q5dbTk)
                        }),
                        (0, r.jsx)(l.zx, {
                            innerClassName: O.upsellButton,
                            color: l.zx.Colors.WHITE,
                            onClick: () =>
                                (0, c.f)({
                                    guildId: t.id,
                                    location: { section: j.jXE.GUILD_SETTINGS_STICKERS }
                                }),
                            children: _.intl.string(_.t.hvVgAQ)
                        })
                    ]
                })
            ]
        });
    },
    N = () =>
        (0, r.jsxs)(a.hjN, {
            title: _.intl.string(_.t['9N2OWF']),
            children: [
                (0, r.jsx)(a.R94, {
                    type: a.geA.DESCRIPTION,
                    children: _.intl.format(_.t.hxLvi4, { fileSize: (0, h.IC)(v.Ht, { useKibibytes: !0 }) })
                }),
                (0, r.jsx)(a.R94, {
                    type: a.geA.DESCRIPTION,
                    children: _.intl.format(_.t.UBj0aW, { articleUrl: x.Z.getArticleURL(j.BhN.STICKERS_UPLOAD) })
                })
            ]
        }),
    I = (e) => {
        let t,
            n,
            i,
            { guild: l, guildStickers: a } = e,
            s = l.premiumTier,
            o = (0, f.Qi)(a, s),
            c = (0, f.FZ)(s),
            u = (0, f.A3)(s),
            m = a.length;
        return null == c || s === j.Eu4.TIER_3 || o > 0
            ? null
            : (m > u
                  ? ((t = _.intl.formatToPlainString(_.t.ZtAY1d, { level: c })), (n = _.intl.formatToPlainString(_.t['13hOWl'], { level: c })), (i = j.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = _.intl.string(_.t.zT9Sxc)),
                    (n = _.intl.formatToPlainString(_.t.YaW9wM, {
                        level: c,
                        numAdditional: (0, f.ig)(c)
                    })),
                    (i = j.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, r.jsx)(d.Z, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: j.ZY5.GUILD_SETTINGS,
                      section: j.jXE.GUILD_SETTINGS_STICKERS,
                      object: i,
                      objectType: (0, f.ge)(c)
                  }
              }));
    },
    E = () => {
        let e = (0, i.e7)([b.Z], () => b.Z.getGuild()),
            t = (0, i.e7)(
                [g.Z],
                () => {
                    var t;
                    return null != e && null != (t = g.Z.getStickersByGuildId(e.id)) ? t : [];
                },
                [e]
            ),
            { analyticsLocations: n } = (0, o.ZP)(s.Z.STICKERS);
        if (null == e) return null;
        let l = e.premiumTier !== j.Eu4.NONE || t.length > 0;
        return (0, r.jsx)(o.Gt, {
            value: n,
            children: (0, r.jsxs)(a.hjN, {
                title: _.intl.string(_.t.R5nQkZ),
                tag: a.RB0.H1,
                children: [
                    l
                        ? (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(I, {
                                      guild: e,
                                      guildStickers: t
                                  }),
                                  (0, r.jsx)(N, {})
                              ]
                          })
                        : (0, r.jsx)(C, { guild: e }),
                    (0, r.jsx)(a.$i$, { className: O.divider }),
                    (0, r.jsx)(p.Z, { guild: e })
                ]
            })
        });
    };
