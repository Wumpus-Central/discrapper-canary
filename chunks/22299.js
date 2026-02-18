t.d(a, { $l: () => g, bf: () => b, id: () => p, nf: () => f, nz: () => h, o_: () => v });
var r,
    n = t(233957),
    i = t(515702),
    o = t(99478),
    u = t(376472),
    l = t(352404),
    s = t(731692),
    d = t(944490),
    c = t(64700);
let m = new (0, s.B)((r = n.A) && r.__esModule ? r.default : r);
function h(e, a, t, r, n) {
    let o = null != e && null != t && e.compare(t) > 0,
        u = null != e && null != a && 0 > e.compare(a),
        l = (null != e && (null == r ? void 0 : r(e))) || !1,
        c = o || u || l,
        h = [];
    if (c) {
        let e = (function () {
                let e = ("u" > typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
                try {
                    Intl.DateTimeFormat.supportedLocalesOf([e]);
                } catch {
                    e = "en-US";
                }
                return e;
            })(),
            r = s.B.getGlobalDictionaryForPackage("@react-stately/datepicker") || m,
            c = new (0, d.J)(e, r),
            D = new (0, i.p)(e, p({}, n)),
            y = D.resolvedOptions().timeZone;
        u && null != a && h.push(c.format("rangeUnderflow", { minValue: D.format(a.toDate(y)) })),
            o && null != t && h.push(c.format("rangeOverflow", { maxValue: D.format(t.toDate(y)) })),
            l && h.push(c.format("unavailableDate"));
    }
    return {
        isInvalid: c,
        validationErrors: h,
        validationDetails: {
            badInput: l,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: o,
            rangeUnderflow: u,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valueMissing: !1,
            valid: !c,
        },
    };
}
let D = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit" },
    y = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" };
function p(e, a) {
    var t;
    e = { ...(a.shouldForceLeadingZeros ? y : D), ...e };
    let r = a.granularity || "minute",
        n = Object.keys(e),
        i = n.indexOf(null != (t = a.maxGranularity) ? t : "year");
    i < 0 && (i = 0);
    let o = n.indexOf(r);
    if ((o < 0 && (o = 2), i > o)) throw Error("maxGranularity must be greater than granularity");
    let u = n.slice(i, o + 1).reduce((a, t) => ((a[t] = e[t]), a), {});
    return (
        null != a.hourCycle && (u.hour12 = 12 === a.hourCycle),
        (u.timeZone = a.timeZone || "UTC"),
        ("hour" === r || "minute" === r || "second" === r) &&
            a.timeZone &&
            !a.hideTimeZone &&
            (u.timeZoneName = "short"),
        a.showEra && 0 === i && (u.era = "short"),
        u
    );
}
function g(e) {
    return e && "hour" in e ? e : new (0, o.gX)();
}
function f(e, a) {
    return null === e ? null : e ? (0, u.yP)(e, a) : void 0;
}
function v(e, a, t, r) {
    if (e) return f(e, t);
    let n = (0, u.yP)((0, l.tB)(null != r ? r : (0, l.Xj)()).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }), t);
    return "year" === a || "month" === a || "day" === a ? (0, u.gw)(n) : r ? n : (0, u.tR)(n);
}
function b(e, a) {
    let t = e && "timeZone" in e ? e.timeZone : void 0,
        r = e && "minute" in e ? "minute" : "day";
    if (e && a && !(a in e)) throw Error("Invalid granularity " + a + " for value " + e.toString());
    let [n, i] = (0, c.useState)([r, t]);
    return e && (n[0] !== r || n[1] !== t) && i([r, t]), a || (a = e ? r : n[0]), [a, e ? t : n[1]];
}
