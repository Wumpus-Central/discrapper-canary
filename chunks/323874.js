"use strict";
var n = e(693655),
    o = e(410323),
    i = e(304880),
    a = e(627),
    c = URLSearchParams,
    u = c.prototype,
    s = o(u.append),
    h = o(u.delete),
    f = o(u.forEach),
    l = o([].push),
    p = new c("a=1&a=2&b=3");
p.delete("a", 1),
    p.delete("b", void 0),
    p + "" != "a=2" &&
        n(
            u,
            "delete",
            function (t) {
                var r,
                    e = arguments.length,
                    n = e < 2 ? void 0 : arguments[1];
                if (e && void 0 === n) return h(this, t);
                var o = [];
                f(this, function (t, r) {
                    l(o, { key: r, value: t });
                }),
                    a(e, 1);
                for (var c = i(t), u = i(n), p = 0, y = 0, v = !1, d = o.length; p < d; )
                    (r = o[p++]), v || r.key === c ? ((v = !0), h(this, r.key)) : y++;
                for (; y < d; ) ((r = o[y++]).key !== c || r.value !== u) && s(this, r.key, r.value);
            },
            { enumerable: !0, unsafe: !0 },
        );
