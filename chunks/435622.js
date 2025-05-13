var r = n(471540).charAt,
    i = n(382698),
    a = n(199838),
    o = n(130006),
    s = n(682564),
    l = 'String Iterator',
    c = a.set,
    u = a.getterFor(l);
o(
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
