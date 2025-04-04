n.d(t, {
    WS: () => p,
    ZP: () => m,
    zS: () => h
}),
    n(474991),
    n(398202),
    n(301563),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(264344),
    i = n.n(r),
    o = n(772848),
    a = n(511266);
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = l(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let c = 'com.discord',
    u = 985746746,
    d = 'com.hammerandchisel.discord',
    f = 'https://discordapp.page.link';
function _() {
    var e, t;
    let n = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'],
        r = RegExp('('.concat(n.join('|'), ')'), 'ig'),
        o = (null === i() || void 0 === i() || null == (e = i().ua) ? void 0 : e.match(r)) != null,
        a = (null === i() || void 0 === i() ? void 0 : i().name) === 'Safari' && !o;
    return (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) !== 'iOS' || a;
}
function p() {
    return (0, o.Z)();
}
function h(e) {
    if (!e.startsWith(f)) return null;
    try {
        var t;
        let n = new URL(e).searchParams,
            r = n.get('link');
        if (null == r) return null;
        let i = decodeURIComponent(r),
            o = new URL(i).searchParams,
            a = { utmSource: null != (t = n.get('utm_source')) ? t : void 0 };
        for (let [e, t] of o.entries()) a[e] = t;
        return a;
    } catch (e) {
        return null;
    }
}
function m(e, t) {
    let { utmSource: n, androidFallbackLink: r, iosFallbackLink: i } = t,
        o = s(t, ['utmSource', 'androidFallbackLink', 'iosFallbackLink']),
        l = new URL(e);
    for (let e in o) {
        let t = o[e];
        null != t && l.searchParams.set(e, t);
    }
    let p = encodeURIComponent(l.toString()),
        h = encodeURIComponent((0, a.Z)()),
        m = +!!_(),
        g = null != r ? encodeURIComponent(r) : null,
        E = null != i ? encodeURIComponent(i) : null,
        b = ''.concat(f, '/?link=').concat(p, '&utm_source=').concat(n, '&apn=').concat(c, '&isi=').concat(u, '&ibi=').concat(d, '&sd=').concat(h, '&efr=').concat(m);
    return null != g && (b += '&afl='.concat(g)), null != E && (b += '&ifl='.concat(E)), b;
}
