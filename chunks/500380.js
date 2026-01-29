n.d(t, {
    t: () => u,
}),
    n(896048),
    n(747238);
var r = n(96337),
    i = n(997101),
    a = n(626584);
let o = new Set(r.A.map((e) => e.alpha2)),
    s = ["".concat(i.d.AN), "".concat(i.d.MI), "".concat(i.d.TP)],
    l = "1f30e",
    c = new a.A("GetFlagEmoji"),
    u = (e) => {
        if (null == e) return "";
        try {
            if (s.includes(e) || !o.has(e)) return n(256628)("./".concat(l, ".svg"));
            let t = e
                .toUpperCase()
                .split("")
                .map((e) => (127397 + e.charCodeAt(0)).toString(16))
                .join("-");
            return n(256628)("./".concat(t, ".svg"));
        } catch (e) {
            return c.error("Error getting flag emoji: ", e), "";
        }
    };
