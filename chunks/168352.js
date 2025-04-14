n.d(t, { _: () => c });
var r = n(192379),
    i = n(442837),
    o = n(607070),
    a = n(357352),
    s = n(358085),
    l = n(396821);
function c(e) {
    let { getImgCache: t } = (0, l.W_)(),
        n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.useMemo)(() => {
        var r, i, o;
        let l = (0, a.b)('collectibles/'.concat(e.src, 'img.png')),
            c = (0, a.b)('collectibles/'.concat(e.src, 'asset.webm')),
            u = (0, a.b)('collectibles/'.concat(e.src, 'static.png'));
        if (e.preview)
            return {
                staticAsset: null == (r = t(e.src)) ? void 0 : r.staticUrl,
                animatedAsset: null == (i = t(e.src)) ? void 0 : i.animatedUrl
            };
        let d = (null != (o = platform.name) ? o : 'unknown').toLowerCase();
        return {
            staticAsset: u,
            animatedAsset: n || (0, s.isLinux)() || 'safari' === d ? l : c
        };
    }, [e.preview, e.src, t, n]);
}
