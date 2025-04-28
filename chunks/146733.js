var e = r(98405),
    o = r(35760),
    i = r(621523),
    u = r(391246),
    c = r(179122),
    a = r(201390),
    f = r(554148),
    s = u.ArrayBuffer,
    l = u.DataView,
    p = l.prototype,
    d = o(s.prototype.slice),
    _ = o(p.getUint8),
    h = o(p.setUint8);
e(
    {
        target: 'ArrayBuffer',
        proto: !0,
        unsafe: !0,
        forced: i(function () {
            return !new s(2).slice(1, void 0).byteLength;
        })
    },
    {
        slice: function (t, n) {
            if (d && void 0 === n) return d(c(this), t);
            for (var r = c(this).byteLength, e = a(t, r), o = a(void 0 === n ? r : n, r), i = new s(f(o - e)), u = new l(this), p = new l(i), y = 0; e < o; ) h(p, y++, _(u, e++));
            return i;
        }
    }
);
