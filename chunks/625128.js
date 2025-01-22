var i = r(570140),
    a = r(188785);
n.Z = {
    openNativeAppModal(e, n) {
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!a.a)
            i.Z.dispatch({
                type: 'NATIVE_APP_MODAL_OPENING',
                code: e
            }),
                Promise.resolve()
                    .then(r.bind(r, 536285))
                    .then((r) => {
                        let { default: i } = r;
                        i.request(n, {
                            code: e,
                            ...o
                        })
                            .then((n) => {
                                var r;
                                this.nativeModalOpened(null !== (r = null == n ? void 0 : n.code) && void 0 !== r ? r : e);
                            })
                            .catch(() => this.nativeModalOpenFailed(e))
                            .then(() => i.disconnect());
                    });
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
