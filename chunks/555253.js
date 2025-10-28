t.d(l, { a: () => i }), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(793030);
let i = {
    title: "VoidSwitch",
    stories: [
        {
            id: "switch",
            name: "Switch",
            component: function (e) {
                var l, t;
                let [i, r] = n.useState(!1);
                return (0, a.jsx)(
                    o.T2P,
                    ((l = (function (e) {
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
                    (t = t =
                        {
                            onChange: r,
                            checked: i,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(t))
                        : (function (e, l) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  t.push.apply(t, a);
                              }
                              return t;
                          })(Object(t)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(t, e));
                          }),
                    l),
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
