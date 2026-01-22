var r = n(581390),
    i = n(633228),
    a = n(70670),
    s = n(883972),
    o = n(4940).f,
    l = n(661495),
    c = n(503902),
    u = n(105712),
    d = n(257943),
    f = "Array Iterator",
    p = s.set,
    _ = s.getterFor(f);
e.exports = l(
    Array,
    "Array",
    function (e, t) {
        p(this, {
            type: f,
            target: r(e),
            index: 0,
            kind: t,
        });
    },
    function () {
        var e = _(this),
            t = e.target,
            n = e.index++;
        if (!t || n >= t.length) return (e.target = null), c(void 0, !0);
        switch (e.kind) {
            case "keys":
                return c(n, !1);
            case "values":
                return c(t[n], !1);
        }
        return c([n, t[n]], !1);
    },
    "values",
);
var h = (a.Arguments = a.Array);
if ((i("keys"), i("values"), i("entries"), !u && d && "values" !== h.name))
    try {
        o(h, "name", { value: "values" });
    } catch (e) {}
