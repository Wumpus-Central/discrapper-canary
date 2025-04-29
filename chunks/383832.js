n.d(t, { Z: () => a });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(570140),
    l = n(71509);
function a() {
    (0, r.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('52030'), n.e('56782'), n.e('37908')]).then(n.bind(n, 266653));
            return (t) =>
                (0, i.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
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
            modalKey: l.Ui
        }
    );
}
