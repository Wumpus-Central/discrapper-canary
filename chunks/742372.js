var i = n(486095).charAt,
    r = n(342545),
    a = n(29461),
    s = n(790142),
    o = n(215645),
    l = 'String Iterator',
    u = a.set,
    c = a.getterFor(l);
s(
    String,
    'String',
    function (e) {
        u(this, {
            type: l,
            string: r(e),
            index: 0
        });
    },
    function () {
        var e,
            t = c(this),
            n = t.string,
            r = t.index;
        return r >= n.length ? o(void 0, !0) : ((e = i(n, r)), (t.index += e.length), o(e, !1));
    }
);
