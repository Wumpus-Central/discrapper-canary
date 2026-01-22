n.d(t, { t: () => f }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(582306),
    s = n(292666),
    o = n(335310),
    l = n(444550),
    c = n(843282),
    u = n(397927);
let d = [
        {
            value: "red",
            label: "Red",
        },
        {
            value: "green",
            label: "Green",
        },
        {
            value: "blue",
            label: "Blue",
        },
        {
            value: "yellow",
            label: "Yellow",
        },
        {
            value: "purple",
            label: "Purple",
        },
        {
            value: "orange",
            label: "Orange",
        },
        {
            value: "pink",
            label: "Pink",
        },
        {
            value: "brown",
            label: "Brown",
        },
    ],
    f = {
        title: "VoidInputs",
        stories: [
            {
                name: "VoidInputs",
                id: "void-inputs",
                component: function (e) {
                    let { disabled: t, placeholder: n } = e,
                        [f, p] = i.useState(void 0),
                        [_, h] = i.useState(void 0),
                        [m, g] = i.useState(void 0);
                    return (0, r.jsxs)(u.BJc, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(c.Te, {
                                value: f,
                                onChange: p,
                                options: d,
                                placeholder: n,
                                isDisabled: t,
                            }),
                            (0, r.jsx)(s.k, {
                                placeholder: n,
                                disabled: t,
                            }),
                            (0, r.jsx)(l.p, {
                                value: f,
                                onChange: p,
                                options: d,
                                placeholder: n,
                                isDisabled: t,
                            }),
                            (0, r.jsx)(a.J, {
                                onSelect: h,
                                value: _,
                                disabled: t,
                            }),
                            (0, r.jsx)(o.c, {
                                onChange: g,
                                value: m,
                                disabled: t,
                            }),
                        ],
                    });
                },
                controls: {
                    disabled: {
                        type: "boolean",
                        label: "Disabled",
                        defaultValue: !1,
                    },
                    placeholder: {
                        type: "text",
                        label: "Placeholder",
                        defaultValue: "Placeholder",
                    },
                },
            },
        ],
    };
