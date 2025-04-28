var e = r(154028),
    o = r(573078),
    i = r(751736),
    u = r(507604),
    c = i('species');
t.exports = function (t) {
    var n = e(t);
    u &&
        n &&
        !n[c] &&
        o(n, c, {
            configurable: !0,
            get: function () {
                return this;
            }
        });
};
