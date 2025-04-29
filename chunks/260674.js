var r = n(815329),
    i = n(48511),
    o = n(323240),
    a = n(579040),
    s = n(594077) || a || o;
e.exports = function () {
    var e,
        t = {
            assert: function (e) {
                if (!t.has(e)) throw new r('Side channel does not contain ' + i(e));
            },
            delete: function (t) {
                return !!e && e.delete(t);
            },
            get: function (t) {
                return e && e.get(t);
            },
            has: function (t) {
                return !!e && e.has(t);
            },
            set: function (t, n) {
                e || (e = s()), e.set(t, n);
            }
        };
    return t;
};
