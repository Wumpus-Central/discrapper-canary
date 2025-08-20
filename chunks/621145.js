i.d(t, { Z: () => U }), i(997841), i(388685), i(457542);
var n = i(951288),
    a = i(647438),
    l = i(392711),
    o = i(442837),
    s = i(481060),
    r = i(640108),
    c = i(406432),
    d = i(169525),
    u = i(786761),
    f = i(499376),
    m = i(3148),
    p = i(739566),
    h = i(492593),
    g = i(219797),
    y = i(524444),
    x = i(884182),
    b = i(25015),
    v = i(963550),
    _ = i(845080),
    j = i(594174),
    E = i(630388),
    O = i(956664),
    A = i(709054),
    C = i(236289),
    P = i(788080),
    w = i(800530),
    T = i(981631),
    S = i(217702),
    k = i(20316);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
let I = (e) => {
    let { message: t } = e,
        { attachments: i } = t;
    if (0 === i.length) return null;
    let a = 1 === i.length;
    function o(e, t) {
        return (0, d.dn)(e.originalItem, t);
    }
    return (0, n.jsx)("div", {
        className: k.classificationEvidenceMessageAttachment,
        children: (0, n.jsx)(x.Z, {
            items: i.map((e) => {
                var i;
                return {
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, f.aw)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type,
                        srcIsAnimated: (0, E.yE)(null != (i = e.flags) ? i : 0, T.J0y.IS_ANIMATED),
                    },
                    message: t,
                    mediaLayoutType: S.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: a,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (t) =>
                        ((e, t, i) => {
                            let a = w.Sv,
                                o = w.EY;
                            if (null != t.width && null != t.height) {
                                let e = (0, O.Dc)({
                                    width: t.width,
                                    height: t.height,
                                    maxWidth: w.Sv,
                                    maxHeight: w.EY,
                                });
                                (a = (0, l.clamp)(Math.round(t.width * e), 0, w.Sv)),
                                    (o = (0, l.clamp)(Math.round(t.height * e), 0, w.EY));
                            }
                            return (0, n.jsx)("div", {
                                style: {
                                    width: i ? a : "100%",
                                    height: i ? o : "100%",
                                },
                                children: (0, n.jsx)(r.ZP, {
                                    className: e.className,
                                    forceExternal: !1,
                                    src: t.url,
                                    width: i ? a : "100%",
                                    height: i ? o : "100%",
                                    responsive: !0,
                                    volume: e.volume,
                                    autoPlay: !1,
                                    autoMute: !1,
                                    type: r.ZP.Types.VIDEO,
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
                                    downloadable: !1,
                                }),
                            });
                        })(t, e, a),
                    renderImageComponent: (e) =>
                        (0, n.jsx)(
                            g.dS,
                            L(N({}, e), {
                                hiddenSpoilers: !0,
                                shouldHideMediaOptions: !0,
                                shouldLink: !1,
                            }),
                        ),
                    renderAudioComponent: g.q7,
                    renderPlaintextFilePreview: g.d4,
                    renderGenericFileComponent: g.ZK,
                    renderMosaicItemFooter: g.L9,
                    getObscureReason: o,
                    gifFavoriteButton: () => null,
                };
            }),
        }),
    });
};
function U(e) {
    var t;
    let { flaggedContent: i } = e,
        l = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
        [r, d] = a.useState({}),
        [f, g] = a.useState(!0),
        y = (0, o.e7)([C.Z], () => C.Z.getUsername()),
        x = i[0],
        E = ((e, t, i, n) => {
            let a = e.attachments.map((e) => {
                var i, n, a, l;
                let o = L(N({}, e), {
                    filename: (0, P.eS)(e),
                    size: 0,
                    proxy_url: e.url,
                });
                return (0, c.CO)(e.filename) || (0, c.NU)(e.filename)
                    ? L(N({}, o), {
                          width: null != (a = null == (i = t[e.id]) ? void 0 : i.width) ? a : w.Sv,
                          height: null != (l = null == (n = t[e.id]) ? void 0 : n.height) ? l : w.EY,
                      })
                    : o;
            });
            return (0, u.e5)(
                L(
                    N(
                        {},
                        (0, m.ZP)({
                            author:
                                null != i
                                    ? i
                                    : {
                                          id: "",
                                          avatar: void 0,
                                          discriminator: "0000",
                                          username: n,
                                      },
                            nonce: e.id,
                            content: e.content,
                            type: T.uaV.DEFAULT,
                            channelId: T.lds,
                        }),
                    ),
                    {
                        timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
                        attachments: a,
                        state: T.yb.SENT,
                    },
                ),
            );
        })(x, r, l, y),
        O = (0, p.ZP)(E),
        S = (0, b.Z)(E, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        });
    return (a.useEffect(() => {
        Promise.all(
            x.attachments
                .filter((e) => {
                    let { filename: t } = e;
                    return (0, c.CO)(t) || (0, c.NU)(t);
                })
                .map((e) =>
                    new Promise((t, i) => {
                        if ((0, c.CO)(e.filename)) {
                            let n = new Image();
                            (n.src = e.url),
                                (n.onload = () => {
                                    t(n);
                                }),
                                (n.onerror = () => {
                                    i();
                                });
                        } else if ((0, c.NU)(e.filename)) {
                            let n = document.createElement("video");
                            (n.src = e.url),
                                (n.onloadedmetadata = () => {
                                    t({
                                        width: n.videoWidth,
                                        height: n.videoHeight,
                                    });
                                }),
                                (n.onerror = () => {
                                    i();
                                });
                        } else
                            t({
                                width: 0,
                                height: 0,
                            });
                    }).then((t) => d((i) => L(N({}, i), { [e.id]: t }))),
                ),
        ).finally(() => g(!1));
    }, [x.attachments]),
    "" === E.content && 0 === E.attachments.length)
        ? null
        : (0, n.jsx)("div", {
              className: k.classificationEvidenceCard,
              children: f
                  ? (0, n.jsx)(s.$jN, {})
                  : (0, n.jsx)(h.Z, {
                        compact: !1,
                        childrenHeader: (0, _.Z)({
                            author: L(N({}, l), {
                                colorString: "",
                                colorStrings: null,
                                nick: null != (t = null == l ? void 0 : l.username) ? t : y,
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
                        childrenAccessories: (0, n.jsx)(I, { message: E }),
                        childrenMessageContent: (0, v.Z)({ message: E }, S.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: O,
                    }),
          });
}
