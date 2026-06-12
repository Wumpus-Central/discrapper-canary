l.d(t, { t: () => c });
var s = l(96337),
    a = l(997101),
    n = l(626584);
let r = new Set(s.A.map((e) => e.alpha2)),
    i = [`${a.d.AN}`, `${a.d.MI}`, `${a.d.TP}`],
    d = new n.A("GetFlagEmoji"),
    c = (e) => {
        if (null == e) return "";
        try {
            if (i.includes(e) || !r.has(e)) return l(874629)("./1f30e.svg");
            let t = e
                .toUpperCase()
                .split("")
                .map((e) => (127397 + e.charCodeAt(0)).toString(16))
                .join("-");
            return l(874629)(`./${t}.svg`);
        } catch (e) {
            return d.error("Error getting flag emoji: ", e), "";
        }
    };
