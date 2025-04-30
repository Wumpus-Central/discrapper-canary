var r = n(661233),
    i = n(876557),
    a = n(213066),
    o = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!r(e)) return a(e);
    var t = i(e),
        n = [];
    for (var s in e) ('constructor' == s && (t || !o.call(e, s))) || n.push(s);
    return n;
};
