n.d(t, { Z: () => o });
var r = n(742230);
function o(e) {
    try {
        var t;
        return -1 !== r((t = Function.toString.call(e))).call(t, '[native code]');
    } catch (t) {
        return 'function' == typeof e;
    }
}
