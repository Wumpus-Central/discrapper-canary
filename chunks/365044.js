n.d(t, { I: () => f });
var r = n(627968),
    i = n(397927),
    l = n(975571),
    s = n(627011),
    a = n(72507),
    c = n(41558),
    o = n(652215),
    d = n(985018),
    u = n(815873);
function f(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)("div", {
        className: u.kL,
        children: [
            (0, r.jsxs)("div", {
                className: u.fi,
                children: [
                    (0, r.jsxs)(i.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: u.DD,
                        children: [d.intl.string(d.t.tzGY0q), (0, r.jsx)(s.bX, { guild: t })],
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.Qq,
                        children: d.intl.string(d.t.F7bbrh),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.Qq,
                        children: d.intl.format(d.t.ZYA9PV, {
                            articleURL: l.A.getArticleURL(o.MVz.GUILD_INVITE_SPLASH),
                        }),
                    }),
                    (0, r.jsx)(a.l, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: u.x6,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.fi,
                children: (0, r.jsx)(c.S, {
                    guild: t,
                    canManageGuild: n,
                }),
            }),
        ],
    });
}
