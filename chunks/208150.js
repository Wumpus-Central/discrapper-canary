n.d(t, { Z: () => C });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(100527),
    l = n(906732),
    o = n(623624),
    c = n(372444),
    d = n(852679),
    u = n(926491),
    m = n(145499),
    p = n(424218),
    g = n(267642),
    h = n(63063),
    f = n(999382),
    b = n(981631),
    x = n(611480),
    j = n(388032),
    N = n(824480);
let v = {
        page: b.ZY5.GUILD_SETTINGS,
        section: b.jXE.GUILD_SETTINGS_STICKERS,
        object: b.qAy.BOOSTING_BANNER
    },
    _ = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, l.ZP)(),
            i = (0, g.vn)(t.id)[b.Eu4.TIER_1] - t.premiumSubscriberCount;
        return (0, r.jsxs)('div', {
            className: N.upsellContainer,
            children: [
                (0, r.jsx)(s.X6q, {
                    className: N.upsellHeader,
                    variant: 'heading-xl/semibold',
                    children: j.NW.string(j.t.hzCkys)
                }),
                (0, r.jsx)(s.Text, {
                    className: N.upsellDescription,
                    variant: 'text-md/normal',
                    children: j.NW.string(j.t.jcesAA)
                }),
                (0, r.jsxs)('div', {
                    className: N.upsellButtons,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            className: N.upsellButtonPrimary,
                            innerClassName: N.upsellButton,
                            color: s.zxk.Colors.WHITE,
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: v,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: i
                                }),
                            children: j.NW.string(j.t.Q5dbTk)
                        }),
                        (0, r.jsx)(s.zxk, {
                            innerClassName: N.upsellButton,
                            color: s.zxk.Colors.WHITE,
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: b.jXE.GUILD_SETTINGS_STICKERS }
                                }),
                            children: j.NW.string(j.t.hvVgAQ)
                        })
                    ]
                })
            ]
        });
    },
    O = () =>
        (0, r.jsxs)(s.hjN, {
            title: j.NW.string(j.t['9N2OWF']),
            children: [
                (0, r.jsx)(s.R94, {
                    type: s.geA.DESCRIPTION,
                    children: j.NW.format(j.t.hxLvi4, { fileSize: (0, p.IC)(x.Ht, { useKibibytes: !0 }) })
                }),
                (0, r.jsx)(s.R94, {
                    type: s.geA.DESCRIPTION,
                    children: j.NW.format(j.t.UBj0aW, { articleUrl: h.Z.getArticleURL(b.BhN.STICKERS_UPLOAD) })
                })
            ]
        }),
    y = (e) => {
        let t,
            n,
            i,
            { guild: s, guildStickers: a } = e,
            l = s.premiumTier,
            o = (0, g.Qi)(a, l),
            d = (0, g.FZ)(l, s.id),
            u = (0, g.A3)(l),
            m = a.length;
        return null == d || l === b.Eu4.TIER_3 || o > 0
            ? (0, r.jsx)(r.Fragment, {})
            : (m > u
                  ? ((t = j.NW.formatToPlainString(j.t.ZtAY1d, { level: d })), (n = j.NW.formatToPlainString(j.t['13hOWl'], { level: d })), (i = b.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = j.NW.string(j.t.zT9Sxc)),
                    (n = j.NW.formatToPlainString(j.t.YaW9wM, {
                        level: d,
                        numAdditional: (0, g.ig)(d)
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
                      objectType: (0, g.ge)(d)
                  }
              }));
    },
    C = () => {
        let e = (0, i.e7)([f.Z], () => f.Z.getGuild()),
            t = (0, i.e7)(
                [u.Z],
                () => {
                    var t;
                    return null != e && null !== (t = u.Z.getStickersByGuildId(e.id)) && void 0 !== t ? t : [];
                },
                [e]
            ),
            { analyticsLocations: n } = (0, l.ZP)(a.Z.STICKERS);
        if (null == e) return null;
        let o = e.premiumTier !== b.Eu4.NONE || t.length > 0;
        return (0, r.jsx)(l.Gt, {
            value: n,
            children: (0, r.jsxs)(s.hjN, {
                title: j.NW.string(j.t.R5nQkZ),
                tag: s.RB0.H1,
                children: [
                    o
                        ? (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(y, {
                                      guild: e,
                                      guildStickers: t
                                  }),
                                  (0, r.jsx)(O, {})
                              ]
                          })
                        : (0, r.jsx)(_, { guild: e }),
                    (0, r.jsx)(s.$i$, { className: N.divider }),
                    (0, r.jsx)(m.Z, { guild: e })
                ]
            })
        });
    };
