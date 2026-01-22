var r = n(557939),
    i = n(517737),
    a = n(503628),
    s = n(607167),
    o = n(101968),
    l = n(273761),
    c = n(370001),
    u = s.ArrayBuffer,
    d = s.DataView,
    f = d.prototype,
    p = i(u.prototype.slice),
    _ = i(f.getUint8),
    h = i(f.setUint8);
r(
    {
        target: "ArrayBuffer",
        proto: !0,
        unsafe: !0,
        forced: a(function () {
            return !new u(2).slice(1, void 0).byteLength;
        }),
    },
    {
        slice: function (e, t) {
            if (p && void 0 === t) return p(o(this), e);
            for (
                var n = o(this).byteLength,
                    r = l(e, n),
                    i = l(void 0 === t ? n : t, n),
                    a = new u(c(i - r)),
                    s = new d(this),
                    f = new d(a),
                    m = 0;
                r < i;
            )
                h(f, m++, _(s, r++));
            return a;
        },
    },
);
