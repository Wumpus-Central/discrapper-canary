n.d(t, {
    Ld: function () {
        return u;
    },
    R_: function () {
        return r;
    },
    aw: function () {
        return d;
    },
    pU: function () {
        return m;
    }
}),
    n(789020);
var i = n(630388),
    l = n(406432),
    o = n(828061),
    s = n(981631);
let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    r = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e || 'VISUAL_PLACEHOLDER' === e,
    u = (e) => 'IMAGE' === e || 'VIDEO' === e || 'VISUAL_PLACEHOLDER' === e;
function d(e, t) {
    let { filename: n, width: r, height: u } = e;
    if (t && null != r && r > 0 && null != u && u > 0) {
        if ((0, l.CO)(n)) return 'IMAGE';
        if (!(0, l.NU)(n) || null == e.proxy_url) return 'INVALID';
        else {
            var d;
            return (0, i.yE)(null !== (d = e.flags) && void 0 !== d ? d : 0, s.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    }
    if (null != t && a.test(n) && null != e.url) return 'AUDIO';
    if (null != e.url && (0, o.O)(n)) return 'PLAINTEXT_PREVIEW';
    return 'OTHER';
}
function m(e) {
    let { contentType: t, width: n, height: i } = e;
    if (null != n && n > 0 && null != i && i > 0) {
        if ((0, l.tw)(t)) return 'IMAGE';
        if ((0, l.X2)(t)) return 'VIDEO';
    }
    return 'VISUAL_PLACEHOLDER';
}
