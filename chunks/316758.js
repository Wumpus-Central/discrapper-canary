n.d(t, {
    IV: () => o,
    P: () => s,
    fH: () => c,
    xt: () => u,
});
var r = n(166459),
    l = n(476326),
    a = n(703558),
    i = n(398805);
async function o(e, t, n) {
    let r = (0, i.Yk)(t, n),
        l = await fetch(n);
    return c(e, t, new File([await l.blob()], r, { type: "image/gif" })), n;
}
function c(e, t, n) {
    let i = {
        id: t,
        channelId: e,
        file: n,
        platform: l.ow.WEB,
        origin: "unknown:poll_attachment",
    };
    r.Z.addFile({
        file: i,
        channelId: e,
        draftType: a.d.Poll,
    });
}
async function s(e, t, n) {
    r.Z.remove(e, t, a.d.Poll);
}
async function u(e) {
    r.Z.clearAll(e, a.d.Poll);
}
