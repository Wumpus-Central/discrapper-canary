var r = n(729605),
    i = n(501953),
    o = n(519723),
    a = n(29461),
    s = n(349446).f,
    l = n(790142),
    c = n(215645),
    u = n(414629),
    d = n(447631),
    f = 'Array Iterator',
    p = a.set,
    _ = a.getterFor(f);
e.exports = l(
    Array,
    'Array',
    function (e, t) {
        p(this, {
            type: f,
            target: r(e),
            index: 0,
            kind: t
        });
    },
    function () {
        var e = _(this),
            t = e.target,
            n = e.index++;
        if (!t || n >= t.length) return (e.target = void 0), c(void 0, !0);
        switch (e.kind) {
            case 'keys':
                return c(n, !1);
            case 'values':
                return c(t[n], !1);
        }
        return c([n, t[n]], !1);
    },
    'values'
);
var h = (o.Arguments = o.Array);
if ((i('keys'), i('values'), i('entries'), !u && d && 'values' !== h.name))
    try {
        s(h, 'name', { value: 'values' });
    } catch (e) {}
