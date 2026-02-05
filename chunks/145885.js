n.d(t, { A: () => x }), n(938796);
var l = n(627968);
n(64700);
var a = n(665260),
    r = n(311907),
    s = n(731068),
    i = n(608214),
    o = n(269849),
    d = n(294520),
    c = n(448381),
    u = n(718266),
    m = n(564107),
    p = n(394839),
    A = n(734057),
    h = n(644447),
    C = n(207963),
    E = n(652215);
function x(e) {
    let { message: t } = (0, C.jc)(),
        n = (0, r.bG)([A.A], () => A.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: x,
            enabledContentHarmTypeFlags: N,
            gifAutoPlay: I,
            getGifFavButton: _,
            getOnMediaItemContextMenu: f,
        } = (0, m.X)();
    if (null == t || null == n) return null;
    let g = e.items.map((e) => (0, i.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: T, srcToHandlePreloadImage: v } =
            g.length > 1
                ? (0, o.o)(g, { shouldHideMediaOptions: x, enabledContentHarmTypeFlags: N }, "Media Mosaic")
                : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} };
    function j(e, n) {
        let l = e.originalItem;
        return (0, d.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let S = e.items.map((e, n) => {
        let l = e.media,
            r = f?.(l),
            i = {
                message: t,
                item: {
                    uniqueId: `${l.proxyUrl}--${n}`,
                    originalItem: e,
                    type: (0, c.wz)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: (0, a.Lt)(l.flags, s.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: I,
                getObscureReason: j,
                renderImageComponent: u.Bu,
                renderVideoComponent: u.PI,
                renderVisualPlaceholderComponent: u.oo,
                renderAudioComponent: E.tEg,
                renderPlaintextFilePreview: E.tEg,
                renderGenericFileComponent: E.tEg,
                renderMosaicItemFooter: E.tEg,
                gifFavoriteButton: _(l),
                onPlay: (e, t, n) => {},
                canRemoveItem: !1,
                onRemoveItem: E.tEg,
            },
            o = (0, h.E)({ proxyURL: l.proxyUrl, url: l.url });
        return o in T && ((i.onClick = T[o]), (i.handlePreloadImage = v[o])), i;
    });
    return (0, l.jsx)("div", { children: (0, l.jsx)(p.A, { items: S, isInAppComponentsV2: !0 }) });
}
