n.d(t, { A: () => x }), n(938796);
var a = n(627968);
n(64700);
var l = n(665260),
    r = n(311907),
    i = n(731068),
    s = n(608214),
    o = n(269849),
    d = n(294520),
    c = n(448381),
    u = n(718266),
    m = n(564107),
    _ = n(394839),
    p = n(734057),
    h = n(644447),
    A = n(207963),
    C = n(652215);
function x(e) {
    let { message: t } = (0, A.jc)(),
        n = (0, r.bG)([p.A], () => p.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: x,
            enabledContentHarmTypeFlags: f,
            gifAutoPlay: E,
            getGifFavButton: I,
            getOnMediaItemContextMenu: N,
        } = (0, m.X)();
    if (null == t || null == n) return null;
    let g = e.items.map((e) => (0, s.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: v, srcToHandlePreloadImage: T } =
            g.length > 1
                ? (0, o.o)(g, { shouldHideMediaOptions: x, enabledContentHarmTypeFlags: f }, "Media Mosaic")
                : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} };
    function b(e, n) {
        let a = e.originalItem;
        return (0, d.tt)(a.media, n, a.spoiler, t?.author.bot ?? !1);
    }
    let S = e.items.map((e, n) => {
        let a = e.media,
            r = N?.(a),
            s = {
                message: t,
                item: {
                    uniqueId: `${a.proxyUrl}--${n}`,
                    originalItem: e,
                    type: (0, c.wz)(a),
                    downloadUrl: a.url,
                    height: a.height,
                    width: a.width,
                    spoiler: e.spoiler,
                    contentType: a.contentType,
                    srcIsAnimated: (0, l.Lt)(a.flags, i.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: E,
                getObscureReason: b,
                renderImageComponent: u.Bu,
                renderVideoComponent: u.PI,
                renderVisualPlaceholderComponent: u.oo,
                renderAudioComponent: C.tEg,
                renderPlaintextFilePreview: C.tEg,
                renderGenericFileComponent: C.tEg,
                renderMosaicItemFooter: C.tEg,
                gifFavoriteButton: I(a),
                onPlay: (e, t, n) => {},
                canRemoveItem: !1,
                onRemoveItem: C.tEg,
            },
            o = (0, h.E)({ proxyURL: a.proxyUrl, url: a.url });
        return o in v && ((s.onClick = v[o]), (s.handlePreloadImage = T[o])), s;
    });
    return (0, a.jsx)("div", { children: (0, a.jsx)(_.A, { items: S, isInAppComponentsV2: !0 }) });
}
