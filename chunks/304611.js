function t(e) {
    return function () {
        return e;
    };
}
var n = function () {};
(n.thatReturns = t),
    (n.thatReturnsFalse = t(!1)),
    (n.thatReturnsTrue = t(!0)),
    (n.thatReturnsNull = t(null)),
    (n.thatReturnsThis = function () {
        return this;
    }),
    (n.thatReturnsArgument = function (e) {
        return e;
    }),
    (e.exports = n);
