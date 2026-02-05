"use strict";
n.d(t, { A: () => i });
var r = n(73153);
n(436317);
let i = {
    openNativeAppModal(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        r.h.dispatch({ type: "NATIVE_APP_MODAL_OPENING", code: e }),
            Promise.resolve()
                .then(n.bind(n, 129014))
                .then((n) => {
                    let { default: r } = n;
                    r.request(t, { code: e, ...i })
                        .then((t) => {
                            this.nativeModalOpened(t?.code ?? e);
                        })
                        .catch(() => this.nativeModalOpenFailed(e))
                        .then(() => r.disconnect());
                });
    },
    nativeModalOpened(e) {
        r.h.dispatch({ type: "NATIVE_APP_MODAL_OPENED", code: e });
    },
    nativeModalOpenFailed(e) {
        r.h.dispatch({ type: "NATIVE_APP_MODAL_OPEN_FAILED", code: e });
    },
};
