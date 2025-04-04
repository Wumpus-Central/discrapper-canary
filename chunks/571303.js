(e.exports = function (e) {
    try {
        return -1 !== Function.toString.call(e).indexOf('[native code]');
    } catch (t) {
        return 'function' == typeof e;
    }
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
