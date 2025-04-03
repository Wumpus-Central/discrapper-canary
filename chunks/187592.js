var e = n(294377),
    o = n(942282),
    i = n(360518),
    u = n(447631),
    s = i('species');
t.exports = function (t) {
    var r = e(t);
    u &&
        r &&
        !r[s] &&
        o(r, s, {
            configurable: !0,
            get: function () {
                return this;
            }
        });
};
