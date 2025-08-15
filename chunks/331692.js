i.d(e, { Z: () => a });
var n = i(255367);
i(73800);
var r = i(481060),
    s = i(570140),
    l = i(103879),
    c = i(800530);
let a = {
    open(t, e) {
        (0, r.ZDy)(
            async () => {
                s.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                let { default: e } = await i.e("82961").then(i.bind(i, 751744));
                return (i) =>
                    (0, n.jsx)(
                        e,
                        (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {},
                                    n = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (e) {
                                        var n;
                                        (n = i[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = n);
                                    });
                            }
                            return t;
                        })({ classificationId: t }, i),
                    );
            },
            { onCloseCallback: e },
        );
    },
    close() {
        s.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
    },
    success() {
        s.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
    },
    start_verification_check() {
        s.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }), setTimeout(() => (0, l._w)(), c.TX);
    },
};
