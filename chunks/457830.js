n.d(t, { b: () => u, k: () => A });
var i,
    l = n(627968);
n(64700);
var a = n(110259),
    r = n(397927),
    s = n(139286),
    o = n(985018),
    d = n(510989),
    c = n(450603),
    u = (((i = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible"), (i.NOT_GUILD_MEMBER = "not_guild_member"), i);
let A = (e) => {
    let { errorType: t } = e;
    return (
        (0, s.A)({
            type: a.ImpressionTypes.PAGE,
            name: a.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: t },
        }),
        (0, l.jsx)("div", {
            className: d.Xd,
            children: (0, l.jsxs)("div", {
                className: d.lr,
                children: [
                    (0, l.jsx)("img", { src: c, alt: "", className: d.W9 }),
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-xl/extrabold",
                        className: d.mW,
                        children: "guild_not_eligible" === t ? o.intl.string(o.t.atZQVZ) : o.intl.string(o.t.gAdWBl),
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        className: d.LS,
                        children: "guild_not_eligible" === t ? o.intl.string(o.t.teWe5G) : o.intl.string(o.t["X/yMrK"]),
                    }),
                ],
            }),
        })
    );
};
