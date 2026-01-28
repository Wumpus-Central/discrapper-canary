var o = e(557939),
    n = e(410323),
    a = e(514575),
    i = e(250594),
    s = e(503199),
    u = e(762503),
    l = e(304880),
    f = e(503628),
    c = e(953937),
    p = e(691639),
    v = e(830368),
    h = e(701160),
    d = e(123166),
    y = e(450634),
    g = [],
    x = n(g.sort),
    L = n(g.push),
    m = f(function () {
        g.sort(void 0);
    }),
    S = f(function () {
        g.sort(null);
    }),
    M = p("sort"),
    b = !f(function () {
        if (d) return d < 70;
        if (!v || !(v > 3)) {
            if (h) return !0;
            if (y) return y < 603;
            var t,
                r,
                e,
                o,
                n = "";
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
                for (o = 0; o < 47; o++)
                    g.push({
                        k: r + o,
                        v: e,
                    });
            }
            for (
                g.sort(function (t, r) {
                    return r.v - t.v;
                }),
                    o = 0;
                o < g.length;
                o++
            )
                (r = g[o].k.charAt(0)), n.charAt(n.length - 1) !== r && (n += r);
            return "DGBEFHACIJK" !== n;
        }
    });
o(
    {
        target: "Array",
        proto: !0,
        forced: m || !S || !M || !b,
    },
    {
        sort: function (t) {
            void 0 !== t && a(t);
            var r,
                e,
                o = i(this);
            if (b) return void 0 === t ? x(o) : x(o, t);
            var n = [],
                f = s(o);
            for (e = 0; e < f; e++) e in o && L(n, o[e]);
            for (
                c(n, function (r, e) {
                    return void 0 === e ? -1 : void 0 === r ? 1 : void 0 !== t ? +t(r, e) || 0 : l(r) > l(e) ? 1 : -1;
                }),
                    r = s(n),
                    e = 0;
                e < r;
            )
                o[e] = n[e++];
            for (; e < f; ) u(o, e++);
            return o;
        },
    },
);
