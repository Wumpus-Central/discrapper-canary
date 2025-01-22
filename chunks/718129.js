var i = r(927066)('%Reflect.construct%', !0),
    a = r(751564);
try {
    a({}, '', {
        '[[Get]]': function () {}
    });
} catch (e) {
    a = null;
}
if (a && i) {
    var o = {},
        s = {};
    a(s, 'length', {
        '[[Get]]': function () {
            throw o;
        },
        '[[Enumerable]]': !0
    }),
        (e.exports = function (e) {
            try {
                i(e, s);
            } catch (e) {
                return e === o;
            }
        });
} else
    e.exports = function (e) {
        return 'function' == typeof e && !!e.prototype;
    };
