var r = n(557939),
    i = n(410323),
    a = n(514575),
    o = n(250594),
    s = n(503199),
    l = n(762503),
    c = n(304880),
    u = n(503628),
    d = n(953937),
    f = n(691639),
    p = n(830368),
    _ = n(701160),
    h = n(123166),
    m = n(450634),
    g = [],
    E = i(g.sort),
    y = i(g.push),
    b = u(function () {
        g.sort(void 0);
    }),
    O = u(function () {
        g.sort(null);
    }),
    v = f("sort"),
    A = !u(function () {
        if (h) return h < 70;
        if (!p || !(p > 3)) {
            if (_) return !0;
            if (m) return m < 603;
            var e,
                t,
                n,
                r,
                i = "";
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
                        v: n,
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
            return "DGBEFHACIJK" !== i;
        }
    }),
    I = function (e) {
        return function (t, n) {
            return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : -1;
        };
    };
r(
    {
        target: "Array",
        proto: !0,
        forced: b || !O || !v || !A,
    },
    {
        sort: function (e) {
            void 0 !== e && a(e);
            var t,
                n,
                r = o(this);
            if (A) return void 0 === e ? E(r) : E(r, e);
            var i = [],
                c = s(r);
            for (n = 0; n < c; n++) n in r && y(i, r[n]);
            for (d(i, I(e)), t = s(i), n = 0; n < t; ) r[n] = i[n++];
            for (; n < c; ) l(r, n++);
            return r;
        },
    },
);
