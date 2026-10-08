t.d(a, { Qd: () => s, im: () => i });
var l = t(997101);
let n = ["country", "city", "line1"],
    r = new Set([l.d.PR, l.d.AE, l.d.KY, l.d.NR, l.d.SG, l.d.MO, l.d.GI]),
    i = new Set([l.d.ID, l.d.CO, l.d.HK, l.d.AG, l.d.SM, l.d.VG]);
function s(e) {
    return n.every((a) => {
        if ("city" === a && r.has(e.country)) return !0;
        let t = e[a];
        return null != t && "" !== t;
    });
}
