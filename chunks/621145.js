t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120),
    t(773603);
var i = t(200651),
    a = t(192379),
    l = t(392711),
    o = t(442837),
    s = t(481060),
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
    E = t(845080),
    C = t(594174),
    j = t(956664),
    y = t(709054),
    A = t(236289),
    N = t(788080),
    T = t(800530),
    I = t(981631),
    w = t(217702),
    L = t(453486);
let k = (e, n, t, i) => {
        let a = e.attachments.map((e) => {
            var t, i, a, l;
            let o = {
                ...e,
                filename: (0, N.eS)(e),
                size: 0,
                proxy_url: e.url
            };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return o;
            return {
                ...o,
                width: null !== (a = null === (t = n[e.id]) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : T.Sv,
                height: null !== (l = null === (i = n[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== l ? l : T.EY
            };
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
                              username: i
                          },
                nonce: e.id,
                content: e.content,
                type: I.uaV.DEFAULT,
                channelId: I.lds
            }),
            timestamp: new Date(y.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: I.yb.SENT
        });
    },
    S = (e) => {
        let { message: n } = e,
            { attachments: t } = n;
        if (0 === t.length) return null;
        let a = (e, n, t) => {
                let a = T.Sv,
                    o = T.EY;
                if (null != n.width && null != n.height) {
                    let e = (0, j.Dc)({
                        width: n.width,
                        height: n.height,
                        maxWidth: T.Sv,
                        maxHeight: T.EY
                    });
                    (a = (0, l.clamp)(Math.round(n.width * e), 0, T.Sv)), (o = (0, l.clamp)(Math.round(n.height * e), 0, T.EY));
                }
                return (0, i.jsx)('div', {
                    style: {
                        width: t ? a : '100%',
                        height: t ? o : '100%'
                    },
                    children: (0, i.jsx)(r.ZP, {
                        className: e.className,
                        forceExternal: !1,
                        src: n.url,
                        width: t ? a : '100%',
                        height: t ? o : '100%',
                        responsive: !0,
                        volume: e.volume,
                        autoPlay: !1,
                        autoMute: !1,
                        type: r.ZP.Types.VIDEO,
                        mediaLayoutType: e.mediaLayoutType,
                        fileName: n.filename,
                        fileSize: null == n.size ? void 0 : n.size.toString(),
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
            o = 1 === t.length;
        function s(e, n) {
            return (0, d.dn)(e.originalItem, n);
        }
        return (0, i.jsx)('div', {
            className: L.classificationEvidenceMessageAttachment,
            children: (0, i.jsx)(g.Z, {
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
                    message: n,
                    mediaLayoutType: w.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: o,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (n) => a(n, e, o),
                    renderImageComponent: (e) =>
                        (0, i.jsx)(x.dS, {
                            ...e,
                            hiddenSpoilers: !0,
                            shouldHideMediaOptions: !0,
                            shouldLink: !1
                        }),
                    renderAudioComponent: x.q7,
                    renderPlaintextFilePreview: x.d4,
                    renderGenericFileComponent: x.ZK,
                    renderMosaicItemFooter: x.L9,
                    getObscureReason: s,
                    gifFavoriteButton: () => null
                }))
            })
        });
    };
function b(e) {
    var n;
    let { flaggedContent: t } = e,
        l = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        [r, d] = a.useState({}),
        [u, m] = a.useState(!0),
        h = (0, o.e7)([A.Z], () => A.Z.getUsername()),
        x = t[0],
        f = k(x, r, l, h),
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
                    let { filename: n } = e;
                    return (0, c.CO)(n) || (0, c.NU)(n);
                })
                .map((e) => {
                    var n;
                    return ((n = e),
                    new Promise((e, t) => {
                        if ((0, c.CO)(n.filename)) {
                            let i = new Image();
                            (i.src = n.url),
                                (i.onload = () => {
                                    e(i);
                                }),
                                (i.onerror = () => {
                                    t();
                                });
                        } else if ((0, c.NU)(n.filename)) {
                            let i = document.createElement('video');
                            (i.src = n.url),
                                (i.onloadedmetadata = () => {
                                    let n = i.videoWidth;
                                    e({
                                        width: n,
                                        height: i.videoHeight
                                    });
                                }),
                                (i.onerror = () => {
                                    t();
                                });
                        } else
                            e({
                                width: 0,
                                height: 0
                            });
                    })).then((n) =>
                        d((t) => ({
                            ...t,
                            [e.id]: n
                        }))
                    );
                })
        ).finally(() => m(!1));
    }, [x.attachments]),
    '' === f.content && 0 === f.attachments.length)
        ? null
        : (0, i.jsx)('div', {
              className: L.classificationEvidenceCard,
              children: u
                  ? (0, i.jsx)(s.Spinner, {})
                  : (0, i.jsx)(p.Z, {
                        compact: !1,
                        childrenHeader: (0, E.Z)({
                            author: {
                                ...l,
                                colorString: '',
                                nick: null !== (n = null == l ? void 0 : l.username) && void 0 !== n ? n : h
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
                        childrenAccessories: (0, i.jsx)(S, { message: f }),
                        childrenMessageContent: (0, _.Z)({ message: f }, g.content),
                        hasThread: !1,
                        hasReply: !1
                    })
          });
}
