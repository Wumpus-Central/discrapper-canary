var n = e(97131).f;
t.exports = function (t, r, e) {
    e in t ||
        n(t, e, {
            configurable: !0,
            get: function () {
                return r[e];
            },
            set: function (t) {
                r[e] = t;
            }
        });
};
