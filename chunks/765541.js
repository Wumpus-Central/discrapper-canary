r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(815393),
    a = r(646391),
    o = r(146306),
    s = r(784148);
function l() {
    if ('undefined' != typeof Reflect && i) {
        var e;
        l = a((e = i)).call(e);
    } else
        l = function (e, n, r) {
            var i = (0, s.Z)(e, n);
            if (i) {
                var a = o(i, n);
                return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
        };
    return l.apply(this, arguments);
}
