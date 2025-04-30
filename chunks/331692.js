n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(570140),
    r = n(103879),
    o = n(800530);
let s = {
    open(e, t) {
        (0, a.ZDy)(
            async () => {
                l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN' });
                let { default: t } = await n.e('82961').then(n.bind(n, 751744));
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
            },
            { onCloseCallback: t }
        );
    },
    close() {
        l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE' });
    },
    success() {
        l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS' });
    },
    start_verification_check() {
        l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL' }), setTimeout(() => (0, r._w)(), o.TX);
    }
};
