var r = n(147018),
    i = n(173850),
    o = n(936940),
    a = n(476579),
    s = n(24033),
    l = n(980855),
    c = n(552028),
    u = n(344135),
    d = a.ArrayBuffer,
    f = a.DataView,
    p = f.prototype,
    _ = i(d.prototype.slice),
    h = i(p.getUint8),
    m = i(p.setUint8);
r(
    {
        target: 'ArrayBuffer',
        proto: !0,
        unsafe: !0,
        forced: o(function () {
            return !new d(2).slice(1, void 0).byteLength;
        })
    },
    {
        slice: function (e, t) {
            if (_ && void 0 === t) return _(s(this), e);
            for (var n = s(this).byteLength, r = l(e, n), i = l(void 0 === t ? n : t, n), o = new (u(this, d))(c(i - r)), a = new f(this), p = new f(o), g = 0; r < i; ) m(p, g++, h(a, r++));
            return o;
        }
    }
);
