var r = n(158698);
function i(e, t) {
    if (e !== t) {
        var n = void 0 !== e,
            i = null === e,
            o = e == e,
            a = r(e),
            s = void 0 !== t,
            l = null === t,
            c = t == t,
            u = r(t);
        if ((!l && !u && !a && e > t) || (a && s && c && !l && !u) || (i && s && c) || (!n && c) || !o) return 1;
        if ((!i && !a && !u && e < t) || (u && n && o && !i && !a) || (l && n && o) || (!s && o) || !c) return -1;
    }
    return 0;
}
e.exports = i;
