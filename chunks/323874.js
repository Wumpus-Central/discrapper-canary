"use strict";
var r = n(693655),
    i = n(410323),
    s = n(304880),
    a = n(627),
    o = URLSearchParams,
    l = o.prototype,
    u = i(l.append),
    c = i(l.delete),
    d = i(l.forEach),
    _ = i([].push),
    f = new o("a=1&a=2&b=3");
f.delete("a", 1),
    f.delete("b", void 0),
    f + "" != "a=2" &&
        r(
            l,
            "delete",
            function (e) {
                var t,
                    n = arguments.length,
                    r = n < 2 ? void 0 : arguments[1];
                if (n && void 0 === r) return c(this, e);
                var i = [];
                d(this, function (e, t) {
                    _(i, { key: t, value: e });
                }),
                    a(n, 1);
                for (var o = s(e), l = s(r), f = 0, p = 0, h = !1, m = i.length; f < m; )
                    (t = i[f++]), h || t.key === o ? ((h = !0), c(this, t.key)) : p++;
                for (; p < m; ) ((t = i[p++]).key !== o || t.value !== l) && u(this, t.key, t.value);
            },
            { enumerable: !0, unsafe: !0 },
        );
