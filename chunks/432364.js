var e = n(220159),
    o = n(884805),
    i = n(468790),
    u = n(829575),
    s = n(936839),
    c = n(174344),
    f = n(658971),
    a = n(641623),
    p = n(394370),
    l = n(536448),
    v = n(689933),
    y = l('slice'),
    h = p('species'),
    x = Array,
    d = Math.max;
e(
    {
        target: 'Array',
        proto: !0,
        forced: !y
    },
    {
        slice: function (t, r) {
            var n,
                e,
                p,
                l = f(this),
                y = c(l),
                g = s(t, y),
                b = s(void 0 === r ? y : r, y);
            if (o(l) && (i((n = l.constructor)) && (n === x || o(n.prototype)) ? (n = void 0) : u(n) && null === (n = n[h]) && (n = void 0), n === x || void 0 === n)) return v(l, g, b);
            for (p = 0, e = new (void 0 === n ? x : n)(d(b - g, 0)); g < b; g++, p++) g in l && a(e, p, l[g]);
            return (e.length = p), e;
        }
    }
);
