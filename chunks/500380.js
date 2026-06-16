"use strict";
n.d(t, { t: () => u });
var i = n(96337),
    r = n(997101),
    s = n(626584);
let a = new Set(i.A.map((e) => e.alpha2)),
    o = [`${r.d.AN}`, `${r.d.MI}`, `${r.d.TP}`],
    l = new s.A("GetFlagEmoji"),
    u = (e) => {
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
            return l.error("Error getting flag emoji: ", e), "";
        }
    };
