n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(570140);
let r = {
    open(e) {
        l.Z.dispatch({
            type: 'SAFETY_HUB_APPEAL_OPEN',
            classificationId: e
        }),
            (0, a.ZDy)(async () => {
                let { default: t } = await n.e('65652').then(n.bind(n, 208265));
                return (n) =>
                    (0, i.jsx)(
                        t,
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
                        })({ classificationId: e }, n)
                    );
            });
    },
    close() {
        l.Z.dispatch({ type: 'SAFETY_HUB_APPEAL_CLOSE' });
    }
};
