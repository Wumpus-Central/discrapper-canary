r.d(n, {
    RZ: function () {
        return u;
    },
    gn: function () {
        return l;
    },
    sZ: function () {
        return c;
    }
});
var i = r(913527),
    a = r.n(i),
    s = r(474936),
    o = r(388032);
let l = (e) => (Object.values(s.VU).includes(e) ? e : null),
    u = (e, n) => {
        if (null == n) return null;
        let r = s.eG[e],
            i = a()(n);
        return i.add(r, 'months'), i.add(1, 'days'), i.toDate();
    },
    c = (e, n) => {
        var r;
        let i = null !== (r = u(e, n)) && void 0 !== r ? r : new Date();
        switch (e) {
            case s.VU.PREMIUM_TENURE_1_MONTH:
                return o.intl.formatToPlainString(o.t['1vEPKC'], { date: i });
            case s.VU.PREMIUM_TENURE_3_MONTH:
                return o.intl.formatToPlainString(o.t['1pri6u'], { date: i });
            case s.VU.PREMIUM_TENURE_6_MONTH:
                return o.intl.formatToPlainString(o.t['t5Yv9/'], { date: i });
            case s.VU.PREMIUM_TENURE_12_MONTH:
                return o.intl.formatToPlainString(o.t.IppEDg, { date: i });
            case s.VU.PREMIUM_TENURE_24_MONTH:
                return o.intl.formatToPlainString(o.t.yUxtHB, { date: i });
            case s.VU.PREMIUM_TENURE_36_MONTH:
                return o.intl.formatToPlainString(o.t['6FLaGR'], { date: i });
            case s.VU.PREMIUM_TENURE_60_MONTH:
                return o.intl.formatToPlainString(o.t.qA7ah4, { date: i });
            case s.VU.PREMIUM_TENURE_72_MONTH:
                return o.intl.formatToPlainString(o.t['2E+W8f'], { date: i });
            default:
                return o.intl.formatToPlainString(o.t['8zbGNT'], { date: n });
        }
    };
