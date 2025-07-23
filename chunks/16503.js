n.d(t, { Z: () => l });
var r = n(309805),
    o = n(22520),
    a = n(941528),
    i = n(302885),
    s = n(444653),
    c = n(146640);
function l(e) {
    var t = 'function' == typeof r ? new r() : void 0;
    return (l = function (e) {
        if (null === e || !(0, s.Z)(e)) return e;
        if ('function' != typeof e) throw TypeError('Super expression must either be null or a function');
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
        }
        function n() {
            return (0, c.Z)(e, arguments, (0, a.Z)(this).constructor);
        }
        return (
            (n.prototype = o(e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })),
            (0, i.Z)(n, e)
        );
    })(e);
}
