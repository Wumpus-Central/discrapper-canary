e.d(t, { t: () => u });
var a = e(96337),
    i = e(997101),
    n = e(626584);
let p = new Set(a.A.map((r) => r.alpha2)),
    s = [`${i.d.AN}`, `${i.d.MI}`, `${i.d.TP}`],
    o = new n.A("GetFlagEmoji");
function u(r) {
    if (null == r) return "";
    try {
        if (s.includes(r) || !p.has(r)) return e(874629)("./1f30e.svg");
        let t = r
            .toUpperCase()
            .split("")
            .map((r) => (127397 + r.charCodeAt(0)).toString(16))
            .join("-");
        return e(874629)(`./${t}.svg`);
    } catch (r) {
        return o.error("Error getting flag emoji: ", r), "";
    }
}
