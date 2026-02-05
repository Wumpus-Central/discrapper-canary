"use strict";
n.d(t, { I: () => m });
var i = n(627968),
    s = n(397927),
    l = n(975571),
    r = n(627011),
    a = n(72507),
    o = n(41558),
    d = n(652215),
    c = n(985018),
    u = n(815873);
function m(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsxs)("div", {
                className: u.fi,
                children: [
                    (0, i.jsxs)(s.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: u.DD,
                        children: [c.intl.string(c.t.tzGY0q), (0, i.jsx)(r.bX, { guild: t })],
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.Qq,
                        children: c.intl.string(c.t.F7bbrh),
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.Qq,
                        children: c.intl.format(c.t.ZYA9PV, {
                            articleURL: l.A.getArticleURL(d.MVz.GUILD_INVITE_SPLASH),
                        }),
                    }),
                    (0, i.jsx)(a.l, { guild: t, canManageGuild: n, buttonClassName: u.x6 }),
                ],
            }),
            (0, i.jsx)("div", { className: u.fi, children: (0, i.jsx)(o.S, { guild: t, canManageGuild: n }) }),
        ],
    });
}
