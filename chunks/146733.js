var r = n(98405),
    i = n(35760),
    o = n(621523),
    a = n(391246),
    s = n(179122),
    l = n(201390),
    c = n(554148),
    u = a.ArrayBuffer,
    d = a.DataView,
    f = d.prototype,
    _ = i(u.prototype.slice),
    p = i(f.getUint8),
    h = i(f.setUint8);
r(
    {
        target: 'ArrayBuffer',
        proto: !0,
        unsafe: !0,
        forced: o(function () {
            return !new u(2).slice(1, void 0).byteLength;
        })
    },
    {
        slice: function (e, t) {
            if (_ && void 0 === t) return _(s(this), e);
            for (var n = s(this).byteLength, r = l(e, n), i = l(void 0 === t ? n : t, n), o = new u(c(i - r)), a = new d(this), f = new d(o), m = 0; r < i; ) h(f, m++, p(a, r++));
            return o;
        }
    }
);
