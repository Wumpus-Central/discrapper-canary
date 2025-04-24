n.d(t, {
    Ld: () => u,
    R_: () => s,
    aw: () => d,
    pU: () => c
}),
    n(997841),
    n(35282);
var i = n(630388),
    o = n(406432),
    r = n(828061),
    l = n(981631);
let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    s = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e || 'VISUAL_PLACEHOLDER' === e,
    u = (e) => 'IMAGE' === e || 'VIDEO' === e || 'VISUAL_PLACEHOLDER' === e;
function d(e, t) {
    let { filename: n, width: s, height: u } = e;
    if (t && null != s && s > 0 && null != u && u > 0)
        if ((0, o.CO)(n)) return 'IMAGE';
        else {
            var d;
            if (!(0, o.NU)(n) || null == e.proxy_url) return 'INVALID';
            return (0, i.yE)(null != (d = e.flags) ? d : 0, l.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    return null != t && a.test(n) && null != e.url ? 'AUDIO' : null != e.url && (0, r.O)(n) ? 'PLAINTEXT_PREVIEW' : 'OTHER';
}
function c(e) {
    let { contentType: t, width: n, height: i } = e;
    if (null != n && n > 0 && null != i && i > 0) {
        if ((0, o.tw)(t)) return 'IMAGE';
        else if ((0, o.X2)(t)) return 'VIDEO';
    }
    return 'VISUAL_PLACEHOLDER';
}
