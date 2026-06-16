"use strict";
n.d(t, { A: () => r });
var i = n(228366);
n(436317);
let r = {
    openNativeAppModal(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        i.h.dispatch({ type: "NATIVE_APP_MODAL_OPENING", code: e }),
            Promise.resolve()
                .then(n.bind(n, 129014))
                .then((n) => {
                    let { default: i } = n;
                    i.request(t, { code: e, ...r })
                        .then((t) => {
                            this.nativeModalOpened(t?.code ?? e);
                        })
                        .catch(() => this.nativeModalOpenFailed(e))
                        .then(() => i.disconnect());
                });
    },
    nativeModalOpened(e) {
        i.h.dispatch({ type: "NATIVE_APP_MODAL_OPENED", code: e });
    },
    nativeModalOpenFailed(e) {
        i.h.dispatch({ type: "NATIVE_APP_MODAL_OPEN_FAILED", code: e });
    },
};
