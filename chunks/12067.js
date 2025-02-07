l.d(n, { Z: () => v });
var t = l(200651);
l(192379);
var i = l(442837),
    r = l(768494),
    a = l(169525),
    s = l(499376),
    o = l(611170),
    u = l(128854),
    c = l(884182),
    d = l(94396),
    m = l(592125),
    h = l(52824),
    p = l(970184),
    x = l(981631);
function v(e) {
    let { message: n } = (0, p.CJ)(),
        l = (0, i.e7)([m.Z], () => m.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: v, shouldRedactExplicitContent: f, gifAutoPlay: C, getGifFavButton: g, getOnMediaItemContextMenu: j } = (0, u.c)();
    if (null == n || null == l) return null;
    let N = e.items
            .map((e) => ({
                ...(0, r.y_)(e.media),
                original: e.media.url,
                srcIsAnimated: e.media.srcIsAnimated
            }))
            .filter((e) => 'INVALID' !== e.type),
        { srcToOnClickOverride: S, srcToHandlePreloadImage: E } =
            N.length > 1
                ? (0, d.J)(
                      N,
                      {
                          shouldHideMediaOptions: v,
                          shouldRedactExplicitContent: f
                      },
                      'Media Mosaic'
                  )
                : {
                      srcToOnClickOverride: {},
                      srcToHandlePreloadImage: {}
                  };
    function I(e, n) {
        let l = e.originalItem;
        return (0, a.lK)(l.media, n, l.spoiler);
    }
    let Z = e.items.map((e, l) => {
        let t = e.media,
            i = null == j ? void 0 : j(t),
            r = {
                message: n,
                item: {
                    uniqueId: ''.concat(t.proxyUrl, '--').concat(l),
                    originalItem: e,
                    type: (0, s.pU)(t),
                    downloadUrl: t.url,
                    height: t.height,
                    width: t.width,
                    spoiler: e.spoiler,
                    contentType: t.contentType,
                    srcIsAnimated: t.srcIsAnimated
                },
                onContextMenu: i,
                autoPlayGif: C,
                getObscureReason: I,
                renderImageComponent: o.aB,
                renderVideoComponent: o.rJ,
                renderVisualPlaceholderComponent: o.yF,
                renderAudioComponent: x.dG4,
                renderPlaintextFilePreview: x.dG4,
                renderGenericFileComponent: x.dG4,
                renderMosaicItemFooter: x.dG4,
                gifFavoriteButton: g(t),
                onPlay: (e, n, l) => {},
                canRemoveItem: !1,
                onRemoveItem: x.dG4
            },
            a = (0, h.q)({
                proxyURL: t.proxyUrl,
                url: t.url
            });
        return a in S && ((r.onClick = S[a]), (r.handlePreloadImage = E[a])), r;
    });
    return (0, t.jsx)('div', {
        children: (0, t.jsx)(c.Z, {
            items: Z,
            isInAppComponentsV2: !0
        })
    });
}
