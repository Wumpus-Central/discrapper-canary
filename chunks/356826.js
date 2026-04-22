i.d(t, { A: () => r });
var n = i(872863);
let r = {
    isAvifFile: function (e) {
        if (!e) return !1;
        try {
            let t = (0, n.vN)(e, 0);
            return t && "avif" === t.majorBrand;
        } catch (e) {
            return !1;
        }
    },
    findAvifOffsets: function (e) {
        return (0, n.OH)(e);
    },
};
