var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(100527),
    s = n(906732),
    o = n(623624),
    c = n(372444),
    d = n(852679),
    u = n(926491),
    m = n(145499),
    h = n(424218),
    g = n(267642),
    x = n(63063),
    p = n(999382),
    f = n(981631),
    C = n(611480),
    v = n(388032),
    _ = n(64462);
let I = {
        page: f.ZY5.GUILD_SETTINGS,
        section: f.jXE.GUILD_SETTINGS_STICKERS,
        object: f.qAy.BOOSTING_BANNER
    },
    N = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, s.ZP)(),
            r = (0, g.vn)(t.id)[f.Eu4.TIER_1] - t.premiumSubscriberCount;
        return (0, i.jsxs)('div', {
            className: _.upsellContainer,
            children: [
                (0, i.jsx)(l.Heading, {
                    className: _.upsellHeader,
                    variant: 'heading-xl/semibold',
                    children: v.intl.string(v.t.hzCkys)
                }),
                (0, i.jsx)(l.Text, {
                    className: _.upsellDescription,
                    variant: 'text-md/normal',
                    children: v.intl.string(v.t.jcesAA)
                }),
                (0, i.jsxs)('div', {
                    className: _.upsellButtons,
                    children: [
                        (0, i.jsx)(l.Button, {
                            className: _.upsellButtonPrimary,
                            innerClassName: _.upsellButton,
                            color: l.Button.Colors.WHITE,
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: I,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: r
                                }),
                            children: v.intl.string(v.t.Q5dbTk)
                        }),
                        (0, i.jsx)(l.Button, {
                            innerClassName: _.upsellButton,
                            color: l.Button.Colors.WHITE,
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: f.jXE.GUILD_SETTINGS_STICKERS }
                                }),
                            children: v.intl.string(v.t.hvVgAQ)
                        })
                    ]
                })
            ]
        });
    },
    T = () =>
        (0, i.jsxs)(l.FormSection, {
            title: v.intl.string(v.t['9N2OWF']),
            children: [
                (0, i.jsx)(l.FormText, {
                    type: l.FormTextTypes.DESCRIPTION,
                    children: v.intl.format(v.t.hxLvi4, { fileSize: (0, h.IC)(C.Ht, { useKibibytes: !0 }) })
                }),
                (0, i.jsx)(l.FormText, {
                    type: l.FormTextTypes.DESCRIPTION,
                    children: v.intl.format(v.t.UBj0aW, { articleUrl: x.Z.getArticleURL(f.BhN.STICKERS_UPLOAD) })
                })
            ]
        }),
    j = (e) => {
        let t,
            n,
            r,
            { guild: l, guildStickers: a } = e,
            s = l.premiumTier,
            o = (0, g.Qi)(a, s),
            d = (0, g.FZ)(s, l.id),
            u = (0, g.A3)(s),
            m = a.length;
        return null == d || s === f.Eu4.TIER_3 || o > 0
            ? (0, i.jsx)(i.Fragment, {})
            : (m > u
                  ? ((t = v.intl.formatToPlainString(v.t.ZtAY1d, { level: d })), (n = v.intl.formatToPlainString(v.t['13hOWl'], { level: d })), (r = f.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = v.intl.string(v.t.zT9Sxc)),
                    (n = v.intl.formatToPlainString(v.t.YaW9wM, {
                        level: d,
                        numAdditional: (0, g.ig)(d)
                    })),
                    (r = f.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(c.Z, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: f.ZY5.GUILD_SETTINGS,
                      section: f.jXE.GUILD_SETTINGS_STICKERS,
                      object: r,
                      objectType: (0, g.ge)(d)
                  }
              }));
    };
t.Z = () => {
    let e = (0, r.e7)([p.Z], () => p.Z.getGuild()),
        t = (0, r.e7)(
            [u.Z],
            () => {
                var t;
                return null != e && null !== (t = u.Z.getStickersByGuildId(e.id)) && void 0 !== t ? t : [];
            },
            [e]
        ),
        { analyticsLocations: n } = (0, s.ZP)(a.Z.STICKERS);
    if (null == e) return null;
    let o = e.premiumTier !== f.Eu4.NONE || t.length > 0;
    return (0, i.jsx)(s.Gt, {
        value: n,
        children: (0, i.jsxs)(l.FormSection, {
            title: v.intl.string(v.t.R5nQkZ),
            tag: l.FormTitleTags.H1,
            children: [
                o
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(j, {
                                  guild: e,
                                  guildStickers: t
                              }),
                              (0, i.jsx)(T, {})
                          ]
                      })
                    : (0, i.jsx)(N, { guild: e }),
                (0, i.jsx)(l.FormDivider, { className: _.divider }),
                (0, i.jsx)(m.Z, { guild: e })
            ]
        })
    });
};
