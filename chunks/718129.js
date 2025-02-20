var r = n(927066)('%Reflect.construct%', !0),
    i = n(751564);
try {
    i({}, '', {
        '[[Get]]': function () {}
    });
} catch (e) {
    i = null;
}
if (i && r) {
    var o = {},
        a = {};
    i(a, 'length', {
        '[[Get]]': function () {
            throw o;
        },
        '[[Enumerable]]': !0
    }),
        (e.exports = function (e) {
            try {
                r(e, a);
            } catch (e) {
                return e === o;
            }
        });
} else
    e.exports = function (e) {
        return 'function' == typeof e && !!e.prototype;
    };
