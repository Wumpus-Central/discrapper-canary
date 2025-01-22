var i = r(486095).charAt,
    a = r(342545),
    o = r(29461),
    s = r(790142),
    l = r(215645),
    u = 'String Iterator',
    c = o.set,
    d = o.getterFor(u);
s(
    String,
    'String',
    function (e) {
        c(this, {
            type: u,
            string: a(e),
            index: 0
        });
    },
    function () {
        var e,
            n = d(this),
            r = n.string,
            a = n.index;
        return a >= r.length ? l(void 0, !0) : ((e = i(r, a)), (n.index += e.length), l(e, !1));
    }
);
