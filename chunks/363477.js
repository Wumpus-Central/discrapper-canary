var r = n(305327);
e.exports = function (e, t) {
    if (e !== t) {
        var n = void 0 !== e,
            i = null === e,
            a = e == e,
            s = r(e),
            o = void 0 !== t,
            l = null === t,
            c = t == t,
            u = r(t);
        if ((!l && !u && !s && e > t) || (s && o && c && !l && !u) || (i && o && c) || (!n && c) || !a) return 1;
        if ((!i && !s && !u && e < t) || (u && n && a && !i && !s) || (l && n && a) || (!o && a) || !c) return -1;
    }
    return 0;
};
