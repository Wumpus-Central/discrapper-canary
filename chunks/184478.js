n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(793030),
    o = n(442837),
    l = n(755721),
    a = n(481060),
    s = n(678558),
    c = n(343649),
    u = n(430824),
    d = n(63063),
    p = n(317169),
    f = n(639660),
    m = n(767218),
    g = n(535396),
    v = n(981631),
    x = n(130231),
    _ = n(388032),
    b = n(741872);
function h(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        { available: h, spent: j, total: C } = (0, p.Z)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsxs)("div", {
                    className: b.headerContainer,
                    children: [
                        (0, r.jsx)(i.xvT, {
                            variant: "eyebrow",
                            color: "text-secondary",
                            children: _.intl.string(x.default.hjvcLO),
                        }),
                        (0, r.jsx)(i.xvT, {
                            className: b.learnMore,
                            variant: "text-xs/semibold",
                            children: _.intl.format(x.default.fXE30d, {
                                helpDeskArticle: d.Z.getArticleURL(v.BhN.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: b.contentContainer,
                    children: [
                        (0, r.jsx)(m.Z, {
                            count: h,
                            type: g.br.AVAILABLE,
                        }),
                        (0, r.jsx)(m.Z, {
                            count: j,
                            type: g.br.SPENT,
                        }),
                        (0, r.jsx)(m.Z, {
                            count: C,
                            type: g.br.TOTAL,
                        }),
                    ],
                }),
                (0, r.jsx)(s.Z, {
                    className: b.boostButton,
                    guild: n,
                    analyticsLocation: {
                        page: v.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: v.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: l.Tt.CUSTOM,
                    size: l.Ph.LARGE,
                    intent: c.P.NONE,
                    icon: (0, r.jsx)(a.Ucv, {
                        className: b.boostButtonIcon,
                        size: "sm",
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(f.Z, { guildId: t }),
            ],
        });
}
