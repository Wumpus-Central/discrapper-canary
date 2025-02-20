var r = n(67867),
    i = n(96403),
    o = n(548828),
    a = n(611345),
    s = n(474883),
    l = n(591782),
    c = n(342545),
    u = n(821819),
    d = n(409851),
    f = n(54659),
    p = n(949999),
    _ = n(301338),
    h = n(882708),
    m = n(407747),
    g = [],
    E = i(g.sort),
    v = i(g.push),
    b = u(function () {
        g.sort(void 0);
    }),
    y = u(function () {
        g.sort(null);
    }),
    O = f('sort'),
    S = !u(function () {
        if (h) return h < 70;
        if (!p || !(p > 3)) {
            if (_) return !0;
            if (m) return m < 603;
            var e,
                t,
                n,
                r,
                i = '';
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
                    g.push({
                        k: t + r,
                        v: n
                    });
            }
            for (
                g.sort(function (e, t) {
                    return t.v - e.v;
                }),
                    r = 0;
                r < g.length;
                r++
            )
                (t = g[r].k.charAt(0)), i.charAt(i.length - 1) !== t && (i += t);
            return 'DGBEFHACIJK' !== i;
        }
    }),
    I = function (e) {
        return function (t, n) {
            return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : -1;
        };
    };
r(
    {
        target: 'Array',
        proto: !0,
        forced: b || !y || !O || !S
    },
    {
        sort: function (e) {
            void 0 !== e && o(e);
            var t,
                n,
                r = a(this);
            if (S) return void 0 === e ? E(r) : E(r, e);
            var i = [],
                c = s(r);
            for (n = 0; n < c; n++) n in r && v(i, r[n]);
            for (d(i, I(e)), t = s(i), n = 0; n < t; ) r[n] = i[n++];
            for (; n < c; ) l(r, n++);
            return r;
        }
    }
);
