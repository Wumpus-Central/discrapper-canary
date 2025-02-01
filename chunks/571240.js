var i = n(96403),
    r = n(821819),
    a = n(735471),
    s = n(327192),
    o = n(294377),
    l = n(976396),
    u = function () {},
    c = [],
    d = o('Reflect', 'construct'),
    f = /^\s*(?:class|function)\b/,
    _ = i(f.exec),
    p = !f.test(u),
    h = function (e) {
        if (!a(e)) return !1;
        try {
            return d(u, c, e), !0;
        } catch (e) {
            return !1;
        }
    },
    m = function (e) {
        if (!a(e)) return !1;
        switch (s(e)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return !1;
        }
        try {
            return p || !!_(f, l(e));
        } catch (e) {
            return !0;
        }
    };
(m.sham = !0),
    (e.exports =
        !d ||
        r(function () {
            var e;
            return (
                h(h.call) ||
                !h(Object) ||
                !h(function () {
                    e = !0;
                }) ||
                e
            );
        })
            ? m
            : h);
