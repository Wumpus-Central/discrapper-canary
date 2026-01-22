n.d(t, {
    EF: () => c,
    NI: () => u,
    Xg: () => l,
    wz: () => d,
}),
    n(938796),
    n(747238);
var r = n(665260),
    i = n(77350),
    a = n(639169),
    s = n(652215);
let o = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    l = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
    c = (e) => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

function u(e, t) {
    let { filename: n, width: l, height: c } = e;
    if (t && null != l && l > 0 && null != c && c > 0)
        if ((0, i.u)(n)) return "IMAGE";
        else {
            var u;
            if (!(0, i.AE)(n) || null == e.proxy_url) return "INVALID";
            return (0, r.Lt)(null != (u = e.flags) ? u : 0, s.sbO.IS_CLIP) ? "CLIP" : "VIDEO";
        }
    return null != t && o.test(n) && null != e.url
        ? "AUDIO"
        : null != e.url && (0, a.C)(n)
          ? "PLAINTEXT_PREVIEW"
          : "OTHER";
}

function d(e) {
    let { contentType: t, width: n, height: r } = e;
    if (null != n && n > 0 && null != r && r > 0) {
        if ((0, i.tT)(t)) return "IMAGE";
        else if ((0, i.XB)(t)) return "VIDEO";
    }
    return "VISUAL_PLACEHOLDER";
}
