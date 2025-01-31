n.d(t, {
    Ld: () => c,
    R_: () => o,
    aw: () => u,
    pU: () => d
}),
    n(789020);
var l = n(630388),
    i = n(406432),
    a = n(828061),
    s = n(981631);
let r = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    o = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e || 'VISUAL_PLACEHOLDER' === e,
    c = (e) => 'IMAGE' === e || 'VIDEO' === e || 'VISUAL_PLACEHOLDER' === e;
function u(e, t) {
    let { filename: n, width: o, height: c } = e;
    if (t && null != o && o > 0 && null != c && c > 0) {
        var u;
        if ((0, i.CO)(n)) return 'IMAGE';
        if (!(0, i.NU)(n) || null == e.proxy_url) return 'INVALID';
        return (0, l.yE)(null !== (u = e.flags) && void 0 !== u ? u : 0, s.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
    }
    return null != t && r.test(n) && null != e.url ? 'AUDIO' : null != e.url && (0, a.O)(n) ? 'PLAINTEXT_PREVIEW' : 'OTHER';
}
function d(e) {
    let { contentType: t, width: n, height: l } = e;
    if (null != n && n > 0 && null != l && l > 0) {
        if ((0, i.tw)(t)) return 'IMAGE';
        if ((0, i.X2)(t)) return 'VIDEO';
    }
    return 'VISUAL_PLACEHOLDER';
}
