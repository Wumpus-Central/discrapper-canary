n.d(t, { Z: () => l });
var i = n(646391),
    r = n(871074),
    a = n(662939),
    s = n(299188),
    o = n(35972);
function l(e, t, n) {
    if ((0, o.Z)()) {
        var u;
        l = i((u = r)).call(u);
    } else
        l = function (e, t, n) {
            var r = [null];
            a(r).apply(r, t);
            var o = new (i(Function).apply(e, r))();
            return n && (0, s.Z)(o, n.prototype), o;
        };
    return l.apply(null, arguments);
}
