n.d(t, { Z: () => o });
var i = n(815393),
    r = n(646391),
    a = n(146306),
    s = n(784148);
function o() {
    if ('undefined' != typeof Reflect && i) {
        var e;
        o = r((e = i)).call(e);
    } else
        o = function (e, t, n) {
            var i = (0, s.Z)(e, t);
            if (i) {
                var r = a(i, t);
                return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value;
            }
        };
    return o.apply(this, arguments);
}
