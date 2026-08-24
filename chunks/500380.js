n.d(t, { t: () => c });
var a = n(96337),
    r = n(997101),
    s = n(626584);
let i = new Set(a.A.map((e) => e.alpha2)),
    o = [`${r.d.AN}`, `${r.d.MI}`, `${r.d.TP}`],
    l = new s.A("GetFlagEmoji");
function c(e) {
    if (null == e) return "";
    try {
        if (o.includes(e) || !i.has(e)) return n(874629)("./1f30e.svg");
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
