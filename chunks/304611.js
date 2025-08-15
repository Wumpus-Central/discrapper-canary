function e(t) {
    return function () {
        return t;
    };
}
var r = function () {};
(r.thatReturns = e),
    (r.thatReturnsFalse = e(!1)),
    (r.thatReturnsTrue = e(!0)),
    (r.thatReturnsNull = e(null)),
    (r.thatReturnsThis = function () {
        return this;
    }),
    (r.thatReturnsArgument = function (t) {
        return t;
    }),
    (t.exports = r);
