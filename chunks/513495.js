var r = n(834647),
    a = n(414123),
    o = n(457990),
    i = n(958498),
    s = n(965746),
    l = n(287731);
r(
    {
        target: "Object",
        stat: !0,
        sham: !a,
    },
    {
        getOwnPropertyDescriptors: function (e) {
            for (var t, n, r = i(e), a = s.f, c = o(r), u = {}, d = 0; c.length > d; )
                void 0 !== (n = a(r, (t = c[d++]))) && l(u, t, n);
            return u;
        },
    },
);
