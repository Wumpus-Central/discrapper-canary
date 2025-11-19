n.d(t, { Z: () => L }), n(997841), n(388685), n(457542);
var i = n(54381),
    o = n(473749),
    r = n(392711),
    a = n(442837),
    l = n(481060),
    c = n(640108),
    s = n(406432),
    d = n(169525),
    u = n(786761),
    h = n(499376),
    f = n(3148),
    m = n(739566),
    p = n(492593),
    g = n(219797),
    _ = n(524444),
    v = n(884182),
    y = n(25015),
    b = n(963550),
    C = n(845080),
    O = n(594174),
    w = n(630388),
    x = n(956664),
    j = n(709054),
    E = n(236289),
    P = n(788080),
    S = n(800530),
    I = n(981631),
    T = n(217702),
    Z = n(20316);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function M(e, t) {
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
let k = (e) => {
    let { message: t } = e,
        { attachments: n } = t;
    if (0 === n.length) return null;
    let o = 1 === n.length;
    function a(e, t) {
        return (0, d.dn)(e.originalItem, t);
    }
    return (0, i.jsx)("div", {
        className: Z.classificationEvidenceMessageAttachment,
        children: (0, i.jsx)(v.Z, {
            items: n.map((e) => {
                var n;
                return {
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, h.aw)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type,
                        srcIsAnimated: (0, w.yE)(null != (n = e.flags) ? n : 0, I.J0y.IS_ANIMATED),
                    },
                    message: t,
                    mediaLayoutType: T.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: o,
                    onRemoveItem: r.noop,
                    renderVideoComponent: (t) =>
                        ((e, t, n) => {
                            let o = S.Sv,
                                a = S.EY;
                            if (null != t.width && null != t.height) {
                                let e = (0, x.Dc)({
                                    width: t.width,
                                    height: t.height,
                                    maxWidth: S.Sv,
                                    maxHeight: S.EY,
                                });
                                (o = (0, r.clamp)(Math.round(t.width * e), 0, S.Sv)),
                                    (a = (0, r.clamp)(Math.round(t.height * e), 0, S.EY));
                            }
                            return (0, i.jsx)("div", {
                                style: {
                                    width: n ? o : "100%",
                                    height: n ? a : "100%",
                                },
                                children: (0, i.jsx)(c.ZP, {
                                    className: e.className,
                                    forceExternal: !1,
                                    src: t.url,
                                    width: n ? o : "100%",
                                    height: n ? a : "100%",
                                    responsive: !0,
                                    volume: e.volume,
                                    autoPlay: !1,
                                    autoMute: !1,
                                    type: c.ZP.Types.VIDEO,
                                    mediaLayoutType: e.mediaLayoutType,
                                    fileName: t.filename,
                                    fileSize: null == t.size ? void 0 : t.size.toString(),
                                    playable: !0,
                                    renderLinkComponent: _.iT,
                                    onClick: e.onClick,
                                    onPlay: e.onPlay,
                                    onEnded: e.onEnded,
                                    onVolumeChange: e.onVolumeChange,
                                    onMute: e.onMute,
                                    downloadable: !1,
                                }),
                            });
                        })(t, e, o),
                    renderImageComponent: (e) =>
                        (0, i.jsx)(
                            g.dS,
                            M(A({}, e), {
                                hiddenSpoilers: !0,
                                shouldHideMediaOptions: !0,
                                shouldLink: !1,
                            }),
                        ),
                    renderAudioComponent: g.q7,
                    renderPlaintextFilePreview: g.d4,
                    renderGenericFileComponent: g.ZK,
                    renderMosaicItemFooter: g.L9,
                    getObscureReason: a,
                    gifFavoriteButton: () => null,
                };
            }),
        }),
    });
};
function L(e) {
    var t;
    let { flaggedContent: n } = e,
        r = (0, a.e7)([O.default], () => O.default.getCurrentUser()),
        [c, d] = o.useState({}),
        [h, g] = o.useState(!0),
        _ = (0, a.e7)([E.Z], () => E.Z.getUsername()),
        v = n[0],
        w = ((e, t, n, i) => {
            let o = e.attachments.map((e) => {
                var n, i, o, r;
                let a = M(A({}, e), {
                    filename: (0, P.eS)(e),
                    size: 0,
                    proxy_url: e.url,
                });
                return (0, s.CO)(e.filename) || (0, s.NU)(e.filename)
                    ? M(A({}, a), {
                          width: null != (o = null == (n = t[e.id]) ? void 0 : n.width) ? o : S.Sv,
                          height: null != (r = null == (i = t[e.id]) ? void 0 : i.height) ? r : S.EY,
                      })
                    : a;
            });
            return (0, u.e5)(
                M(
                    A(
                        {},
                        (0, f.ZP)({
                            author:
                                null != n
                                    ? n
                                    : {
                                          id: "",
                                          avatar: void 0,
                                          discriminator: "0000",
                                          username: i,
                                      },
                            nonce: e.id,
                            content: e.content,
                            type: I.uaV.DEFAULT,
                            channelId: I.lds,
                        }),
                    ),
                    {
                        timestamp: new Date(j.default.extractTimestamp(e.id)).toISOString(),
                        attachments: o,
                        state: I.yb.SENT,
                    },
                ),
            );
        })(v, c, r, _),
        x = (0, m.ZP)(w),
        T = (0, y.Z)(w, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        });
    return (o.useEffect(() => {
        Promise.all(
            v.attachments
                .filter((e) => {
                    let { filename: t } = e;
                    return (0, s.CO)(t) || (0, s.NU)(t);
                })
                .map((e) =>
                    new Promise((t, n) => {
                        if ((0, s.CO)(e.filename)) {
                            let i = new Image();
                            (i.src = e.url),
                                (i.onload = () => {
                                    t(i);
                                }),
                                (i.onerror = () => {
                                    n();
                                });
                        } else if ((0, s.NU)(e.filename)) {
                            let i = document.createElement("video");
                            (i.src = e.url),
                                (i.onloadedmetadata = () => {
                                    t({
                                        width: i.videoWidth,
                                        height: i.videoHeight,
                                    });
                                }),
                                (i.onerror = () => {
                                    n();
                                });
                        } else
                            t({
                                width: 0,
                                height: 0,
                            });
                    }).then((t) => d((n) => M(A({}, n), { [e.id]: t }))),
                ),
        ).finally(() => g(!1));
    }, [v.attachments]),
    "" === w.content && 0 === w.attachments.length)
        ? null
        : (0, i.jsx)("div", {
              className: Z.classificationEvidenceCard,
              children: h
                  ? (0, i.jsx)(l.$jN, {})
                  : (0, i.jsx)(p.Z, {
                        compact: !1,
                        childrenHeader: (0, C.Z)({
                            author: M(A({}, r), {
                                colorString: "",
                                colorStrings: null,
                                nick: null != (t = null == r ? void 0 : r.username) ? t : _,
                            }),
                            message: w,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1,
                        }),
                        childrenAccessories: (0, i.jsx)(k, { message: w }),
                        childrenMessageContent: (0, b.Z)({ message: w }, T.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: x,
                    }),
          });
}
