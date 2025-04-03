var r = n(147018),
    i = n(581031),
    o = n(526988),
    a = n(339718),
    s = n(49693),
    l = n(708517),
    c = n(714050),
    u = n(936940),
    d = n(976418),
    f = n(191506),
    _ = n(679622),
    p = n(310731),
    h = n(106295),
    m = n(361270),
    g = [],
    E = i(g.sort),
    b = i(g.push),
    y = u(function () {
        g.sort(void 0);
    }),
    v = u(function () {
        g.sort(null);
    }),
    O = f('sort'),
    I = !u(function () {
        if (h) return h < 70;
        if (!_ || !(_ > 3)) {
            if (p) return !0;
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
    S = function (e) {
        return function (t, n) {
            return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : -1;
        };
    };
r(
    {
        target: 'Array',
        proto: !0,
        forced: y || !v || !O || !I
    },
    {
        sort: function (e) {
            void 0 !== e && o(e);
            var t,
                n,
                r = a(this);
            if (I) return void 0 === e ? E(r) : E(r, e);
            var i = [],
                c = s(r);
            for (n = 0; n < c; n++) n in r && b(i, r[n]);
            for (d(i, S(e)), t = s(i), n = 0; n < t; ) r[n] = i[n++];
            for (; n < c; ) l(r, n++);
            return r;
        }
    }
);
