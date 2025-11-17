n.d(t, { Z: () => E }), n(997841);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(768494),
    o = n(549635),
    s = n(120324),
    l = n(169525),
    c = n(499376),
    u = n(611170),
    d = n(128854),
    f = n(884182),
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
        } = (0, d.c)();
    if (null == t || null == n) return null;
    let I = e.items.map((e) => (0, o.ze)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: T, srcToHandlePreloadImage: S } =
            I.length > 1
                ? (0, s.G)(
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
        return (0, l.lK)(i.media, n, i.spoiler, null != (r = null == t ? void 0 : t.author.bot) && r);
    }
    let C = e.items.map((e, n) => {
        let r = e.media,
            i = (e, t, n) => {},
            o = null == v ? void 0 : v(r),
            s = {
                message: t,
                item: {
                    uniqueId: "".concat(r.proxyUrl, "--").concat(n),
                    originalItem: e,
                    type: (0, c.pU)(r),
                    downloadUrl: r.url,
                    height: r.height,
                    width: r.width,
                    spoiler: e.spoiler,
                    contentType: r.contentType,
                    srcIsAnimated: (0, h.yE)(r.flags, a.hR.IS_ANIMATED),
                },
                onContextMenu: o,
                autoPlayGif: y,
                getObscureReason: A,
                renderImageComponent: u.aB,
                renderVideoComponent: u.rJ,
                renderVisualPlaceholderComponent: u.yF,
                renderAudioComponent: g.dG4,
                renderPlaintextFilePreview: g.dG4,
                renderGenericFileComponent: g.dG4,
                renderMosaicItemFooter: g.dG4,
                gifFavoriteButton: O(r),
                onPlay: i,
                canRemoveItem: !1,
                onRemoveItem: g.dG4,
            },
            l = (0, p.q)({
                proxyURL: r.proxyUrl,
                url: r.url,
            });
        return l in T && ((s.onClick = T[l]), (s.handlePreloadImage = S[l])), s;
    });
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(f.Z, {
            items: C,
            isInAppComponentsV2: !0,
        }),
    });
}
