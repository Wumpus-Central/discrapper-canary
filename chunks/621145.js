n.d(t, { Z: () => L }), n(47120), n(773603);
var i = n(200651),
    a = n(192379),
    l = n(392711),
    r = n(442837),
    o = n(481060),
    s = n(640108),
    c = n(406432),
    d = n(169525),
    u = n(786761),
    m = n(499376),
    p = n(3148),
    f = n(492593),
    h = n(219797),
    g = n(524444),
    y = n(884182),
    v = n(25015),
    x = n(963550),
    j = n(845080),
    b = n(594174),
    O = n(956664),
    w = n(709054),
    E = n(236289),
    N = n(788080),
    P = n(800530),
    _ = n(981631),
    C = n(217702),
    A = n(269918);
function S(e) {
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
function T(e, t) {
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
let k = (e, t, n, i) => {
        let a = e.attachments.map((e) => {
            var n, i, a, l;
            let r = T(S({}, e), {
                filename: (0, N.eS)(e),
                size: 0,
                proxy_url: e.url
            });
            return (0, c.CO)(e.filename) || (0, c.NU)(e.filename)
                ? T(S({}, r), {
                      width: null !== (a = null === (n = t[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : P.Sv,
                      height: null !== (l = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== l ? l : P.EY
                  })
                : r;
        });
        return (0, u.e5)(
            T(
                S(
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
                        type: _.uaV.DEFAULT,
                        channelId: _.lds
                    })
                ),
                {
                    timestamp: new Date(w.default.extractTimestamp(e.id)).toISOString(),
                    attachments: a,
                    state: _.yb.SENT
                }
            )
        );
    },
    I = (e) => {
        let { message: t } = e,
            { attachments: n } = t;
        if (0 === n.length) return null;
        let a = (e, t, n) => {
                let a = P.Sv,
                    r = P.EY;
                if (null != t.width && null != t.height) {
                    let e = (0, O.Dc)({
                        width: t.width,
                        height: t.height,
                        maxWidth: P.Sv,
                        maxHeight: P.EY
                    });
                    (a = (0, l.clamp)(Math.round(t.width * e), 0, P.Sv)), (r = (0, l.clamp)(Math.round(t.height * e), 0, P.EY));
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
                        renderLinkComponent: g.iT,
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
            className: A.classificationEvidenceMessageAttachment,
            children: (0, i.jsx)(y.Z, {
                items: n.map((e) => ({
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, m.aw)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type
                    },
                    message: t,
                    mediaLayoutType: C.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: r,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (t) => a(t, e, r),
                    renderImageComponent: (e) =>
                        (0, i.jsx)(
                            h.dS,
                            T(S({}, e), {
                                hiddenSpoilers: !0,
                                shouldHideMediaOptions: !0,
                                shouldLink: !1
                            })
                        ),
                    renderAudioComponent: h.q7,
                    renderPlaintextFilePreview: h.d4,
                    renderGenericFileComponent: h.ZK,
                    renderMosaicItemFooter: h.L9,
                    getObscureReason: o,
                    gifFavoriteButton: () => null
                }))
            })
        });
    };
function L(e) {
    var t;
    let { flaggedContent: n } = e,
        l = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
        [s, d] = a.useState({}),
        [u, m] = a.useState(!0),
        p = (0, r.e7)([E.Z], () => E.Z.getUsername()),
        h = n[0],
        g = k(h, s, l, p),
        y = (0, v.Z)(g, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1
        });
    return (a.useEffect(() => {
        Promise.all(
            h.attachments
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
                    }).then((t) => d((n) => T(S({}, n), { [e.id]: t })))
                )
        ).finally(() => m(!1));
    }, [h.attachments]),
    '' === g.content && 0 === g.attachments.length)
        ? null
        : (0, i.jsx)('div', {
              className: A.classificationEvidenceCard,
              children: u
                  ? (0, i.jsx)(o.$jN, {})
                  : (0, i.jsx)(f.Z, {
                        compact: !1,
                        childrenHeader: (0, j.Z)({
                            author: T(S({}, l), {
                                colorString: '',
                                nick: null !== (t = null == l ? void 0 : l.username) && void 0 !== t ? t : p
                            }),
                            message: g,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1
                        }),
                        childrenAccessories: (0, i.jsx)(I, { message: g }),
                        childrenMessageContent: (0, x.Z)({ message: g }, y.content),
                        hasThread: !1,
                        hasReply: !1
                    })
          });
}
