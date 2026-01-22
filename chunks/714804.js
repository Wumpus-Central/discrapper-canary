var r = n(621699),
    i = n(517958),
    a = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!r(e)) return i(e);
    var t = [];
    for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
    return t;
};
