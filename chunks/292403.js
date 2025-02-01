var e = Object.prototype;
t.exports = function (t) {
    var a = t && t.constructor;
    return t === (('function' == typeof a && a.prototype) || e);
};
