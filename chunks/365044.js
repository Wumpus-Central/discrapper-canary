n.d(t, { I: () => g });
var i = n(627968),
    l = n(534514),
    s = n(834730),
    r = n(975571),
    a = n(627011),
    o = n(72507),
    d = n(41558),
    c = n(652215),
    u = n(985018),
    m = n(475842);
function g(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsxs)("div", {
                className: m.fi,
                children: [
                    (0, i.jsxs)(l.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: m.DD,
                        children: [u.intl.string(u.t.tzGY0q), (0, i.jsx)(a.bX, { guild: t })],
                    }),
                    (0, i.jsx)(s.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: m.Qq,
                        children: u.intl.string(u.t.F7bbrh),
                    }),
                    (0, i.jsx)(s.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: m.Qq,
                        children: u.intl.format(u.t.ZYA9PV, {
                            articleURL: r.A.getArticleURL(c.MVz.GUILD_INVITE_SPLASH),
                        }),
                    }),
                    (0, i.jsx)(o.l, { guild: t, canManageGuild: n, buttonClassName: m.x6 }),
                ],
            }),
            (0, i.jsx)("div", { className: m.fi, children: (0, i.jsx)(d.S, { guild: t, canManageGuild: n }) }),
        ],
    });
}
