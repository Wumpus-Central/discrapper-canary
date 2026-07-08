var n = e(339626),
    o = e(4940),
    i = e(313400),
    a = e(88388);
r.exports = function (r, t, e, u) {
    u || (u = {});
    var c = u.enumerable,
        f = void 0 !== u.name ? u.name : t;
    if ((n(e) && i(e, f, u), u.global)) c ? (r[t] = e) : a(t, e);
    else {
        try {
            u.unsafe ? r[t] && (c = !0) : delete r[t];
        } catch (r) {}
        c
            ? (r[t] = e)
            : o.f(r, t, { value: e, enumerable: !1, configurable: !u.nonConfigurable, writable: !u.nonWritable });
    }
    return r;
};
