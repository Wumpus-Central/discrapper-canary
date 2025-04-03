var e = n(729605),
    o = n(501953),
    i = n(519723),
    u = n(29461),
    s = n(349446).f,
    c = n(790142),
    f = n(215645),
    a = n(414629),
    p = n(447631),
    v = 'Array Iterator',
    l = u.set,
    y = u.getterFor(v);
t.exports = c(
    Array,
    'Array',
    function (t, r) {
        l(this, {
            type: v,
            target: e(t),
            index: 0,
            kind: r
        });
    },
    function () {
        var t = y(this),
            r = t.target,
            n = t.index++;
        if (!r || n >= r.length) return (t.target = void 0), f(void 0, !0);
        switch (t.kind) {
            case 'keys':
                return f(n, !1);
            case 'values':
                return f(r[n], !1);
        }
        return f([n, r[n]], !1);
    },
    'values'
);
var h = (i.Arguments = i.Array);
if ((o('keys'), o('values'), o('entries'), !a && p && 'values' !== h.name))
    try {
        s(h, 'name', { value: 'values' });
    } catch (t) {}
