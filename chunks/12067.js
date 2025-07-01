(r.d(t, { Z: () => j }), r(997841));
var n = r(255367);
r(73800);
var l = r(442837),
    i = r(768494),
    o = r(549635),
    a = r(169525),
    c = r(499376),
    s = r(611170),
    u = r(128854),
    d = r(884182),
    p = r(207982),
    f = r(592125),
    b = r(52824),
    m = r(630388),
    O = r(970184),
    y = r(981631);
function j(e) {
    let { message: t } = (0, O.CJ)(),
        r = (0, l.e7)([f.Z], () => f.Z.getChannel(null == t ? void 0 : t.channel_id)),
        { shouldHideMediaOptions: j, enabledContentHarmTypeFlags: g, gifAutoPlay: h, getGifFavButton: v, getOnMediaItemContextMenu: P } = (0, u.c)();
    if (null == t || null == r) return null;
    let x = e.items.map((e) => (0, o.ze)(e.media, t)).filter((e) => 'INVALID' !== e.type),
        { srcToOnClickOverride: S, srcToHandlePreloadImage: w } =
            x.length > 1
                ? (0, p.G)(
                      x,
                      {
                          shouldHideMediaOptions: j,
                          enabledContentHarmTypeFlags: g
                      },
                      'Media Mosaic'
                  )
                : {
                      srcToOnClickOverride: {},
                      srcToHandlePreloadImage: {}
                  };
    function C(e, r) {
        var n;
        let l = e.originalItem;
        return (0, a.lK)(l.media, r, l.spoiler, null != (n = null == t ? void 0 : t.author.bot) && n);
    }
    let E = e.items.map((e, r) => {
        let n = e.media,
            l = null == P ? void 0 : P(n),
            o = {
                message: t,
                item: {
                    uniqueId: ''.concat(n.proxyUrl, '--').concat(r),
                    originalItem: e,
                    type: (0, c.pU)(n),
                    downloadUrl: n.url,
                    height: n.height,
                    width: n.width,
                    spoiler: e.spoiler,
                    contentType: n.contentType,
                    srcIsAnimated: (0, m.yE)(n.flags, i.hR.IS_ANIMATED)
                },
                onContextMenu: l,
                autoPlayGif: h,
                getObscureReason: C,
                renderImageComponent: s.aB,
                renderVideoComponent: s.rJ,
                renderVisualPlaceholderComponent: s.yF,
                renderAudioComponent: y.dG4,
                renderPlaintextFilePreview: y.dG4,
                renderGenericFileComponent: y.dG4,
                renderMosaicItemFooter: y.dG4,
                gifFavoriteButton: v(n),
                onPlay: (e, t, r) => {},
                canRemoveItem: !1,
                onRemoveItem: y.dG4
            },
            a = (0, b.q)({
                proxyURL: n.proxyUrl,
                url: n.url
            });
        return (a in S && ((o.onClick = S[a]), (o.handlePreloadImage = w[a])), o);
    });
    return (0, n.jsx)('div', {
        children: (0, n.jsx)(d.Z, {
            items: E,
            isInAppComponentsV2: !0
        })
    });
}
