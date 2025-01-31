n.d(t, {
    RZ: () => u,
    fv: () => o,
    gn: () => l,
    sZ: () => c
});
var i = n(913527),
    r = n.n(i),
    a = n(474936),
    s = n(388032);
let o = (e) => a.np[e],
    l = (e) => (null == o(e) ? null : e),
    u = (e, t) => {
        if (null == t) return null;
        let n = o(e);
        if (null == n) return null;
        let i = r()(t);
        return i.add(n.tenureReqNumMonths, 'months'), i.add(1, 'days'), i.toDate();
    },
    c = (e, t) => {
        var n;
        let i = null !== (n = u(e, t)) && void 0 !== n ? n : new Date(),
            r = o(e);
        if (null == r) return s.intl.formatToPlainString(s.t['8zbGNT'], { date: t });
        switch (r.id) {
            case a.JN.PREMIUM_TENURE_1_MONTH:
            case a.w7.PREMIUM_TENURE_1_MONTH:
                return s.intl.formatToPlainString(s.t['1vEPKC'], { date: i });
            case a.JN.PREMIUM_TENURE_3_MONTH:
            case a.w7.PREMIUM_TENURE_3_MONTH:
                return s.intl.formatToPlainString(s.t['1pri6u'], { date: i });
            case a.JN.PREMIUM_TENURE_6_MONTH:
            case a.w7.PREMIUM_TENURE_6_MONTH:
                return s.intl.formatToPlainString(s.t['t5Yv9/'], { date: i });
            case a.JN.PREMIUM_TENURE_12_MONTH:
            case a.w7.PREMIUM_TENURE_12_MONTH:
                return s.intl.formatToPlainString(s.t.IppEDg, { date: i });
            case a.JN.PREMIUM_TENURE_24_MONTH:
            case a.w7.PREMIUM_TENURE_24_MONTH:
                return s.intl.formatToPlainString(s.t.yUxtHB, { date: i });
            case a.JN.PREMIUM_TENURE_36_MONTH:
            case a.w7.PREMIUM_TENURE_36_MONTH:
                return s.intl.formatToPlainString(s.t['6FLaGR'], { date: i });
            case a.JN.PREMIUM_TENURE_60_MONTH:
            case a.w7.PREMIUM_TENURE_60_MONTH:
                return s.intl.formatToPlainString(s.t.qA7ah4, { date: i });
            case a.JN.PREMIUM_TENURE_72_MONTH:
                return s.intl.formatToPlainString(s.t['2E+W8f'], { date: i });
            default:
                return s.intl.formatToPlainString(s.t['8zbGNT'], { date: t });
        }
    };
