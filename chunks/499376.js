n.d(t, {
    Ld: () => c,
    R_: () => l,
    aw: () => u,
    pU: () => d,
}),
    n(997841),
    n(35282);
var r = n(95015),
    i = n(406432),
    a = n(828061),
    o = n(981631);
let s = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    l = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
    c = (e) => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;
function u(e, t) {
    let { filename: n, width: l, height: c } = e;
    if (t && null != l && l > 0 && null != c && c > 0)
        if ((0, i.CO)(n)) return "IMAGE";
        else {
            var u;
            if (!(0, i.NU)(n) || null == e.proxy_url) return "INVALID";
            return (0, r.yE)(null != (u = e.flags) ? u : 0, o.J0y.IS_CLIP) ? "CLIP" : "VIDEO";
        }
    return null != t && s.test(n) && null != e.url
        ? "AUDIO"
        : null != e.url && (0, a.O)(n)
          ? "PLAINTEXT_PREVIEW"
          : "OTHER";
}
function d(e) {
    let { contentType: t, width: n, height: r } = e;
    if (null != n && n > 0 && null != r && r > 0) {
        if ((0, i.tw)(t)) return "IMAGE";
        else if ((0, i.X2)(t)) return "VIDEO";
    }
    return "VISUAL_PLACEHOLDER";
}
