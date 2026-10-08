t.d(n, { Qd: () => s, im: () => a });
var l = t(997101);
let r = ["country", "city", "line1"],
    i = new Set([l.d.PR, l.d.AE, l.d.KY, l.d.NR, l.d.SG, l.d.MO, l.d.GI]),
    a = new Set([l.d.ID, l.d.CO, l.d.HK, l.d.AG, l.d.SM, l.d.VG]);
function s(e) {
    return r.every((n) => {
        if ("city" === n && i.has(e.country)) return !0;
        let t = e[n];
        return null != t && "" !== t;
    });
}
