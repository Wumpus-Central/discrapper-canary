n.d(t, {
    BD: () => s,
    dQ: () => r,
    jO: () => l,
}),
    n(413496),
    n(433524),
    n(35282);
var r = (function (e) {
    return (e[(e.ExactMatch = 0)] = "ExactMatch"), (e[(e.PrefixMatch = 1)] = "PrefixMatch"), e;
})({});
let i = (e) => RegExp("\\p{P}", "gu").test(null != e ? e : "") || " " === e || "" === e,
    o = (e, t, n) => {
        if (n - t > e.length) return !1;
        let r = e.charAt(t - 1),
            o = e.charAt(n + 1);
        return i(r) && i(o);
    },
    a = (e, t) => i(e.charAt(t - 1)),
    s = (e, t, n, r) => (1 === r ? a(e, t) : o(e, t, n)),
    l = (e, t, n, r) => {
        if (0 === r)
            return {
                start: t,
                end: n,
                keyword: e.substring(t, n + 1),
            };
        let o = n;
        for (; o < e.length - 1 && !i(e.charAt(o + 1)); ) o++;
        return {
            start: t,
            end: o,
            keyword: e.substring(t, o + 1),
        };
    };
