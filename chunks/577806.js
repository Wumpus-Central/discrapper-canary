t.d(n, { _: () => h });
var l = t(627968),
    r = t(821609),
    i = t(331322),
    s = t(534514),
    a = t(834730),
    o = t(827734),
    c = t(933297);
function d(e) {
    let { decoration: n } = e,
        { type: t, id: i, ...s } = n;
    return (0, l.jsx)(r.$, { variant: "secondary", ...s });
}
function u(e) {
    let { decoration: n } = e,
        t = n.button;
    return (0, l.jsx)(t, {});
}
function x(e) {
    let { decoration: n } = e;
    return (0, l.jsx)(i.B, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: n.buttons.map((e) => {
            switch (e.type) {
                case c.UV.BUTTON:
                    return (0, l.jsx)(d, { decoration: e }, e.id);
                case c.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, l.jsx)(u, { decoration: e }, e.id);
            }
        }),
    });
}
function j(e) {
    let { decoration: n } = e;
    return null == n ? null : n.type === c.WX.BUTTON_GROUP ? (0, l.jsx)(x, { decoration: n }) : void 0;
}
function h(e) {
    let { title: n, icon: t, subtitle: r, decoration: c } = e;
    return (0, l.jsxs)(i.B, {
        direction: "horizontal",
        align: "center",
        gap: 16,
        padding: { left: "sm", right: "sm", bottom: "lg" },
        children: [
            (0, l.jsxs)(i.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsxs)(i.B, {
                        direction: "horizontal",
                        gap: 8,
                        children: [
                            (0, l.jsx)(s.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != t && (0, l.jsx)(t, { color: o.A.colors.INTERACTIVE_ICON_DEFAULT, size: "md" }),
                        ],
                    }),
                    null != r && (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-subtle", children: r }),
                ],
            }),
            (0, l.jsx)(j, { decoration: c }),
        ],
    });
}
