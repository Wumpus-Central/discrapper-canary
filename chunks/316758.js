n.d(t, {
    IV: () => i,
    P: () => c,
    fH: () => s,
    xt: () => u
});
var r = n(166459),
    a = n(476326),
    l = n(703558),
    o = n(398805);
async function i(e, t, n) {
    let r = (0, o.Yk)(t, n),
        a = await fetch(n);
    return s(e, t, new File([await a.blob()], r, { type: 'image/gif' })), n;
}
function s(e, t, n) {
    let o = {
        id: t,
        channelId: e,
        file: n,
        platform: a.ow.WEB
    };
    r.Z.addFile({
        file: o,
        channelId: e,
        draftType: l.d.Poll
    });
}
async function c(e, t, n) {
    r.Z.remove(e, t, l.d.Poll);
}
async function u(e) {
    r.Z.clearAll(e, l.d.Poll);
}
