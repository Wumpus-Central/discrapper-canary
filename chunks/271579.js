(n.d(t, {
    WS: () => m,
    ZP: () => E,
    zS: () => g
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
    n(388685));
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
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let c = 'com.discord',
    u = 985746746,
    d = 'com.hammerandchisel.discord',
    f = 'https://discordapp.page.link',
    _ = 'https://discordapp.onelink.me',
    p = 'Hs5r';
function h() {
    var e, t;
    let n = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'],
        r = RegExp('('.concat(n.join('|'), ')'), 'ig'),
        a = (null === i() || void 0 === i() || null == (e = i().ua) ? void 0 : e.match(r)) != null,
        o = (null === i() || void 0 === i() ? void 0 : i().name) === 'Safari' && !a;
    return (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) !== 'iOS' || o;
}
function m() {
    return (0, a.Z)();
}
function g(e) {
    let t = e.startsWith(_),
        n = e.startsWith(f);
    if (!t && !n) return null;
    try {
        let t = new URL(e).searchParams,
            r = n ? t.get('link') : t.get('deep_link_value');
        if (null == r) return null;
        let i = decodeURIComponent(r),
            a = new URL(i).searchParams,
            o = n ? t.get('utm_source') : t.get('pid'),
            s = { utmSource: null != o ? o : void 0 };
        for (let [e, t] of a.entries()) s[e] = t;
        return s;
    } catch (e) {
        return null;
    }
}
function E(e, t) {
    var n, r;
    let { utmSource: i, androidFallbackLink: a, iosFallbackLink: l } = t,
        m = s(t, ['utmSource', 'androidFallbackLink', 'iosFallbackLink']),
        g = new URL(e);
    for (let e in m) {
        let t = m[e];
        null != t && g.searchParams.set(e, t);
    }
    let E = encodeURIComponent(g.toString()),
        b = encodeURIComponent((0, o.Z)()),
        y = +!!h(),
        O = null != a ? encodeURIComponent(a) : null,
        v = null != l ? encodeURIComponent(l) : null;
    if ((null == (r = window) || null == (n = r.location) ? void 0 : n.hash) === '#test') {
        let e = ''.concat(_, '/').concat(p, '/?deep_link_value=').concat(E, '&pid=').concat(i, '&af_og_description=').concat(b, '&af_force_deeplink=').concat(y);
        return (null != O && (e += '&af_android_url='.concat(O)), null != v && (e += '&af_ios_url='.concat(v)), console.log('Redirecting to '.concat(e)), e);
    }
    {
        let e = encodeURIComponent(g.toString()),
            t = ''.concat(f, '/?link=').concat(e, '&utm_source=').concat(i, '&apn=').concat(c, '&isi=').concat(u, '&ibi=').concat(d, '&sd=').concat(b, '&efr=').concat(y);
        return (null != O && (t += '&afl='.concat(O)), null != v && (t += '&ifl='.concat(v)), t);
    }
}
