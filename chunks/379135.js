n.d(t, { Z: () => i });
var r = n(462049);
let i = {
    isAvifFile: a,
    findAvifOffsets: o,
};
function a(e) {
    if (!e) return !1;
    try {
        let t = (0, r.ER)(e, 0);
        return t && "avif" === t.majorBrand;
    } catch (e) {
        return !1;
    }
}
function o(e) {
    return (0, r.ku)(e);
}
