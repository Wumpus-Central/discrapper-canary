var r = n(751736)('iterator'),
    i = !1;
try {
    var o = 0,
        a = {
            next: function () {
                return { done: !!o++ };
            },
            return: function () {
                i = !0;
            }
        };
    (a[r] = function () {
        return this;
    }),
        Array.from(a, function () {
            throw 2;
        });
} catch (e) {}
e.exports = function (e, t) {
    try {
        if (!t && !i) return !1;
    } catch (e) {
        return !1;
    }
    var n = !1;
    try {
        var o = {};
        (o[r] = function () {
            return {
                next: function () {
                    return { done: (n = !0) };
                }
            };
        }),
            e(o);
    } catch (e) {}
    return n;
};
