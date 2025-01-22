var i = r(706627),
    a = r(292403),
    o = r(906087),
    s = Object.prototype.hasOwnProperty;
function l(e) {
    if (!i(e)) return o(e);
    var n = a(e),
        r = [];
    for (var l in e) !('constructor' == l && (n || !s.call(e, l))) && r.push(l);
    return r;
}
e.exports = l;
