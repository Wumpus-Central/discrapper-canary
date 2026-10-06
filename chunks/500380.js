r.d(t, { t: () => c });
var n = r(96337),
    l = r(997101),
    u = r(626584);
let o = new Set(n.A.map((e) => e.alpha2)),
    a = [`${l.d.AN}`, `${l.d.MI}`, `${l.d.TP}`],
    i = new u.A("GetFlagEmoji");
function c(e) {
    if (null == e) return "";
    try {
        if (a.includes(e) || !o.has(e)) return r(874629)("./1f30e.svg");
        let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
        return r(874629)(`./${t}.svg`);
    } catch (e) {
        return (i.error("Error getting flag emoji: ", e), "");
    }
}
