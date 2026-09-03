var n = r(439619),
    i = r(142896),
    o = r(870064),
    a = n("%Promise.resolve%", !0),
    s = a && i(a);
e.exports = function (e, t) {
    if (!s) throw new o("This environment does not support Promises.");
    return s(e, t);
};
