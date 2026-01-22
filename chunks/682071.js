var n = e(958498),
    o = e(299632),
    s = e(158610),
    i = e(605944),
    u = e(164336).f,
    c = e(735451),
    a = e(739146),
    f = e(780940),
    p = e(414123),
    l = "Array Iterator",
    v = i.set,
    y = i.getterFor(l);
t.exports = c(
    Array,
    "Array",
    function (t, r) {
        v(this, {
            type: l,
            target: n(t),
            index: 0,
            kind: r,
        });
    },
    function () {
        var t = y(this),
            r = t.target,
            e = t.index++;
        if (!r || e >= r.length) return (t.target = null), a(void 0, !0);
        switch (t.kind) {
            case "keys":
                return a(e, !1);
            case "values":
                return a(r[e], !1);
        }
        return a([e, r[e]], !1);
    },
    "values",
);
var h = (s.Arguments = s.Array);
if ((o("keys"), o("values"), o("entries"), !f && p && "values" !== h.name))
    try {
        u(h, "name", {
            value: "values",
        });
    } catch (t) {}
