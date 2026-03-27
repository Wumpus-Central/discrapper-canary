a.d(l, { y: () => d });
var t = a(627968),
    o = a(237528),
    n = a(14581);
let i = {
        name: "Chip",
        id: "chip",
        component: o.v,
        controls: {
            text: { label: "Text", type: "text", defaultValue: "New" },
            variant: {
                label: "Variant",
                type: "select",
                defaultValue: "grayLight",
                options: [
                    { label: "Blurple Light", value: "blurpleLight" },
                    { label: "Blurple Medium", value: "blurpleMedium" },
                    { label: "Blurple Dark", value: "blurpleDark" },
                    { label: "Purple Light", value: "purpleLight" },
                    { label: "Purple Medium", value: "purpleMedium" },
                    { label: "Purple Dark", value: "purpleDark" },
                    { label: "Green Light", value: "greenLight" },
                    { label: "Green Medium", value: "greenMedium" },
                    { label: "Green Dark", value: "greenDark" },
                    { label: "Orange Light", value: "orangeLight" },
                    { label: "Orange Medium", value: "orangeMedium" },
                    { label: "Orange Dark", value: "orangeDark" },
                    { label: "Yellow Light", value: "yellowLight" },
                    { label: "Yellow Medium", value: "yellowMedium" },
                    { label: "Yellow Dark", value: "yellowDark" },
                    { label: "Pink Light", value: "pinkLight" },
                    { label: "Pink Medium", value: "pinkMedium" },
                    { label: "Pink Dark", value: "pinkDark" },
                    { label: "Red Light", value: "redLight" },
                    { label: "Red Medium", value: "redMedium" },
                    { label: "Red Dark", value: "redDark" },
                    { label: "Gray Light", value: "grayLight" },
                    { label: "Gray Medium", value: "grayMedium" },
                    { label: "Gray Dark", value: "grayDark" },
                ],
            },
        },
    },
    s = ["blurple", "purple", "green", "orange", "yellow", "pink", "red", "gray"],
    r = ["Light", "Medium", "Dark"],
    d = {
        title: "Chip",
        stories: [
            i,
            {
                name: "All Variants",
                id: "chip-all-variants",
                component: function () {
                    return (0, t.jsx)("div", {
                        className: n.lx,
                        children: r.map((e) =>
                            (0, t.jsxs)(
                                "div",
                                {
                                    className: n.uW,
                                    children: [
                                        (0, t.jsx)("h3", { className: n.Gf, children: e }),
                                        (0, t.jsx)("div", {
                                            className: n.f2,
                                            children: s.map((l) => {
                                                let a = `${l}${e}`;
                                                return (0, t.jsx)(o.v, { text: l, variant: a }, a);
                                            }),
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                    });
                },
            },
        ],
    };
