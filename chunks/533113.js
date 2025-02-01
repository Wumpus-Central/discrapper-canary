var i = n(67867),
    r = n(96403),
    a = n(548828),
    s = n(611345),
    o = n(474883),
    l = n(474505),
    u = n(342545),
    c = n(821819),
    d = n(409851),
    f = n(54659),
    _ = n(949999),
    p = n(301338),
    h = n(882708),
    m = n(407747),
    g = [],
    E = r(g.sort),
    v = r(g.push),
    y = c(function () {
        g.sort(void 0);
    }),
    I = c(function () {
        g.sort(null);
    }),
    T = f('sort'),
    b = !c(function () {
        if (h) return h < 70;
        if (!_ || !(_ > 3)) {
            if (p) return !0;
            if (m) return m < 603;
            var e,
                t,
                n,
                i,
                r = '';
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
                for (i = 0; i < 47; i++)
                    g.push({
                        k: t + i,
                        v: n
                    });
            }
            for (
                g.sort(function (e, t) {
                    return t.v - e.v;
                }),
                    i = 0;
                i < g.length;
                i++
            )
                (t = g[i].k.charAt(0)), r.charAt(r.length - 1) !== t && (r += t);
            return 'DGBEFHACIJK' !== r;
        }
    }),
    S = function (e) {
        return function (t, n) {
            return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : u(t) > u(n) ? 1 : -1;
        };
    };
i(
    {
        target: 'Array',
        proto: !0,
        forced: y || !I || !T || !b
    },
    {
        sort: function (e) {
            void 0 !== e && a(e);
            var t,
                n,
                i = s(this);
            if (b) return void 0 === e ? E(i) : E(i, e);
            var r = [],
                u = o(i);
            for (n = 0; n < u; n++) n in i && v(r, i[n]);
            for (d(r, S(e)), t = o(r), n = 0; n < t; ) i[n] = r[n++];
            for (; n < u; ) l(i, n++);
            return i;
        }
    }
);
