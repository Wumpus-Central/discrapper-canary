var e = n(486095).charAt,
    o = n(342545),
    i = n(29461),
    u = n(790142),
    s = n(215645),
    c = 'String Iterator',
    f = i.set,
    a = i.getterFor(c);
u(
    String,
    'String',
    function (t) {
        f(this, {
            type: c,
            string: o(t),
            index: 0
        });
    },
    function () {
        var t,
            r = a(this),
            n = r.string,
            o = r.index;
        return o >= n.length ? s(void 0, !0) : ((t = e(n, o)), (r.index += t.length), s(t, !1));
    }
);
