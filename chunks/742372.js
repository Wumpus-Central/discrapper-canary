var r = n(486095).charAt,
    i = n(342545),
    o = n(29461),
    a = n(790142),
    s = n(215645),
    l = 'String Iterator',
    c = o.set,
    u = o.getterFor(l);
a(
    String,
    'String',
    function (e) {
        c(this, {
            type: l,
            string: i(e),
            index: 0
        });
    },
    function () {
        var e,
            t = u(this),
            n = t.string,
            i = t.index;
        return i >= n.length ? s(void 0, !0) : ((e = r(n, i)), (t.index += e.length), s(e, !1));
    }
);
