"use strict";
n.d(t, { r: () => u });
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(289397),
    o = n(723702),
    l = n(581057);
function u(e) {
    let { getImgCache: t } = (0, l.TW)(),
        n = (0, i.bG)([a.A], () => a.A.useReducedMotion);
    return (0, r.useMemo)(() => {
        let r = (0, s.n)(`collectibles/${e.src}img.png`),
            i = (0, s.n)(`collectibles/${e.src}asset.webm`),
            a = (0, s.n)(`collectibles/${e.src}static.png`);
        if (e.preview) return { staticAsset: t(e.src)?.staticUrl, animatedAsset: t(e.src)?.animatedUrl };
        let l = (platform.name ?? "unknown").toLowerCase();
        return { staticAsset: a, animatedAsset: n || (0, o.isLinux)() || "safari" === l ? r : i };
    }, [e.preview, e.src, t, n]);
}
