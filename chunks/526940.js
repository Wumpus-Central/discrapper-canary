t.d(l, { W: () => p }), t(953529), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(481060),
    i = t(921349),
    r = t(619307);
function s(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (l) {
                var a;
                (a = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[l] = a);
            });
    }
    return e;
}
function u(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}
let d = [
        {
            value: "red",
            label: "Red",
        },
        {
            value: "green",
            label: "Green",
        },
        {
            value: "blue",
            label: "Blue",
        },
        {
            value: "yellow",
            label: "Yellow",
        },
        {
            value: "purple",
            label: "Purple",
        },
        {
            value: "orange",
            label: "Orange",
        },
        {
            value: "pink",
            label: "Pink",
        },
        {
            value: "brown",
            label: "Brown",
        },
    ],
    c = {
        id: "select",
        name: "Select",
        component: function (e) {
            let {
                    label: l,
                    description: t,
                    isDisabled: o,
                    isProcessing: i,
                    placeholder: s,
                    maxVisibleItems: u,
                    clearable: c,
                    closeOnSelect: b,
                    popoutPosition: p,
                    variant: y,
                } = e,
                [m, f] = n.useState("blue");
            return (0, a.jsx)(r.q4, {
                variant: y,
                label: l,
                description: t,
                value: m,
                onChange: f,
                options: d,
                placeholder: s,
                isDisabled: o,
                isProcessing: i,
                maxVisibleItems: u,
                clearable: c,
                closeOnSelect: b,
                popoutPosition: p,
            });
        },
        controls: {
            label: {
                type: "text",
                label: "Label",
                defaultValue: "Color",
            },
            description: {
                type: "text",
                label: "Description",
                defaultValue: "Choose a color",
            },
            placeholder: {
                type: "text",
                label: "Placeholder",
                defaultValue: "Choose a color",
            },
            variant: {
                type: "select",
                label: "Variant",
                defaultValue: "filled",
                options: [
                    {
                        label: "Filled",
                        value: "filled",
                    },
                    {
                        label: "Text Only",
                        value: "text-only",
                    },
                ],
            },
            isDisabled: {
                type: "boolean",
                label: "Disabled",
                defaultValue: !1,
            },
            isProcessing: {
                type: "boolean",
                label: "Processing",
                defaultValue: !1,
            },
            clearable: {
                type: "boolean",
                label: "Clearable",
                defaultValue: !0,
            },
            closeOnSelect: {
                type: "boolean",
                label: "Close On Select",
                defaultValue: !0,
            },
            maxVisibleItems: {
                type: "number",
                label: "Max Visible Items",
                defaultValue: 5,
            },
            popoutPosition: {
                type: "select",
                label: "Popout Position",
                defaultValue: "bottom",
                options: [
                    {
                        label: "Bottom",
                        value: "bottom",
                    },
                    {
                        label: "Top",
                        value: "top",
                    },
                    {
                        label: "Center",
                        value: "center",
                    },
                    {
                        label: "Left",
                        value: "left",
                    },
                    {
                        label: "Right",
                        value: "right",
                    },
                    {
                        label: "Window Center",
                        value: "window_center",
                    },
                ],
            },
        },
    },
    b = {
        id: "searchable-select",
        name: "Searchable Select",
        component: function (e) {
            var {
                    placeholder: l,
                    isDisabled: t,
                    isProcessing: r,
                    clearable: c,
                    closeOnSelect: b,
                    clearQueryOnSelect: p,
                    filter: y,
                } = e,
                m = (function (e, l) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = (function (e, l) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                o = Object.keys(e);
                            for (a = 0; a < o.length; a++) (t = o[a]), l.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, l);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < o.length; a++)
                            (t = o[a]),
                                !(l.indexOf(t) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, t) &&
                                    (n[t] = e[t]);
                    }
                    return n;
                })(e, [
                    "placeholder",
                    "isDisabled",
                    "isProcessing",
                    "clearable",
                    "closeOnSelect",
                    "clearQueryOnSelect",
                    "filter",
                ]);
            let [f, v] = n.useState("blue"),
                [h, x] = n.useState(["blue"]);
            return (0, a.jsxs)(o.Kqy, {
                gap: 24,
                children: [
                    (0, a.jsx)(
                        i.V,
                        u(s({}, m), {
                            value: f,
                            onChange: v,
                            options: d,
                            placeholder: l,
                            isDisabled: t,
                            isProcessing: r,
                            clearable: c,
                            clearQueryOnSelect: p,
                            filter: y,
                        }),
                    ),
                    (0, a.jsx)(
                        i.V,
                        u(s({}, m), {
                            multi: !0,
                            value: h,
                            onChange: x,
                            options: d,
                            placeholder: l,
                            isDisabled: t,
                            isProcessing: r,
                            clearable: c,
                            closeOnSelect: b,
                            clearQueryOnSelect: p,
                            filter: y,
                        }),
                    ),
                ],
            });
        },
        controls: u(s({}, c.controls), {
            placeholder: {
                type: "text",
                label: "Placeholder",
                defaultValue: "Search for a color",
            },
            isDisabled: {
                type: "boolean",
                label: "Disabled",
                defaultValue: !1,
            },
            isProcessing: {
                type: "boolean",
                label: "Processing",
                defaultValue: !1,
            },
            clearable: {
                type: "boolean",
                label: "Clearable",
                defaultValue: !0,
            },
            closeOnSelect: {
                type: "boolean",
                label: "Close On Select",
                defaultValue: !0,
            },
            clearQueryOnSelect: {
                type: "boolean",
                label: "Clear Query On Select",
                defaultValue: !1,
            },
            filter: {
                type: "boolean",
                label: "Filter",
                defaultValue: !0,
            },
        }),
    },
    p = {
        title: "Select",
        stories: [c, b],
    };
