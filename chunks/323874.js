"use strict";
var i = n(693655),
    r = n(410323),
    s = n(304880),
    a = n(627),
    o = URLSearchParams,
    l = o.prototype,
    u = r(l.append),
    c = r(l.delete),
    d = r(l.forEach),
    _ = r([].push),
    f = new o("a=1&a=2&b=3");
f.delete("a", 1),
    f.delete("b", void 0),
    f + "" != "a=2" &&
        i(
            l,
            "delete",
            function (e) {
                var t,
                    n = arguments.length,
                    i = n < 2 ? void 0 : arguments[1];
                if (n && void 0 === i) return c(this, e);
                var r = [];
                d(this, function (e, t) {
                    _(r, { key: t, value: e });
                }),
                    a(n, 1);
                for (var o = s(e), l = s(i), f = 0, h = 0, p = !1, E = r.length; f < E; )
                    (t = r[f++]), p || t.key === o ? ((p = !0), c(this, t.key)) : h++;
                for (; h < E; ) ((t = r[h++]).key !== o || t.value !== l) && u(this, t.key, t.value);
            },
            { enumerable: !0, unsafe: !0 },
        );
