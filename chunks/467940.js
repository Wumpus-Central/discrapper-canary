t.d(a, {
    Ai: () => g,
    OJ: () => v,
    iZ: () => b,
    oE: () => y,
    p2: () => D,
    zu: () => p,
});
var u,
    n = t(233213),
    r = t(45728),
    i = t(720479),
    o = t(640475),
    l = t(533426),
    s = t(919118),
    d = t(309098),
    c = t(647438);
let m = new (0, s.J)((u = n.Z) && u.__esModule ? u.default : u);
function D(e, a, t, u, n) {
    let i = null != e && null != t && e.compare(t) > 0,
        o = null != e && null != a && 0 > e.compare(a),
        l = (null != e && (null == u ? void 0 : u(e))) || !1,
        c = i || o || l,
        D = [];
    if (c) {
        let e = (function () {
                let e = ("undefined" != typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
                try {
                    Intl.DateTimeFormat.supportedLocalesOf([e]);
                } catch {
                    e = "en-US";
                }
                return e;
            })(),
            u = s.J.getGlobalDictionaryForPackage("@react-stately/datepicker") || m,
            c = new (0, d.E)(e, u),
            h = new (0, r.C)(e, y({}, n)),
            f = h.resolvedOptions().timeZone;
        o && null != a && D.push(c.format("rangeUnderflow", { minValue: h.format(a.toDate(f)) })),
            i && null != t && D.push(c.format("rangeOverflow", { maxValue: h.format(t.toDate(f)) })),
            l && D.push(c.format("unavailableDate"));
    }
    return {
        isInvalid: c,
        validationErrors: D,
        validationDetails: {
            badInput: l,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: i,
            rangeUnderflow: o,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valueMissing: !1,
            valid: !c,
        },
    };
}
let h = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
    },
    f = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
function y(e, a) {
    var t;
    e = {
        ...(a.shouldForceLeadingZeros ? f : h),
        ...e,
    };
    let u = a.granularity || "minute",
        n = Object.keys(e),
        r = n.indexOf(null != (t = a.maxGranularity) ? t : "year");
    r < 0 && (r = 0);
    let i = n.indexOf(u);
    if ((i < 0 && (i = 2), r > i)) throw Error("maxGranularity must be greater than granularity");
    let o = n.slice(r, i + 1).reduce((a, t) => ((a[t] = e[t]), a), {});
    return (
        null != a.hourCycle && (o.hour12 = 12 === a.hourCycle),
        (o.timeZone = a.timeZone || "UTC"),
        ("hour" === u || "minute" === u || "second" === u) &&
            a.timeZone &&
            !a.hideTimeZone &&
            (o.timeZoneName = "short"),
        a.showEra && 0 === r && (o.era = "short"),
        o
    );
}
function p(e) {
    return e && "hour" in e ? e : new (0, i.qp)();
}
function g(e, a) {
    return null === e ? null : e ? (0, o.Mw)(e, a) : void 0;
}
function v(e, a, t, u) {
    if (e) return g(e, t);
    let n = (0, o.Mw)(
        (0, l.zO)(null != u ? u : (0, l.iT)()).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
        }),
        t,
    );
    return "year" === a || "month" === a || "day" === a ? (0, o.WG)(n) : u ? n : (0, o.IO)(n);
}
function b(e, a) {
    let t = e && "timeZone" in e ? e.timeZone : void 0,
        u = e && "minute" in e ? "minute" : "day";
    if (e && a && !(a in e)) throw Error("Invalid granularity " + a + " for value " + e.toString());
    let [n, r] = (0, c.useState)([u, t]);
    return e && (n[0] !== u || n[1] !== t) && r([u, t]), a || (a = e ? u : n[0]), [a, e ? t : n[1]];
}
