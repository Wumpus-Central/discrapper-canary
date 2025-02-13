n.d(t, {
    Ld: () => c,
    R_: () => o,
    aw: () => d,
    pU: () => u
}),
    n(789020);
var a = n(630388),
    l = n(406432),
    i = n(828061),
    s = n(981631);
let r = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    o = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e || 'VISUAL_PLACEHOLDER' === e,
    c = (e) => 'IMAGE' === e || 'VIDEO' === e || 'VISUAL_PLACEHOLDER' === e;
function d(e, t) {
    let { filename: n, width: o, height: c } = e;
    if (t && null != o && o > 0 && null != c && c > 0) {
        var d;
        if ((0, l.CO)(n)) return 'IMAGE';
        if (!(0, l.NU)(n) || null == e.proxy_url) return 'INVALID';
        return (0, a.yE)(null !== (d = e.flags) && void 0 !== d ? d : 0, s.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
    }
    return null != t && r.test(n) && null != e.url ? 'AUDIO' : null != e.url && (0, i.O)(n) ? 'PLAINTEXT_PREVIEW' : 'OTHER';
}
function u(e) {
    let { contentType: t, width: n, height: a } = e;
    if (null != n && n > 0 && null != a && a > 0) {
        if ((0, l.tw)(t)) return 'IMAGE';
        if ((0, l.X2)(t)) return 'VIDEO';
    }
    return 'VISUAL_PLACEHOLDER';
}
