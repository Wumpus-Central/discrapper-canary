n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(837268),
    o = n(32300),
    s = n(371651),
    l = n(3506),
    c = n(794704);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    let t = (0, o.XE)("user_settings"),
        n = (0, i.e7)([s.default], () => s.default.getForcedRenderMode()),
        u = n === a.R5.OUT_OF_PROCESS_V3 || n === a.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return t || u ? (0, r.jsx)(c.Z, d({}, e)) : (0, r.jsx)(l.Z, d({}, e));
}
