var r = n(556585),
    i = n(46015),
    o = n(382698),
    a = n(338045),
    s = URLSearchParams,
    l = s.prototype,
    c = i(l.getAll),
    u = i(l.has),
    d = new s('a=1');
(d.has('a', 2) || !d.has('a', void 0)) &&
    r(
        l,
        'has',
        function (e) {
            var t = arguments.length,
                n = t < 2 ? void 0 : arguments[1];
            if (t && void 0 === n) return u(this, e);
            var r = c(this, e);
            a(t, 1);
            for (var i = o(n), s = 0; s < r.length; ) if (r[s++] === i) return !0;
            return !1;
        },
        {
            enumerable: !0,
            unsafe: !0
        }
    );
