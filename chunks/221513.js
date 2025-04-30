n.d(t, { T4: () => u }), n(415506);
var r = n(567198),
    i = n.n(r),
    a = n(231338);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let u = function (e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t === a.pK.DISCORD_ORB) return e.toString();
        let { convertToMajorUnits: i = !0 } = r,
            o = l(r, ['convertToMajorUnits']);
        return Intl.NumberFormat(
            n,
            s(
                {
                    style: 'currency',
                    currency: t
                },
                o
            )
        ).format(i ? f(e, t) : e);
    },
    d = {
        [a.pK.AED]: 2,
        [a.pK.AFN]: 2,
        [a.pK.ALL]: 2,
        [a.pK.AMD]: 2,
        [a.pK.ANG]: 2,
        [a.pK.AOA]: 2,
        [a.pK.ARS]: 2,
        [a.pK.AUD]: 2,
        [a.pK.AWG]: 2,
        [a.pK.AZN]: 2,
        [a.pK.BAM]: 2,
        [a.pK.BBD]: 2,
        [a.pK.BDT]: 2,
        [a.pK.BGN]: 2,
        [a.pK.BHD]: 3,
        [a.pK.BIF]: 0,
        [a.pK.BMD]: 2,
        [a.pK.BND]: 2,
        [a.pK.BOB]: 2,
        [a.pK.BOV]: 2,
        [a.pK.BRL]: 2,
        [a.pK.BSD]: 2,
        [a.pK.BTN]: 2,
        [a.pK.BWP]: 2,
        [a.pK.BYR]: 0,
        [a.pK.BYN]: 2,
        [a.pK.BZD]: 2,
        [a.pK.CAD]: 2,
        [a.pK.CDF]: 2,
        [a.pK.CHE]: 2,
        [a.pK.CHF]: 2,
        [a.pK.CHW]: 2,
        [a.pK.CLF]: 0,
        [a.pK.CLP]: 0,
        [a.pK.CNY]: 2,
        [a.pK.COP]: 2,
        [a.pK.COU]: 2,
        [a.pK.CRC]: 2,
        [a.pK.CUC]: 2,
        [a.pK.CUP]: 2,
        [a.pK.CVE]: 2,
        [a.pK.CZK]: 2,
        [a.pK.DJF]: 0,
        [a.pK.DKK]: 2,
        [a.pK.DOP]: 2,
        [a.pK.DZD]: 2,
        [a.pK.EGP]: 2,
        [a.pK.ERN]: 2,
        [a.pK.ETB]: 2,
        [a.pK.EUR]: 2,
        [a.pK.FJD]: 2,
        [a.pK.FKP]: 2,
        [a.pK.GBP]: 2,
        [a.pK.GEL]: 2,
        [a.pK.GHS]: 2,
        [a.pK.GIP]: 2,
        [a.pK.GMD]: 2,
        [a.pK.GNF]: 0,
        [a.pK.GTQ]: 2,
        [a.pK.GYD]: 2,
        [a.pK.HKD]: 2,
        [a.pK.HNL]: 2,
        [a.pK.HRK]: 2,
        [a.pK.HTG]: 2,
        [a.pK.HUF]: 2,
        [a.pK.IDR]: 2,
        [a.pK.ILS]: 2,
        [a.pK.INR]: 2,
        [a.pK.IQD]: 3,
        [a.pK.IRR]: 2,
        [a.pK.ISK]: 0,
        [a.pK.JMD]: 2,
        [a.pK.JOD]: 3,
        [a.pK.JPY]: 0,
        [a.pK.KES]: 2,
        [a.pK.KGS]: 2,
        [a.pK.KHR]: 2,
        [a.pK.KMF]: 0,
        [a.pK.KPW]: 2,
        [a.pK.KRW]: 0,
        [a.pK.KWD]: 3,
        [a.pK.KYD]: 2,
        [a.pK.KZT]: 2,
        [a.pK.LAK]: 2,
        [a.pK.LBP]: 2,
        [a.pK.LKR]: 2,
        [a.pK.LRD]: 2,
        [a.pK.LSL]: 2,
        [a.pK.LTL]: 2,
        [a.pK.LVL]: 2,
        [a.pK.LYD]: 3,
        [a.pK.MAD]: 2,
        [a.pK.MDL]: 2,
        [a.pK.MGA]: 2,
        [a.pK.MKD]: 2,
        [a.pK.MMK]: 2,
        [a.pK.MNT]: 2,
        [a.pK.MOP]: 2,
        [a.pK.MRO]: 2,
        [a.pK.MUR]: 2,
        [a.pK.MVR]: 2,
        [a.pK.MWK]: 2,
        [a.pK.MXN]: 2,
        [a.pK.MXV]: 2,
        [a.pK.MYR]: 2,
        [a.pK.MZN]: 2,
        [a.pK.NAD]: 2,
        [a.pK.NGN]: 2,
        [a.pK.NIO]: 2,
        [a.pK.NOK]: 2,
        [a.pK.NPR]: 2,
        [a.pK.NZD]: 2,
        [a.pK.OMR]: 3,
        [a.pK.PAB]: 2,
        [a.pK.PEN]: 2,
        [a.pK.PGK]: 2,
        [a.pK.PHP]: 2,
        [a.pK.PKR]: 2,
        [a.pK.PLN]: 2,
        [a.pK.PYG]: 0,
        [a.pK.QAR]: 2,
        [a.pK.RON]: 2,
        [a.pK.RSD]: 2,
        [a.pK.RUB]: 2,
        [a.pK.RWF]: 0,
        [a.pK.SAR]: 2,
        [a.pK.SBD]: 2,
        [a.pK.SCR]: 2,
        [a.pK.SDG]: 2,
        [a.pK.SEK]: 2,
        [a.pK.SGD]: 2,
        [a.pK.SHP]: 2,
        [a.pK.SLL]: 2,
        [a.pK.SOS]: 2,
        [a.pK.SRD]: 2,
        [a.pK.SSP]: 2,
        [a.pK.STD]: 2,
        [a.pK.SVC]: 2,
        [a.pK.SYP]: 2,
        [a.pK.SZL]: 2,
        [a.pK.THB]: 2,
        [a.pK.TJS]: 2,
        [a.pK.TMT]: 2,
        [a.pK.TND]: 3,
        [a.pK.TOP]: 2,
        [a.pK.TRY]: 2,
        [a.pK.TTD]: 2,
        [a.pK.TWD]: 2,
        [a.pK.TZS]: 2,
        [a.pK.UAH]: 2,
        [a.pK.UGX]: 0,
        [a.pK.USD]: 2,
        [a.pK.USN]: 2,
        [a.pK.USS]: 2,
        [a.pK.UYI]: 0,
        [a.pK.UYU]: 2,
        [a.pK.UZS]: 2,
        [a.pK.VEF]: 2,
        [a.pK.VND]: 0,
        [a.pK.VUV]: 0,
        [a.pK.WST]: 2,
        [a.pK.XAF]: 0,
        [a.pK.XAG]: 0,
        [a.pK.XAU]: 0,
        [a.pK.XBA]: 0,
        [a.pK.XBB]: 0,
        [a.pK.XBC]: 0,
        [a.pK.XBD]: 0,
        [a.pK.XCD]: 2,
        [a.pK.XDR]: 0,
        [a.pK.XFU]: 0,
        [a.pK.XOF]: 0,
        [a.pK.XPD]: 0,
        [a.pK.XPF]: 0,
        [a.pK.XPT]: 0,
        [a.pK.XSU]: 0,
        [a.pK.XTS]: 0,
        [a.pK.XUA]: 0,
        [a.pK.YER]: 2,
        [a.pK.ZAR]: 2,
        [a.pK.ZMW]: 2,
        [a.pK.ZWL]: 2,
        [a.pK.DISCORD_ORB]: 0
    },
    f = (e, t) => {
        let n = d[t];
        if (null == n) throw Error('Unexpected currency '.concat(t));
        return new (i())(e).dividedBy(10 ** n).toNumber();
    };
