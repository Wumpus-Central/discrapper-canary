a.d(l, { t: () => b });
var t = a(627968),
    o = a(64700),
    n = a(582306),
    i = a(292666),
    s = a(335310),
    r = a(444550),
    d = a(843282),
    u = a(397927);
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
                        [b, p] = o.useState(void 0),
                        [m, x] = o.useState(void 0),
                        [v, h] = o.useState(void 0);
                    return (0, t.jsxs)(u.BJc, {
                        gap: 8,
                        children: [
                            (0, t.jsx)(d.Te, { value: b, onChange: p, options: c, placeholder: a, isDisabled: l }),
                            (0, t.jsx)(i.k, { placeholder: a, disabled: l }),
                            (0, t.jsx)(r.p, { value: b, onChange: p, options: c, placeholder: a, isDisabled: l }),
                            (0, t.jsx)(n.J, { onSelect: x, value: m, disabled: l }),
                            (0, t.jsx)(s.c, { onChange: h, value: v, disabled: l }),
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
