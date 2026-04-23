n.d(t, { t: () => d });
var r = n(96337),
    a = n(997101),
    i = n(626584);
let o = new Set(r.A.map((e) => e.alpha2)),
    l = [`${a.d.AN}`, `${a.d.MI}`, `${a.d.TP}`],
    s = new i.A("GetFlagEmoji"),
    d = (e) => {
        if (null == e) return "";
        try {
            if (l.includes(e) || !o.has(e)) return n(256628)("./1f30e.svg");
            let t = e
                .toUpperCase()
                .split("")
                .map((e) => (127397 + e.charCodeAt(0)).toString(16))
                .join("-");
            return n(256628)(`./${t}.svg`);
        } catch (e) {
            return s.error("Error getting flag emoji: ", e), "";
        }
    };
