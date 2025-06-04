function t(e, t, n, r, i, a, o) {
    try {
        var s = e[a](o),
            l = s.value;
    } catch (e) {
        return void n(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i);
}
(e.exports = function (e) {
    return function () {
        var n = this,
            r = arguments;
        return new Promise(function (i, a) {
            var o = e.apply(n, r);
            function s(e) {
                t(o, i, a, s, l, 'next', e);
            }
            function l(e) {
                t(o, i, a, s, l, 'throw', e);
            }
            s(void 0);
        });
    };
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
