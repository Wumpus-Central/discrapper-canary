n.d(t, { B: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(954571),
    s = n(646363),
    o = n(652215);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e) {
    let { onConfirm: t } = e;
    a.default.track(o.HAw.OPEN_MODAL, { type: s.C }),
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("52049").then(n.bind(n, 691464));
            return (n) => (0, r.jsx)(e, c({ onConfirm: t }, n));
        });
}
