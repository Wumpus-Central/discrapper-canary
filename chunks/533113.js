var i = r(67867),
    a = r(96403),
    o = r(548828),
    s = r(611345),
    l = r(474883),
    u = r(474505),
    c = r(342545),
    d = r(821819),
    f = r(409851),
    p = r(54659),
    h = r(949999),
    _ = r(301338),
    m = r(882708),
    g = r(407747),
    E = [],
    v = a(E.sort),
    y = a(E.push),
    b = d(function () {
        E.sort(void 0);
    }),
    I = d(function () {
        E.sort(null);
    }),
    T = p('sort'),
    S = !d(function () {
        if (m) return m < 70;
        if (!h || !(h > 3)) {
            if (_) return !0;
            if (g) return g < 603;
            var e,
                n,
                r,
                i,
                a = '';
            for (e = 65; e < 76; e++) {
                switch (((n = String.fromCharCode(e)), e)) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        r = 3;
                        break;
                    case 68:
                    case 71:
                        r = 4;
                        break;
                    default:
                        r = 2;
                }
                for (i = 0; i < 47; i++)
                    E.push({
                        k: n + i,
                        v: r
                    });
            }
            for (
                E.sort(function (e, n) {
                    return n.v - e.v;
                }),
                    i = 0;
                i < E.length;
                i++
            )
                (n = E[i].k.charAt(0)), a.charAt(a.length - 1) !== n && (a += n);
            return 'DGBEFHACIJK' !== a;
        }
    }),
    A = function (e) {
        return function (n, r) {
            return void 0 === r ? -1 : void 0 === n ? 1 : void 0 !== e ? +e(n, r) || 0 : c(n) > c(r) ? 1 : -1;
        };
    };
i(
    {
        target: 'Array',
        proto: !0,
        forced: b || !I || !T || !S
    },
    {
        sort: function (e) {
            void 0 !== e && o(e);
            var n,
                r,
                i = s(this);
            if (S) return void 0 === e ? v(i) : v(i, e);
            var a = [],
                c = l(i);
            for (r = 0; r < c; r++) r in i && y(a, i[r]);
            for (f(a, A(e)), n = l(a), r = 0; r < n; ) i[r] = a[r++];
            for (; r < c; ) u(i, r++);
            return i;
        }
    }
);
