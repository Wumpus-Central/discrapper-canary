n.d(t, {
    BD: () => s,
    dQ: () => r,
    jO: () => u
}),
    n(474991),
    n(398202),
    n(301563);
var i,
    r = (((i = {})[(i.ExactMatch = 0)] = 'ExactMatch'), (i[(i.PrefixMatch = 1)] = 'PrefixMatch'), i);
let o = (e) => RegExp('\\p{P}', 'gu').test(null != e ? e : '') || ' ' === e || '' === e,
    a = (e, t, n) => {
        if (n - t > e.length) return !1;
        let i = e.charAt(t - 1),
            r = e.charAt(n + 1);
        return o(i) && o(r);
    },
    c = (e, t) => o(e.charAt(t - 1)),
    s = (e, t, n, i) => (1 === i ? c(e, t) : a(e, t, n)),
    u = (e, t, n, i) => {
        if (0 === i)
            return {
                start: t,
                end: n,
                keyword: e.substring(t, n + 1)
            };
        let r = n;
        for (; r < e.length - 1 && !o(e.charAt(r + 1)); ) r++;
        return {
            start: t,
            end: r,
            keyword: e.substring(t, r + 1)
        };
    };
