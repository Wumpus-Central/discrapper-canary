t.d(l, { i: () => r });
var a = t(951288),
    n = t(173511),
    o = t(481060),
    i = t(56413);
let r = {
    title: "Text",
    stories: [
        {
            name: "Text",
            id: "text",
            component: o.Text,
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "text-sm/normal",
                    options: Object.values(n.O).map((e) => ({
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
            component: function (e) {
                return (0, a.jsx)(o.w0Z, {
                    className: i.variants,
                    children: Object.values(n.O).map((l) => {
                        var t, n;
                        return (0, a.jsxs)(
                            o.Zbd,
                            {
                                className: i.card,
                                children: [
                                    (0, a.jsx)(
                                        o.Text,
                                        ((t = (function (e) {
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
                                        })({}, e)),
                                        (n = n =
                                            {
                                                variant: l,
                                                children: e.children,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                            : (function (e, l) {
                                                  var t = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var a = Object.getOwnPropertySymbols(e);
                                                      t.push.apply(t, a);
                                                  }
                                                  return t;
                                              })(Object(n)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                              }),
                                        t),
                                    ),
                                    (0, a.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-secondary",
                                        children: l,
                                    }),
                                ],
                            },
                            l,
                        );
                    }),
                });
            },
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
