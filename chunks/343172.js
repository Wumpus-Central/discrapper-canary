var i = r(661233),
    a = r(876557),
    o = r(213066),
    s = Object.prototype.hasOwnProperty;
function l(e) {
    if (!i(e)) return o(e);
    var n = a(e),
        r = [];
    for (var l in e) !('constructor' == l && (n || !s.call(e, l))) && r.push(l);
    return r;
}
e.exports = l;
