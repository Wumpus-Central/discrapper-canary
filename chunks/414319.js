a.d(l, { s: () => u });
var t = a(627968);
a(64700);
var o = a(397927),
    n = a(121830);
let i = [
        { label: "Aardvark", value: "aardvark", id: "aardvark" },
        { label: "Cat", value: "cat", id: "cat" },
        { label: "Dog", value: "dog", id: "dog" },
    ],
    s = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f, 0xe67e22, 0xe74c3c];
function r(e) {
    let { title: l, children: a, auxiliaryContentPosition: n } = e;
    return (0, t.jsx)(o.D0$, {
        disabled: !0,
        label: l,
        description: "This row is disabled at the Field level and at the control level.",
        helperText:
            "Every leaf (label, description, helper text, control) should render at a single 0.5 opacity layer.",
        auxiliaryContentPosition: n,
        children: a,
    });
}
function d(e) {
    let { auxiliaryContentPosition: l } = e;
    return (0, t.jsxs)(o.BJc, {
        direction: "vertical",
        gap: 24,
        children: [
            (0, t.jsx)(r, {
                title: "Button",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(o.Button, { text: "Remove", variant: "critical-primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(r, {
                title: "TextButton",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(o.QWc, { text: "View details", variant: "primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(r, {
                title: "Switch",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(o.dOG, {
                    label: "Allow direct messages",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                }),
            }),
            (0, t.jsx)(r, {
                title: "Checkbox",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(o.Checkbox, {
                    label: "Accept terms",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                    value: "accept-terms",
                }),
            }),
            (0, t.jsx)(r, {
                title: "InputField",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(o.FON, {
                    disabled: !0,
                    children: (0, t.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: "Inner InputField content",
                    }),
                }),
            }),
            (0, t.jsx)(r, {
                title: "Select",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(o.l6P, {
                    label: "Animal",
                    hideLabel: !0,
                    options: i,
                    selectionMode: "single",
                    onSelectionChange: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(r, {
                title: "CopyInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(o.e2O, {
                    value: "https://discord.gg/disabled-example",
                    supportsCopy: !0,
                    onCopy: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(r, {
                title: "ColorPicker",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(o.skP, {
                    defaultColor: s[0],
                    customColor: null,
                    colors: s,
                    value: s[0],
                    disabled: !0,
                    onChange: () => {},
                    renderDefaultButton: (e) => (0, t.jsx)(o.fyo, { ...e }),
                    renderCustomButton: (e) => (0, t.jsx)(o.nJu, { ...e }),
                }),
            }),
            (0, t.jsx)(r, {
                title: "TextInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(o.ksK, {
                    label: "Username",
                    hideLabel: !0,
                    value: "disabled-user",
                    onChange: () => {},
                    disabled: !0,
                }),
            }),
        ],
    });
}
let u = {
    title: "Forms",
    stories: [
        {
            name: "FieldSet",
            id: "fieldset",
            component: function (e) {
                let { label: l } = e;
                return (0, t.jsx)("div", {
                    children: (0, t.jsxs)(o.nVY, {
                        label: "" === l ? void 0 : l,
                        children: [
                            (0, t.jsx)(o.ksK, { label: "First Name" }),
                            (0, t.jsx)(o.ksK, { label: "Last Name" }),
                            (0, t.jsx)(o.ksK, { label: "Address" }),
                        ],
                    }),
                });
            },
            controls: { label: { type: "text", label: "Label", defaultValue: "Billing Address" } },
        },
        {
            name: "Field",
            id: "formcontrol",
            component: function (e) {
                let { description: l, ...a } = e;
                return (0, t.jsx)("div", {
                    children: (0, t.jsx)(o.D0$, {
                        ...a,
                        description: "" === l ? void 0 : l,
                        icon: a.showIcon ? o.XAi : void 0,
                        children: (0, t.jsx)("div", {
                            className: n.q,
                            children: (0, t.jsx)(o.Text, {
                                color: "text-subtle",
                                variant: "text-md/medium",
                                children: "Field",
                            }),
                        }),
                    }),
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "First Name" },
                description: { type: "text", label: "Description", defaultValue: "This is the first name of the user" },
                helperText: {
                    type: "text",
                    label: "Helper Text",
                    defaultValue: "This is the helper text for the form control",
                },
                required: { type: "boolean", label: "Required", defaultValue: !1 },
                errorMessage: { type: "text", label: "Error Message", defaultValue: "" },
                layout: {
                    type: "select",
                    label: "Layout",
                    defaultValue: "vertical",
                    options: [
                        { label: "Vertical", value: "vertical" },
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Horizontal (Responsive)", value: "horizontal-responsive" },
                    ],
                },
                badge: {
                    type: "select",
                    label: "Badge",
                    defaultValue: void 0,
                    options: [
                        { label: "None", value: void 0 },
                        { label: "New", value: "new" },
                        { label: "Beta", value: "beta" },
                        { label: "Early Access", value: "early_access" },
                        { label: "Free Trial", value: "free_trial" },
                    ],
                },
                showIcon: { type: "boolean", label: "Show Icon", defaultValue: !1 },
            },
        },
        {
            name: "Field (Disabled, under-control)",
            id: "field-disabled-under-control",
            component: d,
            controls: {
                auxiliaryContentPosition: {
                    type: "select",
                    label: "Auxiliary Content Position",
                    defaultValue: "under-control",
                    options: [
                        { label: "Under Control (default)", value: "under-control" },
                        { label: "Under Label", value: "under-label" },
                    ],
                },
            },
        },
        {
            name: "Field (Disabled, under-label)",
            id: "field-disabled-under-label",
            component: function () {
                return (0, t.jsx)(d, { auxiliaryContentPosition: "under-label" });
            },
        },
    ],
};
