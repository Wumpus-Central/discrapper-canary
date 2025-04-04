var r = a(146063),
    n = a(967333),
    _ = a(933121),
    o = a(199838),
    i = a(117895).f,
    c = a(130006),
    s = a(682564),
    E = a(511696),
    l = a(507604),
    u = 'Array Iterator',
    I = o.set,
    R = o.getterFor(u);
t.exports = c(
    Array,
    'Array',
    function (t, e) {
        I(this, {
            type: u,
            target: r(t),
            index: 0,
            kind: e
        });
    },
    function () {
        var t = R(this),
            e = t.target,
            a = t.index++;
        if (!e || a >= e.length) return (t.target = null), s(void 0, !0);
        switch (t.kind) {
            case 'keys':
                return s(a, !1);
            case 'values':
                return s(e[a], !1);
        }
        return s([a, e[a]], !1);
    },
    'values'
);
var d = (_.Arguments = _.Array);
if ((n('keys'), n('values'), n('entries'), !E && l && 'values' !== d.name))
    try {
        i(d, 'name', { value: 'values' });
    } catch (t) {}
