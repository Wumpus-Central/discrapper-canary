var r = a(77826),
    n = Math.max,
    _ = Math.min;
t.exports = function (t, e) {
    var a = r(t);
    return a < 0 ? n(a + e, 0) : _(a, e);
};
