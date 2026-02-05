"use strict";
n.d(t, { h: () => u });
var r = n(627968),
    i = n(64700),
    a = n(934551),
    s = n(158954),
    o = n(732955),
    l = n(397927);
let u = {
    title: "Checkbox",
    stories: [
        {
            id: "checkbox",
            name: "Checkbox",
            component: function (e) {
                let { label: t, description: n, disabled: u, labelType: c, showIcons: d } = e,
                    [_, f] = i.useState(!1),
                    p = i.useCallback(() => {
                        f(!0);
                    }, []),
                    h = i.useCallback(() => {
                        f(!1);
                    }, []),
                    m = i.useCallback(() => {
                        f((e) => !e);
                    }, []);
                return (0, r.jsxs)(s.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(l.Checkbox, {
                            checked: _,
                            onChange: (e) => f(e),
                            disabled: u,
                            label: t,
                            description: null != n || "" === n ? n : void 0,
                            value: "checkbox-value",
                            labelType: c,
                            leadingIcon: d ? a.CircleInformationIcon : void 0,
                        }),
                        (0, r.jsxs)(s.EYj, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", _ ? "Checked" : "Unchecked"],
                        }),
                        (0, r.jsxs)(s.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(o.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: p,
                                    disabled: u,
                                }),
                                (0, r.jsx)(o.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: h,
                                    disabled: u,
                                }),
                                (0, r.jsx)(o.$nd, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: m,
                                    disabled: u,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Accept terms and conditions" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                labelType: {
                    type: "select",
                    label: "Label Type",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                    ],
                    defaultValue: "primary",
                },
                description: { type: "text", label: "Description", defaultValue: "" },
                showIcons: { type: "boolean", label: "Show Icons", defaultValue: !1 },
            },
        },
    ],
};
