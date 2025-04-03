n.d(t, {
    BD: () => s,
    dQ: () => i,
    jO: () => u
}),
    n(474991),
    n(398202),
    n(301563);
var r,
    i = (((r = {})[(r.ExactMatch = 0)] = 'ExactMatch'), (r[(r.PrefixMatch = 1)] = 'PrefixMatch'), r);
let o = (e) => RegExp('\\p{P}', 'gu').test(null != e ? e : '') || ' ' === e || '' === e,
    c = (e, t, n) => {
        if (n - t > e.length) return !1;
        let r = e.charAt(t - 1),
            i = e.charAt(n + 1);
        return o(r) && o(i);
    },
    a = (e, t) => o(e.charAt(t - 1)),
    s = (e, t, n, r) => (1 === r ? a(e, t) : c(e, t, n)),
    u = (e, t, n, r) => {
        if (0 === r)
            return {
                start: t,
                end: n,
                keyword: e.substring(t, n + 1)
            };
        let i = n;
        for (; i < e.length - 1 && !o(e.charAt(i + 1)); ) i++;
        return {
            start: t,
            end: i,
            keyword: e.substring(t, i + 1)
        };
    };
