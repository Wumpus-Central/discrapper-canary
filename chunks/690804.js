i.d(t, { FortniteUpsellModal: () => d });
var e = i(951288);
i(647438);
var o = i(793030),
    s = i(481060),
    a = i(728345),
    c = i(768581),
    r = i(388032),
    l = i(625771);
function d(n) {
    let { onClose: t, transitionState: i } = n,
        { data: d } = (0, a.IX)("1402418703554842694"),
        { data: x } = (0, a.IX)("1417968406048673952"),
        h =
            null != d
                ? c.ZP.getApplicationIconURL({
                      id: d.id,
                      icon: d.icon,
                  })
                : null,
        m =
            null != x
                ? c.ZP.getApplicationIconURL({
                      id: x.id,
                      icon: x.icon,
                  })
                : null;
    return (0, e.jsxs)(o.IX, {
        size: "lg",
        transitionState: i,
        onClose: t,
        children: [
            (0, e.jsx)(o.xBx, {
                graphic: void 0,
                gradientColor: "purple",
                title: r.intl.string(r.t.xREzoa),
                titleTextVariant: "heading-xl/semibold",
                subtitle: r.intl.string(r.t.va4ap6),
                alignCenter: !0,
            }),
            (0, e.jsx)(o.fef, {
                children: (0, e.jsxs)("div", {
                    className: l.body,
                    children: [
                        (0, e.jsxs)("div", {
                            className: l.container,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: l.text,
                                    children: [
                                        (0, e.jsx)("div", {
                                            className: l.iconContainer,
                                            children:
                                                null != h &&
                                                (0, e.jsx)("div", {
                                                    className: l.icon,
                                                    style: { backgroundImage: "url(".concat(h, ")") },
                                                }),
                                        }),
                                        (0, e.jsxs)("div", {
                                            children: [
                                                (0, e.jsx)(s.Text, {
                                                    color: "text-primary",
                                                    variant: "text-md/semibold",
                                                    children: r.intl.string(r.t["9g594e"]),
                                                }),
                                                (0, e.jsx)(s.Text, {
                                                    color: "text-secondary",
                                                    variant: "text-md/normal",
                                                    children: r.intl.string(r.t.Vye3DQ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsx)(s.zxk, {
                                    icon: () => (0, e.jsx)(s.Gr1, {}),
                                    iconPosition: "end",
                                    onClick: () => (location.href = "https://fortnitetrial.fortnite.com/"),
                                    text: r.intl.string(r.t.ZDtJ19),
                                    variant: "secondary",
                                }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: l.container,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: l.text,
                                    children: [
                                        (0, e.jsx)("div", {
                                            className: l.iconContainer,
                                            children:
                                                null != m &&
                                                (0, e.jsx)("div", {
                                                    className: l.icon,
                                                    style: { backgroundImage: "url(".concat(m, ")") },
                                                }),
                                        }),
                                        (0, e.jsxs)("div", {
                                            children: [
                                                (0, e.jsx)(s.Text, {
                                                    color: "text-primary",
                                                    variant: "text-md/semibold",
                                                    children: r.intl.string(r.t.kOjtOD),
                                                }),
                                                (0, e.jsx)(s.Text, {
                                                    color: "text-secondary",
                                                    variant: "text-md/normal",
                                                    children: r.intl.string(r.t.X3zPLy),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsx)(s.zxk, {
                                    icon: () => (0, e.jsx)(s.Gr1, {}),
                                    iconPosition: "end",
                                    onClick: () =>
                                        (location.href =
                                            "https://www.nvidia.com/en-us/geforce-now/discord?ncid=partn-874834"),
                                    text: r.intl.string(r.t.ycbXPz),
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
