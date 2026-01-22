n.d(t, {
    b: () => d,
    k: () => p,
});
var r,
    i = n(627968);
n(64700);
var l = n(110259),
    a = n(397927),
    s = n(139286),
    o = n(985018),
    c = n(9476),
    u = n(450603),
    d = (((r = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible"), (r.NOT_GUILD_MEMBER = "not_guild_member"), r);
let p = (e) => {
    let { errorType: t } = e;
    return (
        (0, s.A)({
            type: l.ImpressionTypes.PAGE,
            name: l.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: t },
        }),
        (0, i.jsx)("div", {
            className: c.Xd,
            children: (0, i.jsxs)("div", {
                className: c.lr,
                children: [
                    (0, i.jsx)("img", {
                        src: u,
                        alt: "",
                        className: c.W9,
                    }),
                    (0, i.jsx)(a.Heading, {
                        variant: "heading-xl/extrabold",
                        className: c.mW,
                        children: "guild_not_eligible" === t ? o.intl.string(o.t.atZQVZ) : o.intl.string(o.t.gAdWBl),
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: c.LS,
                        children: "guild_not_eligible" === t ? o.intl.string(o.t.teWe5G) : o.intl.string(o.t["X/yMrK"]),
                    }),
                ],
            }),
        })
    );
};
