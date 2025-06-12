n.d(t, {
    Jj: () => u,
    Lz: () => _,
    gS: () => d,
    s$: () => f,
    wV: () => s
});
var r = n(829883),
    i = n(378233),
    a = n(591759),
    o = n(998502);
let s = 'png',
    l = 'https://media.discordapp.net',
    c = 'cdn.discordapp.com';
function u(e) {
    return !((0, i.B0)(e) || (0, r.zt)(e));
}
function d(e, t) {
    return o.ZP.canSaveImage(e, t) && a.Z.isDiscordAssetUrl(e) && u(e);
}
function _(e, t) {
    return o.ZP.canCopyImage(e, t) && a.Z.isDiscordAssetUrl(e) && u(e);
}
function f(e, t, n) {
    let r = a.Z.toURLSafe(e);
    if (null == r || r.host === c) return e;
    let i = (0, o.mD)(e, t);
    return r.origin === l && ((r.host = c), r.searchParams.delete('size')), r.searchParams.delete('width'), r.searchParams.delete('height'), r.searchParams.delete('quality'), r.searchParams.delete('format'), null == i && null != n && r.searchParams.append('format', n), r.toString();
}
