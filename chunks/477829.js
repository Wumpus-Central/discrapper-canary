var i = r(906024),
    a = 1 / 0;
function o(e) {
    if ('string' == typeof e || (0, i.Z)(e)) return e;
    var n = e + '';
    return '0' == n && 1 / e == -a ? '-0' : n;
}
n.Z = o;
