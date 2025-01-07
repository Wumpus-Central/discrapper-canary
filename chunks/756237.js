function n(e) {
    try {
        return -1 !== Function.toString.call(e).indexOf('[native code]');
    } catch (n) {
        return 'function' == typeof e;
    }
}
(e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
