i.d(t, { FortniteUpsellModal: () => h });
var e = i(951288);
i(647438);
var o = i(257465),
    s = i(103866),
    a = i(37148),
    c = i(481060),
    r = i(728345),
    l = i(768581),
    d = i(388032),
    x = i(463431);
function h(n) {
    let { onClose: t, transitionState: i } = n,
        { data: h } = (0, r.IX)("1402418703554842694"),
        { data: m } = (0, r.IX)("1417968406048673952"),
        j =
            null != h
                ? l.ZP.getApplicationIconURL({
                      id: h.id,
                      icon: h.icon,
                  })
                : null,
        b =
            null != m
                ? l.ZP.getApplicationIconURL({
                      id: m.id,
                      icon: m.icon,
                  })
                : null;
    return (0, e.jsxs)(o.IX, {
        size: "lg",
        transitionState: i,
        onClose: t,
        children: [
            (0, e.jsx)(a.x, {
                graphic: void 0,
                gradientColor: "purple",
                title: d.intl.string(d.t.xREzoa),
                titleTextVariant: "heading-xl/semibold",
                subtitle: d.intl.string(d.t.va4ap6),
                alignCenter: !0,
            }),
            (0, e.jsx)(s.f, {
                children: (0, e.jsxs)("div", {
                    className: x.body,
                    children: [
                        (0, e.jsxs)("div", {
                            className: x.container,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: x.text,
                                    children: [
                                        (0, e.jsx)("div", {
                                            className: x.iconContainer,
                                            children:
                                                null != j &&
                                                (0, e.jsx)("div", {
                                                    className: x.icon,
                                                    style: { backgroundImage: "url(".concat(j, ")") },
                                                }),
                                        }),
                                        (0, e.jsxs)("div", {
                                            children: [
                                                (0, e.jsx)(c.Text, {
                                                    color: "text-primary",
                                                    variant: "text-md/semibold",
                                                    children: d.intl.string(d.t["9g594e"]),
                                                }),
                                                (0, e.jsx)(c.Text, {
                                                    color: "text-secondary",
                                                    variant: "text-md/normal",
                                                    children: d.intl.string(d.t.Vye3DQ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsx)(c.zxk, {
                                    icon: () => (0, e.jsx)(c.Gr1, {}),
                                    iconPosition: "end",
                                    onClick: () => (location.href = "https://www.fortnite.com/download"),
                                    text: d.intl.string(d.t.ZDtJ19),
                                    variant: "secondary",
                                }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: x.container,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: x.text,
                                    children: [
                                        (0, e.jsx)("div", {
                                            className: x.iconContainer,
                                            children:
                                                null != b &&
                                                (0, e.jsx)("div", {
                                                    className: x.icon,
                                                    style: { backgroundImage: "url(".concat(b, ")") },
                                                }),
                                        }),
                                        (0, e.jsxs)("div", {
                                            children: [
                                                (0, e.jsx)(c.Text, {
                                                    color: "text-primary",
                                                    variant: "text-md/semibold",
                                                    children: d.intl.string(d.t.kOjtOD),
                                                }),
                                                (0, e.jsx)(c.Text, {
                                                    color: "text-secondary",
                                                    variant: "text-md/normal",
                                                    children: d.intl.string(d.t.X3zPLy),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsx)(c.zxk, {
                                    icon: () => (0, e.jsx)(c.Gr1, {}),
                                    iconPosition: "end",
                                    onClick: () =>
                                        (location.href = "https://www.nvidia.com/en-us/geforce-now/#product-matrix"),
                                    text: d.intl.string(d.t.ycbXPz),
                                    variant: "secondary",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
