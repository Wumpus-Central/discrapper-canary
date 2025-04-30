var r = n(706627),
    i = n(292403),
    a = n(906087),
    o = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!r(e)) return a(e);
    var t = i(e),
        n = [];
    for (var s in e) ('constructor' == s && (t || !o.call(e, s))) || n.push(s);
    return n;
};
