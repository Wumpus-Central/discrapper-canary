"use strict";
n.d(t, { t: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(582306),
    s = n(292666),
    o = n(335310),
    l = n(444550),
    u = n(843282),
    c = n(397927);
let d = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "brown", label: "Brown" },
    ],
    _ = {
        title: "VoidInputs",
        stories: [
            {
                name: "VoidInputs",
                id: "void-inputs",
                component: function (e) {
                    let { disabled: t, placeholder: n } = e,
                        [_, f] = i.useState(void 0),
                        [p, h] = i.useState(void 0),
                        [m, g] = i.useState(void 0);
                    return (0, r.jsxs)(c.BJc, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(u.Te, { value: _, onChange: f, options: d, placeholder: n, isDisabled: t }),
                            (0, r.jsx)(s.k, { placeholder: n, disabled: t }),
                            (0, r.jsx)(l.p, { value: _, onChange: f, options: d, placeholder: n, isDisabled: t }),
                            (0, r.jsx)(a.J, { onSelect: h, value: p, disabled: t }),
                            (0, r.jsx)(o.c, { onChange: g, value: m, disabled: t }),
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
