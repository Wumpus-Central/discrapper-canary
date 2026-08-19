function r(e) {
    return "[object Arguments]" == Object.prototype.toString.call(e);
}
function n(e) {
    return (
        (e &&
            "object" == typeof e &&
            "number" == typeof e.length &&
            Object.prototype.hasOwnProperty.call(e, "callee") &&
            !Object.prototype.propertyIsEnumerable.call(e, "callee")) ||
        !1
    );
}
((t = e.exports =
    "[object Arguments]" ==
    (function () {
        return Object.prototype.toString.call(arguments);
    })()
        ? r
        : n).supported = r),
    (t.unsupported = n);
