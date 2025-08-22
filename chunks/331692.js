i.d(t, { Z: () => r });
var n = i(951288);
i(647438);
var a = i(481060),
    l = i(570140),
    o = i(103879),
    s = i(800530);
let r = {
    open(e, t) {
        (0, a.ZDy)(
            async () => {
                l.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                let { default: t } = await i.e("82961").then(i.bind(i, 751744));
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
            },
            { onCloseCallback: t },
        );
    },
    close() {
        l.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
    },
    success() {
        l.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
    },
    start_verification_check() {
        l.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }), setTimeout(() => (0, o._w)(), s.TX);
    },
};
