n.d(t, {
    Jj: () => m,
    Lz: () => g,
    gS: () => h,
    lT: () => E,
    s$: () => b,
    wV: () => c,
});
var r = n(829883),
    i = n(198620),
    a = n(378233),
    o = n(823379),
    s = n(591759),
    l = n(998502);
let c = "png",
    u = "https://media.discordapp.net",
    d = "cdn.discordapp.com",
    f = "localhost",
    p = "3000",
    _ = "http://localhost:4000";
function m(e) {
    return !((0, a.B0)(e) || (0, r.zt)(e));
}
function h(e, t, n) {
    let r = l.ZP.canSaveImage(e, null != n ? n : t),
        i = s.Z.isDiscordAssetUrl(e, t, n),
        a = m(e);
    return r && i && a;
}
function g(e, t, n) {
    let r = l.ZP.canCopyImage(e),
        i = s.Z.isDiscordAssetUrl(e, t, n),
        a = m(e);
    return r && i && a;
}
function E(e, t) {
    if ((0, o.ii)()) return null != e ? e : t;
    if (null != e) {
        let n = s.Z.toURLSafe(t);
        if (null != n && (0, i._M)(n)) return e;
    }
    return t;
}
function b(e, t, n, r) {
    let i = s.Z.toURLSafe(e);
    if (null == i || i.host === d) return e;
    let a = (0, l.xG)(e, t),
        c = !1;
    if (
        (i.origin === u && (c = !0),
        (0, o.ii)() && i.origin === _ && (c = !0),
        i.searchParams.delete("width"),
        i.searchParams.delete("height"),
        i.searchParams.delete("quality"),
        i.searchParams.delete("size"),
        c)
    )
        if ((0, o.ii)()) {
            if (s.Z.isOriginalContentTypeDifferent(t, n)) return i.toString();
            (i.host = f),
                (i.port = p),
                i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13));
        } else i.host = d;
    return i.searchParams.delete("format"), null == a && null != r && i.searchParams.append("format", r), i.toString();
}
