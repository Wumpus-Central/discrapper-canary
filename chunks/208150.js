n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(100527),
    a = n(906732),
    o = n(623624),
    c = n(372444),
    d = n(852679),
    u = n(926491),
    m = n(145499),
    h = n(424218),
    g = n(267642),
    x = n(63063),
    p = n(999382),
    _ = n(981631),
    C = n(611480),
    f = n(388032),
    v = n(734496);
let N = {
        page: _.ZY5.GUILD_SETTINGS,
        section: _.jXE.GUILD_SETTINGS_STICKERS,
        object: _.qAy.BOOSTING_BANNER
    },
    j = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, a.ZP)(),
            r = (0, g.vn)(t.id)[_.Eu4.TIER_1] - t.premiumSubscriberCount;
        return (0, i.jsxs)('div', {
            className: v.upsellContainer,
            children: [
                (0, i.jsx)(l.X6q, {
                    className: v.upsellHeader,
                    variant: 'heading-xl/semibold',
                    children: f.intl.string(f.t.hzCkys)
                }),
                (0, i.jsx)(l.Text, {
                    className: v.upsellDescription,
                    variant: 'text-md/normal',
                    children: f.intl.string(f.t.jcesAA)
                }),
                (0, i.jsxs)('div', {
                    className: v.upsellButtons,
                    children: [
                        (0, i.jsx)(l.zxk, {
                            className: v.upsellButtonPrimary,
                            innerClassName: v.upsellButton,
                            color: l.zxk.Colors.WHITE,
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: N,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: r
                                }),
                            children: f.intl.string(f.t.Q5dbTk)
                        }),
                        (0, i.jsx)(l.zxk, {
                            innerClassName: v.upsellButton,
                            color: l.zxk.Colors.WHITE,
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: _.jXE.GUILD_SETTINGS_STICKERS }
                                }),
                            children: f.intl.string(f.t.hvVgAQ)
                        })
                    ]
                })
            ]
        });
    },
    I = () =>
        (0, i.jsxs)(l.hjN, {
            title: f.intl.string(f.t['9N2OWF']),
            children: [
                (0, i.jsx)(l.R94, {
                    type: l.geA.DESCRIPTION,
                    children: f.intl.format(f.t.hxLvi4, { fileSize: (0, h.IC)(C.Ht, { useKibibytes: !0 }) })
                }),
                (0, i.jsx)(l.R94, {
                    type: l.geA.DESCRIPTION,
                    children: f.intl.format(f.t.UBj0aW, { articleUrl: x.Z.getArticleURL(_.BhN.STICKERS_UPLOAD) })
                })
            ]
        }),
    E = (e) => {
        let t,
            n,
            r,
            { guild: l, guildStickers: s } = e,
            a = l.premiumTier,
            o = (0, g.Qi)(s, a),
            d = (0, g.FZ)(a, l.id),
            u = (0, g.A3)(a),
            m = s.length;
        return null == d || a === _.Eu4.TIER_3 || o > 0
            ? (0, i.jsx)(i.Fragment, {})
            : (m > u
                  ? ((t = f.intl.formatToPlainString(f.t.ZtAY1d, { level: d })), (n = f.intl.formatToPlainString(f.t['13hOWl'], { level: d })), (r = _.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = f.intl.string(f.t.zT9Sxc)),
                    (n = f.intl.formatToPlainString(f.t.YaW9wM, {
                        level: d,
                        numAdditional: (0, g.ig)(d)
                    })),
                    (r = _.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(c.Z, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: _.ZY5.GUILD_SETTINGS,
                      section: _.jXE.GUILD_SETTINGS_STICKERS,
                      object: r,
                      objectType: (0, g.ge)(d)
                  }
              }));
    },
    b = () => {
        let e = (0, r.e7)([p.Z], () => p.Z.getGuild()),
            t = (0, r.e7)(
                [u.Z],
                () => {
                    var t;
                    return null != e && null !== (t = u.Z.getStickersByGuildId(e.id)) && void 0 !== t ? t : [];
                },
                [e]
            ),
            { analyticsLocations: n } = (0, a.ZP)(s.Z.STICKERS);
        if (null == e) return null;
        let o = e.premiumTier !== _.Eu4.NONE || t.length > 0;
        return (0, i.jsx)(a.Gt, {
            value: n,
            children: (0, i.jsxs)(l.hjN, {
                title: f.intl.string(f.t.R5nQkZ),
                tag: l.RB0.H1,
                children: [
                    o
                        ? (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(E, {
                                      guild: e,
                                      guildStickers: t
                                  }),
                                  (0, i.jsx)(I, {})
                              ]
                          })
                        : (0, i.jsx)(j, { guild: e }),
                    (0, i.jsx)(l.$i$, { className: v.divider }),
                    (0, i.jsx)(m.Z, { guild: e })
                ]
            })
        });
    };
