var e = n(360518)('iterator'),
    o = !1;
try {
    var i = 0,
        u = {
            next: function () {
                return { done: !!i++ };
            },
            return: function () {
                o = !0;
            }
        };
    (u[e] = function () {
        return this;
    }),
        Array.from(u, function () {
            throw 2;
        });
} catch (t) {}
t.exports = function (t, r) {
    try {
        if (!r && !o) return !1;
    } catch (t) {
        return !1;
    }
    var n = !1;
    try {
        var i = {};
        (i[e] = function () {
            return {
                next: function () {
                    return { done: (n = !0) };
                }
            };
        }),
            t(i);
    } catch (t) {}
    return n;
};
