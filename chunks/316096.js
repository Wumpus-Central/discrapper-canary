var e = r(117895).f;
t.exports = function (t, n, r) {
    r in t ||
        e(t, r, {
            configurable: !0,
            get: function () {
                return n[r];
            },
            set: function (t) {
                n[r] = t;
            }
        });
};
