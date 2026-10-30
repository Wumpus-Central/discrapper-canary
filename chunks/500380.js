l.d(t, { t: () => u });
var n = l(96337),
    r = l(997101),
    a = l(626584);
let s = new Set(n.A.map((e) => e.alpha2)),
    i = [`${r.d.AN}`, `${r.d.MI}`, `${r.d.TP}`],
    o = new a.A("GetFlagEmoji");
function u(e) {
    if (null == e) return "";
    try {
        if (i.includes(e) || !s.has(e)) return l(874629)("./1f30e.svg");
        let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
        return l(874629)(`./${t}.svg`);
    } catch (e) {
        return (o.error("Error getting flag emoji: ", e), "");
    }
}
