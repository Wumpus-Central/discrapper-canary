n.d(t, { Z: () => Z }), n(388685), n(457542);
var i = n(200651),
    a = n(192379),
    l = n(392711),
    r = n(442837),
    o = n(481060),
    s = n(640108),
    c = n(406432),
    d = n(169525),
    u = n(786761),
    m = n(750030),
    p = n(499376),
    h = n(3148),
    f = n(739566),
    g = n(492593),
    y = n(219797),
    x = n(524444),
    j = n(884182),
    v = n(25015),
    b = n(963550),
    O = n(845080),
    E = n(367814),
    _ = n(594174),
    w = n(956664),
    A = n(709054),
    P = n(236289),
    T = n(788080),
    C = n(800530),
    S = n(981631),
    N = n(217702),
    k = n(966378);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = (e, t, n, i) => {
        let a = e.attachments.map((e) => {
            var n, i, a, l;
            let r = I(L({}, e), {
                filename: (0, T.eS)(e),
                size: 0,
                proxy_url: e.url
            });
            return (0, c.CO)(e.filename) || (0, c.NU)(e.filename)
                ? I(L({}, r), {
                      width: null != (a = null == (n = t[e.id]) ? void 0 : n.width) ? a : C.Sv,
                      height: null != (l = null == (i = t[e.id]) ? void 0 : i.height) ? l : C.EY
                  })
                : r;
        });
        return (0, u.e5)(
            I(
                L(
                    {},
                    (0, h.ZP)({
                        author:
                            null != n
                                ? n
                                : {
                                      id: '',
                                      avatar: void 0,
                                      discriminator: '0000',
                                      username: i
                                  },
                        nonce: e.id,
                        content: e.content,
                        type: S.uaV.DEFAULT,
                        channelId: S.lds
                    })
                ),
                {
                    timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
                    attachments: a,
                    state: S.yb.SENT
                }
            )
        );
    },
    D = (e) => {
        let { message: t } = e,
            { attachments: n } = t;
        if (0 === n.length) return null;
        let a = (e, t, n) => {
                let a = C.Sv,
                    r = C.EY;
                if (null != t.width && null != t.height) {
                    let e = (0, w.Dc)({
                        width: t.width,
                        height: t.height,
                        maxWidth: C.Sv,
                        maxHeight: C.EY
                    });
                    (a = (0, l.clamp)(Math.round(t.width * e), 0, C.Sv)), (r = (0, l.clamp)(Math.round(t.height * e), 0, C.EY));
                }
                return (0, i.jsx)('div', {
                    style: {
                        width: n ? a : '100%',
                        height: n ? r : '100%'
                    },
                    children: (0, i.jsx)(s.ZP, {
                        className: e.className,
                        forceExternal: !1,
                        src: t.url,
                        width: n ? a : '100%',
                        height: n ? r : '100%',
                        responsive: !0,
                        volume: e.volume,
                        autoPlay: !1,
                        autoMute: !1,
                        type: s.ZP.Types.VIDEO,
                        mediaLayoutType: e.mediaLayoutType,
                        fileName: t.filename,
                        fileSize: null == t.size ? void 0 : t.size.toString(),
                        playable: !0,
                        renderLinkComponent: x.iT,
                        onClick: e.onClick,
                        onPlay: e.onPlay,
                        onEnded: e.onEnded,
                        onVolumeChange: e.onVolumeChange,
                        onMute: e.onMute,
                        downloadable: !1
                    })
                });
            },
            r = 1 === n.length;
        function o(e, t) {
            return (0, d.dn)(e.originalItem, t);
        }
        return (0, i.jsx)('div', {
            className: k.classificationEvidenceMessageAttachment,
            children: (0, i.jsx)(j.Z, {
                items: n.map((e) => ({
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, p.aw)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type
                    },
                    message: t,
                    mediaLayoutType: N.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: r,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (t) => a(t, e, r),
                    renderImageComponent: (e) =>
                        (0, i.jsx)(
                            y.dS,
                            I(L({}, e), {
                                hiddenSpoilers: !0,
                                shouldHideMediaOptions: !0,
                                shouldLink: !1
                            })
                        ),
                    renderAudioComponent: y.q7,
                    renderPlaintextFilePreview: y.d4,
                    renderGenericFileComponent: y.ZK,
                    renderMosaicItemFooter: y.L9,
                    getObscureReason: o,
                    gifFavoriteButton: () => null
                }))
            })
        });
    };
function Z(e) {
    var t;
    let { flaggedContent: n } = e,
        l = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        [s, d] = a.useState({}),
        [u, p] = a.useState(!0),
        h = (0, r.e7)([P.Z], () => P.Z.getUsername()),
        y = n[0],
        x = U(y, s, l, h),
        j = (0, f.ZP)(x),
        w = (0, m.k)(x),
        A = (0, E.Z)(j),
        T = (0, v.Z)(x, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1
        });
    return (a.useEffect(() => {
        Promise.all(
            y.attachments
                .filter((e) => {
                    let { filename: t } = e;
                    return (0, c.CO)(t) || (0, c.NU)(t);
                })
                .map((e) =>
                    new Promise((t, n) => {
                        if ((0, c.CO)(e.filename)) {
                            let i = new Image();
                            (i.src = e.url),
                                (i.onload = () => {
                                    t(i);
                                }),
                                (i.onerror = () => {
                                    n();
                                });
                        } else if ((0, c.NU)(e.filename)) {
                            let i = document.createElement('video');
                            (i.src = e.url),
                                (i.onloadedmetadata = () => {
                                    t({
                                        width: i.videoWidth,
                                        height: i.videoHeight
                                    });
                                }),
                                (i.onerror = () => {
                                    n();
                                });
                        } else
                            t({
                                width: 0,
                                height: 0
                            });
                    }).then((t) => d((n) => I(L({}, n), { [e.id]: t })))
                )
        ).finally(() => p(!1));
    }, [y.attachments]),
    '' === x.content && 0 === x.attachments.length)
        ? null
        : (0, i.jsx)('div', {
              className: k.classificationEvidenceCard,
              children: u
                  ? (0, i.jsx)(o.$jN, {})
                  : (0, i.jsx)(g.Z, {
                        compact: !1,
                        childrenHeader: (0, O.Z)({
                            author: I(L({}, l), {
                                colorString: '',
                                nick: null != (t = null == l ? void 0 : l.username) ? t : h
                            }),
                            message: x,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1
                        }),
                        childrenAccessories: (0, i.jsx)(D, { message: x }),
                        childrenMessageContent: (0, b.Z)({ message: x }, T.content),
                        hasThread: !1,
                        hasReply: !1,
                        authorHasGradientRole: A,
                        guildId: w
                    })
          });
}
