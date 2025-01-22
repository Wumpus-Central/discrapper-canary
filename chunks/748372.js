var i = r(158698);
function a(e, n) {
    if (e !== n) {
        var r = void 0 !== e,
            a = null === e,
            o = e == e,
            s = i(e),
            l = void 0 !== n,
            u = null === n,
            c = n == n,
            d = i(n);
        if ((!u && !d && !s && e > n) || (s && l && c && !u && !d) || (a && l && c) || (!r && c) || !o) return 1;
        if ((!a && !s && !d && e < n) || (d && r && o && !a && !s) || (u && r && o) || (!l && o) || !c) return -1;
    }
    return 0;
}
e.exports = a;
