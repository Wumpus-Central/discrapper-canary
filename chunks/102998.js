"use strict";
n.d(t, { C: () => l });
var r = n(627968),
    i = n(64700),
    a = n(934551),
    s = n(158954),
    o = n(732955);
let l = {
    title: "RadioGroup",
    stories: [
        {
            id: "radiogroup",
            name: "RadioGroup",
            component: function (e) {
                let {
                        disabled: t,
                        optionCount: n,
                        label: l,
                        optionLabel: u,
                        description: c,
                        showIcons: d,
                        withMixedDisabledOptions: _,
                    } = e,
                    [f, p] = i.useState("option1"),
                    h = i.useMemo(
                        () =>
                            [
                                {
                                    name: null != u ? `${u} 1` : "Option 1",
                                    value: "option1",
                                    desc: null == c || "" === c ? void 0 : c,
                                    leadingIcon: d ? a.CircleInformationIcon : void 0,
                                    disabled: !_ && void 0,
                                },
                                {
                                    name: null != u ? `${u} 2` : "Option 2",
                                    value: "option2",
                                    desc: null == c || "" === c ? void 0 : c,
                                    leadingIcon: d ? a.CircleInformationIcon : void 0,
                                    disabled: !!_ || void 0,
                                },
                                {
                                    name: null != u ? `${u} 3` : "Option 3",
                                    value: "option3",
                                    desc: null == c || "" === c ? void 0 : c,
                                    leadingIcon: d ? a.CircleInformationIcon : void 0,
                                    disabled: !_ && void 0,
                                },
                                {
                                    name: null != u ? `${u} 4` : "Option 4",
                                    value: "option4",
                                    desc: null == c || "" === c ? void 0 : c,
                                    leadingIcon: d ? a.CircleInformationIcon : void 0,
                                    disabled: !!_ || void 0,
                                },
                                {
                                    name: null != u ? `${u} 5` : "Option 5",
                                    value: "option5",
                                    desc: null == c || "" === c ? void 0 : c,
                                    leadingIcon: d ? a.CircleInformationIcon : void 0,
                                    disabled: !_ && void 0,
                                },
                            ].slice(0, Math.max(1, Math.min(5, n))),
                        [n, u, c, d, _],
                    ),
                    m = i.useCallback((e) => {
                        p(e);
                    }, []),
                    g = i.useCallback(() => {
                        h.length > 0 && p(h[0].value);
                    }, [h]),
                    E = i.useCallback(() => {
                        h.length > 0 && p(h[h.length - 1].value);
                    }, [h]),
                    A = i.useCallback(() => {
                        p(void 0);
                    }, []);
                return (0, r.jsxs)(s.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(o.z6M, { value: f, label: l, onChange: m, options: h, disabled: t }),
                        (0, r.jsxs)(s.EYj, {
                            variant: "text-sm/normal",
                            children: ["Current selection: ", "string" == typeof f && "" !== f ? f : "None"],
                        }),
                        (0, r.jsxs)(s.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(o.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select First",
                                    onClick: g,
                                    disabled: t || 0 === h.length,
                                }),
                                (0, r.jsx)(o.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Select Last",
                                    onClick: E,
                                    disabled: t || 0 === h.length,
                                }),
                                (0, r.jsx)(o.$nd, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear",
                                    onClick: A,
                                    disabled: t,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Mana Radio Group" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                optionCount: {
                    type: "select",
                    label: "Number of Options",
                    options: [
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "5", value: 5 },
                    ],
                    defaultValue: 3,
                },
                optionLabel: { type: "text", label: "Option Label", defaultValue: "Option" },
                description: { type: "text", label: "Description", defaultValue: "" },
                showIcons: { type: "boolean", label: "Show Icons", defaultValue: !1 },
                withMixedDisabledOptions: { type: "boolean", label: "Mixed Disabled Options", defaultValue: !1 },
            },
        },
    ],
};
