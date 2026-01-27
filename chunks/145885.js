n.d(t, {
    A: () => x,
}),
    n(938796);
var r = n(627968);
n(64700);
var l = n(665260),
    a = n(311907),
    i = n(731068),
    s = n(608214),
    o = n(269849),
    c = n(294520),
    u = n(448381),
    d = n(718266),
    m = n(564107),
    f = n(394839),
    p = n(734057),
    h = n(644447),
    b = n(207963),
    g = n(652215);

function x(e) {
    let { message: t } = (0, b.jc)(),
        n = (0, a.bG)([p.A], () => p.A.getChannel(null == t ? void 0 : t.channel_id)),
        {
            shouldHideMediaOptions: x,
            enabledContentHarmTypeFlags: y,
            gifAutoPlay: v,
            getGifFavButton: j,
            getOnMediaItemContextMenu: C,
        } = (0, m.X)();
    if (null == t || null == n) return null;
    let _ = e.items.map((e) => (0, s.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: A, srcToHandlePreloadImage: O } =
            _.length > 1
                ? (0, o.o)(
                      _,
                      {
                          shouldHideMediaOptions: x,
                          enabledContentHarmTypeFlags: y,
                      },
                      "Media Mosaic",
                  )
                : {
                      srcToOnClickOverride: {},
                      srcToHandlePreloadImage: {},
                  };

    function E(e, n) {
        var r;
        let l = e.originalItem;
        return (0, c.tt)(l.media, n, l.spoiler, null != (r = null == t ? void 0 : t.author.bot) && r);
    }
    let S = e.items.map((e, n) => {
        let r = e.media,
            a = null == C ? void 0 : C(r),
            s = {
                message: t,
                item: {
                    uniqueId: "".concat(r.proxyUrl, "--").concat(n),
                    originalItem: e,
                    type: (0, u.wz)(r),
                    downloadUrl: r.url,
                    height: r.height,
                    width: r.width,
                    spoiler: e.spoiler,
                    contentType: r.contentType,
                    srcIsAnimated: (0, l.Lt)(r.flags, i.e5.IS_ANIMATED),
                },
                onContextMenu: a,
                autoPlayGif: v,
                getObscureReason: E,
                renderImageComponent: d.Bu,
                renderVideoComponent: d.PI,
                renderVisualPlaceholderComponent: d.oo,
                renderAudioComponent: g.tEg,
                renderPlaintextFilePreview: g.tEg,
                renderGenericFileComponent: g.tEg,
                renderMosaicItemFooter: g.tEg,
                gifFavoriteButton: j(r),
                onPlay: (e, t, n) => {},
                canRemoveItem: !1,
                onRemoveItem: g.tEg,
            },
            o = (0, h.E)({
                proxyURL: r.proxyUrl,
                url: r.url,
            });
        return o in A && ((s.onClick = A[o]), (s.handlePreloadImage = O[o])), s;
    });
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(f.A, {
            items: S,
            isInAppComponentsV2: !0,
        }),
    });
}
