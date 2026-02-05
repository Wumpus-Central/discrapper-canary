"use strict";
n.d(t, { t: () => c });
var r = n(96337),
    i = n(997101),
    a = n(626584);
let s = new Set(r.A.map((e) => e.alpha2)),
    o = [`${i.d.AN}`, `${i.d.MI}`, `${i.d.TP}`],
    l = "1f30e",
    u = new a.A("GetFlagEmoji"),
    c = (e) => {
        if (null == e) return "";
        try {
            if (o.includes(e) || !s.has(e)) return n(256628)(`./${l}.svg`);
            let t = e
                .toUpperCase()
                .split("")
                .map((e) => (127397 + e.charCodeAt(0)).toString(16))
                .join("-");
            return n(256628)(`./${t}.svg`);
        } catch (e) {
            return u.error("Error getting flag emoji: ", e), "";
        }
    };
