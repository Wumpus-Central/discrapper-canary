n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(793030),
    l = n(442837),
    o = n(755721),
    a = n(481060),
    s = n(678558),
    c = n(343649),
    u = n(430824),
    d = n(63063),
    p = n(317169),
    f = n(639660),
    m = n(767218),
    g = n(981631),
    v = n(501669),
    x = n(388032),
    _ = n(403373);
function b(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
        { available: b, spent: h, total: j } = (0, p.Z)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: _.container,
            children: [
                (0, r.jsxs)("div", {
                    className: _.headerContainer,
                    children: [
                        (0, r.jsx)(i.xvT, {
                            variant: "eyebrow",
                            color: "text-secondary",
                            children: x.intl.string(v.default.hjvcLO),
                        }),
                        (0, r.jsx)(i.xvT, {
                            className: _.learnMore,
                            variant: "text-xs/semibold",
                            children: x.intl.format(v.default.fXE30d, {
                                helpDeskArticle: d.Z.getArticleURL(g.BhN.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: _.contentContainer,
                    children: [
                        (0, r.jsx)(m.Z, {
                            count: b,
                            type: m.b.AVAILABLE,
                        }),
                        (0, r.jsx)(m.Z, {
                            count: h,
                            type: m.b.SPENT,
                        }),
                        (0, r.jsx)(m.Z, {
                            count: j,
                            type: m.b.TOTAL,
                        }),
                    ],
                }),
                (0, r.jsx)(s.Z, {
                    className: _.boostButton,
                    guild: n,
                    analyticsLocation: {
                        page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: g.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: o.Tt.CUSTOM,
                    size: o.Ph.LARGE,
                    intent: c.P.NONE,
                    icon: (0, r.jsx)(a.Ucv, {
                        className: _.boostButtonIcon,
                        size: "sm",
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(f.Z, { guildId: t }),
            ],
        });
}
