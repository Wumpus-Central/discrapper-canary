var i = r(570140);
n.Z = {
    show(e, n, r, a, o) {
        i.Z.dispatch({
            type: 'NOTICE_SHOW',
            notice: {
                id: o,
                type: e,
                message: n,
                buttonText: r,
                callback: a
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
