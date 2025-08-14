n.d(t, {
    Jj: () => p,
    Lz: () => m,
    gS: () => h,
    lT: () => g,
    s$: () => E,
    wV: () => l,
});
var r = n(829883),
    i = n(378233),
    o = n(823379),
    a = n(591759),
    s = n(998502);
let l = "png",
    c = "https://media.discordapp.net",
    u = "cdn.discordapp.com",
    d = "localhost",
    f = "3000",
    _ = "http://localhost:4000";
function p(e) {
    return !((0, i.B0)(e) || (0, r.zt)(e));
}
function h(e, t, n) {
    let r = s.ZP.canSaveImage(e, null != n ? n : t),
        i = a.Z.isDiscordAssetUrl(e, t, n),
        o = p(e);
    return r && i && o;
}
function m(e, t, n) {
    let r = s.ZP.canCopyImage(e, null != n ? n : t),
        i = a.Z.isDiscordAssetUrl(e, t, n),
        o = p(e);
    return r && i && o;
}
function g(e, t) {
    return (0, o.SO)() && null != e ? e : t;
}
function E(e, t, n, r) {
    let i = a.Z.toURLSafe(e);
    if (null == i || i.host === u) return e;
    let l = (0, s.xG)(e, t),
        p = !1;
    if (
        (i.origin === c && (p = !0),
        (0, o.SO)() && i.origin === _ && (p = !0),
        i.searchParams.delete("width"),
        i.searchParams.delete("height"),
        i.searchParams.delete("quality"),
        i.searchParams.delete("size"),
        p)
    )
        if ((0, o.SO)()) {
            if (a.Z.isOriginalContentTypeDifferent(t, n)) return i.toString();
            (i.host = d),
                (i.port = f),
                i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13));
        } else i.host = u;
    return i.searchParams.delete("format"), null == l && null != r && i.searchParams.append("format", r), i.toString();
}
