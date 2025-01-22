var i = r(690244),
    a = i('%Array.prototype%'),
    o = i('%RangeError%'),
    s = i('%SyntaxError%'),
    l = i('%TypeError%'),
    u = r(73871),
    c = 4294967295,
    d = r(79536)(),
    f =
        i('%Object.setPrototypeOf%', !0) ||
        (d
            ? function (e, n) {
                  return (e.__proto__ = n), e;
              }
            : null);
e.exports = function (e) {
    if (!u(e) || e < 0) throw new l('Assertion failed: `length` must be an integer Number >= 0');
    if (e > c) throw new o('length is greater than (2**32 - 1)');
    var n = arguments.length > 1 ? arguments[1] : a,
        r = [];
    if (n !== a) {
        if (!f) throw new s('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
        f(r, n);
    }
    return 0 !== e && (r.length = e), r;
};
