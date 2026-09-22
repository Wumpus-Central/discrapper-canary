n.d(t, { Qd: () => s, im: () => a });
var l = n(997101);
let i = ["country", "city", "line1"],
    r = new Set([l.d.PR, l.d.AE, l.d.KY, l.d.NR, l.d.SG, l.d.MO, l.d.GI]),
    a = new Set([l.d.ID, l.d.CO, l.d.HK, l.d.AG, l.d.SM, l.d.VG]);
function s(e) {
    return i.every((t) => {
        if ("city" === t && r.has(e.country)) return !0;
        let n = e[t];
        return null != n && "" !== n;
    });
}
