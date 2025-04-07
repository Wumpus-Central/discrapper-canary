var n = e(146063),
    o = e(967333),
    i = e(933121),
    a = e(199838),
    s = e(117895).f,
    u = e(130006),
    c = e(682564),
    f = e(511696),
    l = e(507604),
    p = 'Array Iterator',
    v = a.set,
    h = a.getterFor(p);
t.exports = u(
    Array,
    'Array',
    function (t, r) {
        v(this, {
            type: p,
            target: n(t),
            index: 0,
            kind: r
        });
    },
    function () {
        var t = h(this),
            r = t.target,
            e = t.index++;
        if (!r || e >= r.length) return (t.target = null), c(void 0, !0);
        switch (t.kind) {
            case 'keys':
                return c(e, !1);
            case 'values':
                return c(r[e], !1);
        }
        return c([e, r[e]], !1);
    },
    'values'
);
var d = (i.Arguments = i.Array);
if ((o('keys'), o('values'), o('entries'), !f && l && 'values' !== d.name))
    try {
        s(d, 'name', { value: 'values' });
    } catch (t) {}
