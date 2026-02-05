n.d(t, { AY: () => u, Sw: () => o, _N: () => s, k7: () => c });
var l = n(608299),
    a = n(565150),
    i = n(31717),
    r = n(214162);
async function o(e, t, n) {
    let l = (0, r.$P)(t, n),
        a = await fetch(n);
    return s(e, t, new File([await a.blob()], l, { type: "image/gif" })), n;
}
function s(e, t, n) {
    let r = { id: t, channelId: e, file: n, platform: a.xz.WEB, origin: "unknown:poll_attachment" };
    l.A.addFile({ file: r, channelId: e, draftType: i.C.Poll });
}
async function c(e, t, n) {
    l.A.remove(e, t, i.C.Poll);
}
async function u(e) {
    l.A.clearAll(e, i.C.Poll);
}
