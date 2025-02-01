var i = n(661233),
    r = n(876557),
    a = n(213066),
    s = Object.prototype.hasOwnProperty;
function o(e) {
    if (!i(e)) return a(e);
    var t = r(e),
        n = [];
    for (var o in e) ('constructor' == o && (t || !s.call(e, o))) || n.push(o);
    return n;
}
e.exports = o;
