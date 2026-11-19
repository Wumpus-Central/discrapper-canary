var a = t(410323),
    n = t(503628),
    o = t(339626),
    c = t(324988),
    s = t(230606),
    i = t(997159),
    f = function () {},
    u = s("Reflect", "construct"),
    l = /^\s*(?:class|function)\b/,
    p = a(l.exec),
    y = !l.test(f),
    h = function (e) {
        if (!o(e)) return !1;
        try {
            return (u(f, [], e), !0);
        } catch (e) {
            return !1;
        }
    },
    b = function (e) {
        if (!o(e)) return !1;
        switch (c(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1;
        }
        try {
            return y || !!p(l, i(e));
        } catch (e) {
            return !0;
        }
    };
((b.sham = !0),
    (e.exports =
        !u ||
        n(function () {
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
            ? b
            : h));
