n.d(t, {
    Jj: () => c,
    Lz: () => d,
    gS: () => u,
    s$: () => f
});
var r = n(829883),
    i = n(378233),
    o = n(591759),
    a = n(998502);
let s = 'https://media.discordapp.net',
    l = 'cdn.discordapp.com';
function c(e) {
    return !((0, i.B0)(e) || (0, r.zt)(e));
}
function u(e) {
    return a.ZP.canSaveImage(e) && o.Z.isDiscordAssetUrl(e) && c(e);
}
function d(e) {
    return a.ZP.canCopyImage(e) && o.Z.isDiscordAssetUrl(e) && c(e);
}
function f(e) {
    let t = o.Z.toURLSafe(e);
    return null == t || t.host === l ? e : (t.origin === s && ((t.host = l), t.searchParams.delete('size')), t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.delete('quality'), t.searchParams.delete('format'), t.toString());
}
