var i;
r.d(n, {
    BD: function () {
        return l;
    },
    dQ: function () {
        return i;
    },
    jO: function () {
        return u;
    }
}),
    !(function (e) {
        (e[(e.ExactMatch = 0)] = 'ExactMatch'), (e[(e.PrefixMatch = 1)] = 'PrefixMatch');
    })(i || (i = {}));
let a = (e) => /\p{P}/gu.test(null != e ? e : '') || ' ' === e || '' === e,
    o = (e, n, r) => {
        if (r - n > e.length) return !1;
        let i = e.charAt(n - 1),
            o = e.charAt(r + 1);
        return a(i) && a(o);
    },
    s = (e, n) => a(e.charAt(n - 1)),
    l = (e, n, r, i) => {
        if (1 === i) return s(e, n);
        return o(e, n, r);
    },
    u = (e, n, r, i) => {
        if (0 === i)
            return {
                start: n,
                end: r,
                keyword: e.substring(n, r + 1)
            };
        let o = r;
        for (; o < e.length - 1 && !a(e.charAt(o + 1)); ) o++;
        return {
            start: n,
            end: o,
            keyword: e.substring(n, o + 1)
        };
    };
