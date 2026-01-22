n.d(t, {
    A: () => E,
}),
    n(938796);
var r = n(627968);
n(64700);
var i = n(665260),
    a = n(311907),
    s = n(731068),
    o = n(608214),
    l = n(269849),
    c = n(294520),
    u = n(448381),
    d = n(718266),
    f = n(564107),
    p = n(394839),
    _ = n(734057),
    h = n(644447),
    m = n(207963),
    g = n(652215);

function E(e) {
    let { message: t } = (0, m.jc)(),
        n = (0, a.bG)([_.A], () => _.A.getChannel(null == t ? void 0 : t.channel_id)),
        {
            shouldHideMediaOptions: E,
            enabledContentHarmTypeFlags: b,
            gifAutoPlay: y,
            getGifFavButton: O,
            getOnMediaItemContextMenu: A,
        } = (0, f.X)();
    if (null == t || null == n) return null;
    let v = e.items.map((e) => (0, o.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: S, srcToHandlePreloadImage: I } =
            v.length > 1
                ? (0, l.o)(
                      v,
                      {
                          shouldHideMediaOptions: E,
                          enabledContentHarmTypeFlags: b,
                      },
                      "Media Mosaic",
                  )
                : {
                      srcToOnClickOverride: {},
                      srcToHandlePreloadImage: {},
                  };

    function T(e, n) {
        var r;
        let i = e.originalItem;
        return (0, c.tt)(i.media, n, i.spoiler, null != (r = null == t ? void 0 : t.author.bot) && r);
    }
    let C = e.items.map((e, n) => {
        let r = e.media,
            a = (e, t, n) => {},
            o = null == A ? void 0 : A(r),
            l = {
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
                    srcIsAnimated: (0, i.Lt)(r.flags, s.e5.IS_ANIMATED),
                },
                onContextMenu: o,
                autoPlayGif: y,
                getObscureReason: T,
                renderImageComponent: d.Bu,
                renderVideoComponent: d.PI,
                renderVisualPlaceholderComponent: d.oo,
                renderAudioComponent: g.tEg,
                renderPlaintextFilePreview: g.tEg,
                renderGenericFileComponent: g.tEg,
                renderMosaicItemFooter: g.tEg,
                gifFavoriteButton: O(r),
                onPlay: a,
                canRemoveItem: !1,
                onRemoveItem: g.tEg,
            },
            c = (0, h.E)({
                proxyURL: r.proxyUrl,
                url: r.url,
            });
        return c in S && ((l.onClick = S[c]), (l.handlePreloadImage = I[c])), l;
    });
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(p.A, {
            items: C,
            isInAppComponentsV2: !0,
        }),
    });
}
