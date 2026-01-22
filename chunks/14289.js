var r = n(693655),
    i = n(410323),
    a = n(304880),
    s = n(627),
    o = URLSearchParams,
    l = o.prototype,
    c = i(l.getAll),
    u = i(l.has),
    d = new o("a=1");
(d.has("a", 2) || !d.has("a", void 0)) &&
    r(
        l,
        "has",
        function (e) {
            var t = arguments.length,
                n = t < 2 ? void 0 : arguments[1];
            if (t && void 0 === n) return u(this, e);
            var r = c(this, e);
            s(t, 1);
            for (var i = a(n), o = 0; o < r.length; ) if (r[o++] === i) return !0;
            return !1;
        },
        {
            enumerable: !0,
            unsafe: !0,
        },
    );
