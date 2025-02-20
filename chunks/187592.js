var r = n(294377),
    i = n(942282),
    o = n(360518),
    a = n(447631),
    s = o('species');
e.exports = function (e) {
    var t = r(e);
    a &&
        t &&
        !t[s] &&
        i(t, s, {
            configurable: !0,
            get: function () {
                return this;
            }
        });
};
