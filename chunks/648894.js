n.d(t, {
    _: () => f,
    g: () => d
}),
    n(47120),
    n(411104);
var r = n(200651),
    i = n(192379),
    o = n(736622);
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
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
let u = i.createContext(void 0),
    d = (e) => {
        let { children: t } = e,
            [n, a] = i.useState({}),
            l = i.useCallback(
                (e) => {
                    if (null != n[e]) return n[e];
                    let t = new o.RiveFile({ src: e });
                    return (
                        t.init(),
                        t.on(o.EventType.Load, () => {
                            a((n) =>
                                c(s({}, n), {
                                    [e]: {
                                        status: 'loaded',
                                        buffer: t.buffer
                                    }
                                })
                            );
                        }),
                        t.on(o.EventType.LoadError, (t) => {
                            console.error('Rive file load error', e, t);
                        }),
                        a((t) =>
                            c(s({}, t), {
                                [e]: {
                                    status: 'loading',
                                    buffer: null
                                }
                            })
                        ),
                        {
                            status: 'loading',
                            buffer: null
                        }
                    );
                },
                [n]
            );
        return (0, r.jsx)(u.Provider, {
            value: { useRiveAsset: l },
            children: t
        });
    };
function f() {
    let e = i.useContext(u);
    if (null == e) throw Error('useRiveContext must be used within a RiveProvider');
    return e;
}
