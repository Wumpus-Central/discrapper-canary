n.d(t, { Z: () => o });
var r = n(570140);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
let o = {
    show(e, t, n, i, a) {
        r.Z.dispatch({
            type: 'NOTICE_SHOW',
            notice: {
                id: a,
                type: e,
                message: t,
                buttonText: n,
                callback: i
            }
        });
    },
    dismiss(e) {
        r.Z.dispatch(a({ type: 'NOTICE_DISMISS' }, e));
    }
};
