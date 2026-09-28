n.d(t, { Qd: () => a, im: () => i });
var r = n(997101);
let l = ["country", "city", "line1"],
    o = new Set([r.d.PR, r.d.AE, r.d.KY, r.d.NR, r.d.SG, r.d.MO, r.d.GI]),
    i = new Set([r.d.ID, r.d.CO, r.d.HK, r.d.AG, r.d.SM, r.d.VG]);
function a(e) {
    return l.every((t) => {
        if ("city" === t && o.has(e.country)) return !0;
        let n = e[t];
        return null != n && "" !== n;
    });
}
