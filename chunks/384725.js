i.d(t, { Z: () => o });
var n = i(951288);
i(647438);
var a = i(481060),
    l = i(570140);
let o = {
    open(e) {
        l.Z.dispatch({
            type: "SAFETY_HUB_APPEAL_OPEN",
            classificationId: e,
        }),
            (0, a.ZDy)(async () => {
                let { default: t } = await i.e("65652").then(i.bind(i, 208265));
                return (i) =>
                    (0, n.jsx)(
                        t,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = i[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({ classificationId: e }, i),
                    );
            });
    },
    close() {
        l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
    },
};
