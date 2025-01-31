n.d(t, {
    Jj: () => p,
    Lz: () => m,
    gS: () => h,
    rV: () => _,
    s$: () => g
}),
    n(47120);
var i = n(829883),
    r = n(378233),
    a = n(591759);
let s = 'https://media.discordapp.net',
    o = /^.*\.discordapp\.net$/,
    l = 'cdn.discordapp.com',
    u = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp']),
    c = new Set(['jpg', 'jpeg', 'png']),
    d = (e) => {
        var t, n, i, r;
        return null === (r = a.Z.toURLSafe(e)) || void 0 === r ? void 0 : null === (i = r.pathname) || void 0 === i ? void 0 : null === (n = i.split('.')) || void 0 === n ? void 0 : null === (t = n.pop()) || void 0 === t ? void 0 : t.toLowerCase();
    };
function f(e) {
    return e.host === l || o.test(e.hostname);
}
function _(e) {
    let t = a.Z.toURLSafe(e);
    return null != t && f(t);
}
function p(e) {
    return !((0, r.B0)(e) || (0, i.zt)(e));
}
function h(e) {
    let t = a.Z.toURLSafe(e);
    if (null == t) return !1;
    let n = d(e);
    return null != n && u.has(n) && f(t) && p(e);
}
function m(e) {
    let t = a.Z.toURLSafe(e);
    if (null == t) return !1;
    let n = d(e);
    return null != n && c.has(n) && f(t) && p(e);
}
function g(e) {
    let t = a.Z.toURLSafe(e);
    return null == t || t.host === l ? e : (t.origin === s ? ((t.host = l), t.searchParams.delete('size'), t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.delete('quality')) : (t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.set('quality', 'lossless')), t.searchParams.delete('format'), t.toString());
}
