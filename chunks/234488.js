var r = n(46015),
    i = n(621523),
    a = n(880181),
    o = n(214027),
    s = n(154028),
    l = n(845691),
    c = function () {},
    u = s("Reflect", "construct"),
    d = /^\s*(?:class|function)\b/,
    f = r(d.exec),
    p = !d.test(c),
    _ = function (e) {
        if (!a(e)) return !1;
        try {
            return u(c, [], e), !0;
        } catch (e) {
            return !1;
        }
    },
    m = function (e) {
        if (!a(e)) return !1;
        switch (o(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1;
        }
        try {
            return p || !!f(d, l(e));
        } catch (e) {
            return !0;
        }
    };
(m.sham = !0),
    (e.exports =
        !u ||
        i(function () {
            var e;
            return (
                _(_.call) ||
                !_(Object) ||
                !_(function () {
                    e = !0;
                }) ||
                e
            );
        })
            ? m
            : _);
