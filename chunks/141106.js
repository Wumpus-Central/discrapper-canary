n.d(t, {
    BD: () => o,
    dQ: () => i,
    jO: () => l
});
var i = (function (e) {
    return (e[(e.ExactMatch = 0)] = 'ExactMatch'), (e[(e.PrefixMatch = 1)] = 'PrefixMatch'), e;
})({});
let r = (e) => /\p{P}/gu.test(null != e ? e : '') || ' ' === e || '' === e,
    a = (e, t, n) => {
        if (n - t > e.length) return !1;
        let i = e.charAt(t - 1),
            a = e.charAt(n + 1);
        return r(i) && r(a);
    },
    s = (e, t) => r(e.charAt(t - 1)),
    o = (e, t, n, i) => (1 === i ? s(e, t) : a(e, t, n)),
    l = (e, t, n, i) => {
        if (0 === i)
            return {
                start: t,
                end: n,
                keyword: e.substring(t, n + 1)
            };
        let a = n;
        for (; a < e.length - 1 && !r(e.charAt(a + 1)); ) a++;
        return {
            start: t,
            end: a,
            keyword: e.substring(t, a + 1)
        };
    };
