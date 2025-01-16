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
    s = r(474936),
    o = r(388032);
let l = (e) => s.np[e],
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
        if (null == a) return o.intl.formatToPlainString(o.t['8zbGNT'], { date: n });
        switch (a.id) {
            case s.JN.PREMIUM_TENURE_1_MONTH:
            case s.w7.PREMIUM_TENURE_1_MONTH:
                return o.intl.formatToPlainString(o.t['1vEPKC'], { date: i });
            case s.JN.PREMIUM_TENURE_3_MONTH:
            case s.w7.PREMIUM_TENURE_3_MONTH:
                return o.intl.formatToPlainString(o.t['1pri6u'], { date: i });
            case s.JN.PREMIUM_TENURE_6_MONTH:
            case s.w7.PREMIUM_TENURE_6_MONTH:
                return o.intl.formatToPlainString(o.t['t5Yv9/'], { date: i });
            case s.JN.PREMIUM_TENURE_12_MONTH:
            case s.w7.PREMIUM_TENURE_12_MONTH:
                return o.intl.formatToPlainString(o.t.IppEDg, { date: i });
            case s.JN.PREMIUM_TENURE_24_MONTH:
            case s.w7.PREMIUM_TENURE_24_MONTH:
                return o.intl.formatToPlainString(o.t.yUxtHB, { date: i });
            case s.JN.PREMIUM_TENURE_36_MONTH:
            case s.w7.PREMIUM_TENURE_36_MONTH:
                return o.intl.formatToPlainString(o.t['6FLaGR'], { date: i });
            case s.JN.PREMIUM_TENURE_60_MONTH:
            case s.w7.PREMIUM_TENURE_60_MONTH:
                return o.intl.formatToPlainString(o.t.qA7ah4, { date: i });
            case s.JN.PREMIUM_TENURE_72_MONTH:
                return o.intl.formatToPlainString(o.t['2E+W8f'], { date: i });
            default:
                return o.intl.formatToPlainString(o.t['8zbGNT'], { date: n });
        }
    };
