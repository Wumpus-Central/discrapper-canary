n.d(t, { Z: () => f }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(987997),
    l = n(388032),
    c = n(911121),
    u = n(703361),
    d = n(845904);
function f(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "heading-md/bold",
                children: l.intl.string(l.t["48ywCu"]),
            }),
            (0, r.jsx)(o.LZC, { size: 4 }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: c.sectionDescription,
                children: l.intl.string(l.t.VWxmSo),
            }),
            (0, r.jsx)(o.LZC, { size: 24 }),
            (0, r.jsxs)("div", {
                className: a()(u.guildBoostingSubscriptionRow, c.card),
                children: [
                    (0, r.jsx)("img", {
                        src: d,
                        alt: "",
                        className: c.bannerImage,
                    }),
                    (0, r.jsxs)("div", {
                        className: c.textContainer,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                className: c.header,
                                children: l.intl.string(l.t["48ywCu"]),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: c.description,
                                children: l.intl.format(l.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.Z, {
                        onClick: t,
                        text: l.intl.string(l.t["z5YcJ+"]),
                    }),
                ],
            }),
        ],
    });
}
