var i = r(565580);
function a(e, n) {
    var r = -1,
        a = e.length,
        o = a - 1;
    for (n = void 0 === n ? a : n; ++r < n; ) {
        var s = i(r, o),
            l = e[s];
        (e[s] = e[r]), (e[r] = l);
    }
    return (e.length = n), e;
}
e.exports = a;
