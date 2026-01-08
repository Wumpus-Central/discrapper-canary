n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(793030),
    o = n(442837),
    l = n(755721),
    a = n(481060),
    s = n(678558),
    u = n(430824),
    c = n(63063),
    d = n(317169),
    f = n(639660),
    p = n(767218),
    m = n(535396),
    v = n(981631),
    g = n(556970),
    x = n(388032),
    b = n(303261);
function h(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        { available: h, spent: j, total: Z } = (0, d.Z)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsxs)("div", {
                    className: b.headerContainer,
                    children: [
                        (0, r.jsx)(i.xvT, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: x.intl.string(g.default.hjvcLO),
                        }),
                        (0, r.jsx)(i.xvT, {
                            className: b.learnMore,
                            variant: "text-xs/semibold",
                            children: x.intl.format(g.default.fXE30d, {
                                helpDeskArticle: c.Z.getArticleURL(v.BhN.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: b.contentContainer,
                    children: [
                        (0, r.jsx)(p.Z, {
                            count: h,
                            type: m.br.AVAILABLE,
                        }),
                        (0, r.jsx)(p.Z, {
                            count: j,
                            type: m.br.SPENT,
                        }),
                        (0, r.jsx)(p.Z, {
                            count: Z,
                            type: m.br.TOTAL,
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
