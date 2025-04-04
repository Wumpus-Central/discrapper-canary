n.d(t, { _: () => c });
var r = n(192379),
    i = n(442837),
    o = n(607070),
    a = n(357352),
    s = n(358085),
    l = n(396821);
function c(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { getImgCache: c } = (0, l.W_)();
    return (0, r.useMemo)(() => {
        var r;
        let i = (0, a.b)('collectibles/'.concat(e.src, 'img.png')),
            o = (0, a.b)('collectibles/'.concat(e.src, 'asset.webm')),
            l = (0, a.b)('collectibles/'.concat(e.src, 'static.png')),
            u = (null != (r = platform.name) ? r : 'unknown').toLowerCase(),
            d = (0, s.isLinux)() || 'safari' === u || n;
        return {
            defaultAsset: (() => {
                if (e.preview) {
                    var r, o;
                    return t ? (null == (o = c(e.src)) ? void 0 : o.animatedUrl) : null == (r = c(e.src)) ? void 0 : r.staticUrl;
                }
                if (d) return !t || n ? l : i;
            })(),
            apngAsset: i,
            webmAsset: o,
            staticAsset: l
        };
    }, [e.preview, e.src, t, c, n]);
}
