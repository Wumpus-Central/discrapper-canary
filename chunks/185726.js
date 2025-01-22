var i = r(729605),
    a = r(501953),
    o = r(519723),
    s = r(29461),
    l = r(349446).f,
    u = r(790142),
    c = r(215645),
    d = r(414629),
    f = r(447631),
    p = 'Array Iterator',
    h = s.set,
    _ = s.getterFor(p);
e.exports = u(
    Array,
    'Array',
    function (e, n) {
        h(this, {
            type: p,
            target: i(e),
            index: 0,
            kind: n
        });
    },
    function () {
        var e = _(this),
            n = e.target,
            r = e.index++;
        if (!n || r >= n.length) return (e.target = void 0), c(void 0, !0);
        switch (e.kind) {
            case 'keys':
                return c(r, !1);
            case 'values':
                return c(n[r], !1);
        }
        return c([r, n[r]], !1);
    },
    'values'
);
var m = (o.Arguments = o.Array);
if ((a('keys'), a('values'), a('entries'), !d && f && 'values' !== m.name))
    try {
        l(m, 'name', { value: 'values' });
    } catch (e) {}
