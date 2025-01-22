r.d(n, {
    RZ: function () {
        return c;
    },
    fv: function () {
        return l;
    },
    gn: function () {
        return u;
    },
    sZ: function () {
        return d;
    }
});
var i = r(913527),
    a = r.n(i),
    o = r(474936),
    s = r(388032);
let l = (e) => o.np[e],
    u = (e) => (null == l(e) ? null : e),
    c = (e, n) => {
        if (null == n) return null;
        let r = l(e);
        if (null == r) return null;
        let i = a()(n);
        return i.add(r.tenureReqNumMonths, 'months'), i.add(1, 'days'), i.toDate();
    },
    d = (e, n) => {
        var r;
        let i = null !== (r = c(e, n)) && void 0 !== r ? r : new Date(),
            a = l(e);
        if (null == a) return s.intl.formatToPlainString(s.t['8zbGNT'], { date: n });
        switch (a.id) {
            case o.JN.PREMIUM_TENURE_1_MONTH:
            case o.w7.PREMIUM_TENURE_1_MONTH:
                return s.intl.formatToPlainString(s.t['1vEPKC'], { date: i });
            case o.JN.PREMIUM_TENURE_3_MONTH:
            case o.w7.PREMIUM_TENURE_3_MONTH:
                return s.intl.formatToPlainString(s.t['1pri6u'], { date: i });
            case o.JN.PREMIUM_TENURE_6_MONTH:
            case o.w7.PREMIUM_TENURE_6_MONTH:
                return s.intl.formatToPlainString(s.t['t5Yv9/'], { date: i });
            case o.JN.PREMIUM_TENURE_12_MONTH:
            case o.w7.PREMIUM_TENURE_12_MONTH:
                return s.intl.formatToPlainString(s.t.IppEDg, { date: i });
            case o.JN.PREMIUM_TENURE_24_MONTH:
            case o.w7.PREMIUM_TENURE_24_MONTH:
                return s.intl.formatToPlainString(s.t.yUxtHB, { date: i });
            case o.JN.PREMIUM_TENURE_36_MONTH:
            case o.w7.PREMIUM_TENURE_36_MONTH:
                return s.intl.formatToPlainString(s.t['6FLaGR'], { date: i });
            case o.JN.PREMIUM_TENURE_60_MONTH:
            case o.w7.PREMIUM_TENURE_60_MONTH:
                return s.intl.formatToPlainString(s.t.qA7ah4, { date: i });
            case o.JN.PREMIUM_TENURE_72_MONTH:
                return s.intl.formatToPlainString(s.t['2E+W8f'], { date: i });
            default:
                return s.intl.formatToPlainString(s.t['8zbGNT'], { date: n });
        }
    };
