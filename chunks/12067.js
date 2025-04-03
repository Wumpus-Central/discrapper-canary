r.d(t, { Z: () => y });
var n = r(200651);
r(192379);
var l = r(442837),
    i = r(768494),
    o = r(169525),
    a = r(499376),
    c = r(611170),
    s = r(128854),
    u = r(884182),
    p = r(94396),
    d = r(592125),
    f = r(52824),
    b = r(970184),
    O = r(981631);
function y(e) {
    let { message: t } = (0, b.CJ)(),
        r = (0, l.e7)([d.Z], () => d.Z.getChannel(null == t ? void 0 : t.channel_id)),
        { shouldHideMediaOptions: y, shouldRedactExplicitContent: m, gifAutoPlay: j, getGifFavButton: g, getOnMediaItemContextMenu: h } = (0, s.c)();
    if (null == t || null == r) return null;
    let v = e.items
            .map((e) => {
                var t, r;
                return (
                    (t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, (0, i.y_)(e.media))),
                    (r = r =
                        {
                            original: e.media.url,
                            srcIsAnimated: e.media.srcIsAnimated
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t
                );
            })
            .filter((e) => 'INVALID' !== e.type),
        { srcToOnClickOverride: P, srcToHandlePreloadImage: x } =
            v.length > 1
                ? (0, p.J)(
                      v,
                      {
                          shouldHideMediaOptions: y,
                          shouldRedactExplicitContent: m
                      },
                      'Media Mosaic'
                  )
                : {
                      srcToOnClickOverride: {},
                      srcToHandlePreloadImage: {}
                  };
    function w(e, r) {
        var n;
        let l = e.originalItem;
        return (0, o.lK)(l.media, r, l.spoiler, null != (n = null == t ? void 0 : t.author.bot) && n);
    }
    let S = e.items.map((e, r) => {
        let n = e.media,
            l = null == h ? void 0 : h(n),
            i = {
                message: t,
                item: {
                    uniqueId: ''.concat(n.proxyUrl, '--').concat(r),
                    originalItem: e,
                    type: (0, a.pU)(n),
                    downloadUrl: n.url,
                    height: n.height,
                    width: n.width,
                    spoiler: e.spoiler,
                    contentType: n.contentType,
                    srcIsAnimated: n.srcIsAnimated
                },
                onContextMenu: l,
                autoPlayGif: j,
                getObscureReason: w,
                renderImageComponent: c.aB,
                renderVideoComponent: c.rJ,
                renderVisualPlaceholderComponent: c.yF,
                renderAudioComponent: O.dG4,
                renderPlaintextFilePreview: O.dG4,
                renderGenericFileComponent: O.dG4,
                renderMosaicItemFooter: O.dG4,
                gifFavoriteButton: g(n),
                onPlay: (e, t, r) => {},
                canRemoveItem: !1,
                onRemoveItem: O.dG4
            },
            o = (0, f.q)({
                proxyURL: n.proxyUrl,
                url: n.url
            });
        return o in P && ((i.onClick = P[o]), (i.handlePreloadImage = x[o])), i;
    });
    return (0, n.jsx)('div', {
        children: (0, n.jsx)(u.Z, {
            items: S,
            isInAppComponentsV2: !0
        })
    });
}
