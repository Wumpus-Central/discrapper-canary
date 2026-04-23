a.d(l, { Y: () => c });
var t = a(627968),
    o = a(64700),
    n = a(933832),
    i = a(176781),
    r = a(173936),
    s = a(625903),
    d = a(972213),
    u = a(785007);
let c = {
    title: "VoidRadioGroup",
    stories: [
        {
            id: "voidradiogroup",
            name: "VoidRadioGroup",
            component: function (e) {
                let {
                        optionCount: l,
                        size: a,
                        disabled: c,
                        orientation: b,
                        radioPosition: p,
                        withTransparentBackground: m,
                        label: h,
                        description: x,
                        withDescriptions: v,
                        withIcons: f,
                    } = e,
                    [g, y] = o.useState("option1"),
                    C = [n.A, i.x, r.q, s.Z, d.d],
                    j = Array.from({ length: l }, (e, l) => ({
                        value: `option${l + 1}`,
                        name: `Option ${l + 1}`,
                        description: v ? `This is a description for option ${l + 1}` : void 0,
                        icon: f ? C[l % C.length] : void 0,
                    }));
                return (0, t.jsx)(u.$d, {
                    "data-migration-pending": !0,
                    value: g,
                    onChange: (e) => {
                        let { value: l } = e;
                        return y(l);
                    },
                    options: j,
                    size: a,
                    disabled: c,
                    orientation: b,
                    radioPosition: p,
                    withTransparentBackground: m,
                    label: h,
                    description: x,
                });
            },
            controls: {
                optionCount: {
                    type: "select",
                    label: "Number of Options",
                    defaultValue: 3,
                    options: [
                        { label: "2 Options", value: 2 },
                        { label: "3 Options", value: 3 },
                        { label: "4 Options", value: 4 },
                        { label: "5 Options", value: 5 },
                        { label: "6 Options", value: 6 },
                    ],
                },
                withDescriptions: { type: "boolean", label: "Show Descriptions", defaultValue: !0 },
                withIcons: { type: "boolean", label: "Show Icons", defaultValue: !0 },
                size: {
                    type: "select",
                    label: "Size",
                    defaultValue: "medium",
                    options: [
                        { label: "Small", value: "small" },
                        { label: "Medium", value: "medium" },
                        { label: "Large", value: "large" },
                    ],
                },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                orientation: {
                    type: "select",
                    label: "Orientation",
                    defaultValue: "vertical",
                    options: [
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Vertical", value: "vertical" },
                    ],
                },
                radioPosition: {
                    type: "select",
                    label: "Radio Position",
                    defaultValue: "left",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
                withTransparentBackground: { type: "boolean", label: "With Transparent Background", defaultValue: !1 },
                label: { type: "text", label: "Label", defaultValue: "Radio Group" },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is a description for the radio group",
                },
            },
        },
    ],
};
