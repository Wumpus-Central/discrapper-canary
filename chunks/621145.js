n.d(t, { Z: () => U }), n(997841), n(388685), n(457542);
var i = n(54381),
    a = n(473749),
    o = n(392711),
    l = n(95015),
    s = n(442837),
    c = n(481060),
    r = n(640108),
    d = n(406432),
    u = n(169525),
    p = n(786761),
    m = n(499376),
    f = n(3148),
    h = n(739566),
    g = n(492593),
    y = n(219797),
    b = n(524444),
    E = n(884182),
    v = n(25015),
    x = n(963550),
    _ = n(845080),
    j = n(594174),
    O = n(956664),
    A = n(709054),
    P = n(236289),
    C = n(788080),
    T = n(800530),
    w = n(981631),
    S = n(217702),
    L = n(887902);
function N(e) {
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
let k = (e) => {
    let { message: t } = e,
        { attachments: n } = t;
    if (0 === n.length) return null;
    let a = 1 === n.length;
    function s(e, t) {
        return (0, u.dn)(e.originalItem, t);
    }
    return (0, i.jsx)("div", {
        className: L.classificationEvidenceMessageAttachment,
        children: (0, i.jsx)(E.Z, {
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
                        srcIsAnimated: (0, l.yE)(null != (n = e.flags) ? n : 0, w.J0y.IS_ANIMATED),
                    },
                    message: t,
                    mediaLayoutType: S.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: a,
                    onRemoveItem: o.noop,
                    renderVideoComponent: (t) =>
                        ((e, t, n) => {
                            let a = T.Sv,
                                l = T.EY;
                            if (null != t.width && null != t.height) {
                                let e = (0, O.Dc)({
                                    width: t.width,
                                    height: t.height,
                                    maxWidth: T.Sv,
                                    maxHeight: T.EY,
                                });
                                (a = (0, o.clamp)(Math.round(t.width * e), 0, T.Sv)),
                                    (l = (0, o.clamp)(Math.round(t.height * e), 0, T.EY));
                            }
                            return (0, i.jsx)("div", {
                                style: {
                                    width: n ? a : "100%",
                                    height: n ? l : "100%",
                                },
                                children: (0, i.jsx)(r.ZP, {
                                    className: e.className,
                                    forceExternal: !1,
                                    src: t.url,
                                    width: n ? a : "100%",
                                    height: n ? l : "100%",
                                    responsive: !0,
                                    volume: e.volume,
                                    autoPlay: !1,
                                    autoMute: !1,
                                    type: r.ZP.Types.VIDEO,
                                    mediaLayoutType: e.mediaLayoutType,
                                    fileName: t.filename,
                                    fileSize: null == t.size ? void 0 : t.size.toString(),
                                    playable: !0,
                                    renderLinkComponent: b.iT,
                                    onClick: e.onClick,
                                    onPlay: e.onPlay,
                                    onEnded: e.onEnded,
                                    onVolumeChange: e.onVolumeChange,
                                    onMute: e.onMute,
                                    downloadable: !1,
                                }),
                            });
                        })(t, e, a),
                    renderImageComponent: (e) =>
                        (0, i.jsx)(
                            y.dS,
                            I(N({}, e), {
                                hiddenSpoilers: !0,
                                shouldHideMediaOptions: !0,
                                shouldLink: !1,
                            }),
                        ),
                    renderAudioComponent: y.q7,
                    renderPlaintextFilePreview: y.d4,
                    renderGenericFileComponent: y.ZK,
                    renderMosaicItemFooter: y.L9,
                    getObscureReason: s,
                    gifFavoriteButton: () => null,
                };
            }),
        }),
    });
};
function U(e) {
    var t;
    let { flaggedContent: n } = e,
        o = (0, s.e7)([j.default], () => j.default.getCurrentUser()),
        [l, r] = a.useState({}),
        [u, m] = a.useState(!0),
        y = (0, s.e7)([P.Z], () => P.Z.getUsername()),
        b = n[0],
        E = ((e, t, n, i) => {
            let a = e.attachments.map((e) => {
                var n, i, a, o;
                let l = I(N({}, e), {
                    filename: (0, C.eS)(e),
                    size: 0,
                    proxy_url: e.url,
                });
                return (0, d.CO)(e.filename) || (0, d.NU)(e.filename)
                    ? I(N({}, l), {
                          width: null != (a = null == (n = t[e.id]) ? void 0 : n.width) ? a : T.Sv,
                          height: null != (o = null == (i = t[e.id]) ? void 0 : i.height) ? o : T.EY,
                      })
                    : l;
            });
            return (0, p.e5)(
                I(
                    N(
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
                            type: w.uaV.DEFAULT,
                            channelId: w.lds,
                        }),
                    ),
                    {
                        timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
                        attachments: a,
                        state: w.yb.SENT,
                    },
                ),
            );
        })(b, l, o, y),
        O = (0, h.ZP)(E),
        S = (0, v.Z)(E, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        });
    return (a.useEffect(() => {
        Promise.all(
            b.attachments
                .filter((e) => {
                    let { filename: t } = e;
                    return (0, d.CO)(t) || (0, d.NU)(t);
                })
                .map((e) =>
                    new Promise((t, n) => {
                        if ((0, d.CO)(e.filename)) {
                            let i = new Image();
                            (i.src = e.url),
                                (i.onload = () => {
                                    t(i);
                                }),
                                (i.onerror = () => {
                                    n();
                                });
                        } else if ((0, d.NU)(e.filename)) {
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
                    }).then((t) => r((n) => I(N({}, n), { [e.id]: t }))),
                ),
        ).finally(() => m(!1));
    }, [b.attachments]),
    "" === E.content && 0 === E.attachments.length)
        ? null
        : (0, i.jsx)("div", {
              className: L.classificationEvidenceCard,
              children: u
                  ? (0, i.jsx)(c.$jN, {})
                  : (0, i.jsx)(g.Z, {
                        compact: !1,
                        childrenHeader: (0, _.Z)({
                            author: I(N({}, o), {
                                colorString: "",
                                colorStrings: null,
                                nick: null != (t = null == o ? void 0 : o.username) ? t : y,
                            }),
                            message: E,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1,
                        }),
                        childrenAccessories: (0, i.jsx)(k, { message: E }),
                        childrenMessageContent: (0, x.Z)({ message: E }, S.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: O,
                    }),
          });
}
