n.d(t, { Z: () => i });
var r = n(463424);
let i = {
        isGifFile: s,
        findOffsets: l,
    },
    o = 6,
    a = ["GIF87a", "GIF89a"];
function s(e) {
    return !!e && a.includes((0, r.oH)(e, 0, o));
}
function l() {
    return { gifHeaderOffset: 0 };
}
