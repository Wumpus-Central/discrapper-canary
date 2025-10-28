t.d(l, { u: () => b }), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(67979),
    i = t(921349),
    r = t(619307),
    s = t(463208),
    u = t(397943),
    d = t(481060);
let c = [
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
    b = {
        title: "VoidInputs",
        stories: [
            {
                name: "VoidInputs",
                id: "void-inputs",
                component: function (e) {
                    let { disabled: l, placeholder: t } = e,
                        [b, p] = n.useState(void 0),
                        [y, m] = n.useState(void 0),
                        [f, v] = n.useState(void 0);
                    return (0, a.jsxs)(d.Kqy, {
                        gap: 8,
                        children: [
                            (0, a.jsx)(r.q4, {
                                value: b,
                                onChange: p,
                                options: c,
                                placeholder: t,
                                isDisabled: l,
                            }),
                            (0, a.jsx)(s.o, {
                                placeholder: t,
                                disabled: l,
                            }),
                            (0, a.jsx)(i.V, {
                                value: b,
                                onChange: p,
                                options: c,
                                placeholder: t,
                                isDisabled: l,
                            }),
                            (0, a.jsx)(o.W, {
                                onSelect: m,
                                value: y,
                                disabled: l,
                            }),
                            (0, a.jsx)(u.M, {
                                onChange: v,
                                value: f,
                                disabled: l,
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
