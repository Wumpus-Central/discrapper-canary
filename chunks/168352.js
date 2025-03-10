n.d(t, { _: () => o });
var r = n(357352),
    i = n(396821);
function o(e, t) {
    var n, o, a;
    let s = 'safari' === (null !== (n = platform.name) && void 0 !== n ? n : 'unknown').toLowerCase(),
        { getImgCache: l } = (0, i.W_)();
    return e.preview ? (t ? (null === (a = l(e.src)) || void 0 === a ? void 0 : a.animatedUrl) : null === (o = l(e.src)) || void 0 === o ? void 0 : o.staticUrl) : s ? (t ? (0, r.b)('collectibles/'.concat(e.src, 'img.png')) : (0, r.b)('collectibles/'.concat(e.src, 'static.png'))) : (0, r.b)('collectibles/'.concat(e.src, 'asset.webm'));
}
