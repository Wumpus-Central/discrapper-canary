function t(e, t, r, n, o, i, a) {
    try {
        var s = e[i](a),
            l = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(n, o);
}
(e.exports = function (e) {
    return function () {
        var r = this,
            n = arguments;
        return new Promise(function (o, i) {
            var a = e.apply(r, n);
            function s(e) {
                t(a, o, i, s, l, "next", e);
            }
            function l(e) {
                t(a, o, i, s, l, "throw", e);
            }
            s(void 0);
        });
    };
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
