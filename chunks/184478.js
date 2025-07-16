n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(793030),
    o = n(442837),
    a = n(755721),
    s = n(481060),
    l = n(678558),
    c = n(343649),
    d = n(430824),
    u = n(63063),
    p = n(317169),
    m = n(639660),
    _ = n(767218),
    f = n(981631),
    x = n(93841),
    b = n(388032),
    v = n(466649);
function g(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([d.Z], () => d.Z.getGuild(t)),
        { available: g, spent: h, total: E } = (0, p.Z)(t);
    if (null != n)
        return (0, r.jsxs)('div', {
            className: v.container,
            children: [
                (0, r.jsxs)('div', {
                    className: v.headerContainer,
                    children: [
                        (0, r.jsx)(i.xv, {
                            variant: 'eyebrow',
                            color: 'text-secondary',
                            children: b.intl.string(x.default.hjvcLC)
                        }),
                        (0, r.jsx)(i.xv, {
                            className: v.learnMore,
                            variant: 'text-xs/semibold',
                            children: b.intl.format(x.default.fXE30d, { helpDeskArticle: u.Z.getArticleURL(f.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: v.contentContainer,
                    children: [
                        (0, r.jsx)(_.Z, {
                            count: g,
                            type: _.b.AVAILABLE
                        }),
                        (0, r.jsx)(_.Z, {
                            count: h,
                            type: _.b.SPENT
                        }),
                        (0, r.jsx)(_.Z, {
                            count: E,
                            type: _.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(l.Z, {
                    className: v.boostButton,
                    guild: n,
                    analyticsLocation: {
                        page: f.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: f.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: a.Tt.CUSTOM,
                    size: a.Ph.LARGE,
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
