var r = a(97131).f;
t.exports = function (t, e, a) {
    a in t ||
        r(t, a, {
            configurable: !0,
            get: function () {
                return e[a];
            },
            set: function (t) {
                e[a] = t;
            }
        });
};
