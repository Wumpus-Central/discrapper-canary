var i = r(854441),
    a = r(917430);
function o(e) {
    for (var n = (0, a.Z)(e), r = n.length; r--; ) {
        var o = n[r],
            s = e[o];
        n[r] = [o, s, (0, i.Z)(s)];
    }
    return n;
}
n.Z = o;
