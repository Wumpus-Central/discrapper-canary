n.d(t, { b: () => A, k: () => h });
var i,
    r = n(627968);
n(64700);
var a = n(110259),
    l = n(534514),
    s = n(834730),
    o = n(139286),
    d = n(985018),
    u = n(640509),
    c = n(450603),
    A = (((i = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible"), (i.NOT_GUILD_MEMBER = "not_guild_member"), i);
let h = (e) => {
    let { errorType: t } = e;
    return (
        (0, o.A)({
            type: a.ImpressionTypes.PAGE,
            name: a.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: t },
        }),
        (0, r.jsx)("div", {
            className: u.Xd,
            children: (0, r.jsxs)("div", {
                className: u.lr,
                children: [
                    (0, r.jsx)("img", { src: c, alt: "", className: u.W9 }),
                    (0, r.jsx)(l.D, {
                        variant: "heading-xl/extrabold",
                        className: u.mW,
                        children: "guild_not_eligible" === t ? d.intl.string(d.t.atZQVZ) : d.intl.string(d.t.gAdWBl),
                    }),
                    (0, r.jsx)(s.E, {
                        variant: "text-md/normal",
                        className: u.LS,
                        children: "guild_not_eligible" === t ? d.intl.string(d.t.teWe5G) : d.intl.string(d.t["X/yMrK"]),
                    }),
                ],
            }),
        })
    );
};
