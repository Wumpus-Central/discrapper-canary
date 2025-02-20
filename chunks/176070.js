n.d(t, { Z: () => l });
var r = n(646391),
    i = n(871074),
    o = n(662939),
    a = n(299188),
    s = n(35972);
function l(e, t, n) {
    if ((0, s.Z)()) {
        var c;
        l = r((c = i)).call(c);
    } else
        l = function (e, t, n) {
            var i = [null];
            o(i).apply(i, t);
            var s = new (r(Function).apply(e, i))();
            return n && (0, a.Z)(s, n.prototype), s;
        };
    return l.apply(null, arguments);
}
