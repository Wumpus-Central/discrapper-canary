n.d(t, { D: () => c });
var r = n(255367);
n(73800);
var i = n(481060);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            }));
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = {
    title: 'Tooltips',
    stories: [
        {
            name: 'Tooltip',
            id: 'tooltip',
            component: function (e) {
                return (0, r.jsx)(
                    i.ua7,
                    l(o({}, e), {
                        children: (e) =>
                            (0, r.jsx)(
                                i.zxk,
                                o(
                                    {
                                        variant: 'primary',
                                        text: 'Tooltip Trigger'
                                    },
                                    e
                                )
                            )
                    })
                );
            },
            controls: {
                text: {
                    label: 'Tooltip Text',
                    type: 'text',
                    defaultValue: "Here's some helpful tooltip text!"
                },
                position: {
                    label: 'Position',
                    type: 'select',
                    defaultValue: 'top',
                    options: [
                        {
                            label: 'Top',
                            value: 'top'
                        },
                        {
                            label: 'Bottom',
                            value: 'bottom'
                        },
                        {
                            label: 'Left',
                            value: 'left'
                        },
                        {
                            label: 'Right',
                            value: 'right'
                        }
                    ]
                },
                allowOverflow: {
                    label: 'Allow Overflow',
                    type: 'boolean',
                    defaultValue: !1
                },
                spacing: {
                    label: 'Spacing',
                    type: 'number',
                    defaultValue: 8
                },
                color: {
                    label: 'Color',
                    type: 'select',
                    defaultValue: i.FGA.PRIMARY,
                    options: Object.keys(i.FGA).map((e) => ({
                        label: e,
                        value: i.FGA[e]
                    }))
                }
            }
        }
    ]
};
