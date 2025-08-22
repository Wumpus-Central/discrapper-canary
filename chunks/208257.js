n.d(t, { t: () => o }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(538534);
let o = {
    title: "RadioGroup",
    stories: [
        {
            id: "radiogroup",
            name: "RadioGroup",
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
                return (0, r.jsx)(a.Ee, {
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
            },
        },
    ],
};
