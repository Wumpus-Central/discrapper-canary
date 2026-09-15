l.d(t, { t: () => c });
var n = l(96337),
    s = l(997101),
    r = l(626584);
let a = new Set(n.A.map((e) => e.alpha2)),
    i = [`${s.d.AN}`, `${s.d.MI}`, `${s.d.TP}`],
    u = new r.A("GetFlagEmoji");
function c(e) {
    if (null == e) return "";
    try {
        if (i.includes(e) || !a.has(e)) return l(874629)("./1f30e.svg");
        let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
        return l(874629)(`./${t}.svg`);
    } catch (e) {
        return (u.error("Error getting flag emoji: ", e), "");
    }
}
