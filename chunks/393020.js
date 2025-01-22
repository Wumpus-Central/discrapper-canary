var i = r(690244),
    a = r(192853),
    o = i('%TypeError%'),
    s = r(156700),
    l = i('%Reflect.apply%', !0) || a('Function.prototype.apply');
e.exports = function (e, n) {
    var r = arguments.length > 2 ? arguments[2] : [];
    if (!s(r)) throw new o('Assertion failed: optional `argumentsList`, if provided, must be a List');
    return l(e, n, r);
};
