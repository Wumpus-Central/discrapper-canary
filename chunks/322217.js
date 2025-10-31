n.d(t, { i: () => f });
var r = n(951288),
    i = n(173511),
    a = n(481060),
    o = n(56413);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    return (0, r.jsx)(a.w0Z, {
        className: o.variants,
        children: Object.values(i.O).map((t) =>
            (0, r.jsxs)(
                a.Zbd,
                {
                    className: o.card,
                    children: [
                        (0, r.jsx)(
                            a.Text,
                            u(l({}, e), {
                                variant: t,
                                children: e.children,
                            }),
                        ),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: t,
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
let f = {
    title: "Text",
    stories: [
        {
            name: "Text",
            id: "text",
            component: a.Text,
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "text-sm/normal",
                    options: Object.values(i.O).map((e) => ({
                        label: e,
                        value: e,
                    })),
                },
                color: {
                    label: "Color",
                    type: "select",
                    defaultValue: "text-primary",
                    options: [
                        {
                            label: "Text Primary",
                            value: "text-primary",
                        },
                        {
                            label: "Text Secondary",
                            value: "text-secondary",
                        },
                        {
                            label: "Text Tertiary",
                            value: "text-tertiary",
                        },
                        {
                            label: "Text Muted",
                            value: "text-muted",
                        },
                        {
                            label: "Header Primary",
                            value: "header-primary",
                        },
                        {
                            label: "Header Secondary",
                            value: "header-secondary",
                        },
                        {
                            label: "Header Muted",
                            value: "header-muted",
                        },
                        {
                            label: "Feedback Positive",
                            value: "text-feedback-positive",
                        },
                        {
                            label: "Feedback Critical",
                            value: "text-feedback-critical",
                        },
                        {
                            label: "Feedback Warning",
                            value: "text-feedback-warning",
                        },
                        {
                            label: "Feedback Info",
                            value: "text-feedback-info",
                        },
                    ],
                },
                children: {
                    label: "Text",
                    type: "text",
                    defaultValue: "Hello, world!",
                },
            },
        },
        {
            name: "Typography Scales",
            id: "text-scales",
            component: d,
            controls: {
                children: {
                    label: "Text",
                    type: "text",
                    defaultValue: "Hello, world!",
                },
            },
        },
    ],
};
