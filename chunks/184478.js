t.d(n, { Z: () => g });
var r = t(255367);
t(73800);
var i = t(793030),
    o = t(442837),
    a = t(755721),
    s = t(481060),
    l = t(678558),
    c = t(343649),
    d = t(430824),
    u = t(63063),
    m = t(317169),
    p = t(639660),
    _ = t(767218),
    f = t(981631),
    x = t(93841),
    b = t(388032),
    v = t(466649);
function g(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([d.Z], () => d.Z.getGuild(n)),
        { available: g, spent: h, total: j } = (0, m.Z)(n);
    if (null != t)
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
                            count: j,
                            type: _.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(l.Z, {
                    className: v.boostButton,
                    guild: t,
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
                (0, r.jsx)(p.Z, { guildId: n })
            ]
        });
}
