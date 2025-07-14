t.d(n, { Z: () => g });
var r = t(255367);
t(73800);
var i = t(793030),
    o = t(442837),
    a = t(755721),
    s = t(481060),
    l = t(678558),
    c = t(343649),
    u = t(430824),
    d = t(63063),
    m = t(317169),
    p = t(639660),
    _ = t(767218),
    f = t(981631),
    x = t(93841),
    v = t(388032),
    b = t(466649);
function g(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([u.Z], () => u.Z.getGuild(n)),
        { available: g, spent: h, total: j } = (0, m.Z)(n);
    if (null != t)
        return (0, r.jsxs)('div', {
            className: b.container,
            children: [
                (0, r.jsxs)('div', {
                    className: b.headerContainer,
                    children: [
                        (0, r.jsx)(i.xv, {
                            variant: 'eyebrow',
                            color: 'text-secondary',
                            children: v.intl.string(x.default.hjvcLC)
                        }),
                        (0, r.jsx)(i.xv, {
                            className: b.learnMore,
                            variant: 'text-xs/semibold',
                            children: v.intl.format(x.default.fXE30d, { helpDeskArticle: d.Z.getArticleURL(f.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: b.contentContainer,
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
                    className: b.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: f.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: f.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: a.Tt.CUSTOM,
                    size: a.Ph.LARGE,
                    intent: c.P.NONE,
                    icon: (0, r.jsx)(s.$Eu, {
                        className: b.boostButtonIcon,
                        size: 'sm',
                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                    })
                }),
                (0, r.jsx)(p.Z, { guildId: n })
            ]
        });
}
