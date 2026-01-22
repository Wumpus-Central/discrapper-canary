n.d(t, { A: () => i });
var r = n(872863);
let i = {
    isHeicFile: a,
    findHeicOffsets: s,
};
function a(e) {
    if (!e) return !1;
    let t = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
    try {
        let n = (0, r.vN)(e, 0);
        return n && -1 !== t.indexOf(n.majorBrand);
    } catch (e) {
        return !1;
    }
}
function s(e) {
    return (0, r.OH)(e);
}
