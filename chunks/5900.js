n.d(t, { V: () => h });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(459192),
    o = n(990078),
    l = n(710617);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let h = {
    title: "Tooltip",
    stories: [
        {
            name: "Tooltip",
            id: "tooltip",
            docs: "https://design.discord.tools/components/web/tooltip",
            component: function (e) {
                let {
                        text: t,
                        position: n,
                        align: s,
                        caretAlign: l,
                        customOffset: c,
                        delay: d,
                        spacing: _,
                        ariaHidden: h,
                    } = e,
                    m = p(e, [
                        "text",
                        "position",
                        "align",
                        "caretAlign",
                        "customOffset",
                        "delay",
                        "spacing",
                        "ariaHidden",
                    ]),
                    g = i.useMemo(() => {
                        if ("center" !== l && null != l)
                            return "custom" === l
                                ? {
                                      align: l,
                                      customOffset: c,
                                  }
                                : { align: l };
                    }, [l, c]);
                return (0, r.jsx)(
                    o.m,
                    f(
                        u(
                            {
                                text: t,
                                position: n,
                                align: s,
                                delay: d,
                                spacing: _,
                                caretConfig: g,
                                ariaHidden: h,
                            },
                            m,
                        ),
                        {
                            children: (0, r.jsx)(a.Button, {
                                variant: "primary",
                                text: "Hover me",
                            }),
                        },
                    ),
                );
            },
            controls: {
                text: {
                    label: "Text",
                    type: "text",
                    defaultValue: "Here's a tooltip!",
                },
                position: {
                    label: "Position",
                    type: "select",
                    defaultValue: "top",
                    options: [
                        {
                            label: "Top",
                            value: "top",
                        },
                        {
                            label: "Bottom",
                            value: "bottom",
                        },
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
                align: {
                    label: "Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        {
                            label: "Top",
                            value: "top",
                        },
                        {
                            label: "Center",
                            value: "center",
                        },
                        {
                            label: "Bottom",
                            value: "bottom",
                        },
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
                caretAlign: {
                    label: "Caret Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        {
                            label: "Start",
                            value: "start",
                        },
                        {
                            label: "Center",
                            value: "center",
                        },
                        {
                            label: "End",
                            value: "end",
                        },
                        {
                            label: "Custom",
                            value: "custom",
                        },
                    ],
                },
                customOffset: {
                    label: "Custom Offset",
                    type: "number",
                    defaultValue: 0,
                },
                delay: {
                    label: "Delay (ms)",
                    type: "number",
                    defaultValue: 0,
                },
                spacing: {
                    label: "Spacing (px)",
                    type: "number",
                    defaultValue: 11,
                },
                keyboardShortcut: {
                    label: "Keyboard Shortcut",
                    type: "text",
                    defaultValue: "mod+k",
                },
                ariaHidden: {
                    label: "Aria Hidden",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "RichTooltip",
            id: "rich-tooltip",
            docs: "https://design.discord.tools/components/web/tooltip",
            component: function (e) {
                let {
                        title: t,
                        body: n,
                        showAsset: o,
                        assetSize: c,
                        position: d,
                        align: _,
                        caretAlign: h,
                        customOffset: m,
                        delay: g,
                        spacing: E,
                        forceOpen: b,
                    } = e,
                    y = p(e, [
                        "title",
                        "body",
                        "showAsset",
                        "assetSize",
                        "position",
                        "align",
                        "caretAlign",
                        "customOffset",
                        "delay",
                        "spacing",
                        "forceOpen",
                    ]),
                    O = i.useMemo(() => {
                        if ("center" !== h && null != h)
                            return "custom" === h
                                ? {
                                      align: h,
                                      customOffset: m,
                                  }
                                : { align: h };
                    }, [h, m]),
                    A = i.useMemo(
                        () =>
                            o
                                ? {
                                      type: "image",
                                      src: l.A,
                                      aspectRatio: "1/1",
                                  }
                                : void 0,
                        [o],
                    );
                return (0, r.jsx)(
                    s.u,
                    f(
                        u(
                            {
                                title: t,
                                body: n,
                                position: d,
                                align: _,
                                delay: g,
                                spacing: E,
                                caretConfig: O,
                                asset: A,
                                assetSize: c,
                                forceOpen: b,
                            },
                            y,
                        ),
                        {
                            children: (0, r.jsx)(a.Button, {
                                variant: "primary",
                                text: "Hover me (rich)",
                            }),
                        },
                    ),
                );
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Title goes here",
                },
                body: {
                    label: "Body",
                    type: "text",
                    defaultValue: "Body copy goes in this section.",
                },
                assetSize: {
                    label: "Asset Size",
                    type: "select",
                    defaultValue: 16,
                    options: [
                        {
                            label: "16px",
                            value: 16,
                        },
                        {
                            label: "20px",
                            value: 20,
                        },
                        {
                            label: "24px",
                            value: 24,
                        },
                        {
                            label: "32px",
                            value: 32,
                        },
                        {
                            label: "48px",
                            value: 48,
                        },
                    ],
                },
                position: {
                    label: "Position",
                    type: "select",
                    defaultValue: "top",
                    options: [
                        {
                            label: "Top",
                            value: "top",
                        },
                        {
                            label: "Bottom",
                            value: "bottom",
                        },
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
                align: {
                    label: "Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        {
                            label: "Top",
                            value: "top",
                        },
                        {
                            label: "Center",
                            value: "center",
                        },
                        {
                            label: "Bottom",
                            value: "bottom",
                        },
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
                caretAlign: {
                    label: "Caret Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        {
                            label: "Start",
                            value: "start",
                        },
                        {
                            label: "Center",
                            value: "center",
                        },
                        {
                            label: "End",
                            value: "end",
                        },
                        {
                            label: "Custom",
                            value: "custom",
                        },
                    ],
                },
                customOffset: {
                    label: "Custom Offset",
                    type: "number",
                    defaultValue: 0,
                },
                delay: {
                    label: "Delay (ms)",
                    type: "number",
                    defaultValue: 0,
                },
                spacing: {
                    label: "Spacing (px)",
                    type: "number",
                    defaultValue: 11,
                },
                forceOpen: {
                    label: "Force Open",
                    type: "boolean",
                    defaultValue: !1,
                },
                showAsset: {
                    label: "Show Asset",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
    ],
};
