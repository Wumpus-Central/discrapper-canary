var i = n(729605),
    r = n(501953),
    a = n(519723),
    s = n(29461),
    o = n(349446).f,
    l = n(790142),
    u = n(215645),
    c = n(414629),
    d = n(447631),
    f = 'Array Iterator',
    _ = s.set,
    p = s.getterFor(f);
e.exports = l(
    Array,
    'Array',
    function (e, t) {
        _(this, {
            type: f,
            target: i(e),
            index: 0,
            kind: t
        });
    },
    function () {
        var e = p(this),
            t = e.target,
            n = e.index++;
        if (!t || n >= t.length) return (e.target = void 0), u(void 0, !0);
        switch (e.kind) {
            case 'keys':
                return u(n, !1);
            case 'values':
                return u(t[n], !1);
        }
        return u([n, t[n]], !1);
    },
    'values'
);
var h = (a.Arguments = a.Array);
if ((r('keys'), r('values'), r('entries'), !c && d && 'values' !== h.name))
    try {
        o(h, 'name', { value: 'values' });
    } catch (e) {}
