"use strict";
n.d(t, { OA: () => a, hL: () => d, vn: () => _, wN: () => l, wp: () => o });
var i,
    r = n(469881),
    s = n(375708);
let a = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" },
    o = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
var l = (((i = {})[(i.JOINED_AT = 0)] = "JOINED_AT"), (i[(i.ACCOUNT_AGE = 1)] = "ACCOUNT_AGE"), i);
let u = () => ({
        seconds: s.t["FsBhl/"],
        minutes: s.t["4d1mgT"],
        hours: s.t["2wkczD"],
        days: s.t["ocdS+f"],
        months: s.t["az14+h"],
        years: s.t["5Gk1ns"],
    }),
    c = () => ({ hours: s.t.JZP2Rs, days: s.t["3moSHc"], months: s.t["0Ddwr1"], years: s.t.cR7lcs }),
    d = (e, t) => (0, r.A)(e, 0 === t ? u : 1 === t ? c : void 0, !1),
    _ = (e) => (null != e ? new Date(e) : new Date()).getTime();
