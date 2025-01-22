var i = r(360518)('iterator'),
    a = !1;
try {
    var o = 0,
        s = {
            next: function () {
                return { done: !!o++ };
            },
            return: function () {
                a = !0;
            }
        };
    (s[i] = function () {
        return this;
    }),
        Array.from(s, function () {
            throw 2;
        });
} catch (e) {}
e.exports = function (e, n) {
    try {
        if (!n && !a) return !1;
    } catch (e) {
        return !1;
    }
    var r = !1;
    try {
        var o = {};
        (o[i] = function () {
            return {
                next: function () {
                    return { done: (r = !0) };
                }
            };
        }),
            e(o);
    } catch (e) {}
    return r;
};
