t.d(n, { Z: () => v });
var r = t(255367);
t(73800);
var i = t(793030),
    o = t(442837),
    a = t(481060),
    s = t(678558),
    l = t(343649),
    c = t(430824),
    d = t(63063),
    u = t(317169),
    m = t(639660),
    p = t(767218),
    _ = t(981631),
    f = t(93841),
    x = t(388032),
    b = t(466649);
function v(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([c.Z], () => c.Z.getGuild(n)),
        { available: v, spent: g, total: h } = (0, u.Z)(n);
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
                            children: x.intl.string(f.default.hjvcLC)
                        }),
                        (0, r.jsx)(i.xv, {
                            className: b.learnMore,
                            variant: 'text-xs/semibold',
                            children: x.intl.format(f.default.fXE30d, { helpDeskArticle: d.Z.getArticleURL(_.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: b.contentContainer,
                    children: [
                        (0, r.jsx)(p.Z, {
                            count: v,
                            type: p.b.AVAILABLE
                        }),
                        (0, r.jsx)(p.Z, {
                            count: g,
                            type: p.b.SPENT
                        }),
                        (0, r.jsx)(p.Z, {
                            count: h,
                            type: p.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(s.Z, {
                    className: b.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: _.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: _.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: a.Ttl.CUSTOM,
                    size: a.PhG.LARGE,
                    intent: l.P.NONE,
                    icon: (0, r.jsx)(a.$Eu, {
                        className: b.boostButtonIcon,
                        size: 'sm',
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                    })
                }),
                (0, r.jsx)(m.Z, { guildId: n })
            ]
        });
}
