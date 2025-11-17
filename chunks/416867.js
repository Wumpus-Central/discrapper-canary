n.d(t, { B: () => u });
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(481060),
    o = n(388032);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    let { transitionState: t, title: n, body: a, onClose: s } = e;
    return (0, r.jsx)(i.Modal, {
        title: n,
        actions: [
            {
                text: o.intl.string(o.t["NX+WJN"]),
                onClick: s,
            },
        ],
        transitionState: t,
        onClose: s,
        subtitle: a,
    });
}
function u(e) {
    (0, a.h7j)((t) => (0, r.jsx)(c, l({}, t, e)));
}
