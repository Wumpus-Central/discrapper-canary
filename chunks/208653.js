var r = n(745872),
    i = n(638934),
    a = n(429675),
    o = r('%Promise.resolve%', !0),
    s = o && i(o);
e.exports = function (e, t) {
    if (!s) throw new a('This environment does not support Promises.');
    return s(e, t);
};
