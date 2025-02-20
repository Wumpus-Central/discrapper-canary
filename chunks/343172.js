var r = n(661233),
    i = n(876557),
    o = n(213066),
    a = Object.prototype.hasOwnProperty;
function s(e) {
    if (!r(e)) return o(e);
    var t = i(e),
        n = [];
    for (var s in e) ('constructor' == s && (t || !a.call(e, s))) || n.push(s);
    return n;
}
e.exports = s;
