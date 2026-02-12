"use strict";
n.d(t, { K: () => d });
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(289397),
    o = n(98434),
    l = n(746002),
    u = n(723702),
    c = n(581057);
function d(e) {
    let { getImgCache: t } = (0, c.TW)(),
        n = (0, i.bG)([a.A], () => a.A.useReducedMotion);
    return r.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let n = t(e.previewToolKey);
            return { staticImageUrl: n?.staticUrl, animatedImageUrl: n?.animatedUrl };
        }
        let r = (platform.name ?? "unknown").toLowerCase(),
            i = n || (0, u.isLinux)() || "safari" === r;
        return (0, o.e)("useNameplateAsset")
            ? {
                  staticImageUrl: (0, l.Y)(e.skuId, l._.STATIC),
                  ...(i
                      ? { animatedImageUrl: (0, l.Y)(e.skuId, l._.ANIMATED) }
                      : { videoUrl: (0, l.Y)(e.skuId, l._.VIDEO) }),
              }
            : {
                  staticImageUrl: (0, s.n)(`collectibles/${e.src}static.png`),
                  ...(i
                      ? { animatedImageUrl: (0, s.n)(`collectibles/${e.src}img.png`) }
                      : { videoUrl: (0, s.n)(`collectibles/${e.src}asset.webm`) }),
              };
    }, [e, t, n]);
}
