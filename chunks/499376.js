n.d(t, {
    Ld: () => c,
    R_: () => o,
    aw: () => u,
    pU: () => d
}),
    n(997841),
    n(35282);
var a = n(630388),
    r = n(406432),
    l = n(828061),
    i = n(981631);
let s = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    o = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e || 'VISUAL_PLACEHOLDER' === e,
    c = (e) => 'IMAGE' === e || 'VIDEO' === e || 'VISUAL_PLACEHOLDER' === e;
function u(e, t) {
    let { filename: n, width: o, height: c } = e;
    if (t && null != o && o > 0 && null != c && c > 0)
        if ((0, r.CO)(n)) return 'IMAGE';
        else {
            var u;
            if (!(0, r.NU)(n) || null == e.proxy_url) return 'INVALID';
            return (0, a.yE)(null != (u = e.flags) ? u : 0, i.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    return null != t && s.test(n) && null != e.url ? 'AUDIO' : null != e.url && (0, l.O)(n) ? 'PLAINTEXT_PREVIEW' : 'OTHER';
}
function d(e) {
    let { contentType: t, width: n, height: a } = e;
    if (null != n && n > 0 && null != a && a > 0) {
        if ((0, r.tw)(t)) return 'IMAGE';
        else if ((0, r.X2)(t)) return 'VIDEO';
    }
    return 'VISUAL_PLACEHOLDER';
}
