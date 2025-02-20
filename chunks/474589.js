e.exports = function (e) {
    var t = !0,
        n = !0,
        r = !1;
    if ('function' == typeof e) {
        try {
            e.call('f', function (e, n, r) {
                'object' != typeof r && (t = !1);
            }),
                e.call(
                    [null],
                    function () {
                        n = 'string' == typeof this;
                    },
                    'x'
                );
        } catch (e) {
            r = !0;
        }
        return !r && t && n;
    }
    return !1;
};
