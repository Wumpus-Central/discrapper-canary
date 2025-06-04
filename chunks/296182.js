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
function d(e, t) {
    return a.ZP.canSaveImage(e, t) && o.Z.isDiscordAssetUrl(e) && u(e);
}
function f(e, t) {
    return a.ZP.canCopyImage(e, t) && o.Z.isDiscordAssetUrl(e) && u(e);
}
function _(e, t, n) {
    let r = o.Z.toURLSafe(e);
    if (null == r || r.host === c) return e;
    let i = (0, a.mD)(e, t);
    return r.origin === l && ((r.host = c), r.searchParams.delete('size')), r.searchParams.delete('width'), r.searchParams.delete('height'), r.searchParams.delete('quality'), r.searchParams.delete('format'), null == i && null != n && r.searchParams.append('format', n), r.toString();
}
