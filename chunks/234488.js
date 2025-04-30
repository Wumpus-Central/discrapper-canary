var r = n(46015),
    i = n(621523),
    o = n(880181),
    a = n(214027),
    s = n(154028),
    l = n(845691),
    c = function () {},
    u = s('Reflect', 'construct'),
    d = /^\s*(?:class|function)\b/,
    f = r(d.exec),
    _ = !d.test(c),
    p = function (e) {
        if (!o(e)) return !1;
        try {
            return u(c, [], e), !0;
        } catch (e) {
            return !1;
        }
    },
    h = function (e) {
        if (!o(e)) return !1;
        switch (a(e)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return !1;
        }
        try {
            return _ || !!f(d, l(e));
        } catch (e) {
            return !0;
        }
    };
(h.sham = !0),
    (e.exports =
        !u ||
        i(function () {
            var e;
            return (
                p(p.call) ||
                !p(Object) ||
                !p(function () {
                    e = !0;
                }) ||
                e
            );
        })
            ? h
            : p);
