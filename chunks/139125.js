var r = n(834647),
    a = n(675879),
    o = n(999843),
    i = n(529030),
    s = n(794779),
    l = n(656595),
    c = n(57284),
    u = n(486816),
    d = n(709605),
    p = n(242291),
    h = n(231588),
    f = n(625316),
    m = n(738538),
    y = n(9910),
    v = [],
    g = a(v.sort),
    b = a(v.push),
    A = u(function () {
        v.sort(void 0);
    }),
    _ = u(function () {
        v.sort(null);
    }),
    k = p("sort"),
    C = !u(function () {
        if (m) return m < 70;
        if (!h || !(h > 3)) {
            if (f) return !0;
            if (y) return y < 603;
            var e,
                t,
                n,
                r,
                a = "";
            for (e = 65; e < 76; e++) {
                switch (((t = String.fromCharCode(e)), e)) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        n = 3;
                        break;
                    case 68:
                    case 71:
                        n = 4;
                        break;
                    default:
                        n = 2;
                }
                for (r = 0; r < 47; r++)
                    v.push({
                        k: t + r,
                        v: n,
                    });
            }
            for (
                v.sort(function (e, t) {
                    return t.v - e.v;
                }),
                    r = 0;
                r < v.length;
                r++
            )
                (t = v[r].k.charAt(0)), a.charAt(a.length - 1) !== t && (a += t);
            return "DGBEFHACIJK" !== a;
        }
    });
r(
    {
        target: "Array",
        proto: !0,
        forced: A || !_ || !k || !C,
    },
    {
        sort: function (e) {
            void 0 !== e && o(e);
            var t,
                n,
                r = i(this);
            if (C) return void 0 === e ? g(r) : g(r, e);
            var a = [],
                u = s(r);
            for (n = 0; n < u; n++) n in r && b(a, r[n]);
            for (
                d(a, function (t, n) {
                    return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : -1;
                }),
                    t = s(a),
                    n = 0;
                n < t;
            )
                r[n] = a[n++];
            for (; n < u; ) l(r, n++);
            return r;
        },
    },
);
