n.d(t, { t: () => c });
var r = n(96337),
    l = n(997101),
    u = n(626584);
let a = new Set(r.A.map((e) => e.alpha2)),
    o = [`${l.d.AN}`, `${l.d.MI}`, `${l.d.TP}`],
    i = new u.A("GetFlagEmoji");
function c(e) {
    if (null == e) return "";
    try {
        if (o.includes(e) || !a.has(e)) return n(874629)("./1f30e.svg");
        let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
        return n(874629)(`./${t}.svg`);
    } catch (e) {
        return (i.error("Error getting flag emoji: ", e), "");
    }
}
