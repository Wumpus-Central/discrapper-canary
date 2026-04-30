"use strict";
var i = n(339626),
    r = n(4940),
    s = n(313400),
    a = n(88388);
e.exports = function (e, t, n, o) {
    o || (o = {});
    var l = o.enumerable,
        u = void 0 !== o.name ? o.name : t;
    if ((i(n) && s(n, u, o), o.global)) l ? (e[t] = n) : a(t, n);
    else {
        try {
            o.unsafe ? e[t] && (l = !0) : delete e[t];
        } catch (e) {}
        l
            ? (e[t] = n)
            : r.f(e, t, { value: n, enumerable: !1, configurable: !o.nonConfigurable, writable: !o.nonWritable });
    }
    return e;
};
