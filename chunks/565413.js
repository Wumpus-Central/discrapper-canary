var e = n(764908),
    o = n(157501),
    i = n(565130),
    u = n(953554),
    s = n(717130),
    c = e(u),
    f = e(''.slice),
    a = Math.ceil,
    p = function (t) {
        return function (r, n, e) {
            var u,
                p,
                l = i(s(r)),
                v = o(n),
                y = l.length,
                h = void 0 === e ? ' ' : i(e);
            return v <= y || '' === h ? l : ((p = c(h, a((u = v - y) / h.length))).length > u && (p = f(p, 0, u)), t ? l + p : p + l);
        };
    };
t.exports = {
    start: p(!1),
    end: p(!0)
};
