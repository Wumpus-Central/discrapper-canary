var e = n(764908),
    o = n(779688),
    i = n(971428),
    u = n(872715),
    s = n(178476),
    c = n(975378),
    f = function () {},
    a = s('Reflect', 'construct'),
    p = /^\s*(?:class|function)\b/,
    l = e(p.exec),
    v = !p.test(f),
    y = function (t) {
        if (!i(t)) return !1;
        try {
            return a(f, [], t), !0;
        } catch (t) {
            return !1;
        }
    },
    h = function (t) {
        if (!i(t)) return !1;
        switch (u(t)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return !1;
        }
        try {
            return v || !!l(p, c(t));
        } catch (t) {
            return !0;
        }
    };
(h.sham = !0),
    (t.exports =
        !a ||
        o(function () {
            var t;
            return (
                y(y.call) ||
                !y(Object) ||
                !y(function () {
                    t = !0;
                }) ||
                t
            );
        })
            ? h
            : y);
