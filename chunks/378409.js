e.d(n, {
    Jj: function () {
        return h;
    },
    Lz: function () {
        return v;
    },
    gS: function () {
        return p;
    },
    rV: function () {
        return f;
    },
    s$: function () {
        return m;
    }
}),
    e(47120);
var r = e(829883),
    l = e(378233),
    i = e(591759);
let a = /^.*\.discordapp\.net$/,
    u = 'cdn.discordapp.com',
    o = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp']),
    s = new Set(['jpg', 'jpeg', 'png']),
    d = (t) => {
        var n, e, r, l;
        return null === (l = i.Z.toURLSafe(t)) || void 0 === l ? void 0 : null === (r = l.pathname) || void 0 === r ? void 0 : null === (e = r.split('.')) || void 0 === e ? void 0 : null === (n = e.pop()) || void 0 === n ? void 0 : n.toLowerCase();
    };
function c(t) {
    return t.host === u || a.test(t.hostname);
}
function f(t) {
    let n = i.Z.toURLSafe(t);
    return null != n && c(n);
}
function h(t) {
    return !((0, l.B0)(t) || (0, r.zt)(t)) && !0;
}
function p(t) {
    let n = i.Z.toURLSafe(t);
    if (null == n) return !1;
    let e = d(t);
    return null != e && o.has(e) && c(n) && h(t);
}
function v(t) {
    let n = i.Z.toURLSafe(t);
    if (null == n) return !1;
    let e = d(t);
    return null != e && s.has(e) && c(n) && h(t);
}
function m(t) {
    let n = i.Z.toURLSafe(t);
    return null == n || n.host === u ? t : 'https://media.discordapp.net' === n.origin ? ((n.host = u), n.searchParams.delete('size'), n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.delete('quality'), n.searchParams.delete('format'), n.toString()) : (n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.set('quality', 'lossless'), n.searchParams.delete('format'), n.toString());
}
