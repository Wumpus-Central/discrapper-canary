i.d(t, { A: () => k }), i(938796);
var n = i(627968),
    a = i(64700),
    l = i(735438),
    s = i(665260),
    o = i(311907),
    r = i(397927),
    d = i(922667),
    c = i(77350),
    m = i(294520),
    h = i(141468),
    u = i(448381),
    p = i(963852),
    A = i(763754),
    x = i(491182),
    _ = i(266620),
    g = i(652176),
    E = i(394839),
    f = i(538355),
    T = i(715628),
    v = i(752636),
    j = i(287809),
    y = i(515718),
    L = i(661191),
    N = i(207913),
    C = i(393033),
    U = i(239093),
    I = i(652215),
    S = i(838541),
    w = i(26896);
let O = (e) => {
    let { message: t } = e,
        { attachments: i } = t;
    if (0 === i.length) return null;
    let a = 1 === i.length;
    function o(e, t) {
        return (0, m.iW)(e.originalItem, t);
    }
    return (0, n.jsx)("div", {
        className: w.Y,
        children: (0, n.jsx)(E.A, {
            items: i.map((e) => ({
                item: {
                    uniqueId: e.id,
                    originalItem: e,
                    type: (0, u.NI)(e, !0),
                    downloadUrl: e.proxy_url,
                    height: e.height,
                    width: e.width,
                    spoiler: e.spoiler,
                    contentType: e.content_type,
                    srcIsAnimated: (0, s.Lt)(e.flags ?? 0, I.sbO.IS_ANIMATED),
                },
                message: t,
                mediaLayoutType: S.dG.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: a,
                onRemoveItem: l.noop,
                renderVideoComponent: (t) =>
                    ((e, t, i) => {
                        let a = U.V5,
                            s = U.M8;
                        if (null != t.width && null != t.height) {
                            let e = (0, y.U8)({ width: t.width, height: t.height, maxWidth: U.V5, maxHeight: U.M8 });
                            (a = (0, l.clamp)(Math.round(t.width * e), 0, U.V5)),
                                (s = (0, l.clamp)(Math.round(t.height * e), 0, U.M8));
                        }
                        return (0, n.jsx)("div", {
                            style: { width: i ? a : "100%", height: i ? s : "100%" },
                            children: (0, n.jsx)(d.Ay, {
                                className: e.className,
                                forceExternal: !1,
                                src: t.url,
                                width: i ? a : "100%",
                                height: i ? s : "100%",
                                responsive: !0,
                                volume: e.volume,
                                autoPlay: !1,
                                autoMute: !1,
                                type: d.Ay.Types.VIDEO,
                                mediaLayoutType: e.mediaLayoutType,
                                fileName: t.filename,
                                fileSize: null == t.size ? void 0 : t.size.toString(),
                                playable: !0,
                                renderLinkComponent: g.bU,
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
                    (0, n.jsx)(_.Cr, { ...e, hiddenSpoilers: !0, shouldHideMediaOptions: !0, shouldLink: !1 }),
                renderAudioComponent: _.Nj,
                renderPlaintextFilePreview: _.R6,
                renderGenericFileComponent: _.UB,
                renderMosaicItemFooter: _.YE,
                getObscureReason: o,
                gifFavoriteButton: () => null,
            })),
        }),
    });
};
function k(e) {
    let t,
        { flaggedContent: i } = e,
        l = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        [s, d] = a.useState({}),
        [m, u] = a.useState(!0),
        _ = (0, o.bG)([N.A], () => N.A.getUsername()),
        g = i[0],
        E =
            ((t = g.attachments.map((e) => {
                let t = { ...e, filename: (0, C.tF)(e), size: 0, proxy_url: e.url };
                return (0, c.u)(e.filename) || (0, c.AE)(e.filename)
                    ? { ...t, width: s[e.id]?.width ?? U.V5, height: s[e.id]?.height ?? U.M8 }
                    : t;
            })),
            (0, h.rh)({
                ...(0, p.Ay)({
                    author: l ?? { id: "", avatar: void 0, discriminator: "0000", username: _ },
                    nonce: g.id,
                    content: g.content,
                    type: I.lAJ.DEFAULT,
                    channelId: I.dJq,
                }),
                timestamp: new Date(L.default.extractTimestamp(g.id)).toISOString(),
                attachments: t,
                state: I.cmJ.SENT,
            })),
        y = (0, A.Ay)(E),
        S = (0, f.A)(E, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        });
    return (a.useEffect(() => {
        Promise.all(
            g.attachments
                .filter((e) => {
                    let { filename: t } = e;
                    return (0, c.u)(t) || (0, c.AE)(t);
                })
                .map((e) =>
                    new Promise((t, i) => {
                        if ((0, c.u)(e.filename)) {
                            let n = new Image();
                            (n.src = e.url),
                                (n.onload = () => {
                                    t(n);
                                }),
                                (n.onerror = () => {
                                    i();
                                });
                        } else if ((0, c.AE)(e.filename)) {
                            let n = document.createElement("video");
                            (n.src = e.url),
                                (n.onloadedmetadata = () => {
                                    t({ width: n.videoWidth, height: n.videoHeight });
                                }),
                                (n.onerror = () => {
                                    i();
                                });
                        } else t({ width: 0, height: 0 });
                    }).then((t) => d((i) => ({ ...i, [e.id]: t }))),
                ),
        ).finally(() => u(!1));
    }, [g.attachments]),
    "" === E.content && 0 === E.attachments.length)
        ? null
        : (0, n.jsx)("div", {
              className: w.O,
              children: m
                  ? (0, n.jsx)(r.y$y, {})
                  : (0, n.jsx)(x.A, {
                        compact: !1,
                        childrenHeader: (0, v.A)({
                            author: { ...l, colorString: "", colorStrings: null, nick: l?.username ?? _ },
                            message: E,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1,
                        }),
                        childrenAccessories: (0, n.jsx)(O, { message: E }),
                        childrenMessageContent: (0, T.A)({ message: E }, S.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: y,
                    }),
          });
}
