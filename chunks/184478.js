n.d(t, { Z: () => j });
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
    f = n(317169),
    p = n(639660),
    m = n(767218),
    g = n(535396),
    v = n(981631),
    x = n(556970),
    b = n(388032),
    h = n(303261);
function j(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
        { available: j, spent: _, total: C } = (0, f.Z)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: h.container,
            children: [
                (0, r.jsxs)("div", {
                    className: h.headerContainer,
                    children: [
                        (0, r.jsx)(i.xvT, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: b.intl.string(x.default.hjvcLO),
                        }),
                        (0, r.jsx)(i.xvT, {
                            className: h.learnMore,
                            variant: "text-xs/semibold",
                            children: b.intl.format(x.default.fXE30d, {
                                helpDeskArticle: d.Z.getArticleURL(v.BhN.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: h.contentContainer,
                    children: [
                        (0, r.jsx)(m.Z, {
                            count: j,
                            type: g.br.AVAILABLE,
                        }),
                        (0, r.jsx)(m.Z, {
                            count: _,
                            type: g.br.SPENT,
                        }),
                        (0, r.jsx)(m.Z, {
                            count: C,
                            type: g.br.TOTAL,
                        }),
                    ],
                }),
                (0, r.jsx)(s.Z, {
                    className: h.boostButton,
                    guild: n,
                    analyticsLocation: {
                        page: v.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: v.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: o.Tt.CUSTOM,
                    size: o.Ph.LARGE,
                    intent: c.P.NONE,
                    icon: (0, r.jsx)(a.Ucv, {
                        className: h.boostButtonIcon,
                        size: "sm",
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(p.Z, { guildId: t }),
            ],
        });
}
