n.d(t, { j: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(559868);
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
function o(e) {
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
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (!e && (0, i.ueM)()) ||
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("50737").then(n.bind(n, 88872));
                return (t) => (0, r.jsx)(e, o({}, t));
            },
            { modalKey: a.lb },
        );
}
