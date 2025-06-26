var n = r(471540).charAt,
    i = r(382698),
    s = r(199838),
    a = r(130006),
    o = r(682564),
    u = 'String Iterator',
    h = s.set,
    c = s.getterFor(u);
a(
    String,
    'String',
    function (t) {
        h(this, {
            type: u,
            string: i(t),
            index: 0
        });
    },
    function () {
        var t,
            e = c(this),
            r = e.string,
            i = e.index;
        return i >= r.length ? o(void 0, !0) : ((t = n(r, i)), (e.index += t.length), o(t, !1));
    }
);
