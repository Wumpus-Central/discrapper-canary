n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(793030),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    a = n(678558),
    c = n(343649),
    u = n(430824),
    d = n(63063),
    p = n(317169),
    m = n(639660),
    g = n(767218),
    f = n(981631),
    v = n(989308),
    _ = n(388032),
    x = n(741872);
function h(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        { available: h, spent: b, total: C } = (0, p.Z)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: x.container,
            children: [
                (0, r.jsxs)("div", {
                    className: x.headerContainer,
                    children: [
                        (0, r.jsx)(i.xvT, {
                            variant: "eyebrow",
                            color: "text-secondary",
                            children: _.intl.string(v.default.hjvcLC),
                        }),
                        (0, r.jsx)(i.xvT, {
                            className: x.learnMore,
                            variant: "text-xs/semibold",
                            children: _.intl.format(v.default.fXE30d, {
                                helpDeskArticle: d.Z.getArticleURL(f.BhN.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: x.contentContainer,
                    children: [
                        (0, r.jsx)(g.Z, {
                            count: h,
                            type: g.b.AVAILABLE,
                        }),
                        (0, r.jsx)(g.Z, {
                            count: b,
                            type: g.b.SPENT,
                        }),
                        (0, r.jsx)(g.Z, {
                            count: C,
                            type: g.b.TOTAL,
                        }),
                    ],
                }),
                (0, r.jsx)(a.Z, {
                    className: x.boostButton,
                    guild: n,
                    analyticsLocation: {
                        page: f.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: f.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: s.Tt.CUSTOM,
                    size: s.Ph.LARGE,
                    intent: c.P.NONE,
                    icon: (0, r.jsx)(l.$Eu, {
                        className: x.boostButtonIcon,
                        size: "sm",
                        color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(m.Z, { guildId: t }),
            ],
        });
}
