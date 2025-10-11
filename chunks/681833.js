n.d(t, { Z: () => f }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(987997),
    l = n(388032),
    c = n(627782),
    u = n(903163),
    d = n(845904);
function f(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "heading-md/bold",
                children: l.intl.string(l.t["48ywCg"]),
            }),
            (0, r.jsx)(o.LZC, { size: 4 }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: c.sectionDescription,
                children: l.intl.string(l.t.VWxmSk),
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
                                children: l.intl.string(l.t["48ywCg"]),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: c.description,
                                children: l.intl.format(l.t["/esXLi"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.Z, {
                        onClick: t,
                        text: l.intl.string(l.t.z5YcJy),
                    }),
                ],
            }),
        ],
    });
}
