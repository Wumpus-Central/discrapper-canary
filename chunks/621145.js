n.d(t, { Z: () => U }), n(997841), n(388685), n(457542);
var i = n(255367),
    a = n(73800),
    l = n(392711),
    r = n(442837),
    o = n(481060),
    s = n(640108),
    c = n(406432),
    d = n(169525),
    u = n(786761),
    m = n(499376),
    p = n(3148),
    f = n(739566),
    h = n(492593),
    g = n(219797),
    y = n(524444),
    x = n(884182),
    j = n(25015),
    v = n(963550),
    b = n(845080),
    O = n(594174),
    E = n(630388),
    _ = n(956664),
    A = n(709054),
    w = n(236289),
    P = n(788080),
    T = n(800530),
    C = n(981631),
    S = n(217702),
    N = n(966378);
function k(e) {
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
let L = (e, t, n, i) => {
        let a = e.attachments.map((e) => {
            var n, i, a, l;
            let r = I(k({}, e), {
                filename: (0, P.eS)(e),
                size: 0,
                proxy_url: e.url
            });
            return (0, c.CO)(e.filename) || (0, c.NU)(e.filename)
                ? I(k({}, r), {
                      width: null != (a = null == (n = t[e.id]) ? void 0 : n.width) ? a : T.Sv,
                      height: null != (l = null == (i = t[e.id]) ? void 0 : i.height) ? l : T.EY
                  })
                : r;
        });
        return (0, u.e5)(
            I(
                k(
                    {},
                    (0, p.ZP)({
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
                        type: C.uaV.DEFAULT,
                        channelId: C.lds
                    })
                ),
                {
                    timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
                    attachments: a,
                    state: C.yb.SENT
                }
            )
        );
    },
    D = (e) => {
        let { message: t } = e,
            { attachments: n } = t;
        if (0 === n.length) return null;
        let a = (e, t, n) => {
                let a = T.Sv,
                    r = T.EY;
                if (null != t.width && null != t.height) {
                    let e = (0, _.Dc)({
                        width: t.width,
                        height: t.height,
                        maxWidth: T.Sv,
                        maxHeight: T.EY
                    });
                    (a = (0, l.clamp)(Math.round(t.width * e), 0, T.Sv)), (r = (0, l.clamp)(Math.round(t.height * e), 0, T.EY));
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
                        renderLinkComponent: y.iT,
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
            className: N.classificationEvidenceMessageAttachment,
            children: (0, i.jsx)(x.Z, {
                items: n.map((e) => {
                    var n;
                    return {
                        item: {
                            uniqueId: e.id,
                            originalItem: e,
                            type: (0, m.aw)(e, !0),
                            downloadUrl: e.proxy_url,
                            height: e.height,
                            width: e.width,
                            spoiler: e.spoiler,
                            contentType: e.content_type,
                            srcIsAnimated: (0, E.yE)(null != (n = e.flags) ? n : 0, C.J0y.IS_ANIMATED)
                        },
                        message: t,
                        mediaLayoutType: S.hV.MOSAIC,
                        autoPlayGif: !1,
                        canRemoveItem: !1,
                        isSingleMosaicItem: r,
                        onRemoveItem: l.noop,
                        renderVideoComponent: (t) => a(t, e, r),
                        renderImageComponent: (e) =>
                            (0, i.jsx)(
                                g.dS,
                                I(k({}, e), {
                                    hiddenSpoilers: !0,
                                    shouldHideMediaOptions: !0,
                                    shouldLink: !1
                                })
                            ),
                        renderAudioComponent: g.q7,
                        renderPlaintextFilePreview: g.d4,
                        renderGenericFileComponent: g.ZK,
                        renderMosaicItemFooter: g.L9,
                        getObscureReason: o,
                        gifFavoriteButton: () => null
                    };
                })
            })
        });
    };
function U(e) {
    var t;
    let { flaggedContent: n } = e,
        l = (0, r.e7)([O.default], () => O.default.getCurrentUser()),
        [s, d] = a.useState({}),
        [u, m] = a.useState(!0),
        p = (0, r.e7)([w.Z], () => w.Z.getUsername()),
        g = n[0],
        y = L(g, s, l, p),
        x = (0, f.ZP)(y),
        E = (0, j.Z)(y, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1
        });
    return (a.useEffect(() => {
        Promise.all(
            g.attachments
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
                    }).then((t) => d((n) => I(k({}, n), { [e.id]: t })))
                )
        ).finally(() => m(!1));
    }, [g.attachments]),
    '' === y.content && 0 === y.attachments.length)
        ? null
        : (0, i.jsx)('div', {
              className: N.classificationEvidenceCard,
              children: u
                  ? (0, i.jsx)(o.$jN, {})
                  : (0, i.jsx)(h.Z, {
                        compact: !1,
                        childrenHeader: (0, b.Z)({
                            author: I(k({}, l), {
                                colorString: '',
                                nick: null != (t = null == l ? void 0 : l.username) ? t : p
                            }),
                            message: y,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1
                        }),
                        childrenAccessories: (0, i.jsx)(D, { message: y }),
                        childrenMessageContent: (0, v.Z)({ message: y }, E.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: x
                    })
          });
}
