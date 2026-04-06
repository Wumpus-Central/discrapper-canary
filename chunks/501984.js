function t(e, t, n, r, i, s, a) {
    try {
        var o = e[s](a),
            l = o.value;
    } catch (e) {
        return void n(e);
    }
    o.done ? t(l) : Promise.resolve(l).then(r, i);
}
(e.exports = function (e) {
    return function () {
        var n = this,
            r = arguments;
        return new Promise(function (i, s) {
            var a = e.apply(n, r);
            function o(e) {
                t(a, i, s, o, l, "next", e);
            }
            function l(e) {
                t(a, i, s, o, l, "throw", e);
            }
            o(void 0);
        });
    };
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
