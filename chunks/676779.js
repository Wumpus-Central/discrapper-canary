n.d(t, { AY: () => u, Sw: () => o, _N: () => s, k7: () => c });
var a = n(608299),
    l = n(565150),
    i = n(31717),
    r = n(214162);
async function o(e, t, n) {
    let a = (0, r.$P)(t, n),
        l = await fetch(n);
    return s(e, t, new File([await l.blob()], a, { type: "image/gif" })), n;
}
function s(e, t, n) {
    let r = { id: t, channelId: e, file: n, platform: l.xz.WEB, origin: "unknown:poll_attachment" };
    a.A.addFile({ file: r, channelId: e, draftType: i.C.Poll });
}
async function c(e, t, n) {
    a.A.remove(e, t, i.C.Poll);
}
async function u(e) {
    a.A.clearAll(e, i.C.Poll);
}
