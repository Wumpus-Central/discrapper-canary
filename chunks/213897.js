var i = r(526988),
    a = TypeError,
    o = function (e) {
        var n, r;
        (this.promise = new e(function (e, i) {
            if (void 0 !== n || void 0 !== r) throw a('Bad Promise constructor');
            (n = e), (r = i);
        })),
            (this.resolve = i(n)),
            (this.reject = i(r));
    };
e.exports.f = function (e) {
    return new o(e);
};
