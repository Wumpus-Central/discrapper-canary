n.d(t, { A: () => g });
var r = n(54381),
    i = n(481060),
    l = n(63063),
    s = n(937222),
    a = n(269464),
    o = n(295051),
    c = n(981631),
    u = n(388032),
    d = n(64929);
function g(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsxs)("div", {
                className: d.column,
                children: [
                    (0, r.jsxs)(i.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: d.title,
                        children: [u.intl.string(u.t["0r0AzF"]), (0, r.jsx)(o.zA, { guild: t })],
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: d.text,
                        children: u.intl.string(u.t.UfqmIb),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: d.text,
                        children: u.intl.format(u.t.vBcWUv, {
                            articleURL: l.Z.getArticleURL(c.BhN.GUILD_BANNER_SPLASH),
                        }),
                    }),
                    (0, r.jsx)(s.F, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: d.button,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.column,
                children: (0, r.jsx)(a.O, {
                    guild: t,
                    canManageGuild: n,
                }),
            }),
        ],
    });
}
