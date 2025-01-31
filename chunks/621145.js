t.d(i, { Z: () => b }), t(47120), t(773603);
var n = t(200651),
    a = t(192379),
    l = t(392711),
    s = t(442837),
    o = t(481060),
    r = t(640108),
    c = t(406432),
    d = t(169525),
    u = t(786761),
    m = t(499376),
    h = t(3148),
    p = t(492593),
    x = t(219797),
    f = t(524444),
    g = t(884182),
    v = t(25015),
    _ = t(963550),
    j = t(845080),
    E = t(594174),
    C = t(956664),
    N = t(709054),
    y = t(236289),
    A = t(788080),
    T = t(800530),
    w = t(981631),
    k = t(217702),
    I = t(453486);
let L = (e, i, t, n) => {
        let a = e.attachments.map((e) => {
            var t, n, a, l;
            let s = {
                ...e,
                filename: (0, A.eS)(e),
                size: 0,
                proxy_url: e.url
            };
            return (0, c.CO)(e.filename) || (0, c.NU)(e.filename)
                ? {
                      ...s,
                      width: null !== (a = null === (t = i[e.id]) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : T.Sv,
                      height: null !== (l = null === (n = i[e.id]) || void 0 === n ? void 0 : n.height) && void 0 !== l ? l : T.EY
                  }
                : s;
        });
        return (0, u.e5)({
            ...(0, h.ZP)({
                author:
                    null != t
                        ? t
                        : {
                              id: '',
                              avatar: void 0,
                              discriminator: '0000',
                              username: n
                          },
                nonce: e.id,
                content: e.content,
                type: w.uaV.DEFAULT,
                channelId: w.lds
            }),
            timestamp: new Date(N.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: w.yb.SENT
        });
    },
    S = (e) => {
        let { message: i } = e,
            { attachments: t } = i;
        if (0 === t.length) return null;
        let a = (e, i, t) => {
                let a = T.Sv,
                    s = T.EY;
                if (null != i.width && null != i.height) {
                    let e = (0, C.Dc)({
                        width: i.width,
                        height: i.height,
                        maxWidth: T.Sv,
                        maxHeight: T.EY
                    });
                    (a = (0, l.clamp)(Math.round(i.width * e), 0, T.Sv)), (s = (0, l.clamp)(Math.round(i.height * e), 0, T.EY));
                }
                return (0, n.jsx)('div', {
                    style: {
                        width: t ? a : '100%',
                        height: t ? s : '100%'
                    },
                    children: (0, n.jsx)(r.ZP, {
                        className: e.className,
                        forceExternal: !1,
                        src: i.url,
                        width: t ? a : '100%',
                        height: t ? s : '100%',
                        responsive: !0,
                        volume: e.volume,
                        autoPlay: !1,
                        autoMute: !1,
                        type: r.ZP.Types.VIDEO,
                        mediaLayoutType: e.mediaLayoutType,
                        fileName: i.filename,
                        fileSize: null == i.size ? void 0 : i.size.toString(),
                        playable: !0,
                        renderLinkComponent: f.iT,
                        onClick: e.onClick,
                        onPlay: e.onPlay,
                        onEnded: e.onEnded,
                        onVolumeChange: e.onVolumeChange,
                        onMute: e.onMute,
                        downloadable: !1
                    })
                });
            },
            s = 1 === t.length;
        function o(e, i) {
            return (0, d.dn)(e.originalItem, i);
        }
        return (0, n.jsx)('div', {
            className: I.classificationEvidenceMessageAttachment,
            children: (0, n.jsx)(g.Z, {
                items: t.map((e) => ({
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
                    message: i,
                    mediaLayoutType: k.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: s,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (i) => a(i, e, s),
                    renderImageComponent: (e) =>
                        (0, n.jsx)(x.dS, {
                            ...e,
                            hiddenSpoilers: !0,
                            shouldHideMediaOptions: !0,
                            shouldLink: !1
                        }),
                    renderAudioComponent: x.q7,
                    renderPlaintextFilePreview: x.d4,
                    renderGenericFileComponent: x.ZK,
                    renderMosaicItemFooter: x.L9,
                    getObscureReason: o,
                    gifFavoriteButton: () => null
                }))
            })
        });
    };
function b(e) {
    var i;
    let { flaggedContent: t } = e,
        l = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        [r, d] = a.useState({}),
        [u, m] = a.useState(!0),
        h = (0, s.e7)([y.Z], () => y.Z.getUsername()),
        x = t[0],
        f = L(x, r, l, h),
        g = (0, v.Z)(f, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1
        });
    return (a.useEffect(() => {
        Promise.all(
            x.attachments
                .filter((e) => {
                    let { filename: i } = e;
                    return (0, c.CO)(i) || (0, c.NU)(i);
                })
                .map((e) =>
                    new Promise((i, t) => {
                        if ((0, c.CO)(e.filename)) {
                            let n = new Image();
                            (n.src = e.url),
                                (n.onload = () => {
                                    i(n);
                                }),
                                (n.onerror = () => {
                                    t();
                                });
                        } else if ((0, c.NU)(e.filename)) {
                            let n = document.createElement('video');
                            (n.src = e.url),
                                (n.onloadedmetadata = () => {
                                    i({
                                        width: n.videoWidth,
                                        height: n.videoHeight
                                    });
                                }),
                                (n.onerror = () => {
                                    t();
                                });
                        } else
                            i({
                                width: 0,
                                height: 0
                            });
                    }).then((i) =>
                        d((t) => ({
                            ...t,
                            [e.id]: i
                        }))
                    )
                )
        ).finally(() => m(!1));
    }, [x.attachments]),
    '' === f.content && 0 === f.attachments.length)
        ? null
        : (0, n.jsx)('div', {
              className: I.classificationEvidenceCard,
              children: u
                  ? (0, n.jsx)(o.$jN, {})
                  : (0, n.jsx)(p.Z, {
                        compact: !1,
                        childrenHeader: (0, j.Z)({
                            author: {
                                ...l,
                                colorString: '',
                                nick: null !== (i = null == l ? void 0 : l.username) && void 0 !== i ? i : h
                            },
                            message: f,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1
                        }),
                        childrenAccessories: (0, n.jsx)(S, { message: f }),
                        childrenMessageContent: (0, _.Z)({ message: f }, g.content),
                        hasThread: !1,
                        hasReply: !1
                    })
          });
}
