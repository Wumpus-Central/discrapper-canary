n.d(t, { OA: () => s, hL: () => u, vn: () => _, wN: () => o, wp: () => l });
var i,
    r = n(469881),
    a = n(375708);
let s = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" },
    l = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
var o = (((i = {})[(i.JOINED_AT = 0)] = "JOINED_AT"), (i[(i.ACCOUNT_AGE = 1)] = "ACCOUNT_AGE"), i);
function d() {
    return {
        seconds: a.t["FsBhl/"],
        minutes: a.t["4d1mgT"],
        hours: a.t["2wkczD"],
        days: a.t["ocdS+f"],
        months: a.t["az14+h"],
        years: a.t["5Gk1ns"],
    };
}
function c() {
    return { hours: a.t.JZP2Rs, days: a.t["3moSHc"], months: a.t["0Ddwr1"], years: a.t.cR7lcs };
}
function u(e, t) {
    return (0, r.A)(e, 0 === t ? d : 1 === t ? c : void 0, !1);
}
function _(e) {
    return (null != e ? new Date(e) : new Date()).getTime();
}
