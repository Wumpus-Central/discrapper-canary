n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var o = n(793030),
    i = n(442837),
    l = n(755721),
    s = n(481060),
    a = n(678558),
    c = n(343649),
    u = n(430824),
    d = n(63063),
    p = n(317169),
    m = n(639660),
    f = n(767218),
    _ = n(981631),
    x = n(93841),
    g = n(388032),
    v = n(466649);
function b(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([u.Z], () => u.Z.getGuild(t)),
        { available: b, spent: j, total: E } = (0, p.Z)(t);
    if (null != n)
        return (0, r.jsxs)('div', {
            className: v.container,
            children: [
                (0, r.jsxs)('div', {
                    className: v.headerContainer,
                    children: [
                        (0, r.jsx)(o.xv, {
                            variant: 'eyebrow',
                            color: 'text-secondary',
                            children: g.intl.string(x.default.hjvcLC)
                        }),
                        (0, r.jsx)(o.xv, {
                            className: v.learnMore,
                            variant: 'text-xs/semibold',
                            children: g.intl.format(x.default.fXE30d, { helpDeskArticle: d.Z.getArticleURL(_.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: v.contentContainer,
                    children: [
                        (0, r.jsx)(f.Z, {
                            count: b,
                            type: f.b.AVAILABLE
                        }),
                        (0, r.jsx)(f.Z, {
                            count: j,
                            type: f.b.SPENT
                        }),
                        (0, r.jsx)(f.Z, {
                            count: E,
                            type: f.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(a.Z, {
                    className: v.boostButton,
                    guild: n,
                    analyticsLocation: {
                        page: _.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: _.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: l.Tt.CUSTOM,
                    size: l.Ph.LARGE,
                    intent: c.P.NONE,
                    icon: (0, r.jsx)(s.$Eu, {
                        className: v.boostButtonIcon,
                        size: 'sm',
                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                    })
                }),
                (0, r.jsx)(m.Z, { guildId: t })
            ]
        });
}
