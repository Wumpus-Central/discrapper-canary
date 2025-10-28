t.d(a, {
    LM: () => D,
    Rf: () => h,
    UW: () => m,
    sG: () => l,
    to: () => c,
    wG: () => s,
});
var u = t(720479),
    n = t(640475),
    r = t(274738);
let i = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,
    o = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
function l(e) {
    let a = e.match(i);
    if (!a) throw Error("Invalid ISO 8601 date string: " + e);
    let t = new (0, u.aw)(d(a[1], 0, 9999), d(a[2], 1, 12), 1);
    return (t.day = d(a[3], 1, t.calendar.getDaysInMonth(t))), t;
}
function s(e) {
    let a = e.match(o);
    if (!a) throw Error("Invalid ISO 8601 date time string: " + e);
    let t = d(a[1], -9999, 9999),
        n = new (0, u.oz)(
            t < 1 ? "BC" : "AD",
            t < 1 ? -t + 1 : t,
            d(a[2], 1, 12),
            1,
            a[4] ? d(a[4], 0, 23) : 0,
            a[5] ? d(a[5], 0, 59) : 0,
            a[6] ? d(a[6], 0, 59) : 0,
            a[7] ? 1000 * d(a[7], 0, 1 / 0) : 0,
        );
    return (n.day = d(a[3], 0, n.calendar.getDaysInMonth(n))), n;
}
function d(e, a, t) {
    let u = Number(e);
    if (u < a || u > t) throw RangeError(`Value out of range: ${a} <= ${u} <= ${t}`);
    return u;
}
function c(e) {
    return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1000).slice(1) : ""}`;
}
function m(e) {
    let a,
        t = (0, n.Mw)(e, new (0, r.IQ)());
    return (
        (a =
            "BC" === t.era
                ? 1 === t.year
                    ? "0000"
                    : "-" + String(Math.abs(1 - t.year)).padStart(6, "00")
                : String(t.year).padStart(4, "0")),
        `${a}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`
    );
}
function D(e) {
    return `${m(e)}T${c(e)}`;
}
function h(e) {
    var a;
    let t, u, n, r, i;
    return `${D(e)}${((t = 0 > Math.sign((a = e.offset)) ? "-" : "+"), (u = Math.floor((a = Math.abs(a)) / 3600000)), (n = Math.floor((a % 3600000) / 60000)), (r = Math.floor(((a % 3600000) % 60000) / 1000)), (i = `${t}${String(u).padStart(2, "0")}:${String(n).padStart(2, "0")}`), 0 !== r && (i += `:${String(r).padStart(2, "0")}`), i)}[${e.timeZone}]`;
}
