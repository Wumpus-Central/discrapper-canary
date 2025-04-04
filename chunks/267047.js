var e = n(658971),
    o = n(855802),
    i = n(903438),
    u = n(89416),
    s = n(85328).f,
    c = n(689591),
    f = n(787899),
    a = n(253462),
    p = n(181794),
    l = 'Array Iterator',
    v = u.set,
    y = u.getterFor(l);
t.exports = c(
    Array,
    'Array',
    function (t, r) {
        v(this, {
            type: l,
            target: e(t),
            index: 0,
            kind: r
        });
    },
    function () {
        var t = y(this),
            r = t.target,
            n = t.index++;
        if (!r || n >= r.length) return (t.target = null), f(void 0, !0);
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
