var n = e(958498),
    o = e(798325),
    s = e(794779),
    i = function (t) {
        return function (r, e, i) {
            var u,
                c = n(r),
                a = s(c);
            if (0 === a) return !t && -1;
            var f = o(i, a);
            if (t && e != e) {
                for (; a > f; ) if ((u = c[f++]) != u) return !0;
            } else for (; a > f; f++) if ((t || f in c) && c[f] === e) return t || f || 0;
            return !t && -1;
        };
    };
t.exports = {
    includes: i(!0),
    indexOf: i(!1),
};
