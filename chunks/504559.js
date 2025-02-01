var r = i(97131).f;
t.exports = function (t, e, i) {
    i in t ||
        r(t, i, {
            configurable: !0,
            get: function () {
                return e[i];
            },
            set: function (t) {
                e[i] = t;
            }
        });
};
