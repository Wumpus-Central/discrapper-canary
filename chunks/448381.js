n.d(l, { NI: () => s, Xg: () => E, wz: () => L }), n(938796);
var r = n(665260),
    t = n(59318),
    e = n(639169),
    I = n(652215);
let i = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
function E(u) {
    return "IMAGE" === u || "VIDEO" === u || "CLIP" === u || "VISUAL_PLACEHOLDER" === u;
}
function s(u, l) {
    let { filename: n, width: E, height: s } = u;
    if (l && null != E && E > 0 && null != s && s > 0)
        if ((0, t.u)(n)) return "IMAGE";
        else if ((0, t.AE)(n) && null != u.proxy_url) return (0, r.Lt)(u.flags ?? 0, I.sbO.IS_CLIP) ? "CLIP" : "VIDEO";
        else return "INVALID";
    return null != l && i.test(n) && null != u.url
        ? "AUDIO"
        : null != u.url && (0, e.C)(n)
          ? "PLAINTEXT_PREVIEW"
          : "OTHER";
}
function L(u) {
    let { contentType: l, width: n, height: r } = u;
    if (null != n && n > 0 && null != r && r > 0) {
        if ((0, t.tT)(l)) return "IMAGE";
        else if ((0, t.XB)(l)) return "VIDEO";
    }
    return "VISUAL_PLACEHOLDER";
}
