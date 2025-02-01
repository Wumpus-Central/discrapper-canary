var i = n(360518)('iterator'),
    r = !1;
try {
    var a = 0,
        s = {
            next: function () {
                return { done: !!a++ };
            },
            return: function () {
                r = !0;
            }
        };
    (s[i] = function () {
        return this;
    }),
        Array.from(s, function () {
            throw 2;
        });
} catch (e) {}
e.exports = function (e, t) {
    try {
        if (!t && !r) return !1;
    } catch (e) {
        return !1;
    }
    var n = !1;
    try {
        var a = {};
        (a[i] = function () {
            return {
                next: function () {
                    return { done: (n = !0) };
                }
            };
        }),
            e(a);
    } catch (e) {}
    return n;
};
