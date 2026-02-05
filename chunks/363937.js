"use strict";
n.d(t, { Y: () => d });
var r = n(627968),
    i = n(64700),
    a = n(933832),
    s = n(176781),
    o = n(173936),
    l = n(625903),
    u = n(972213),
    c = n(421380);
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
                        orientation: _,
                        radioPosition: f,
                        withTransparentBackground: p,
                        label: h,
                        description: m,
                        withDescriptions: g,
                        withIcons: E,
                    } = e,
                    [A, I] = i.useState("option1"),
                    T = [a.A, s.x, o.q, l.Z, u.d],
                    y = Array.from({ length: t }, (e, t) => ({
                        value: `option${t + 1}`,
                        name: `Option ${t + 1}`,
                        description: g ? `This is a description for option ${t + 1}` : void 0,
                        icon: E ? T[t % T.length] : void 0,
                    }));
                return (0, r.jsx)(c.$d, {
                    "data-migration-pending": !0,
                    value: A,
                    onChange: (e) => {
                        let { value: t } = e;
                        return I(t);
                    },
                    options: y,
                    size: n,
                    disabled: d,
                    orientation: _,
                    radioPosition: f,
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
