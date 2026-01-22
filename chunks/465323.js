n.d(t, {
    $g: () => u,
}),
    n(65821);
var r = n(737291),
    i = n.n(r),
    a = n(818348);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}

function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = c(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let u = function (e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t === a.Yr.DISCORD_ORB) return e.toString();
        let { convertToMajorUnits: i = !0 } = r,
            s = l(r, ["convertToMajorUnits"]);
        return Intl.NumberFormat(
            n,
            o(
                {
                    style: "currency",
                    currency: t,
                },
                s,
            ),
        ).format(i ? f(e, t) : e);
    },
    d = {
        [a.Yr.AED]: 2,
        [a.Yr.AFN]: 2,
        [a.Yr.ALL]: 2,
        [a.Yr.AMD]: 2,
        [a.Yr.ANG]: 2,
        [a.Yr.AOA]: 2,
        [a.Yr.ARS]: 2,
        [a.Yr.AUD]: 2,
        [a.Yr.AWG]: 2,
        [a.Yr.AZN]: 2,
        [a.Yr.BAM]: 2,
        [a.Yr.BBD]: 2,
        [a.Yr.BDT]: 2,
        [a.Yr.BGN]: 2,
        [a.Yr.BHD]: 3,
        [a.Yr.BIF]: 0,
        [a.Yr.BMD]: 2,
        [a.Yr.BND]: 2,
        [a.Yr.BOB]: 2,
        [a.Yr.BOV]: 2,
        [a.Yr.BRL]: 2,
        [a.Yr.BSD]: 2,
        [a.Yr.BTN]: 2,
        [a.Yr.BWP]: 2,
        [a.Yr.BYR]: 0,
        [a.Yr.BYN]: 2,
        [a.Yr.BZD]: 2,
        [a.Yr.CAD]: 2,
        [a.Yr.CDF]: 2,
        [a.Yr.CHE]: 2,
        [a.Yr.CHF]: 2,
        [a.Yr.CHW]: 2,
        [a.Yr.CLF]: 0,
        [a.Yr.CLP]: 0,
        [a.Yr.CNY]: 2,
        [a.Yr.COP]: 2,
        [a.Yr.COU]: 2,
        [a.Yr.CRC]: 2,
        [a.Yr.CUC]: 2,
        [a.Yr.CUP]: 2,
        [a.Yr.CVE]: 2,
        [a.Yr.CZK]: 2,
        [a.Yr.DJF]: 0,
        [a.Yr.DKK]: 2,
        [a.Yr.DOP]: 2,
        [a.Yr.DZD]: 2,
        [a.Yr.EGP]: 2,
        [a.Yr.ERN]: 2,
        [a.Yr.ETB]: 2,
        [a.Yr.EUR]: 2,
        [a.Yr.FJD]: 2,
        [a.Yr.FKP]: 2,
        [a.Yr.GBP]: 2,
        [a.Yr.GEL]: 2,
        [a.Yr.GHS]: 2,
        [a.Yr.GIP]: 2,
        [a.Yr.GMD]: 2,
        [a.Yr.GNF]: 0,
        [a.Yr.GTQ]: 2,
        [a.Yr.GYD]: 2,
        [a.Yr.HKD]: 2,
        [a.Yr.HNL]: 2,
        [a.Yr.HRK]: 2,
        [a.Yr.HTG]: 2,
        [a.Yr.HUF]: 2,
        [a.Yr.IDR]: 2,
        [a.Yr.ILS]: 2,
        [a.Yr.INR]: 2,
        [a.Yr.IQD]: 3,
        [a.Yr.IRR]: 2,
        [a.Yr.ISK]: 0,
        [a.Yr.JMD]: 2,
        [a.Yr.JOD]: 3,
        [a.Yr.JPY]: 0,
        [a.Yr.KES]: 2,
        [a.Yr.KGS]: 2,
        [a.Yr.KHR]: 2,
        [a.Yr.KMF]: 0,
        [a.Yr.KPW]: 2,
        [a.Yr.KRW]: 0,
        [a.Yr.KWD]: 3,
        [a.Yr.KYD]: 2,
        [a.Yr.KZT]: 2,
        [a.Yr.LAK]: 2,
        [a.Yr.LBP]: 2,
        [a.Yr.LKR]: 2,
        [a.Yr.LRD]: 2,
        [a.Yr.LSL]: 2,
        [a.Yr.LTL]: 2,
        [a.Yr.LVL]: 2,
        [a.Yr.LYD]: 3,
        [a.Yr.MAD]: 2,
        [a.Yr.MDL]: 2,
        [a.Yr.MGA]: 2,
        [a.Yr.MKD]: 2,
        [a.Yr.MMK]: 2,
        [a.Yr.MNT]: 2,
        [a.Yr.MOP]: 2,
        [a.Yr.MRO]: 2,
        [a.Yr.MUR]: 2,
        [a.Yr.MVR]: 2,
        [a.Yr.MWK]: 2,
        [a.Yr.MXN]: 2,
        [a.Yr.MXV]: 2,
        [a.Yr.MYR]: 2,
        [a.Yr.MZN]: 2,
        [a.Yr.NAD]: 2,
        [a.Yr.NGN]: 2,
        [a.Yr.NIO]: 2,
        [a.Yr.NOK]: 2,
        [a.Yr.NPR]: 2,
        [a.Yr.NZD]: 2,
        [a.Yr.OMR]: 3,
        [a.Yr.PAB]: 2,
        [a.Yr.PEN]: 2,
        [a.Yr.PGK]: 2,
        [a.Yr.PHP]: 2,
        [a.Yr.PKR]: 2,
        [a.Yr.PLN]: 2,
        [a.Yr.PYG]: 0,
        [a.Yr.QAR]: 2,
        [a.Yr.RON]: 2,
        [a.Yr.RSD]: 2,
        [a.Yr.RUB]: 2,
        [a.Yr.RWF]: 0,
        [a.Yr.SAR]: 2,
        [a.Yr.SBD]: 2,
        [a.Yr.SCR]: 2,
        [a.Yr.SDG]: 2,
        [a.Yr.SEK]: 2,
        [a.Yr.SGD]: 2,
        [a.Yr.SHP]: 2,
        [a.Yr.SLL]: 2,
        [a.Yr.SOS]: 2,
        [a.Yr.SRD]: 2,
        [a.Yr.SSP]: 2,
        [a.Yr.STD]: 2,
        [a.Yr.SVC]: 2,
        [a.Yr.SYP]: 2,
        [a.Yr.SZL]: 2,
        [a.Yr.THB]: 2,
        [a.Yr.TJS]: 2,
        [a.Yr.TMT]: 2,
        [a.Yr.TND]: 3,
        [a.Yr.TOP]: 2,
        [a.Yr.TRY]: 2,
        [a.Yr.TTD]: 2,
        [a.Yr.TWD]: 2,
        [a.Yr.TZS]: 2,
        [a.Yr.UAH]: 2,
        [a.Yr.UGX]: 0,
        [a.Yr.USD]: 2,
        [a.Yr.USN]: 2,
        [a.Yr.USS]: 2,
        [a.Yr.UYI]: 0,
        [a.Yr.UYU]: 2,
        [a.Yr.UZS]: 2,
        [a.Yr.VEF]: 2,
        [a.Yr.VND]: 0,
        [a.Yr.VUV]: 0,
        [a.Yr.WST]: 2,
        [a.Yr.XAF]: 0,
        [a.Yr.XAG]: 0,
        [a.Yr.XAU]: 0,
        [a.Yr.XBA]: 0,
        [a.Yr.XBB]: 0,
        [a.Yr.XBC]: 0,
        [a.Yr.XBD]: 0,
        [a.Yr.XCD]: 2,
        [a.Yr.XDR]: 0,
        [a.Yr.XFU]: 0,
        [a.Yr.XOF]: 0,
        [a.Yr.XPD]: 0,
        [a.Yr.XPF]: 0,
        [a.Yr.XPT]: 0,
        [a.Yr.XSU]: 0,
        [a.Yr.XTS]: 0,
        [a.Yr.XUA]: 0,
        [a.Yr.YER]: 2,
        [a.Yr.ZAR]: 2,
        [a.Yr.ZMW]: 2,
        [a.Yr.ZWL]: 2,
        [a.Yr.DISCORD_ORB]: 0,
    },
    f = (e, t) => {
        let n = d[t];
        if (null == n) throw Error("Unexpected currency ".concat(t));
        return new (i())(e).dividedBy(10 ** n).toNumber();
    };
