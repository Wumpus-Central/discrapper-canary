var e = n(658971),
    o = n(936839),
    i = n(174344),
    u = function (t) {
        return function (r, n, u) {
            var s,
                c = e(r),
                f = i(c);
            if (0 === f) return !t && -1;
            var a = o(u, f);
            if (t && n != n) {
                for (; f > a; ) if ((s = c[a++]) != s) return !0;
            } else for (; f > a; a++) if ((t || a in c) && c[a] === n) return t || a || 0;
            return !t && -1;
        };
    };
t.exports = {
    includes: u(!0),
    indexOf: u(!1)
};
