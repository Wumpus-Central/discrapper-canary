n.d(t, { Z: () => E }), n(997841);
var r = n(54381);
n(473749);
var i = n(95015),
    a = n(442837),
    o = n(768494),
    s = n(549635),
    l = n(120324),
    c = n(169525),
    u = n(499376),
    d = n(611170),
    f = n(128854),
    p = n(884182),
    _ = n(592125),
    m = n(52824),
    h = n(970184),
    g = n(981631);
function E(e) {
    let { message: t } = (0, h.CJ)(),
        n = (0, a.e7)([_.Z], () => _.Z.getChannel(null == t ? void 0 : t.channel_id)),
        {
            shouldHideMediaOptions: E,
            enabledContentHarmTypeFlags: b,
            gifAutoPlay: y,
            getGifFavButton: O,
            getOnMediaItemContextMenu: v,
        } = (0, f.c)();
    if (null == t || null == n) return null;
    let S = e.items.map((e) => (0, s.ze)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: I, srcToHandlePreloadImage: T } =
            S.length > 1
                ? (0, l.G)(
                      S,
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
    function C(e, n) {
        var r;
        let i = e.originalItem;
        return (0, c.lK)(i.media, n, i.spoiler, null != (r = null == t ? void 0 : t.author.bot) && r);
    }
    let A = e.items.map((e, n) => {
        let r = e.media,
            a = (e, t, n) => {},
            s = null == v ? void 0 : v(r),
            l = {
                message: t,
                item: {
                    uniqueId: "".concat(r.proxyUrl, "--").concat(n),
                    originalItem: e,
                    type: (0, u.pU)(r),
                    downloadUrl: r.url,
                    height: r.height,
                    width: r.width,
                    spoiler: e.spoiler,
                    contentType: r.contentType,
                    srcIsAnimated: (0, i.yE)(r.flags, o.hR.IS_ANIMATED),
                },
                onContextMenu: s,
                autoPlayGif: y,
                getObscureReason: C,
                renderImageComponent: d.aB,
                renderVideoComponent: d.rJ,
                renderVisualPlaceholderComponent: d.yF,
                renderAudioComponent: g.dG4,
                renderPlaintextFilePreview: g.dG4,
                renderGenericFileComponent: g.dG4,
                renderMosaicItemFooter: g.dG4,
                gifFavoriteButton: O(r),
                onPlay: a,
                canRemoveItem: !1,
                onRemoveItem: g.dG4,
            },
            c = (0, m.q)({
                proxyURL: r.proxyUrl,
                url: r.url,
            });
        return c in I && ((l.onClick = I[c]), (l.handlePreloadImage = T[c])), l;
    });
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(p.Z, {
            items: A,
            isInAppComponentsV2: !0,
        }),
    });
}
