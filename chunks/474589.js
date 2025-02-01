e.exports = function (e) {
    var t = !0,
        n = !0,
        i = !1;
    if ('function' == typeof e) {
        try {
            e.call('f', function (e, n, i) {
                'object' != typeof i && (t = !1);
            }),
                e.call(
                    [null],
                    function () {
                        n = 'string' == typeof this;
                    },
                    'x'
                );
        } catch (e) {
            i = !0;
        }
        return !i && t && n;
    }
    return !1;
};
