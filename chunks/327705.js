n.d(t, { z: () => c });
var r = n(200651);
n(192379);
var i = n(723938),
    o = n(931989),
    a = n(648894);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    let { useRiveAsset: t } = (0, a._)(),
        { status: n, buffer: s } = t(i.Z);
    return 'loading' === n ? null : (0, r.jsx)(o.Z, l({ buffer: s }, e));
}
