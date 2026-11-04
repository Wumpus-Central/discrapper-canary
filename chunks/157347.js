var i,
    r = n(469881),
    a = n(792996),
    s = (((i = {})[(i.JOINED_AT = 0)] = "JOINED_AT"), (i[(i.ACCOUNT_AGE = 1)] = "ACCOUNT_AGE"), i);
function l() {
    return {
        seconds: a.t["FsBhl/"],
        minutes: a.t["4d1mgT"],
        hours: a.t["2wkczD"],
        days: a.t["ocdS+f"],
        months: a.t["az14+h"],
        years: a.t["5Gk1ns"],
    };
}
function o() {
    return { hours: a.t.JZP2Rs, days: a.t["3moSHc"], months: a.t["0Ddwr1"], years: a.t.cR7lcs };
}
n.d(
    t,
    {},
    {
        OA: { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" },
        hL: function (e, t) {
            return (0, r.A)(e, 0 === t ? l : 1 === t ? o : void 0, !1);
        },
        vn: function (e) {
            return (null != e ? new Date(e) : new Date()).getTime();
        },
        wN: s,
        wp: { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" },
    },
);
