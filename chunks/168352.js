n.d(t, { _: () => l });
var r = n(192379),
    i = n(442837),
    o = n(607070),
    a = n(357352),
    s = n(396821);
function l(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { getImgCache: l } = (0, s.W_)();
    return (0, r.useMemo)(() => {
        var r;
        let i = (0, a.b)('collectibles/'.concat(e.src, 'img.png')),
            o = (0, a.b)('collectibles/'.concat(e.src, 'asset.webm')),
            s = (0, a.b)('collectibles/'.concat(e.src, 'static.png')),
            c = 'safari' === (null !== (r = platform.name) && void 0 !== r ? r : 'unknown').toLowerCase() || n;
        return {
            defaultAsset: (() => {
                if (e.preview) {
                    var r, o;
                    return t ? (null === (o = l(e.src)) || void 0 === o ? void 0 : o.animatedUrl) : null === (r = l(e.src)) || void 0 === r ? void 0 : r.staticUrl;
                }
                if (c) return !t || n ? s : i;
            })(),
            apngAsset: i,
            webmAsset: o,
            staticAsset: s
        };
    }, [e.preview, e.src, t, l, n]);
}
