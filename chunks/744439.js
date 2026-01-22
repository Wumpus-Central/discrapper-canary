var r = n(412998),
    i = n(161301),
    a = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!r(e)) return i(e);
    var t = [];
    for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
    return t;
};
