n.d(t, { A: () => g });
var r = n(54381),
    i = n(481060),
    l = n(63063),
    a = n(937222),
    s = n(269464),
    o = n(295051),
    c = n(981631),
    d = n(388032),
    u = n(682310);
function g(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsxs)("div", {
                className: u.column,
                children: [
                    (0, r.jsxs)(i.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        className: u.title,
                        children: [d.intl.string(d.t["0r0AzF"]), (0, r.jsx)(o.zA, { guild: t })],
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.text,
                        children: d.intl.string(d.t.UfqmIb),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.text,
                        children: d.intl.format(d.t.vBcWUv, {
                            articleURL: l.Z.getArticleURL(c.BhN.GUILD_BANNER_SPLASH),
                        }),
                    }),
                    (0, r.jsx)(a.F, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: u.button,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.column,
                children: (0, r.jsx)(s.O, {
                    guild: t,
                    canManageGuild: n,
                }),
            }),
        ],
    });
}
