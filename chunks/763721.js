(n.d(t, { z: () => _ }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(377089);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e, t) {
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
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let _ = {
    title: 'Input Components',
    stories: [
        {
            name: 'TextInput',
            component: function (e) {
                var { leading: t, trailing: n } = e,
                    s = d(e, ['leading', 'trailing']);
                let [c, f] = i.useState(''),
                    _ = (0, o.U)('UserSettingsDesignSystems');
                return (0, r.jsx)(
                    a.oil,
                    u(l({}, s), {
                        value: c,
                        onChange: f,
                        leading: _ && t ? (0, r.jsx)(a.qJs, { size: 'sm' }) : void 0,
                        trailing: _ && n ? (0, r.jsx)(a.lOy, { size: 'sm' }) : void 0
                    })
                );
            },
            id: 'text-input',
            controls: {
                placeholder: {
                    label: 'Placeholder',
                    type: 'text',
                    defaultValue: 'Enter some text...'
                },
                disabled: {
                    label: 'Disabled',
                    type: 'boolean',
                    defaultValue: !1
                },
                editable: {
                    label: 'Editable',
                    type: 'boolean',
                    defaultValue: !0
                },
                error: {
                    label: 'Has Error',
                    type: 'text',
                    defaultValue: ''
                },
                minLength: {
                    label: 'Min Length',
                    type: 'number',
                    defaultValue: 0
                },
                type: {
                    label: 'Input Type',
                    type: 'select',
                    defaultValue: 'text',
                    options: [
                        {
                            label: 'Text',
                            value: 'text'
                        },
                        {
                            label: 'Password',
                            value: 'password'
                        },
                        {
                            label: 'Email',
                            value: 'email'
                        },
                        {
                            label: 'Number',
                            value: 'number'
                        }
                    ]
                },
                leading: {
                    label: 'Leading',
                    type: 'boolean',
                    defaultValue: !1
                },
                trailing: {
                    label: 'Trailing',
                    type: 'boolean',
                    defaultValue: !1
                }
            }
        },
        {
            name: 'SearchBar',
            component: function (e) {
                let [t, n] = i.useState('');
                return (0, r.jsx)(
                    a.E1j,
                    u(l({}, e), {
                        query: t,
                        onChange: n,
                        onClear: () => n('')
                    })
                );
            },
            id: 'search-bar',
            controls: {
                placeholder: {
                    label: 'Placeholder',
                    type: 'text',
                    defaultValue: 'Search...'
                },
                size: {
                    label: 'Size',
                    type: 'select',
                    defaultValue: 'md',
                    options: [
                        {
                            label: 'Small',
                            value: 'sm'
                        },
                        {
                            label: 'Medium',
                            value: 'md'
                        }
                    ]
                },
                isLoading: {
                    label: 'Is Loading',
                    type: 'boolean',
                    defaultValue: !1
                },
                disabled: {
                    label: 'Disabled',
                    type: 'boolean',
                    defaultValue: !1
                }
            }
        },
        {
            name: 'TextArea',
            id: 'text-area',
            component: function (e) {
                let [t, n] = i.useState('');
                return (0, r.jsx)(
                    a.Kx8,
                    u(l({}, e), {
                        value: t,
                        onChange: n
                    })
                );
            },
            controls: {
                placeholder: {
                    label: 'Placeholder',
                    type: 'text',
                    defaultValue: 'Enter your message...'
                },
                showCharacterCount: {
                    label: 'Show Character Count',
                    type: 'boolean',
                    defaultValue: !1
                },
                disabled: {
                    label: 'Disabled',
                    type: 'boolean',
                    defaultValue: !1
                },
                error: {
                    label: 'Error',
                    type: 'text',
                    defaultValue: void 0
                },
                rows: {
                    label: 'Rows',
                    type: 'number',
                    defaultValue: 4
                },
                maxLength: {
                    label: 'Max Length',
                    type: 'number',
                    defaultValue: 1000
                }
            }
        }
    ]
};
