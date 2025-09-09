n.d(t, { t: () => o }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(695046);
let o = {
    title: "VoidRadioGroup",
    stories: [
        {
            id: "radiogroup",
            name: "VoidRadioGroup",
            component: function (e) {
                let {
                        optionCount: t,
                        size: n,
                        disabled: o,
                        orientation: s,
                        radioPosition: l,
                        withTransparentBackground: c,
                    } = e,
                    [u, d] = i.useState("option1"),
                    f = Array.from({ length: t }, (e, t) => ({
                        value: "option".concat(t + 1),
                        name: "Option ".concat(t + 1),
                    }));
                return (0, r.jsx)(a.Gu, {
                    value: u,
                    onChange: (e) => {
                        let { value: t } = e;
                        return d(t);
                    },
                    options: f,
                    size: n,
                    disabled: o,
                    orientation: s,
                    radioPosition: l,
                    withTransparentBackground: c,
                });
            },
            controls: {
                optionCount: {
                    type: "number",
                    label: "Option Count",
                    defaultValue: 3,
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
                    defaultValue: "horizontal",
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
