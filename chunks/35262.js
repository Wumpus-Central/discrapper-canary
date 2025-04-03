function n(e) {
    return '[object Arguments]' == Object.prototype.toString.call(e);
}
function r(e) {
    return (e && 'object' == typeof e && 'number' == typeof e.length && Object.prototype.hasOwnProperty.call(e, 'callee') && !Object.prototype.propertyIsEnumerable.call(e, 'callee')) || !1;
}
((t = e.exports =
    '[object Arguments]' ==
    (function () {
        return Object.prototype.toString.call(arguments);
    })()
        ? n
        : r).supported = n),
    (t.unsupported = r);
