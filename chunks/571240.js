var i = r(96403),
    a = r(821819),
    o = r(735471),
    s = r(327192),
    l = r(294377),
    u = r(976396),
    c = function () {},
    d = [],
    f = l('Reflect', 'construct'),
    p = /^\s*(?:class|function)\b/,
    h = i(p.exec),
    _ = !p.test(c),
    m = function (e) {
        if (!o(e)) return !1;
        try {
            return f(c, d, e), !0;
        } catch (e) {
            return !1;
        }
    },
    g = function (e) {
        if (!o(e)) return !1;
        switch (s(e)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return !1;
        }
        try {
            return _ || !!h(p, u(e));
        } catch (e) {
            return !0;
        }
    };
(g.sham = !0),
    (e.exports =
        !f ||
        a(function () {
            var e;
            return (
                m(m.call) ||
                !m(Object) ||
                !m(function () {
                    e = !0;
                }) ||
                e
            );
        })
            ? g
            : m);
