n.d(t, {
    Ld: () => u,
    R_: () => a,
    aw: () => c,
    pU: () => d
}),
    n(789020),
    n(301563);
var r = n(630388),
    o = n(406432),
    i = n(828061),
    l = n(981631);
let s = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    a = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e || 'VISUAL_PLACEHOLDER' === e,
    u = (e) => 'IMAGE' === e || 'VIDEO' === e || 'VISUAL_PLACEHOLDER' === e;
function c(e, t) {
    let { filename: n, width: a, height: u } = e;
    if (t && null != a && a > 0 && null != u && u > 0)
        if ((0, o.CO)(n)) return 'IMAGE';
        else {
            var c;
            if (!(0, o.NU)(n) || null == e.proxy_url) return 'INVALID';
            return (0, r.yE)(null != (c = e.flags) ? c : 0, l.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    return null != t && s.test(n) && null != e.url ? 'AUDIO' : null != e.url && (0, i.O)(n) ? 'PLAINTEXT_PREVIEW' : 'OTHER';
}
function d(e) {
    let { contentType: t, width: n, height: r } = e;
    if (null != n && n > 0 && null != r && r > 0) {
        if ((0, o.tw)(t)) return 'IMAGE';
        else if ((0, o.X2)(t)) return 'VIDEO';
    }
    return 'VISUAL_PLACEHOLDER';
}
