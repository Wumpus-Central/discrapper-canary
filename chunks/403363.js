n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(997509),
    a = n(529942),
    r = n(739455),
    o = n(652215),
    c = n(985018),
    d = n(649608),
    u = n(630907);
function h(e) {
    let { guildId: t } = e;
    return (0, i.jsx)("div", {
        className: d.t7,
        children: (0, i.jsxs)("div", {
            className: d.Zj,
            children: [
                (0, i.jsx)("img", { src: u, alt: "" }),
                (0, i.jsxs)("div", {
                    className: d.xw,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: c.intl.string(c.t["8gJGPs"]),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            className: d.G3,
                            children: c.intl.string(c.t.GpOWIi),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: d.__invalid_button,
                            children: (0, i.jsx)(l.Button, {
                                variant: "primary",
                                text: c.intl.string(c.t["I/XhUn"]),
                                onClick: () => {
                                    (0, a.rf)(t),
                                        s.A.open(t, o.BEX.ROLE_SUBSCRIPTIONS, void 0, o.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, r.Fx)(t);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
