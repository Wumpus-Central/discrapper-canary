r.d(n, {
    u: function () {
        return c;
    }
});
var i = r(964742),
    a = r(304832);
function o(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function s(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? o(Object(r), !0).forEach(function (n) {
                  l(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
var u = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function c() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
        n = arguments.length > 1 ? arguments[1] : void 0,
        r = n.payload;
    switch (n.type) {
        case i.TL:
        case i.qu:
            return {
                initialSourceClientOffset: r.sourceClientOffset,
                initialClientOffset: r.clientOffset,
                clientOffset: r.clientOffset
            };
        case i.$T:
            if ((0, a.YJ)(e.clientOffset, r.clientOffset)) return e;
            return s(s({}, e), {}, { clientOffset: r.clientOffset });
        case i.Bs:
        case i.rp:
            return u;
        default:
            return e;
    }
}
