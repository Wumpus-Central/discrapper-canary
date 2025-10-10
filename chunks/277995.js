n.d(t, { u: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(67979),
    o = n(921349),
    s = n(619307),
    l = n(463208),
    c = n(397943),
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
                        [f, _] = i.useState(void 0),
                        [p, h] = i.useState(void 0),
                        [m, g] = i.useState(void 0);
                    return (0, r.jsxs)(u.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(s.q4, {
                                value: f,
                                onChange: _,
                                options: d,
                                placeholder: n,
                                isDisabled: t,
                            }),
                            (0, r.jsx)(l.o, {
                                placeholder: n,
                                disabled: t,
                            }),
                            (0, r.jsx)(o.V, {
                                value: f,
                                onChange: _,
                                options: d,
                                placeholder: n,
                                isDisabled: t,
                            }),
                            (0, r.jsx)(a.W, {
                                onSelect: h,
                                value: p,
                                disabled: t,
                            }),
                            (0, r.jsx)(c.M, {
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
