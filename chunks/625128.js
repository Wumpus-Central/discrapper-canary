n.d(t, { Z: () => a });
var i = n(570140),
    r = n(188785);
let a = {
    openNativeAppModal(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        !r.a &&
            (i.Z.dispatch({
                type: 'NATIVE_APP_MODAL_OPENING',
                code: e
            }),
            Promise.resolve()
                .then(n.bind(n, 536285))
                .then((n) => {
                    let { default: i } = n;
                    i.request(t, {
                        code: e,
                        ...a
                    })
                        .then((t) => {
                            var n;
                            this.nativeModalOpened(null !== (n = null == t ? void 0 : t.code) && void 0 !== n ? n : e);
                        })
                        .catch(() => this.nativeModalOpenFailed(e))
                        .then(() => i.disconnect());
                }));
    },
    nativeModalOpened(e) {
        i.Z.dispatch({
            type: 'NATIVE_APP_MODAL_OPENED',
            code: e
        });
    },
    nativeModalOpenFailed(e) {
        i.Z.dispatch({
            type: 'NATIVE_APP_MODAL_OPEN_FAILED',
            code: e
        });
    }
};
