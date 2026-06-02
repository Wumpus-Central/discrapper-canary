l.d(t, { t: () => d });
var s = l(96337),
    a = l(997101),
    r = l(626584);
let n = new Set(s.A.map((e) => e.alpha2)),
    i = [`${a.d.AN}`, `${a.d.MI}`, `${a.d.TP}`],
    c = new r.A("GetFlagEmoji"),
    d = (e) => {
        if (null == e) return "";
        try {
            if (i.includes(e) || !n.has(e)) return l(874629)("./1f30e.svg");
            let t = e
                .toUpperCase()
                .split("")
                .map((e) => (127397 + e.charCodeAt(0)).toString(16))
                .join("-");
            return l(874629)(`./${t}.svg`);
        } catch (e) {
            return c.error("Error getting flag emoji: ", e), "";
        }
    };
