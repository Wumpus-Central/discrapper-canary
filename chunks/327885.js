n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(615287),
    l = n(32300),
    a = n(371651),
    o = n(3506),
    c = n(794704);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function u(e) {
    let t = (0, l.XE)('user_settings'),
        n = (0, r.e7)([a.default], () => a.default.getForcedRenderMode()),
        u = n === s.R5.OUT_OF_PROCESS_V3 || n === s.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return t || u ? (0, i.jsx)(c.Z, d({}, e)) : (0, i.jsx)(o.Z, d({}, e));
}
