n.d(t, { _: () => s });
var r = n(442837),
    i = n(607070),
    o = n(357352),
    a = n(396821);
function s(e, t) {
    var n, s, l;
    let c = (null !== (n = platform.name) && void 0 !== n ? n : 'unknown').toLowerCase(),
        u = (0, r.e7)([i.Z], () => i.Z.useReducedMotion),
        d = 'safari' === c || u,
        { getImgCache: f } = (0, a.W_)();
    return e.preview ? (t ? (null === (l = f(e.src)) || void 0 === l ? void 0 : l.animatedUrl) : null === (s = f(e.src)) || void 0 === s ? void 0 : s.staticUrl) : d ? (!t || u ? (0, o.b)('collectibles/'.concat(e.src, 'static.png')) : (0, o.b)('collectibles/'.concat(e.src, 'img.png'))) : (0, o.b)('collectibles/'.concat(e.src, 'asset.webm'));
}
