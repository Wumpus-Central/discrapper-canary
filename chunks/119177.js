var i = n(706627),
    r = n(292403),
    a = n(906087),
    s = Object.prototype.hasOwnProperty;
function o(e) {
    if (!i(e)) return a(e);
    var t = r(e),
        n = [];
    for (var o in e) ('constructor' == o && (t || !s.call(e, o))) || n.push(o);
    return n;
}
e.exports = o;
