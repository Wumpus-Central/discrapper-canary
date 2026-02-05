n.d(t, { EF: () => u, NI: () => d, Xg: () => o, wz: () => m }), n(938796);
var i = n(665260),
    s = n(77350),
    l = n(639169),
    a = n(652215);
let r = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    o = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
    u = (e) => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;
function d(e, t) {
    let { filename: n, width: o, height: u } = e;
    if (t && null != o && o > 0 && null != u && u > 0)
        if ((0, s.u)(n)) return "IMAGE";
        else if ((0, s.AE)(n) && null != e.proxy_url) return (0, i.Lt)(e.flags ?? 0, a.sbO.IS_CLIP) ? "CLIP" : "VIDEO";
        else return "INVALID";
    return null != t && r.test(n) && null != e.url
        ? "AUDIO"
        : null != e.url && (0, l.C)(n)
          ? "PLAINTEXT_PREVIEW"
          : "OTHER";
}
function m(e) {
    let { contentType: t, width: n, height: i } = e;
    if (null != n && n > 0 && null != i && i > 0) {
        if ((0, s.tT)(t)) return "IMAGE";
        else if ((0, s.XB)(t)) return "VIDEO";
    }
    return "VISUAL_PLACEHOLDER";
}
