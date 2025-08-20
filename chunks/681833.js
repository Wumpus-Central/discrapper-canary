n.d(t, { Z: () => _ }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(987997),
    c = n(388032),
    u = n(627782),
    d = n(903163),
    f = n(845904);
function _(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-md/bold",
                children: c.intl.string(c.t["48ywCg"]),
            }),
            (0, r.jsx)(s.LZC, { size: 4 }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                className: u.sectionDescription,
                children: c.intl.string(c.t.VWxmSk),
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsxs)("div", {
                className: a()(d.guildBoostingSubscriptionRow, u.card),
                children: [
                    (0, r.jsx)("img", {
                        src: f,
                        alt: "",
                        className: u.bannerImage,
                    }),
                    (0, r.jsxs)("div", {
                        className: u.textContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: "heading-xl/semibold",
                                className: u.header,
                                children: c.intl.string(c.t["48ywCg"]),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: u.description,
                                children: c.intl.format(c.t["/esXLi"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.Z, {
                        color: o.zx.Colors.BRAND,
                        onClick: t,
                        children: c.intl.string(c.t.z5YcJy),
                    }),
                ],
            }),
        ],
    });
}
