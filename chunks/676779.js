n.d(t, {
    AY: () => u,
    Sw: () => o,
    _N: () => c,
    k7: () => s,
});
var r = n(608299),
    l = n(565150),
    a = n(31717),
    i = n(214162);
async function o(e, t, n) {
    let r = (0, i.$P)(t, n),
        l = await fetch(n);
    return c(e, t, new File([await l.blob()], r, { type: "image/gif" })), n;
}
function c(e, t, n) {
    let i = {
        id: t,
        channelId: e,
        file: n,
        platform: l.xz.WEB,
        origin: "unknown:poll_attachment",
    };
    r.A.addFile({
        file: i,
        channelId: e,
        draftType: a.C.Poll,
    });
}
async function s(e, t, n) {
    r.A.remove(e, t, a.C.Poll);
}
async function u(e) {
    r.A.clearAll(e, a.C.Poll);
}
