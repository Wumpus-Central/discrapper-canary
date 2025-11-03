n.d(t, { b: () => _ });
var r = n(951288);
n(647438);
var i = n(273352),
    a = n(481060),
    o = n(846027),
    s = n(388032);
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
let u = null;
function d() {
    null !== u && (0, a.Mr3)(u), (u = null);
}
function f() {
    o.Z.setSilenceWarning(!1);
}
function _() {
    u = (0, a.h7j)((e) =>
        (0, r.jsx)(
            i.default,
            c(
                {
                    title: s.intl.string(s.t["zQ1+Jw"]),
                    body: s.intl.string(s.t.K1gWXn),
                    secondaryConfirmText: s.intl.string(s.t.XAiAgD),
                    onConfirmSecondary: f,
                    onConfirm: d,
                    confirmText: s.intl.string(s.t.BddRzS),
                },
                e,
            ),
        ),
    );
}
