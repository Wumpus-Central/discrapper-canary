var r = n(514119),
    i = n(646344),
    a = "[object AsyncFunction]",
    s = "[object Function]",
    o = "[object GeneratorFunction]",
    l = "[object Proxy]";
e.exports = function (e) {
    if (!i(e)) return !1;
    var t = r(e);
    return t == s || t == o || t == a || t == l;
};
