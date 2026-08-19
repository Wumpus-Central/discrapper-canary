n.d(t, { t: () => _ });
var a = n(96337),
    r = n(997101),
    i = n(626584);
let s = new Set(a.A.map((e) => e.alpha2)),
    o = [`${r.d.AN}`, `${r.d.MI}`, `${r.d.TP}`],
    l = new i.A("GetFlagEmoji");
function _(e) {
    if (null == e) return "";
    try {
        if (o.includes(e) || !s.has(e)) return n(874629)("./1f30e.svg");
        let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
        return n(874629)(`./${t}.svg`);
    } catch (e) {
        return l.error("Error getting flag emoji: ", e), "";
    }
}
