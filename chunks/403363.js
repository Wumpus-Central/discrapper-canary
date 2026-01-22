n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(997509),
    a = n(529942),
    s = n(739455),
    o = n(652215),
    c = n(985018),
    u = n(721983),
    d = n(630907);

function f(e) {
    let { guildId: t } = e;
    return (0, r.jsx)("div", {
        className: u.t7,
        children: (0, r.jsxs)("div", {
            className: u.Zj,
            children: [
                (0, r.jsx)("img", {
                    src: d,
                    alt: "",
                }),
                (0, r.jsxs)("div", {
                    className: u.xw,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: c.intl.string(c.t["8gJGPs"]),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            className: u.G3,
                            children: c.intl.string(c.t.GpOWIi),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: u.__invalid_button,
                            children: (0, r.jsx)(l.Button, {
                                variant: "primary",
                                text: c.intl.string(c.t["I/XhUn"]),
                                onClick: () => {
                                    (0, a.rf)(t),
                                        i.A.open(t, o.BEX.ROLE_SUBSCRIPTIONS, void 0, o.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, s.Fx)(t);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
