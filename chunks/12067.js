n.d(t, { Z: () => E }), n(997841);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(768494),
    a = n(549635),
    s = n(169525),
    l = n(499376),
    c = n(611170),
    u = n(128854),
    d = n(884182),
    f = n(207982),
    _ = n(592125),
    p = n(52824),
    h = n(630388),
    m = n(970184),
    g = n(981631);
function E(e) {
    let { message: t } = (0, m.CJ)(),
        n = (0, i.e7)([_.Z], () => _.Z.getChannel(null == t ? void 0 : t.channel_id)),
        {
            shouldHideMediaOptions: E,
            enabledContentHarmTypeFlags: b,
            gifAutoPlay: y,
            getGifFavButton: O,
            getOnMediaItemContextMenu: v,
        } = (0, u.c)();
    if (null == t || null == n) return null;
    let I = e.items.map((e) => (0, a.ze)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: T, srcToHandlePreloadImage: S } =
            I.length > 1
                ? (0, f.G)(
                      I,
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
    function A(e, n) {
        var r;
        let i = e.originalItem;
        return (0, s.lK)(i.media, n, i.spoiler, null != (r = null == t ? void 0 : t.author.bot) && r);
    }
    let N = e.items.map((e, n) => {
        let r = e.media,
            i = (e, t, n) => {},
            a = null == v ? void 0 : v(r),
            s = {
                message: t,
                item: {
                    uniqueId: "".concat(r.proxyUrl, "--").concat(n),
                    originalItem: e,
                    type: (0, l.pU)(r),
                    downloadUrl: r.url,
                    height: r.height,
                    width: r.width,
                    spoiler: e.spoiler,
                    contentType: r.contentType,
                    srcIsAnimated: (0, h.yE)(r.flags, o.hR.IS_ANIMATED),
                },
                onContextMenu: a,
                autoPlayGif: y,
                getObscureReason: A,
                renderImageComponent: c.aB,
                renderVideoComponent: c.rJ,
                renderVisualPlaceholderComponent: c.yF,
                renderAudioComponent: g.dG4,
                renderPlaintextFilePreview: g.dG4,
                renderGenericFileComponent: g.dG4,
                renderMosaicItemFooter: g.dG4,
                gifFavoriteButton: O(r),
                onPlay: i,
                canRemoveItem: !1,
                onRemoveItem: g.dG4,
            },
            u = (0, p.q)({
                proxyURL: r.proxyUrl,
                url: r.url,
            });
        return u in T && ((s.onClick = T[u]), (s.handlePreloadImage = S[u])), s;
    });
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(d.Z, {
            items: N,
            isInAppComponentsV2: !0,
        }),
    });
}
