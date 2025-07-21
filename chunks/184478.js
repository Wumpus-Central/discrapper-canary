n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var o = n(793030),
    i = n(442837),
    s = n(755721),
    a = n(481060),
    l = n(678558),
    c = n(343649),
    u = n(430824),
    d = n(63063),
    p = n(317169),
    m = n(639660),
    _ = n(767218),
    f = n(981631),
    x = n(93841),
    v = n(388032),
    g = n(466649);
function b(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([u.Z], () => u.Z.getGuild(t)),
        { available: b, spent: j, total: E } = (0, p.Z)(t);
    if (null != n)
        return (0, r.jsxs)('div', {
            className: g.container,
            children: [
                (0, r.jsxs)('div', {
                    className: g.headerContainer,
                    children: [
                        (0, r.jsx)(o.xv, {
                            variant: 'eyebrow',
                            color: 'text-secondary',
                            children: v.intl.string(x.default.hjvcLC)
                        }),
                        (0, r.jsx)(o.xv, {
                            className: g.learnMore,
                            variant: 'text-xs/semibold',
                            children: v.intl.format(x.default.fXE30d, { helpDeskArticle: d.Z.getArticleURL(f.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: g.contentContainer,
                    children: [
                        (0, r.jsx)(_.Z, {
                            count: b,
                            type: _.b.AVAILABLE
                        }),
                        (0, r.jsx)(_.Z, {
                            count: j,
                            type: _.b.SPENT
                        }),
                        (0, r.jsx)(_.Z, {
                            count: E,
                            type: _.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(l.Z, {
                    className: g.boostButton,
                    guild: n,
                    analyticsLocation: {
                        page: f.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: f.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: s.Tt.CUSTOM,
                    size: s.Ph.LARGE,
                    intent: c.P.NONE,
                    icon: (0, r.jsx)(a.$Eu, {
                        className: g.boostButtonIcon,
                        size: 'sm',
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                    })
                }),
                (0, r.jsx)(m.Z, { guildId: t })
            ]
        });
}
