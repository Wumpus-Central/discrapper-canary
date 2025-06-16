var r = n(98405),
    i = n(35760),
    a = n(621523),
    o = n(391246),
    s = n(179122),
    l = n(201390),
    c = n(554148),
    u = o.ArrayBuffer,
    d = o.DataView,
    f = d.prototype,
    _ = i(u.prototype.slice),
    p = i(f.getUint8),
    h = i(f.setUint8);
r(
    {
        target: 'ArrayBuffer',
        proto: !0,
        unsafe: !0,
        forced: a(function () {
            return !new u(2).slice(1, void 0).byteLength;
        })
    },
    {
        slice: function (e, t) {
            if (_ && void 0 === t) return _(s(this), e);
            for (var n = s(this).byteLength, r = l(e, n), i = l(void 0 === t ? n : t, n), a = new u(c(i - r)), o = new d(this), f = new d(a), m = 0; r < i; ) h(f, m++, p(o, r++));
            return a;
        }
    }
);
