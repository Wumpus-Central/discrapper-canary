r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(646391),
    a = r(871074),
    o = r(662939),
    s = r(299188),
    l = r(35972);
function u(e, n, r) {
    if ((0, l.Z)()) {
        var c;
        u = i((c = a)).call(c);
    } else
        u = function (e, n, r) {
            var a = [null];
            o(a).apply(a, n);
            var l = new (i(Function).apply(e, a))();
            return r && (0, s.Z)(l, r.prototype), l;
        };
    return u.apply(null, arguments);
}
