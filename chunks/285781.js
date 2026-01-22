n.d(t, {
    U: () => u,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954);

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

function o(e) {
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

function l(e, t) {
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

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {
    title: "VoidSwitch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                let [t, n] = i.useState(!1);
                return (0, r.jsx)(
                    a.TOt,
                    c(
                        o(
                            {
                                "data-migration-pending": !0,
                            },
                            e,
                        ),
                        {
                            onChange: n,
                            checked: t,
                        },
                    ),
                );
            },
            controls: {
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Switch Label",
                },
                description: {
                    type: "text",
                    label: "Description",
                    defaultValue: "This is the description for the switch",
                },
                required: {
                    type: "boolean",
                    label: "Required",
                    defaultValue: !1,
                },
            },
        },
    ],
};
