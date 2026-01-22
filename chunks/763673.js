n.d(t, { r: () => c });
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(289397),
    o = n(723702),
    l = n(581057);
function c(e) {
    let { getImgCache: t } = (0, l.TW)(),
        n = (0, i.bG)([a.A], () => a.A.useReducedMotion);
    return (0, r.useMemo)(() => {
        var r, i, a;
        let l = (0, s.n)("collectibles/".concat(e.src, "img.png")),
            c = (0, s.n)("collectibles/".concat(e.src, "asset.webm")),
            u = (0, s.n)("collectibles/".concat(e.src, "static.png"));
        if (e.preview)
            return {
                staticAsset: null == (i = t(e.src)) ? void 0 : i.staticUrl,
                animatedAsset: null == (a = t(e.src)) ? void 0 : a.animatedUrl,
            };
        let d = (null != (r = platform.name) ? r : "unknown").toLowerCase();
        return {
            staticAsset: u,
            animatedAsset: n || (0, o.isLinux)() || "safari" === d ? l : c,
        };
    }, [e.preview, e.src, t, n]);
}
