var i = n(158698);
function r(e, t) {
    if (e !== t) {
        var n = void 0 !== e,
            r = null === e,
            a = e == e,
            s = i(e),
            o = void 0 !== t,
            l = null === t,
            u = t == t,
            c = i(t);
        if ((!l && !c && !s && e > t) || (s && o && u && !l && !c) || (r && o && u) || (!n && u) || !a) return 1;
        if ((!r && !s && !c && e < t) || (c && n && a && !r && !s) || (l && n && a) || (!o && a) || !u) return -1;
    }
    return 0;
}
e.exports = r;
