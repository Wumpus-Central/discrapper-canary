a.d(l, { s: () => j });
var t = a(627968);
a(64700);
var n = a(270003),
    o = a(292666),
    i = a(452027),
    r = a(194261),
    s = a(834730),
    d = a(331322),
    u = a(821609),
    c = a(123292),
    b = a(243721),
    p = a(150934),
    m = a(862301),
    h = a(691885),
    x = a(109802),
    g = a(508274),
    f = a(121830);
let v = [
        { label: "Aardvark", value: "aardvark", id: "aardvark" },
        { label: "Cat", value: "cat", id: "cat" },
        { label: "Dog", value: "dog", id: "dog" },
    ],
    y = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f, 0xe67e22, 0xe74c3c];
function _(e) {
    let { title: l, children: a, auxiliaryContentPosition: n } = e;
    return (0, t.jsx)(i.D, {
        disabled: !0,
        label: l,
        description: "This row is disabled at the Field level and at the control level.",
        helperText:
            "Every leaf (label, description, helper text, control) should render at a single 0.5 opacity layer.",
        auxiliaryContentPosition: n,
        children: a,
    });
}
function C(e) {
    let { auxiliaryContentPosition: l } = e;
    return (0, t.jsxs)(d.B, {
        direction: "vertical",
        gap: 24,
        children: [
            (0, t.jsx)(_, {
                title: "Button",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(u.$, { text: "Remove", variant: "critical-primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(_, {
                title: "TextButton",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)("div", {
                    children: (0, t.jsx)(c.Q, { text: "View details", variant: "primary", disabled: !0 }),
                }),
            }),
            (0, t.jsx)(_, {
                title: "Switch",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(b.d, {
                    label: "Allow direct messages",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                }),
            }),
            (0, t.jsx)(_, {
                title: "Checkbox",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(p.S, {
                    label: "Accept terms",
                    disabled: !0,
                    checked: !1,
                    onChange: () => {},
                    value: "accept-terms",
                }),
            }),
            (0, t.jsx)(_, {
                title: "InputField",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(m.F, {
                    disabled: !0,
                    children: (0, t.jsx)(s.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: "Inner InputField content",
                    }),
                }),
            }),
            (0, t.jsx)(_, {
                title: "Select",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(h.l, {
                    label: "Animal",
                    hideLabel: !0,
                    options: v,
                    selectionMode: "single",
                    onSelectionChange: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(_, {
                title: "CopyInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(x.e, {
                    value: "https://discord.gg/disabled-example",
                    supportsCopy: !0,
                    onCopy: () => {},
                    disabled: !0,
                }),
            }),
            (0, t.jsx)(_, {
                title: "ColorPicker",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(g.sk, {
                    defaultColor: y[0],
                    customColor: null,
                    colors: y,
                    value: y[0],
                    disabled: !0,
                    onChange: () => {},
                    renderDefaultButton: (e) => (0, t.jsx)(g.fy, { ...e }),
                    renderCustomButton: (e) => (0, t.jsx)(g.nJ, { ...e }),
                }),
            }),
            (0, t.jsx)(_, {
                title: "TextInput",
                auxiliaryContentPosition: l,
                children: (0, t.jsx)(o.k, {
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
let j = {
    title: "Forms",
    stories: [
        {
            name: "FieldSet",
            id: "fieldset",
            component: function (e) {
                let { label: l } = e;
                return (0, t.jsx)("div", {
                    children: (0, t.jsxs)(n.n, {
                        label: "" === l ? void 0 : l,
                        children: [
                            (0, t.jsx)(o.k, { label: "First Name" }),
                            (0, t.jsx)(o.k, { label: "Last Name" }),
                            (0, t.jsx)(o.k, { label: "Address" }),
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
                    children: (0, t.jsx)(i.D, {
                        ...a,
                        description: "" === l ? void 0 : l,
                        icon: a.showIcon ? r.X : void 0,
                        children: (0, t.jsx)("div", {
                            className: f.q,
                            children: (0, t.jsx)(s.E, {
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
            component: C,
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
                return (0, t.jsx)(C, { auxiliaryContentPosition: "under-label" });
            },
        },
    ],
};
