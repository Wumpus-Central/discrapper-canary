var r = n(439619),
    i = n(142896),
    a = n(870064),
    s = r("%Promise.resolve%", !0),
    o = s && i(s);
e.exports = function (e, t) {
    if (!o) throw new a("This environment does not support Promises.");
    return o(e, t);
};
