t.d(l, { D: () => b });
var a = t(951288),
    n = t(647438),
    o = t(481060),
    i = t(454399),
    r = t(28664),
    s = t(518797);
function u(e) {
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
function d(e, l) {
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
function c(e, l) {
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
            (t = o[a]), !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
    }
    return n;
}
let b = {
    title: "Tooltip",
    stories: [
        {
            name: "Tooltip",
            id: "tooltip",
            docs: "https://design.discord.tools/components/web/tooltip",
            component: function (e) {
                var { text: l, position: t, align: i, caretAlign: s, customOffset: b, delay: p, spacing: y } = e,
                    m = c(e, ["text", "position", "align", "caretAlign", "customOffset", "delay", "spacing"]);
                let f = n.useMemo(() => {
                    if ("center" !== s && null != s)
                        return "custom" === s
                            ? {
                                  align: s,
                                  customOffset: b,
                              }
                            : { align: s };
                }, [s, b]);
                return (0, a.jsx)(
                    r.u,
                    d(
                        u(
                            {
                                text: l,
                                position: t,
                                align: i,
                                delay: p,
                                spacing: y,
                                caretConfig: f,
                            },
                            m,
                        ),
                        {
                            children: (0, a.jsx)(o.Button, {
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
            },
        },
        {
            name: "RichTooltip",
            id: "rich-tooltip",
            docs: "https://design.discord.tools/components/web/tooltip",
            component: function (e) {
                var {
                        title: l,
                        body: t,
                        showAsset: r,
                        position: b,
                        align: p,
                        caretAlign: y,
                        customOffset: m,
                        delay: f,
                        spacing: v,
                    } = e,
                    h = c(e, [
                        "title",
                        "body",
                        "showAsset",
                        "position",
                        "align",
                        "caretAlign",
                        "customOffset",
                        "delay",
                        "spacing",
                    ]);
                let x = n.useMemo(() => {
                        if ("center" !== y && null != y)
                            return "custom" === y
                                ? {
                                      align: y,
                                      customOffset: m,
                                  }
                                : { align: y };
                    }, [y, m]),
                    g = n.useMemo(
                        () =>
                            r
                                ? (0, a.jsx)("img", {
                                      src: s.Z,
                                      alt: "Graphic",
                                  })
                                : void 0,
                        [r],
                    );
                return (0, a.jsx)(
                    i.i,
                    d(
                        u(
                            {
                                title: l,
                                body: t,
                                position: b,
                                align: p,
                                delay: f,
                                spacing: v,
                                caretConfig: x,
                                asset: g,
                            },
                            h,
                        ),
                        {
                            children: (0, a.jsx)(o.Button, {
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
                showAsset: {
                    label: "Show Asset",
                    type: "boolean",
                    defaultValue: !0,
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
            },
        },
    ],
};
