n.d(t, { Z: () => i });
var r = n(822632);
let i = {
        isGifFile: s,
        findOffsets: l,
    },
    a = 6,
    o = ["GIF87a", "GIF89a"];
function s(e) {
    return !!e && o.includes((0, r.oH)(e, 0, a));
}
function l() {
    return { gifHeaderOffset: 0 };
}
