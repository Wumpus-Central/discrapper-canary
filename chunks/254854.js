n.d(t, { Z: () => a });
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
function o(e) {
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
let a = {
    show(e, t, n, i, o) {
        r.Z.dispatch({
            type: 'NOTICE_SHOW',
            notice: {
                id: o,
                type: e,
                message: t,
                buttonText: n,
                callback: i
            }
        });
    },
    dismiss(e) {
        r.Z.dispatch(o({ type: 'NOTICE_DISMISS' }, e));
    }
};
