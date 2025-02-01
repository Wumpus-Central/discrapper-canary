var i = n(526988),
    r = TypeError,
    a = function (e) {
        var t, n;
        (this.promise = new e(function (e, i) {
            if (void 0 !== t || void 0 !== n) throw r('Bad Promise constructor');
            (t = e), (n = i);
        })),
            (this.resolve = i(t)),
            (this.reject = i(n));
    };
e.exports.f = function (e) {
    return new a(e);
};
