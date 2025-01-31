n.d(t, {
    WS: () => f,
    ZP: () => p,
    zS: () => _
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(264344),
    r = n.n(i),
    a = n(772848),
    s = n(511266);
let o = 'com.discord',
    l = 985746746,
    u = 'com.hammerandchisel.discord',
    c = 'https://discordapp.page.link';
function d() {
    var e, t;
    let n = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'],
        i = RegExp('('.concat(n.join('|'), ')'), 'ig'),
        a = (null === r() || void 0 === r() ? void 0 : null === (e = r().ua) || void 0 === e ? void 0 : e.match(i)) != null,
        s = (null === r() || void 0 === r() ? void 0 : r().name) === 'Safari' && !a;
    return (null === r() || void 0 === r() ? void 0 : null === (t = r().os) || void 0 === t ? void 0 : t.family) !== 'iOS' || s;
}
function f() {
    return (0, a.Z)();
}
function _(e) {
    if (!e.startsWith(c)) return null;
    try {
        var t;
        let n = new URL(e).searchParams,
            i = n.get('link');
        if (null == i) return null;
        let r = decodeURIComponent(i),
            a = new URL(r).searchParams,
            s = { utmSource: null !== (t = n.get('utm_source')) && void 0 !== t ? t : void 0 };
        for (let [e, t] of a.entries()) s[e] = t;
        return s;
    } catch {
        return null;
    }
}
function p(e, t) {
    let { utmSource: n, androidFallbackLink: i, iosFallbackLink: r, ...a } = t,
        f = new URL(e);
    for (let e in a) {
        let t = a[e];
        null != t && f.searchParams.set(e, t);
    }
    let _ = encodeURIComponent(f.toString()),
        p = encodeURIComponent((0, s.Z)()),
        h = d() ? 1 : 0,
        m = null != i ? encodeURIComponent(i) : null,
        g = null != r ? encodeURIComponent(r) : null,
        E = ''.concat(c, '/?link=').concat(_, '&utm_source=').concat(n, '&apn=').concat(o, '&isi=').concat(l, '&ibi=').concat(u, '&sd=').concat(p, '&efr=').concat(h);
    return null != m && (E += '&afl='.concat(m)), null != g && (E += '&ifl='.concat(g)), E;
}
