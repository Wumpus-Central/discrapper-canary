n.d(t, { t: () => c });
var l = n(96337),
    r = n(997101),
    s = n(626584);
let a = new Set(l.A.map((e) => e.alpha2)),
    i = [`${r.d.AN}`, `${r.d.MI}`, `${r.d.TP}`],
    o = new s.A("GetFlagEmoji");
function c(e) {
    if (null == e) return "";
    try {
        if (i.includes(e) || !a.has(e)) return n(874629)("./1f30e.svg");
        let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
        return n(874629)(`./${t}.svg`);
    } catch (e) {
        return (o.error("Error getting flag emoji: ", e), "");
    }
}
