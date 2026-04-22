n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(534514),
    s = n(834730),
    a = n(821609),
    r = n(997509),
    o = n(529942),
    d = n(739455),
    c = n(652215),
    u = n(985018),
    h = n(328312),
    A = n(630907);
function _(e) {
    let { guildId: t } = e;
    return (0, i.jsx)("div", {
        className: h.t7,
        children: (0, i.jsxs)("div", {
            className: h.Zj,
            children: [
                (0, i.jsx)("img", { src: A, alt: "" }),
                (0, i.jsxs)("div", {
                    className: h.xw,
                    children: [
                        (0, i.jsx)(l.D, { variant: "heading-xl/semibold", children: u.intl.string(u.t["8gJGPs"]) }),
                        (0, i.jsx)(s.E, {
                            variant: "text-sm/normal",
                            className: h.G3,
                            children: u.intl.string(u.t.GpOWIi),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: h.__invalid_button,
                            children: (0, i.jsx)(a.$, {
                                variant: "primary",
                                text: u.intl.string(u.t["I/XhUn"]),
                                onClick: () => {
                                    (0, o.rf)(t),
                                        r.A.open(t, c.BEX.ROLE_SUBSCRIPTIONS, void 0, c.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, d.Fx)(t);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
