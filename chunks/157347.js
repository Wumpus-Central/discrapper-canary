"use strict";
n.d(t, { OA: () => a, hL: () => c, vn: () => _, wN: () => l, wp: () => o });
var r,
    i = n(469881),
    s = n(985018);
let a = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" },
    o = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
var l = (((r = {})[(r.JOINED_AT = 0)] = "JOINED_AT"), (r[(r.ACCOUNT_AGE = 1)] = "ACCOUNT_AGE"), r);
let u = () => ({
        seconds: s.t["FsBhl/"],
        minutes: s.t["4d1mgT"],
        hours: s.t["2wkczD"],
        days: s.t["ocdS+f"],
        months: s.t["az14+h"],
        years: s.t["5Gk1ns"],
    }),
    d = () => ({ hours: s.t.JZP2Rs, days: s.t["3moSHc"], months: s.t["0Ddwr1"], years: s.t.cR7lcs }),
    c = (e, t) => (0, i.A)(e, 0 === t ? u : 1 === t ? d : void 0, !1),
    _ = (e) => (null != e ? new Date(e) : new Date()).getTime();
