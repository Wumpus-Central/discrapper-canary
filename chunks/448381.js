r.d(u, { NI: () => s, Xg: () => i, wz: () => L }), r(938796);
var n = r(665260),
    e = r(59318),
    t = r(639169),
    I = r(652215);
let E = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    i = (l) => "IMAGE" === l || "VIDEO" === l || "CLIP" === l || "VISUAL_PLACEHOLDER" === l;
function s(l, u) {
    let { filename: r, width: i, height: s } = l;
    if (u && null != i && i > 0 && null != s && s > 0)
        if ((0, e.u)(r)) return "IMAGE";
        else if ((0, e.AE)(r) && null != l.proxy_url) return (0, n.Lt)(l.flags ?? 0, I.sbO.IS_CLIP) ? "CLIP" : "VIDEO";
        else return "INVALID";
    return null != u && E.test(r) && null != l.url
        ? "AUDIO"
        : null != l.url && (0, t.C)(r)
          ? "PLAINTEXT_PREVIEW"
          : "OTHER";
}
function L(l) {
    let { contentType: u, width: r, height: n } = l;
    if (null != r && r > 0 && null != n && n > 0) {
        if ((0, e.tT)(u)) return "IMAGE";
        else if ((0, e.XB)(u)) return "VIDEO";
    }
    return "VISUAL_PLACEHOLDER";
}
