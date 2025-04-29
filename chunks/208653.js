var r = n(745872),
    i = n(638934),
    o = n(429675),
    a = r('%Promise.resolve%', !0),
    s = a && i(a);
e.exports = function (e, t) {
    if (!s) throw new o('This environment does not support Promises.');
    return s(e, t);
};
