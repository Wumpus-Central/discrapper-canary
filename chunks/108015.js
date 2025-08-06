var r = n(154028),
    i = n(573078),
    o = n(751736),
    a = n(507604),
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
