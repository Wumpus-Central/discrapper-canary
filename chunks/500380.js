n.d(t, { t: () => a });
var i = n(96337),
    d = n(997101),
    r = n(626584);
let l = new Set(i.A.map((e) => e.alpha2)),
    h = [`${d.d.AN}`, `${d.d.MI}`, `${d.d.TP}`],
    u = new r.A("GetFlagEmoji");
function a(e) {
    if (null == e) return "";
    try {
        if (h.includes(e) || !l.has(e)) return n(874629)("./1f30e.svg");
        let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
        return n(874629)(`./${t}.svg`);
    } catch (e) {
        return (u.error("Error getting flag emoji: ", e), "");
    }
}
