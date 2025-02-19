n.d(t, {
    Jj: () => _,
    Lz: () => m,
    gS: () => h,
    rV: () => p,
    s$: () => g
}),
    n(47120),
    n(301563);
var r = n(829883),
    i = n(378233),
    o = n(591759);
let a = 'https://media.discordapp.net',
    s = /^.*\.discordapp\.net$/,
    l = 'cdn.discordapp.com',
    c = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp']),
    u = new Set(['jpg', 'jpeg', 'png']),
    d = (e) => {
        var t, n, r, i;
        return null === (i = o.Z.toURLSafe(e)) || void 0 === i ? void 0 : null === (r = i.pathname) || void 0 === r ? void 0 : null === (n = r.split('.')) || void 0 === n ? void 0 : null === (t = n.pop()) || void 0 === t ? void 0 : t.toLowerCase();
    };
function f(e) {
    return e.host === l || s.test(e.hostname);
}
function p(e) {
    let t = o.Z.toURLSafe(e);
    return null != t && f(t);
}
function _(e) {
    return !((0, i.B0)(e) || (0, r.zt)(e));
}
function h(e) {
    let t = o.Z.toURLSafe(e);
    if (null == t) return !1;
    let n = d(e);
    return null != n && c.has(n) && f(t) && _(e);
}
function m(e) {
    let t = o.Z.toURLSafe(e);
    if (null == t) return !1;
    let n = d(e);
    return null != n && u.has(n) && f(t) && _(e);
}
function g(e) {
    let t = o.Z.toURLSafe(e);
    return null == t || t.host === l ? e : (t.origin === a ? ((t.host = l), t.searchParams.delete('size'), t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.delete('quality')) : (t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.set('quality', 'lossless')), t.searchParams.delete('format'), t.toString());
}
