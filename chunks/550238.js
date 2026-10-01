l.d(n, { Qd: () => s, im: () => u });
var t = l(997101);
let r = ["country", "city", "line1"],
    i = new Set([t.d.PR, t.d.AE, t.d.KY, t.d.NR, t.d.SG, t.d.MO, t.d.GI]),
    u = new Set([t.d.ID, t.d.CO, t.d.HK, t.d.AG, t.d.SM, t.d.VG]);
function s(e) {
    return r.every((n) => {
        if ("city" === n && i.has(e.country)) return !0;
        let l = e[n];
        return null != l && "" !== l;
    });
}
