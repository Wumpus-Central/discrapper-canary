"use strict";
n.d(t, { T: () => l });
var r = n(317374),
    i = n(492597);
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? s(Object(n), !0).forEach(function (t) {
                  var r, i, s;
                  (r = e),
                      (i = t),
                      (s = n[t]),
                      i in r
                          ? Object.defineProperty(r, i, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (r[i] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var o = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null };
function l() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = t.payload;
    switch (t.type) {
        case r.KR:
        case r.Vw:
            return {
                initialSourceClientOffset: n.sourceClientOffset,
                initialClientOffset: n.clientOffset,
                clientOffset: n.clientOffset,
            };
        case r.l6:
            if ((0, i.Xf)(e.clientOffset, n.clientOffset)) return e;
            return a(a({}, e), {}, { clientOffset: n.clientOffset });
        case r.dU:
        case r.q2:
            return o;
        default:
            return e;
    }
}
