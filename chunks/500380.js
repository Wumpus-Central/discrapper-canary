l.d(t, { t: () => o });
var n = l(96337),
    a = l(997101),
    r = l(626584);
let s = new Set(n.A.map((e) => e.alpha2)),
    i = [`${a.d.AN}`, `${a.d.MI}`, `${a.d.TP}`],
    c = new r.A("GetFlagEmoji"),
    o = (e) => {
        if (null == e) return "";
        try {
            if (i.includes(e) || !s.has(e)) return l(256628)("./1f30e.svg");
            let t = e
                .toUpperCase()
                .split("")
                .map((e) => (127397 + e.charCodeAt(0)).toString(16))
                .join("-");
            return l(256628)(`./${t}.svg`);
        } catch (e) {
            return c.error("Error getting flag emoji: ", e), "";
        }
    };
