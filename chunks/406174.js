n.d(t, { Z: () => f }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(388032),
    c = n(699533),
    u = n(903163),
    d = n(834300);
function f(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-md/bold",
                children: l.intl.string(l.t["KzCF//"]),
            }),
            (0, r.jsx)(s.LZC, { size: 4 }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                className: c.sectionDescription,
                children: l.intl.string(l.t["3D7qCg"]),
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsxs)("div", {
                className: a()(u.guildBoostingSubscriptionRow, c.card),
                children: [
                    (0, r.jsx)("img", {
                        src: d,
                        alt: "",
                        className: c.handImage,
                    }),
                    (0, r.jsxs)("div", {
                        className: c.textContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: "heading-xl/semibold",
                                className: c.header,
                                children: l.intl.string(l.t["KzCF//"]),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: c.description,
                                children: l.intl.format(l.t["m+pcOD"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.zx, {
                        color: o.zx.Colors.CUSTOM,
                        size: o.zx.Sizes.SMALL,
                        className: c.manageSubscriptionsButton,
                        onClick: t,
                        children: l.intl.string(l.t["3a8Xxs"]),
                    }),
                ],
            }),
        ],
    });
}
