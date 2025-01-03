e.d(t, {
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
let u = /^.*\.discordapp\.net$/,
    a = 'cdn.discordapp.com',
    o = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp']),
    d = new Set(['jpg', 'jpeg', 'png']),
    s = (n) => {
        var t, e, r, l;
        return null === (l = i.Z.toURLSafe(n)) || void 0 === l ? void 0 : null === (r = l.pathname) || void 0 === r ? void 0 : null === (e = r.split('.')) || void 0 === e ? void 0 : null === (t = e.pop()) || void 0 === t ? void 0 : t.toLowerCase();
    };
function c(n) {
    return n.host === a || u.test(n.hostname);
}
function f(n) {
    let t = i.Z.toURLSafe(n);
    return null != t && c(t);
}
function h(n) {
    return !((0, l.B0)(n) || (0, r.zt)(n)) && !0;
}
function p(n) {
    let t = i.Z.toURLSafe(n);
    if (null == t) return !1;
    let e = s(n);
    return null != e && o.has(e) && c(t) && h(n);
}
function v(n) {
    let t = i.Z.toURLSafe(n);
    if (null == t) return !1;
    let e = s(n);
    return null != e && d.has(e) && c(t) && h(n);
}
function m(n) {
    let t = i.Z.toURLSafe(n);
    return null == t || t.host === a ? n : 'https://media.discordapp.net' === t.origin ? ((t.host = a), t.searchParams.delete('size'), t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.delete('quality'), t.searchParams.delete('format'), t.toString()) : (t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.set('quality', 'lossless'), t.searchParams.delete('format'), t.toString());
}
