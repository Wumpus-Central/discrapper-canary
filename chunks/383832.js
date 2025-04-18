n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(570140),
    a = n(71509);
function l() {
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('52030'), n.e('56782'), n.e('37908')]).then(n.bind(n, 266653));
            return (t) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, t)
                );
        },
        {
            onCloseCallback: () => {
                s.Z.dispatch({
                    type: 'LOGIN_RESET',
                    isMultiAccount: !0
                });
            },
            modalKey: a.Ui
        }
    );
}
