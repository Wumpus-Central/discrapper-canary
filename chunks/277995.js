n.d(t, { u: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(67979),
    o = n(463208),
    s = n(397943),
    l = n(668339),
    c = n(199849),
    u = n(481060);
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
                        [_, m] = i.useState(void 0),
                        [h, g] = i.useState(void 0);
                    return (0, r.jsxs)(u.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(c.y6, {
                                value: f,
                                onChange: p,
                                options: d,
                                placeholder: n,
                                isDisabled: t,
                            }),
                            (0, r.jsx)(o.o, {
                                placeholder: n,
                                disabled: t,
                            }),
                            (0, r.jsx)(l.d, {
                                value: f,
                                onChange: p,
                                options: d,
                                placeholder: n,
                                isDisabled: t,
                            }),
                            (0, r.jsx)(a.W, {
                                onSelect: m,
                                value: _,
                                disabled: t,
                            }),
                            (0, r.jsx)(s.M, {
                                onChange: g,
                                value: h,
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
