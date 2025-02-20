var r = n(706627),
    i = n(292403),
    o = n(906087),
    a = Object.prototype.hasOwnProperty;
function s(e) {
    if (!r(e)) return o(e);
    var t = i(e),
        n = [];
    for (var s in e) ('constructor' == s && (t || !a.call(e, s))) || n.push(s);
    return n;
}
e.exports = s;
