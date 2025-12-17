n.d(t, { Z: () => f }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(159691),
    s = n(481060),
    l = n(388032),
    c = n(171573),
    u = n(703361),
    d = n(834300);
function f(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-md/bold",
                children: l.intl.string(l.t["KzCF/6"]),
            }),
            (0, r.jsx)(s.LZC, { size: 4 }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                className: c.sectionDescription,
                children: l.intl.string(l.t["3D7qCu"]),
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
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: c.header,
                                children: l.intl.string(l.t["KzCF/6"]),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: c.description,
                                children: l.intl.format(l.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.zxk, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: l.intl.string(l.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
