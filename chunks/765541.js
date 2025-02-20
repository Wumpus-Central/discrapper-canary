n.d(t, { Z: () => s });
var r = n(815393),
    i = n(646391),
    o = n(146306),
    a = n(784148);
function s() {
    if ('undefined' != typeof Reflect && r) {
        var e;
        s = i((e = r)).call(e);
    } else
        s = function (e, t, n) {
            var r = (0, a.Z)(e, t);
            if (r) {
                var i = o(r, t);
                return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
            }
        };
    return s.apply(this, arguments);
}
