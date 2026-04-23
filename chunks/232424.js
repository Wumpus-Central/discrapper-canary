"use strict";
var r = n(860511),
    i = n(446474),
    s = n(739305),
    a = n(503199),
    o = n(777718),
    l = n(250594),
    u = n(503628),
    c = r.RangeError,
    d = r.Int8Array,
    _ = d && d.prototype,
    f = _ && _.set,
    p = s.aTypedArray,
    h = s.exportTypedArrayMethod,
    E = !u(function () {
        var e = new Uint8ClampedArray(2);
        return i(f, e, { length: 1, 0: 3 }, 1), 3 !== e[1];
    }),
    m =
        E &&
        s.NATIVE_ARRAY_BUFFER_VIEWS &&
        u(function () {
            var e = new d(2);
            return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
        });
h(
    "set",
    function (e) {
        p(this);
        var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = l(e);
        if (E) return i(f, this, n, t);
        var r = this.length,
            s = a(n),
            u = 0;
        if (s + t > r) throw new c("Wrong length");
        for (; u < s; ) this[t + u] = n[u++];
    },
    !E || m,
);
