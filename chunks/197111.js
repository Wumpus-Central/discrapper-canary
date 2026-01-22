n.d(t, { A: () => s });
var r = n(73153);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
n(436317);
let s = {
    openNativeAppModal(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        r.h.dispatch({
            type: "NATIVE_APP_MODAL_OPENING",
            code: e,
        }),
            Promise.resolve()
                .then(n.bind(n, 129014))
                .then((n) => {
                    let { default: r } = n;
                    r.request(t, a({ code: e }, i))
                        .then((t) => {
                            var n;
                            this.nativeModalOpened(null != (n = null == t ? void 0 : t.code) ? n : e);
                        })
                        .catch(() => this.nativeModalOpenFailed(e))
                        .then(() => r.disconnect());
                });
    },
    nativeModalOpened(e) {
        r.h.dispatch({
            type: "NATIVE_APP_MODAL_OPENED",
            code: e,
        });
    },
    nativeModalOpenFailed(e) {
        r.h.dispatch({
            type: "NATIVE_APP_MODAL_OPEN_FAILED",
            code: e,
        });
    },
};
