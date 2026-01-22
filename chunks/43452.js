var r = n(410323),
    i = n(503628),
    a = n(339626),
    s = n(324988),
    o = n(230606),
    l = n(997159),
    c = function () {},
    u = o("Reflect", "construct"),
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
    h = function (e) {
        if (!a(e)) return !1;
        switch (s(e)) {
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
(h.sham = !0),
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
            ? h
            : _);
