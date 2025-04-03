var e = n(96403),
    o = n(821819),
    i = n(735471),
    u = n(174525),
    s = n(294377),
    c = n(976396),
    f = function () {},
    a = [],
    p = s('Reflect', 'construct'),
    v = /^\s*(?:class|function)\b/,
    l = e(v.exec),
    y = !v.test(f),
    h = function (t) {
        if (!i(t)) return !1;
        try {
            return p(f, a, t), !0;
        } catch (t) {
            return !1;
        }
    },
    x = function (t) {
        if (!i(t)) return !1;
        switch (u(t)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return !1;
        }
        try {
            return y || !!l(v, c(t));
        } catch (t) {
            return !0;
        }
    };
(x.sham = !0),
    (t.exports =
        !p ||
        o(function () {
            var t;
            return (
                h(h.call) ||
                !h(Object) ||
                !h(function () {
                    t = !0;
                }) ||
                t
            );
        })
            ? x
            : h);
