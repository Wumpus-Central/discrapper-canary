var n = t(693655),
    o = t(410323),
    a = t(304880),
    i = t(627),
    s = URLSearchParams,
    u = s.prototype,
    l = o(u.getAll),
    d = o(u.has),
    c = new s("a=1");
(c.has("a", 2) || !c.has("a", void 0)) &&
    n(
        u,
        "has",
        function (r) {
            var e = arguments.length,
                t = e < 2 ? void 0 : arguments[1];
            if (e && void 0 === t) return d(this, r);
            var n = l(this, r);
            i(e, 1);
            for (var o = a(t), s = 0; s < n.length; ) if (n[s++] === o) return !0;
            return !1;
        },
        { enumerable: !0, unsafe: !0 },
    );
