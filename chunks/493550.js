n.d(t, {
    Ai: () => b,
    OJ: () => y,
    iZ: () => O,
    oE: () => g,
    p2: () => _,
    zu: () => E,
});
var r = n(201767),
    i = n(45728),
    a = n(720479),
    o = n(640475),
    s = n(533426),
    l = n(919118),
    c = n(309098),
    u = n(473749);
function d(e) {
    return e && e.__esModule ? e.default : e;
}
let f = new (0, l.J)(d(r.Z));
function p() {
    let e = ("undefined" != typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch {
        e = "en-US";
    }
    return e;
}
function _(e, t, n, r, a) {
    let o = null != e && null != n && e.compare(n) > 0,
        s = null != e && null != t && 0 > e.compare(t),
        u = (null != e && (null == r ? void 0 : r(e))) || !1,
        d = o || s || u,
        _ = [];
    if (d) {
        let e = p(),
            r = l.J.getGlobalDictionaryForPackage("@react-stately/datepicker") || f,
            d = new (0, c.E)(e, r),
            m = new (0, i.C)(e, g({}, a)),
            h = m.resolvedOptions().timeZone;
        s && null != t && _.push(d.format("rangeUnderflow", { minValue: m.format(t.toDate(h)) })),
            o && null != n && _.push(d.format("rangeOverflow", { maxValue: m.format(n.toDate(h)) })),
            u && _.push(d.format("unavailableDate"));
    }
    return {
        isInvalid: d,
        validationErrors: _,
        validationDetails: {
            badInput: u,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: o,
            rangeUnderflow: s,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valueMissing: !1,
            valid: !d,
        },
    };
}
let m = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
    },
    h = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
function g(e, t) {
    var n;
    e = {
        ...(t.shouldForceLeadingZeros ? h : m),
        ...e,
    };
    let r = t.granularity || "minute",
        i = Object.keys(e),
        a = i.indexOf(null != (n = t.maxGranularity) ? n : "year");
    a < 0 && (a = 0);
    let o = i.indexOf(r);
    if ((o < 0 && (o = 2), a > o)) throw Error("maxGranularity must be greater than granularity");
    let s = i.slice(a, o + 1).reduce((t, n) => ((t[n] = e[n]), t), {});
    return (
        null != t.hourCycle && (s.hour12 = 12 === t.hourCycle),
        (s.timeZone = t.timeZone || "UTC"),
        ("hour" === r || "minute" === r || "second" === r) &&
            t.timeZone &&
            !t.hideTimeZone &&
            (s.timeZoneName = "short"),
        t.showEra && 0 === a && (s.era = "short"),
        s
    );
}
function E(e) {
    return e && "hour" in e ? e : new (0, a.qp)();
}
function b(e, t) {
    return null === e ? null : e ? (0, o.Mw)(e, t) : void 0;
}
function y(e, t, n, r) {
    if (e) return b(e, n);
    let i = (0, o.Mw)(
        (0, s.zO)(null != r ? r : (0, s.iT)()).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
        }),
        n,
    );
    return "year" === t || "month" === t || "day" === t ? (0, o.WG)(i) : r ? i : (0, o.IO)(i);
}
function O(e, t) {
    let n = e && "timeZone" in e ? e.timeZone : void 0,
        r = e && "minute" in e ? "minute" : "day";
    if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
    let [i, a] = (0, u.useState)([r, n]);
    return e && (i[0] !== r || i[1] !== n) && a([r, n]), t || (t = e ? r : i[0]), [t, e ? n : i[1]];
}
