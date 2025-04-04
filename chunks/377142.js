var r = n(324474),
    o = n(921413),
    a = n(475424),
    i = n(795462);
e.exports = function (e, t, n) {
    return function (s) {
        var c = a(s),
            l = arguments.length,
            u = l > 1 ? arguments[1] : void 0,
            d = void 0 !== u,
            p = d ? r(u, l > 2 ? arguments[2] : void 0) : void 0,
            h = new e(),
            f = 0;
        return (
            i(c, function (e) {
                var r = d ? p(e, f++) : e;
                n ? t(h, o(r)[0], r[1]) : t(h, r);
            }),
            h
        );
    };
};
