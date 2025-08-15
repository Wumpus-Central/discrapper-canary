var r = n(146063),
    i = n(967333),
    a = n(933121),
    o = n(199838),
    s = n(117895).f,
    l = n(130006),
    c = n(682564),
    u = n(511696),
    d = n(507604),
    f = "Array Iterator",
    _ = o.set,
    p = o.getterFor(f);
e.exports = l(
    Array,
    "Array",
    function (e, t) {
        _(this, {
            type: f,
            target: r(e),
            index: 0,
            kind: t,
        });
    },
    function () {
        var e = p(this),
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
        s(h, "name", { value: "values" });
    } catch (e) {}
