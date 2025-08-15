var r = n(158698);
e.exports = function (e, t) {
    if (e !== t) {
        var n = void 0 !== e,
            i = null === e,
            a = e == e,
            o = r(e),
            s = void 0 !== t,
            l = null === t,
            c = t == t,
            u = r(t);
        if ((!l && !u && !o && e > t) || (o && s && c && !l && !u) || (i && s && c) || (!n && c) || !a) return 1;
        if ((!i && !o && !u && e < t) || (u && n && a && !i && !o) || (l && n && a) || (!s && a) || !c) return -1;
    }
    return 0;
};
