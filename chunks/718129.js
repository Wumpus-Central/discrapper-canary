var i = n(927066)('%Reflect.construct%', !0),
    r = n(751564);
try {
    r({}, '', {
        '[[Get]]': function () {}
    });
} catch (e) {
    r = null;
}
if (r && i) {
    var a = {},
        s = {};
    r(s, 'length', {
        '[[Get]]': function () {
            throw a;
        },
        '[[Enumerable]]': !0
    }),
        (e.exports = function (e) {
            try {
                i(e, s);
            } catch (e) {
                return e === a;
            }
        });
} else
    e.exports = function (e) {
        return 'function' == typeof e && !!e.prototype;
    };
