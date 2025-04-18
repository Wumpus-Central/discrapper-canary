n.d(t, {
    Jj: () => p,
    Lz: () => m,
    gS: () => h,
    rV: () => _,
    s$: () => g
}),
    n(388685),
    n(35282);
var r = n(829883),
    i = n(378233),
    a = n(591759);
let o = 'https://media.discordapp.net',
    s = /^.*\.discordapp\.net$/,
    l = 'cdn.discordapp.com',
    c = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp', 'avif']),
    u = new Set(['jpg', 'jpeg', 'png']),
    d = (e) => {
        var t, n, r, i;
        return null == (i = a.Z.toURLSafe(e)) || null == (r = i.pathname) || null == (n = r.split('.')) || null == (t = n.pop()) ? void 0 : t.toLowerCase();
    };
function f(e) {
    return e.host === l || s.test(e.hostname);
}
function _(e) {
    let t = a.Z.toURLSafe(e);
    return null != t && f(t);
}
function p(e) {
    return !((0, i.B0)(e) || (0, r.zt)(e));
}
function h(e) {
    let t = a.Z.toURLSafe(e);
    if (null == t) return !1;
    let n = d(e);
    return null != n && c.has(n) && f(t) && p(e);
}
function m(e) {
    let t = a.Z.toURLSafe(e);
    if (null == t) return !1;
    let n = d(e);
    return null != n && u.has(n) && f(t) && p(e);
}
function g(e) {
    let t = a.Z.toURLSafe(e);
    return null == t || t.host === l ? e : (t.origin === o && ((t.host = l), t.searchParams.delete('size')), t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.delete('quality'), t.searchParams.delete('format'), t.toString());
}
