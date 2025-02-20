n.d(t, {
    RZ: () => c,
    fv: () => s,
    gn: () => l,
    sZ: () => u
});
var r = n(913527),
    i = n.n(r),
    o = n(474936),
    a = n(388032);
let s = (e) => o.np[e],
    l = (e) => (null == s(e) ? null : e),
    c = (e, t) => {
        if (null == t) return null;
        let n = s(e);
        if (null == n) return null;
        let r = i()(t);
        return r.add(n.tenureReqNumMonths, 'months'), r.add(1, 'days'), r.toDate();
    },
    u = (e, t) => {
        var n;
        let r = null !== (n = c(e, t)) && void 0 !== n ? n : new Date(),
            i = s(e);
        if (null == i) return a.NW.formatToPlainString(a.t['8zbGNT'], { date: t });
        switch (i.id) {
            case o.JN.PREMIUM_TENURE_1_MONTH:
            case o.w7.PREMIUM_TENURE_1_MONTH:
                return a.NW.formatToPlainString(a.t['1vEPKC'], { date: r });
            case o.JN.PREMIUM_TENURE_3_MONTH:
            case o.w7.PREMIUM_TENURE_3_MONTH:
                return a.NW.formatToPlainString(a.t['1pri6u'], { date: r });
            case o.JN.PREMIUM_TENURE_6_MONTH:
            case o.w7.PREMIUM_TENURE_6_MONTH:
                return a.NW.formatToPlainString(a.t['t5Yv9/'], { date: r });
            case o.JN.PREMIUM_TENURE_12_MONTH:
            case o.w7.PREMIUM_TENURE_12_MONTH:
                return a.NW.formatToPlainString(a.t.IppEDg, { date: r });
            case o.JN.PREMIUM_TENURE_24_MONTH:
            case o.w7.PREMIUM_TENURE_24_MONTH:
                return a.NW.formatToPlainString(a.t.yUxtHB, { date: r });
            case o.JN.PREMIUM_TENURE_36_MONTH:
            case o.w7.PREMIUM_TENURE_36_MONTH:
                return a.NW.formatToPlainString(a.t['6FLaGR'], { date: r });
            case o.JN.PREMIUM_TENURE_60_MONTH:
            case o.w7.PREMIUM_TENURE_60_MONTH:
                return a.NW.formatToPlainString(a.t.qA7ah4, { date: r });
            case o.JN.PREMIUM_TENURE_72_MONTH:
                return a.NW.formatToPlainString(a.t['2E+W8f'], { date: r });
            default:
                return a.NW.formatToPlainString(a.t['8zbGNT'], { date: t });
        }
    };
