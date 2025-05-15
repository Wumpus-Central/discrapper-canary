n.d(t, {
    WS: () => p,
    ZP: () => m,
    zS: () => h
}),
    n(413496),
    n(433524),
    n(35282),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(264344),
    i = n.n(r),
    a = n(772848),
    o = n(511266);
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = l(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
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
        a = (null === i() || void 0 === i() || null == (e = i().ua) ? void 0 : e.match(r)) != null,
        o = (null === i() || void 0 === i() ? void 0 : i().name) === 'Safari' && !a;
    return (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) !== 'iOS' || o;
}
function p() {
    return (0, a.Z)();
}
function h(e) {
    if (!e.startsWith(f)) return null;
    try {
        var t;
        let n = new URL(e).searchParams,
            r = n.get('link');
        if (null == r) return null;
        let i = decodeURIComponent(r),
            a = new URL(i).searchParams,
            o = { utmSource: null != (t = n.get('utm_source')) ? t : void 0 };
        for (let [e, t] of a.entries()) o[e] = t;
        return o;
    } catch (e) {
        return null;
    }
}
function m(e, t) {
    let { utmSource: n, androidFallbackLink: r, iosFallbackLink: i } = t,
        a = s(t, ['utmSource', 'androidFallbackLink', 'iosFallbackLink']),
        l = new URL(e);
    for (let e in a) {
        let t = a[e];
        null != t && l.searchParams.set(e, t);
    }
    let p = encodeURIComponent(l.toString()),
        h = encodeURIComponent((0, o.Z)()),
        m = +!!_(),
        g = null != r ? encodeURIComponent(r) : null,
        E = null != i ? encodeURIComponent(i) : null,
        b = ''.concat(f, '/?link=').concat(p, '&utm_source=').concat(n, '&apn=').concat(c, '&isi=').concat(u, '&ibi=').concat(d, '&sd=').concat(h, '&efr=').concat(m);
    return null != g && (b += '&afl='.concat(g)), null != E && (b += '&ifl='.concat(E)), b;
}
