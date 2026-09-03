var t = Object.prototype.toString;
e.exports = function (e) {
    var r = t.call(e),
        n = "[object Arguments]" === r;
    return (
        n ||
            (n =
                "[object Array]" !== r &&
                null !== e &&
                "object" == typeof e &&
                "number" == typeof e.length &&
                e.length >= 0 &&
                "[object Function]" === t.call(e.callee)),
        n
    );
};
