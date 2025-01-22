r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(173229),
    a = r(369977),
    o = r(195802),
    s = r(299188),
    l = r(626447),
    u = r(176070);
function c(e) {
    var n = 'function' == typeof i ? new i() : void 0;
    return (c = function (e) {
        if (null === e || !(0, l.Z)(e)) return e;
        if ('function' != typeof e) throw TypeError('Super expression must either be null or a function');
        if (void 0 !== n) {
            if (n.has(e)) return n.get(e);
            n.set(e, r);
        }
        function r() {
            return (0, u.Z)(e, arguments, (0, o.Z)(this).constructor);
        }
        return (
            (r.prototype = a(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })),
            (0, s.Z)(r, e)
        );
    })(e);
}
