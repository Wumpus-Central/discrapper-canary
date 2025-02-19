n.d(t, { T4: () => u }), n(411104);
var r = n(567198),
    i = n.n(r),
    o = n(231338);
function a(e, t, n) {
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
                a(e, t, n[t]);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let u = function (e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t === o.pK.DISCORD_ORB) return e.toString();
        let { convertToMajorUnits: i = !0 } = r,
            a = l(r, ['convertToMajorUnits']);
        return Intl.NumberFormat(
            n,
            s(
                {
                    style: 'currency',
                    currency: t
                },
                a
            )
        ).format(i ? f(e, t) : e);
    },
    d = {
        [o.pK.AED]: 2,
        [o.pK.AFN]: 2,
        [o.pK.ALL]: 2,
        [o.pK.AMD]: 2,
        [o.pK.ANG]: 2,
        [o.pK.AOA]: 2,
        [o.pK.ARS]: 2,
        [o.pK.AUD]: 2,
        [o.pK.AWG]: 2,
        [o.pK.AZN]: 2,
        [o.pK.BAM]: 2,
        [o.pK.BBD]: 2,
        [o.pK.BDT]: 2,
        [o.pK.BGN]: 2,
        [o.pK.BHD]: 3,
        [o.pK.BIF]: 0,
        [o.pK.BMD]: 2,
        [o.pK.BND]: 2,
        [o.pK.BOB]: 2,
        [o.pK.BOV]: 2,
        [o.pK.BRL]: 2,
        [o.pK.BSD]: 2,
        [o.pK.BTN]: 2,
        [o.pK.BWP]: 2,
        [o.pK.BYR]: 0,
        [o.pK.BYN]: 2,
        [o.pK.BZD]: 2,
        [o.pK.CAD]: 2,
        [o.pK.CDF]: 2,
        [o.pK.CHE]: 2,
        [o.pK.CHF]: 2,
        [o.pK.CHW]: 2,
        [o.pK.CLF]: 0,
        [o.pK.CLP]: 0,
        [o.pK.CNY]: 2,
        [o.pK.COP]: 2,
        [o.pK.COU]: 2,
        [o.pK.CRC]: 2,
        [o.pK.CUC]: 2,
        [o.pK.CUP]: 2,
        [o.pK.CVE]: 2,
        [o.pK.CZK]: 2,
        [o.pK.DJF]: 0,
        [o.pK.DKK]: 2,
        [o.pK.DOP]: 2,
        [o.pK.DZD]: 2,
        [o.pK.EGP]: 2,
        [o.pK.ERN]: 2,
        [o.pK.ETB]: 2,
        [o.pK.EUR]: 2,
        [o.pK.FJD]: 2,
        [o.pK.FKP]: 2,
        [o.pK.GBP]: 2,
        [o.pK.GEL]: 2,
        [o.pK.GHS]: 2,
        [o.pK.GIP]: 2,
        [o.pK.GMD]: 2,
        [o.pK.GNF]: 0,
        [o.pK.GTQ]: 2,
        [o.pK.GYD]: 2,
        [o.pK.HKD]: 2,
        [o.pK.HNL]: 2,
        [o.pK.HRK]: 2,
        [o.pK.HTG]: 2,
        [o.pK.HUF]: 2,
        [o.pK.IDR]: 2,
        [o.pK.ILS]: 2,
        [o.pK.INR]: 2,
        [o.pK.IQD]: 3,
        [o.pK.IRR]: 2,
        [o.pK.ISK]: 0,
        [o.pK.JMD]: 2,
        [o.pK.JOD]: 3,
        [o.pK.JPY]: 0,
        [o.pK.KES]: 2,
        [o.pK.KGS]: 2,
        [o.pK.KHR]: 2,
        [o.pK.KMF]: 0,
        [o.pK.KPW]: 2,
        [o.pK.KRW]: 0,
        [o.pK.KWD]: 3,
        [o.pK.KYD]: 2,
        [o.pK.KZT]: 2,
        [o.pK.LAK]: 2,
        [o.pK.LBP]: 2,
        [o.pK.LKR]: 2,
        [o.pK.LRD]: 2,
        [o.pK.LSL]: 2,
        [o.pK.LTL]: 2,
        [o.pK.LVL]: 2,
        [o.pK.LYD]: 3,
        [o.pK.MAD]: 2,
        [o.pK.MDL]: 2,
        [o.pK.MGA]: 2,
        [o.pK.MKD]: 2,
        [o.pK.MMK]: 2,
        [o.pK.MNT]: 2,
        [o.pK.MOP]: 2,
        [o.pK.MRO]: 2,
        [o.pK.MUR]: 2,
        [o.pK.MVR]: 2,
        [o.pK.MWK]: 2,
        [o.pK.MXN]: 2,
        [o.pK.MXV]: 2,
        [o.pK.MYR]: 2,
        [o.pK.MZN]: 2,
        [o.pK.NAD]: 2,
        [o.pK.NGN]: 2,
        [o.pK.NIO]: 2,
        [o.pK.NOK]: 2,
        [o.pK.NPR]: 2,
        [o.pK.NZD]: 2,
        [o.pK.OMR]: 3,
        [o.pK.PAB]: 2,
        [o.pK.PEN]: 2,
        [o.pK.PGK]: 2,
        [o.pK.PHP]: 2,
        [o.pK.PKR]: 2,
        [o.pK.PLN]: 2,
        [o.pK.PYG]: 0,
        [o.pK.QAR]: 2,
        [o.pK.RON]: 2,
        [o.pK.RSD]: 2,
        [o.pK.RUB]: 2,
        [o.pK.RWF]: 0,
        [o.pK.SAR]: 2,
        [o.pK.SBD]: 2,
        [o.pK.SCR]: 2,
        [o.pK.SDG]: 2,
        [o.pK.SEK]: 2,
        [o.pK.SGD]: 2,
        [o.pK.SHP]: 2,
        [o.pK.SLL]: 2,
        [o.pK.SOS]: 2,
        [o.pK.SRD]: 2,
        [o.pK.SSP]: 2,
        [o.pK.STD]: 2,
        [o.pK.SVC]: 2,
        [o.pK.SYP]: 2,
        [o.pK.SZL]: 2,
        [o.pK.THB]: 2,
        [o.pK.TJS]: 2,
        [o.pK.TMT]: 2,
        [o.pK.TND]: 3,
        [o.pK.TOP]: 2,
        [o.pK.TRY]: 2,
        [o.pK.TTD]: 2,
        [o.pK.TWD]: 2,
        [o.pK.TZS]: 2,
        [o.pK.UAH]: 2,
        [o.pK.UGX]: 0,
        [o.pK.USD]: 2,
        [o.pK.USN]: 2,
        [o.pK.USS]: 2,
        [o.pK.UYI]: 0,
        [o.pK.UYU]: 2,
        [o.pK.UZS]: 2,
        [o.pK.VEF]: 2,
        [o.pK.VND]: 0,
        [o.pK.VUV]: 0,
        [o.pK.WST]: 2,
        [o.pK.XAF]: 0,
        [o.pK.XAG]: 0,
        [o.pK.XAU]: 0,
        [o.pK.XBA]: 0,
        [o.pK.XBB]: 0,
        [o.pK.XBC]: 0,
        [o.pK.XBD]: 0,
        [o.pK.XCD]: 2,
        [o.pK.XDR]: 0,
        [o.pK.XFU]: 0,
        [o.pK.XOF]: 0,
        [o.pK.XPD]: 0,
        [o.pK.XPF]: 0,
        [o.pK.XPT]: 0,
        [o.pK.XSU]: 0,
        [o.pK.XTS]: 0,
        [o.pK.XUA]: 0,
        [o.pK.YER]: 2,
        [o.pK.ZAR]: 2,
        [o.pK.ZMW]: 2,
        [o.pK.ZWL]: 2,
        [o.pK.DISCORD_ORB]: 0
    },
    f = (e, t) => {
        let n = d[t];
        if (null == n) throw Error('Unexpected currency '.concat(t));
        return new (i())(e).dividedBy(10 ** n).toNumber();
    };
