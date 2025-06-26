var n = r(556585),
    i = r(46015),
    s = r(382698),
    a = r(338045),
    o = URLSearchParams,
    u = o.prototype,
    h = i(u.getAll),
    c = i(u.has),
    f = new o('a=1');
(f.has('a', 2) || !f.has('a', void 0)) &&
    n(
        u,
        'has',
        function (t) {
            var e = arguments.length,
                r = e < 2 ? void 0 : arguments[1];
            if (e && void 0 === r) return c(this, t);
            var n = h(this, t);
            a(e, 1);
            for (var i = s(r), o = 0; o < n.length; ) if (n[o++] === i) return !0;
            return !1;
        },
        {
            enumerable: !0,
            unsafe: !0
        }
    );
