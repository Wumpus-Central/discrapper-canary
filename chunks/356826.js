n.d(t, { A: () => i });
var r = n(872863);
let i = {
    isAvifFile: a,
    findAvifOffsets: s,
};
function a(e) {
    if (!e) return !1;
    try {
        let t = (0, r.vN)(e, 0);
        return t && "avif" === t.majorBrand;
    } catch (e) {
        return !1;
    }
}
function s(e) {
    return (0, r.OH)(e);
}
