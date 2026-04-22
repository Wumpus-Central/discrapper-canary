n.d(t, { t: () => u });
var r = n(96337),
    l = n(997101),
    i = n(626584);
let a = new Set(r.A.map((e) => e.alpha2)),
    s = [`${l.d.AN}`, `${l.d.MI}`, `${l.d.TP}`],
    o = new i.A("GetFlagEmoji"),
    u = (e) => {
        if (null == e) return "";
        try {
            if (s.includes(e) || !a.has(e)) return n(256628)("./1f30e.svg");
            let t = e
                .toUpperCase()
                .split("")
                .map((e) => (127397 + e.charCodeAt(0)).toString(16))
                .join("-");
            return n(256628)(`./${t}.svg`);
        } catch (e) {
            return o.error("Error getting flag emoji: ", e), "";
        }
    };
