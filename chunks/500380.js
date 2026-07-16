n.d(t, { t: () => o });
var l = n(96337),
    r = n(997101),
    a = n(626584);
let i = new Set(l.A.map((e) => e.alpha2)),
    s = [`${r.d.AN}`, `${r.d.MI}`, `${r.d.TP}`],
    u = new a.A("GetFlagEmoji");
function o(e) {
    if (null == e) return "";
    try {
        if (s.includes(e) || !i.has(e)) return n(874629)("./1f30e.svg");
        let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
        return n(874629)(`./${t}.svg`);
    } catch (e) {
        return u.error("Error getting flag emoji: ", e), "";
    }
}
