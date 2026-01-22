function t(e, t, n, r, i, a, s) {
    try {
        var o = e[a](s),
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
        return new Promise(function (i, a) {
            var s = e.apply(n, r);
            function o(e) {
                t(s, i, a, o, l, "next", e);
            }
            function l(e) {
                t(s, i, a, o, l, "throw", e);
            }
            o(void 0);
        });
    };
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
