var e = r(46015),
    o = r(621523),
    i = r(880181),
    u = r(214027),
    c = r(154028),
    a = r(845691),
    f = function () {},
    s = c('Reflect', 'construct'),
    l = /^\s*(?:class|function)\b/,
    p = e(l.exec),
    d = !l.test(f),
    _ = function (t) {
        if (!i(t)) return !1;
        try {
            return s(f, [], t), !0;
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
            return d || !!p(l, a(t));
        } catch (t) {
            return !0;
        }
    };
(h.sham = !0),
    (t.exports =
        !s ||
        o(function () {
            var t;
            return (
                _(_.call) ||
                !_(Object) ||
                !_(function () {
                    t = !0;
                }) ||
                t
            );
        })
            ? h
            : _);
