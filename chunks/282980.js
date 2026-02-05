"use strict";
n.d(t, { A: () => c });
var r = n(917269),
    a = n(773520),
    o = n(807583),
    i = n(878379),
    s = n(504183),
    l = n(621047);
function c(e) {
    var t = "function" == typeof r ? new r() : void 0;
    return (c = function (e) {
        if (null === e || !(0, s.A)(e)) return e;
        if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
        }
        function n() {
            return (0, l.A)(e, arguments, (0, o.A)(this).constructor);
        }
        return (
            (n.prototype = a(e.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
            })),
            (0, i.A)(n, e)
        );
    })(e);
}
