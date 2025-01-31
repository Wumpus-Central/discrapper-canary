n.d(t, { Z: () => r });
var i = n(570140);
let r = {
    show(e, t, n, r, a) {
        i.Z.dispatch({
            type: 'NOTICE_SHOW',
            notice: {
                id: a,
                type: e,
                message: t,
                buttonText: n,
                callback: r
            }
        });
    },
    dismiss(e) {
        i.Z.dispatch({
            type: 'NOTICE_DISMISS',
            ...e
        });
    }
};
