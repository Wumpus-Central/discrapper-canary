function t(n, r, i, a) {
    var s = Object.defineProperty;
    try {
        s({}, "", {});
    } catch (e) {
        s = 0;
    }
    (e.exports = t =
        function (e, n, r, i) {
            if (n)
                s
                    ? s(e, n, {
                          value: r,
                          enumerable: !i,
                          configurable: !i,
                          writable: !i,
                      })
                    : (e[n] = r);
            else {
                var a = function (n, r) {
                    t(e, n, function (e) {
                        return this._invoke(n, r, e);
                    });
                };
                a("next", 0), a("throw", 1), a("return", 2);
            }
        }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        t(n, r, i, a);
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
