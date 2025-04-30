n.r(t),
    n.d(t, {
        showModal: () => c,
        updateModalProps: () => u
    });
var r = n(200651);
n(192379);
var i = n(952265),
    o = n(712364);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
let l = (e, t, n) =>
    function (i) {
        return (0, r.jsx)(
            o.Z,
            s(
                {
                    handleSubmit: e,
                    handleEarlyClose: t
                },
                n,
                i
            )
        );
    };
function c(e, t, n) {
    return (0, i.h7)(l(e, t, n), { onCloseCallback: t });
}
function u(e, t, n, r) {
    return (0, i.o)(e, l(t, n, r));
}
