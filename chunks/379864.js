n.d(t, { J: () => d }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(30717),
    o = n(895070),
    s = n(632140),
    l = n(125455),
    c = n(966649),
    u = n(755721);
let d = {
    title: "VoidRadioGroup",
    stories: [
        {
            id: "voidradiogroup",
            name: "VoidRadioGroup",
            component: function (e) {
                let {
                        optionCount: t,
                        size: n,
                        disabled: d,
                        orientation: f,
                        radioPosition: _,
                        withTransparentBackground: p,
                        label: h,
                        description: m,
                        withDescriptions: g,
                        withIcons: E,
                    } = e,
                    [b, y] = i.useState("option1"),
                    O = [a.d, o.A, s.x, l.e, c.U],
                    v = Array.from({ length: t }, (e, t) => ({
                        value: "option".concat(t + 1),
                        name: "Option ".concat(t + 1),
                        description: g ? "This is a description for option ".concat(t + 1) : void 0,
                        icon: E ? O[t % O.length] : void 0,
                    }));
                return (0, r.jsx)(u.Gu, {
                    value: b,
                    onChange: (e) => {
                        let { value: t } = e;
                        return y(t);
                    },
                    options: v,
                    size: n,
                    disabled: d,
                    orientation: f,
                    radioPosition: _,
                    withTransparentBackground: p,
                    label: h,
                    description: m,
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
