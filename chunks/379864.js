t.d(l, { J: () => c }), t(953529), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(30717),
    i = t(895070),
    r = t(632140),
    s = t(125455),
    u = t(966649),
    d = t(755721);
let c = {
    title: "VoidRadioGroup",
    stories: [
        {
            id: "voidradiogroup",
            name: "VoidRadioGroup",
            component: function (e) {
                let {
                        optionCount: l,
                        size: t,
                        disabled: c,
                        orientation: b,
                        radioPosition: p,
                        withTransparentBackground: y,
                        label: m,
                        description: f,
                        withDescriptions: v,
                        withIcons: h,
                    } = e,
                    [x, g] = n.useState("option1"),
                    O = [o.d, i.A, r.x, s.e, u.U],
                    j = Array.from({ length: l }, (e, l) => ({
                        value: "option".concat(l + 1),
                        name: "Option ".concat(l + 1),
                        description: v ? "This is a description for option ".concat(l + 1) : void 0,
                        icon: h ? O[l % O.length] : void 0,
                    }));
                return (0, a.jsx)(d.Gu, {
                    value: x,
                    onChange: (e) => {
                        let { value: l } = e;
                        return g(l);
                    },
                    options: j,
                    size: t,
                    disabled: c,
                    orientation: b,
                    radioPosition: p,
                    withTransparentBackground: y,
                    label: m,
                    description: f,
                });
            },
            controls: {
                optionCount: {
                    type: "select",
                    label: "Number of Options",
                    defaultValue: 3,
                    options: [
                        {
                            label: "2 Options",
                            value: 2,
                        },
                        {
                            label: "3 Options",
                            value: 3,
                        },
                        {
                            label: "4 Options",
                            value: 4,
                        },
                        {
                            label: "5 Options",
                            value: 5,
                        },
                        {
                            label: "6 Options",
                            value: 6,
                        },
                    ],
                },
                withDescriptions: {
                    type: "boolean",
                    label: "Show Descriptions",
                    defaultValue: !0,
                },
                withIcons: {
                    type: "boolean",
                    label: "Show Icons",
                    defaultValue: !0,
                },
                size: {
                    type: "select",
                    label: "Size",
                    defaultValue: "medium",
                    options: [
                        {
                            label: "Small",
                            value: "small",
                        },
                        {
                            label: "Medium",
                            value: "medium",
                        },
                        {
                            label: "Large",
                            value: "large",
                        },
                    ],
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                orientation: {
                    type: "select",
                    label: "Orientation",
                    defaultValue: "vertical",
                    options: [
                        {
                            label: "Horizontal",
                            value: "horizontal",
                        },
                        {
                            label: "Vertical",
                            value: "vertical",
                        },
                    ],
                },
                radioPosition: {
                    type: "select",
                    label: "Radio Position",
                    defaultValue: "left",
                    options: [
                        {
                            label: "Left",
                            value: "left",
                        },
                        {
                            label: "Right",
                            value: "right",
                        },
                    ],
                },
                withTransparentBackground: {
                    type: "boolean",
                    label: "With Transparent Background",
                    defaultValue: !1,
                },
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Radio Group",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is a description for the radio group",
                },
            },
        },
    ],
};
