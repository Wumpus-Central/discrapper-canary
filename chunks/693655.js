var n = e(339626),
    o = e(4940),
    i = e(313400),
    u = e(88388);
r.exports = function (r, t, e, a) {
    a || (a = {});
    var c = a.enumerable,
        f = void 0 !== a.name ? a.name : t;
    if ((n(e) && i(e, f, a), a.global)) c ? (r[t] = e) : u(t, e);
    else {
        try {
            a.unsafe ? r[t] && (c = !0) : delete r[t];
        } catch (r) {}
        c
            ? (r[t] = e)
            : o.f(r, t, { value: e, enumerable: !1, configurable: !a.nonConfigurable, writable: !a.nonWritable });
    }
    return r;
};
