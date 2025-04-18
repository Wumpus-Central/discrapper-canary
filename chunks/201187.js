var r = n(745872),
    i = n(166691),
    a = n(815329),
    o = n(485110),
    s = r('%Reflect.apply%', !0) || i('Function.prototype.apply');
e.exports = function (e, t) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!o(n)) throw new a('Assertion failed: optional `argumentsList`, if provided, must be a List');
    return s(e, t, n);
};
