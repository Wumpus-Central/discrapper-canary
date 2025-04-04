var r = n(471540).charAt,
    i = n(382698),
    o = n(199838),
    a = n(130006),
    s = n(682564),
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
