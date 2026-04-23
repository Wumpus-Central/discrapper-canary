t.d(a, { $l: () => b, bf: () => $, eD: () => p, id: () => f, nf: () => A, nz: () => D, o_: () => R });
var r,
    n = t(233957),
    i = t(515702),
    l = t(99478),
    o = t(376472),
    u = t(352404),
    s = t(731692),
    d = t(944490),
    c = t(339241),
    m = t(64700);
let h = new (0, s.B)((r = n.A) && r.__esModule ? r.default : r);
function y() {
    let e = ("u" > typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch {
        e = "en-US";
    }
    return e;
}
function D(e, a, t, r, n) {
    let l = null != e && null != t && e.compare(t) > 0,
        o = null != e && null != a && 0 > e.compare(a),
        u = (null != e && (null == r ? void 0 : r(e))) || !1,
        c = l || o || u,
        m = [];
    if (c) {
        let e = y(),
            r = s.B.getGlobalDictionaryForPackage("@react-stately/datepicker") || h,
            c = new (0, d.J)(e, r),
            D = new (0, i.p)(e, f({}, n)),
            p = D.resolvedOptions().timeZone;
        o && null != a && m.push(c.format("rangeUnderflow", { minValue: D.format(a.toDate(p)) })),
            l && null != t && m.push(c.format("rangeOverflow", { maxValue: D.format(t.toDate(p)) })),
            u && m.push(c.format("unavailableDate"));
    }
    return {
        isInvalid: c,
        validationErrors: m,
        validationDetails: {
            badInput: u,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: l,
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
function p(e, a, t, r, n) {
    var i, l;
    let o = D(null != (i = null == e ? void 0 : e.start) ? i : null, a, t, r, n),
        u = D(null != (l = null == e ? void 0 : e.end) ? l : null, a, t, r, n),
        d = (0, c.cX)(o, u);
    if ((null == e ? void 0 : e.end) != null && null != e.start && 0 > e.end.compare(e.start)) {
        let e = s.B.getGlobalDictionaryForPackage("@react-stately/datepicker") || h;
        d = (0, c.cX)(d, {
            isInvalid: !0,
            validationErrors: [e.getStringForLocale("rangeReversed", y())],
            validationDetails: { ...c.oE, rangeUnderflow: !0, rangeOverflow: !0, valid: !1 },
        });
    }
    return d;
}
let g = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit" },
    v = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" };
function f(e, a) {
    var t;
    e = { ...(a.shouldForceLeadingZeros ? v : g), ...e };
    let r = a.granularity || "minute",
        n = Object.keys(e),
        i = n.indexOf(null != (t = a.maxGranularity) ? t : "year");
    i < 0 && (i = 0);
    let l = n.indexOf(r);
    if ((l < 0 && (l = 2), i > l)) throw Error("maxGranularity must be greater than granularity");
    let o = n.slice(i, l + 1).reduce((a, t) => ((a[t] = e[t]), a), {});
    return (
        null != a.hourCycle && (o.hour12 = 12 === a.hourCycle),
        (o.timeZone = a.timeZone || "UTC"),
        ("hour" === r || "minute" === r || "second" === r) &&
            a.timeZone &&
            !a.hideTimeZone &&
            (o.timeZoneName = "short"),
        a.showEra && 0 === i && (o.era = "short"),
        o
    );
}
function b(e) {
    return e && "hour" in e ? e : new (0, l.gX)();
}
function A(e, a) {
    return null === e ? null : e ? (0, o.yP)(e, a) : void 0;
}
function R(e, a, t, r) {
    if (e) return A(e, t);
    let n = (0, o.yP)((0, u.tB)(null != r ? r : (0, u.Xj)()).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }), t);
    return "year" === a || "month" === a || "day" === a ? (0, o.gw)(n) : r ? n : (0, o.tR)(n);
}
function $(e, a) {
    let t = e && "timeZone" in e ? e.timeZone : void 0,
        r = e && "minute" in e ? "minute" : "day";
    if (e && a && !(a in e)) throw Error("Invalid granularity " + a + " for value " + e.toString());
    let [n, i] = (0, m.useState)([r, t]);
    return e && (n[0] !== r || n[1] !== t) && i([r, t]), a || (a = e ? r : n[0]), [a, e ? t : n[1]];
}
