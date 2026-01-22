n.d(t, {
    A: () => D,
}),
    n(938796),
    n(896048),
    n(492834);
var i = n(627968),
    a = n(64700),
    l = n(735438),
    r = n(665260),
    o = n(311907),
    s = n(397927),
    c = n(922667),
    d = n(77350),
    u = n(294520),
    p = n(141468),
    m = n(448381),
    f = n(963852),
    h = n(763754),
    g = n(491182),
    b = n(266620),
    y = n(652176),
    A = n(394839),
    _ = n(538355),
    E = n(715628),
    j = n(752636),
    x = n(287809),
    O = n(515718),
    v = n(661191),
    T = n(207913),
    w = n(393033),
    P = n(239093),
    C = n(652215),
    S = n(838541),
    N = n(26896);

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

function U(e, t) {
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
        return (0, u.iW)(e.originalItem, t);
    }
    return (0, i.jsx)("div", {
        className: N.Y,
        children: (0, i.jsx)(A.A, {
            items: n.map((e) => {
                var n;
                return {
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, m.NI)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type,
                        srcIsAnimated: (0, r.Lt)(null != (n = e.flags) ? n : 0, C.sbO.IS_ANIMATED),
                    },
                    message: t,
                    mediaLayoutType: S.dG.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: a,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (t) =>
                        ((e, t, n) => {
                            let a = P.V5,
                                r = P.M8;
                            if (null != t.width && null != t.height) {
                                let e = (0, O.U8)({
                                    width: t.width,
                                    height: t.height,
                                    maxWidth: P.V5,
                                    maxHeight: P.M8,
                                });
                                (a = (0, l.clamp)(Math.round(t.width * e), 0, P.V5)),
                                    (r = (0, l.clamp)(Math.round(t.height * e), 0, P.M8));
                            }
                            return (0, i.jsx)("div", {
                                style: {
                                    width: n ? a : "100%",
                                    height: n ? r : "100%",
                                },
                                children: (0, i.jsx)(c.Ay, {
                                    className: e.className,
                                    forceExternal: !1,
                                    src: t.url,
                                    width: n ? a : "100%",
                                    height: n ? r : "100%",
                                    responsive: !0,
                                    volume: e.volume,
                                    autoPlay: !1,
                                    autoMute: !1,
                                    type: c.Ay.Types.VIDEO,
                                    mediaLayoutType: e.mediaLayoutType,
                                    fileName: t.filename,
                                    fileSize: null == t.size ? void 0 : t.size.toString(),
                                    playable: !0,
                                    renderLinkComponent: y.bU,
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
                            b.Cr,
                            U(L({}, e), {
                                hiddenSpoilers: !0,
                                shouldHideMediaOptions: !0,
                                shouldLink: !1,
                            }),
                        ),
                    renderAudioComponent: b.Nj,
                    renderPlaintextFilePreview: b.R6,
                    renderGenericFileComponent: b.UB,
                    renderMosaicItemFooter: b.YE,
                    getObscureReason: o,
                    gifFavoriteButton: () => null,
                };
            }),
        }),
    });
};

function D(e) {
    var t;
    let n,
        { flaggedContent: l } = e,
        r = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        [c, u] = a.useState({}),
        [m, b] = a.useState(!0),
        y = (0, o.bG)([T.A], () => T.A.getUsername()),
        A = l[0],
        O =
            ((n = A.attachments.map((e) => {
                var t, n, i, a;
                let l = U(L({}, e), {
                    filename: (0, w.tF)(e),
                    size: 0,
                    proxy_url: e.url,
                });
                return (0, d.u)(e.filename) || (0, d.AE)(e.filename)
                    ? U(L({}, l), {
                          width: null != (t = null == (i = c[e.id]) ? void 0 : i.width) ? t : P.V5,
                          height: null != (n = null == (a = c[e.id]) ? void 0 : a.height) ? n : P.M8,
                      })
                    : l;
            })),
            (0, p.rh)(
                U(
                    L(
                        {},
                        (0, f.Ay)({
                            author:
                                null != r
                                    ? r
                                    : {
                                          id: "",
                                          avatar: void 0,
                                          discriminator: "0000",
                                          username: y,
                                      },
                            nonce: A.id,
                            content: A.content,
                            type: C.lAJ.DEFAULT,
                            channelId: C.dJq,
                        }),
                    ),
                    {
                        timestamp: new Date(v.default.extractTimestamp(A.id)).toISOString(),
                        attachments: n,
                        state: C.cmJ.SENT,
                    },
                ),
            )),
        S = (0, h.Ay)(O),
        D = (0, _.A)(O, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        });
    return (a.useEffect(() => {
        Promise.all(
            A.attachments
                .filter((e) => {
                    let { filename: t } = e;
                    return (0, d.u)(t) || (0, d.AE)(t);
                })
                .map((e) =>
                    new Promise((t, n) => {
                        if ((0, d.u)(e.filename)) {
                            let i = new Image();
                            (i.src = e.url),
                                (i.onload = () => {
                                    t(i);
                                }),
                                (i.onerror = () => {
                                    n();
                                });
                        } else if ((0, d.AE)(e.filename)) {
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
                    }).then((t) =>
                        u((n) =>
                            U(L({}, n), {
                                [e.id]: t,
                            }),
                        ),
                    ),
                ),
        ).finally(() => b(!1));
    }, [A.attachments]),
    "" === O.content && 0 === O.attachments.length)
        ? null
        : (0, i.jsx)("div", {
              className: N.O,
              children: m
                  ? (0, i.jsx)(s.y$y, {})
                  : (0, i.jsx)(g.A, {
                        compact: !1,
                        childrenHeader: (0, j.A)({
                            author: U(L({}, r), {
                                colorString: "",
                                colorStrings: null,
                                nick: null != (t = null == r ? void 0 : r.username) ? t : y,
                            }),
                            message: O,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1,
                        }),
                        childrenAccessories: (0, i.jsx)(I, {
                            message: O,
                        }),
                        childrenMessageContent: (0, E.A)(
                            {
                                message: O,
                            },
                            D.content,
                        ),
                        hasThread: !1,
                        hasReply: !1,
                        author: S,
                    }),
          });
}
