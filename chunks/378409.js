r.d(n, {
    Jj: function () {
        return m;
    },
    Lz: function () {
        return E;
    },
    gS: function () {
        return g;
    },
    rV: function () {
        return _;
    },
    s$: function () {
        return v;
    }
});
var i = r(47120);
var a = r(829883),
    o = r(378233),
    s = r(591759);
let l = 'https://media.discordapp.net',
    u = /^.*\.discordapp\.net$/,
    c = 'cdn.discordapp.com',
    d = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp']),
    f = new Set(['jpg', 'jpeg', 'png']),
    p = (e) => {
        var n, r, i, a;
        return null === (a = s.Z.toURLSafe(e)) || void 0 === a ? void 0 : null === (i = a.pathname) || void 0 === i ? void 0 : null === (r = i.split('.')) || void 0 === r ? void 0 : null === (n = r.pop()) || void 0 === n ? void 0 : n.toLowerCase();
    };
function h(e) {
    return e.host === c || u.test(e.hostname);
}
function _(e) {
    let n = s.Z.toURLSafe(e);
    return null != n && h(n);
}
function m(e) {
    return !((0, o.B0)(e) || (0, a.zt)(e)) && !0;
}
function g(e) {
    let n = s.Z.toURLSafe(e);
    if (null == n) return !1;
    let r = p(e);
    return null != r && d.has(r) && h(n) && m(e);
}
function E(e) {
    let n = s.Z.toURLSafe(e);
    if (null == n) return !1;
    let r = p(e);
    return null != r && f.has(r) && h(n) && m(e);
}
function v(e) {
    let n = s.Z.toURLSafe(e);
    return null == n || n.host === c ? e : n.origin === l ? ((n.host = c), n.searchParams.delete('size'), n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.delete('quality'), n.searchParams.delete('format'), n.toString()) : (n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.set('quality', 'lossless'), n.searchParams.delete('format'), n.toString());
}
