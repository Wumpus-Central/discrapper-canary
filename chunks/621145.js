n.d(t, { Z: () => U }), n(997841), n(388685), n(457542);
var i = n(951288),
    a = n(647438),
    l = n(392711),
    o = n(442837),
    r = n(481060),
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
    b = n(884182),
    v = n(25015),
    x = n(963550),
    _ = n(845080),
    j = n(594174),
    E = n(630388),
    O = n(956664),
    P = n(709054),
    A = n(236289),
    C = n(788080),
    w = n(800530),
    T = n(981631),
    S = n(217702),
    N = n(20316);
function L(e) {
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
function k(e, t) {
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
let I = (e) => {
    let { message: t } = e,
        { attachments: n } = t;
    if (0 === n.length) return null;
    let a = 1 === n.length;
    function o(e, t) {
        return (0, d.dn)(e.originalItem, t);
    }
    return (0, i.jsx)("div", {
        className: N.classificationEvidenceMessageAttachment,
        children: (0, i.jsx)(b.Z, {
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
                        srcIsAnimated: (0, E.yE)(null != (n = e.flags) ? n : 0, T.J0y.IS_ANIMATED),
                    },
                    message: t,
                    mediaLayoutType: S.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: a,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (t) =>
                        ((e, t, n) => {
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
                            return (0, i.jsx)("div", {
                                style: {
                                    width: n ? a : "100%",
                                    height: n ? o : "100%",
                                },
                                children: (0, i.jsx)(s.ZP, {
                                    className: e.className,
                                    forceExternal: !1,
                                    src: t.url,
                                    width: n ? a : "100%",
                                    height: n ? o : "100%",
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
                                    downloadable: !1,
                                }),
                            });
                        })(t, e, a),
                    renderImageComponent: (e) =>
                        (0, i.jsx)(
                            g.dS,
                            k(L({}, e), {
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
    let { flaggedContent: n } = e,
        l = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
        [s, d] = a.useState({}),
        [m, g] = a.useState(!0),
        y = (0, o.e7)([A.Z], () => A.Z.getUsername()),
        b = n[0],
        E = ((e, t, n, i) => {
            let a = e.attachments.map((e) => {
                var n, i, a, l;
                let o = k(L({}, e), {
                    filename: (0, C.eS)(e),
                    size: 0,
                    proxy_url: e.url,
                });
                return (0, c.CO)(e.filename) || (0, c.NU)(e.filename)
                    ? k(L({}, o), {
                          width: null != (a = null == (n = t[e.id]) ? void 0 : n.width) ? a : w.Sv,
                          height: null != (l = null == (i = t[e.id]) ? void 0 : i.height) ? l : w.EY,
                      })
                    : o;
            });
            return (0, u.e5)(
                k(
                    L(
                        {},
                        (0, p.ZP)({
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
                            type: T.uaV.DEFAULT,
                            channelId: T.lds,
                        }),
                    ),
                    {
                        timestamp: new Date(P.default.extractTimestamp(e.id)).toISOString(),
                        attachments: a,
                        state: T.yb.SENT,
                    },
                ),
            );
        })(b, s, l, y),
        O = (0, f.ZP)(E),
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
                    }).then((t) => d((n) => k(L({}, n), { [e.id]: t }))),
                ),
        ).finally(() => g(!1));
    }, [b.attachments]),
    "" === E.content && 0 === E.attachments.length)
        ? null
        : (0, i.jsx)("div", {
              className: N.classificationEvidenceCard,
              children: m
                  ? (0, i.jsx)(r.$jN, {})
                  : (0, i.jsx)(h.Z, {
                        compact: !1,
                        childrenHeader: (0, _.Z)({
                            author: k(L({}, l), {
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
                        childrenAccessories: (0, i.jsx)(I, { message: E }),
                        childrenMessageContent: (0, x.Z)({ message: E }, S.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: O,
                    }),
          });
}
