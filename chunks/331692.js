n.d(e, { Z: () => s });
var i = n(951288);
n(647438);
var r = n(481060),
    o = n(570140),
    l = n(103879),
    a = n(800530);
let s = {
    open(t, e) {
        (0, r.ZDy)(
            async () => {
                o.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                let { default: e } = await n.e("82961").then(n.bind(n, 751744));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (e) {
                                        var i;
                                        (i = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = i);
                                    });
                            }
                            return t;
                        })({ classificationId: t }, n),
                    );
            },
            { onCloseCallback: e },
        );
    },
    close() {
        o.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
    },
    success() {
        o.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
    },
    start_verification_check() {
        o.Z.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }), setTimeout(() => (0, l._w)(), a.TX);
    },
};
