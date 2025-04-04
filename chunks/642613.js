var n = e(98405),
    o = e(46015),
    i = e(896471),
    a = e(527160),
    s = e(914331),
    u = e(992032),
    c = e(382698),
    f = e(621523),
    l = e(992914),
    p = e(72570),
    v = e(358932),
    h = e(635464),
    d = e(287353),
    y = e(920542),
    g = [],
    L = o(g.sort),
    m = o(g.push),
    x = f(function () {
        g.sort(void 0);
    }),
    S = f(function () {
        g.sort(null);
    }),
    b = p('sort'),
    k = !f(function () {
        if (d) return d < 70;
        if (!v || !(v > 3)) {
            if (h) return !0;
            if (y) return y < 603;
            var t,
                r,
                e,
                n,
                o = '';
            for (t = 65; t < 76; t++) {
                switch (((r = String.fromCharCode(t)), t)) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        e = 3;
                        break;
                    case 68:
                    case 71:
                        e = 4;
                        break;
                    default:
                        e = 2;
                }
                for (n = 0; n < 47; n++)
                    g.push({
                        k: r + n,
                        v: e
                    });
            }
            for (
                g.sort(function (t, r) {
                    return r.v - t.v;
                }),
                    n = 0;
                n < g.length;
                n++
            )
                (r = g[n].k.charAt(0)), o.charAt(o.length - 1) !== r && (o += r);
            return 'DGBEFHACIJK' !== o;
        }
    });
n(
    {
        target: 'Array',
        proto: !0,
        forced: x || !S || !b || !k
    },
    {
        sort: function (t) {
            void 0 !== t && i(t);
            var r,
                e,
                n = a(this);
            if (k) return void 0 === t ? L(n) : L(n, t);
            var o = [],
                f = s(n);
            for (e = 0; e < f; e++) e in n && m(o, n[e]);
            for (
                l(o, function (r, e) {
                    return void 0 === e ? -1 : void 0 === r ? 1 : void 0 !== t ? +t(r, e) || 0 : c(r) > c(e) ? 1 : -1;
                }),
                    r = s(o),
                    e = 0;
                e < r;

            )
                n[e] = o[e++];
            for (; e < f; ) u(n, e++);
            return n;
        }
    }
);
