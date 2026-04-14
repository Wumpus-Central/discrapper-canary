t.d(a, { EF: () => i, NI: () => l, Xg: () => _, wz: () => d }), t(938796);
var n = t(665260),
    r = t(77350),
    s = t(639169),
    o = t(652215);
let c = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    _ = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
    i = function (e) {
        let { enableClipsNewEmbedUi: a = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e || (a && "CLIP" === e);
    };
function l(e, a) {
    let { filename: t, width: _, height: i } = e;
    if (a && null != _ && _ > 0 && null != i && i > 0)
        if ((0, r.u)(t)) return "IMAGE";
        else if ((0, r.AE)(t) && null != e.proxy_url) return (0, n.Lt)(e.flags ?? 0, o.sbO.IS_CLIP) ? "CLIP" : "VIDEO";
        else return "INVALID";
    return null != a && c.test(t) && null != e.url
        ? "AUDIO"
        : null != e.url && (0, s.C)(t)
          ? "PLAINTEXT_PREVIEW"
          : "OTHER";
}
function d(e) {
    let { contentType: a, width: t, height: n } = e;
    if (null != t && t > 0 && null != n && n > 0) {
        if ((0, r.tT)(a)) return "IMAGE";
        else if ((0, r.XB)(a)) return "VIDEO";
    }
    return "VISUAL_PLACEHOLDER";
}
