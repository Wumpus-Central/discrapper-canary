n.d(t, {
    Jj: () => u,
    Lz: () => f,
    gS: () => d,
    s$: () => _,
    wV: () => s
});
var r = n(829883),
    i = n(378233),
    o = n(591759),
    a = n(998502);
let s = 'png',
    l = 'https://media.discordapp.net',
    c = 'cdn.discordapp.com';
function u(e) {
    return !((0, i.B0)(e) || (0, r.zt)(e));
}
function d(e) {
    return a.ZP.canSaveImage(e) && o.Z.isDiscordAssetUrl(e) && u(e);
}
function f(e) {
    return a.ZP.canCopyImage(e) && o.Z.isDiscordAssetUrl(e) && u(e);
}
function _(e, t) {
    let n = o.Z.toURLSafe(e);
    if (null == n || n.host === c) return e;
    let r = (0, a.mD)(e);
    return n.origin === l && ((n.host = c), n.searchParams.delete('size')), n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.delete('quality'), n.searchParams.delete('format'), null == r && null != t && n.searchParams.append('format', t), n.toString();
}
