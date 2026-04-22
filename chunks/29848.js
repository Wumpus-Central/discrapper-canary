a.d(l, { t: () => b });
var t = a(627968),
    n = a(64700),
    o = a(582306),
    i = a(292666),
    r = a(335310),
    s = a(444550),
    d = a(843282),
    u = a(331322);
let c = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
    ],
    b = {
        title: "VoidInputs",
        stories: [
            {
                name: "VoidInputs",
                id: "void-inputs",
                component: function (e) {
                    let { disabled: l, placeholder: a } = e,
                        [b, p] = n.useState(void 0),
                        [m, h] = n.useState(void 0),
                        [x, g] = n.useState(void 0);
                    return (0, t.jsxs)(u.B, {
                        gap: 8,
                        children: [
                            (0, t.jsx)(d.Te, { value: b, onChange: p, options: c, placeholder: a, isDisabled: l }),
                            (0, t.jsx)(i.k, { placeholder: a, disabled: l }),
                            (0, t.jsx)(s.p, { value: b, onChange: p, options: c, placeholder: a, isDisabled: l }),
                            (0, t.jsx)(o.J, { onSelect: h, value: m, disabled: l }),
                            (0, t.jsx)(r.c, { onChange: g, value: x, disabled: l }),
                        ],
                    });
                },
                controls: {
                    disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                    placeholder: { type: "text", label: "Placeholder", defaultValue: "Placeholder" },
                },
            },
        ],
    };
