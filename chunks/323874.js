"use strict";
var r = n(693655),
    o = n(410323),
    a = n(304880),
    i = n(627),
    u = URLSearchParams,
    s = u.prototype,
    l = o(s.append),
    c = o(s.delete),
    f = o(s.forEach),
    d = o([].push),
    h = new u("a=1&a=2&b=3");
h.delete("a", 1),
    h.delete("b", void 0),
    h + "" != "a=2" &&
        r(
            s,
            "delete",
            function (e) {
                var t,
                    n = arguments.length,
                    r = n < 2 ? void 0 : arguments[1];
                if (n && void 0 === r) return c(this, e);
                var o = [];
                f(this, function (e, t) {
                    d(o, { key: t, value: e });
                }),
                    i(n, 1);
                for (var u = a(e), s = a(r), h = 0, p = 0, v = !1, y = o.length; h < y; )
                    (t = o[h++]), v || t.key === u ? ((v = !0), c(this, t.key)) : p++;
                for (; p < y; ) ((t = o[p++]).key !== u || t.value !== s) && l(this, t.key, t.value);
            },
            { enumerable: !0, unsafe: !0 },
        );
