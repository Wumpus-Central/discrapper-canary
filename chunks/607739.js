i.d(t, { U: () => b });
var n = i(627968),
    a = i(64700),
    l = i(834730);
i(938796);
var s = i(735438),
    o = i(665260),
    r = i(17928),
    d = i(289873),
    c = i(994064),
    m = i(77350),
    h = i(294520),
    u = i(320095),
    p = i(448381),
    A = i(963852),
    E = i(763754),
    _ = i(491182),
    g = i(266620),
    x = i(34337),
    f = i(394839),
    v = i(375199),
    j = i(715628),
    y = i(752636),
    T = i(287809),
    L = i(515718),
    N = i(935208),
    C = i(207913),
    U = i(393033),
    I = i(239093),
    S = i(652215),
    w = i(838541),
    k = i(483899);
let O = (e) => {
    let { message: t } = e,
        { attachments: i } = t;
    if (0 === i.length) return null;
    let a = 1 === i.length;
    function l(e, t) {
        return (0, h.iW)(e.originalItem, t);
    }
    return (0, n.jsx)("div", {
        className: k.Y,
        children: (0, n.jsx)(f.A, {
            items: i.map((e) => ({
                item: {
                    uniqueId: e.id,
                    originalItem: e,
                    type: (0, p.NI)(e, !0),
                    downloadUrl: e.proxy_url,
                    height: e.height,
                    width: e.width,
                    spoiler: e.spoiler,
                    contentType: e.content_type,
                    srcIsAnimated: (0, o.Lt)(e.flags ?? 0, S.sbO.IS_ANIMATED),
                },
                message: t,
                mediaLayoutType: w.dG.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: a,
                onRemoveItem: s.noop,
                renderVideoComponent: (t) =>
                    ((e, t, i) => {
                        let a = I.V5,
                            l = I.M8;
                        if (null != t.width && null != t.height) {
                            let e = (0, L.U8)({ width: t.width, height: t.height, maxWidth: I.V5, maxHeight: I.M8 });
                            (a = (0, s.clamp)(Math.round(t.width * e), 0, I.V5)),
                                (l = (0, s.clamp)(Math.round(t.height * e), 0, I.M8));
                        }
                        return (0, n.jsx)("div", {
                            style: { width: i ? a : "100%", height: i ? l : "100%" },
                            children: (0, n.jsx)(c.Ay, {
                                className: e.className,
                                forceExternal: !1,
                                src: t.url,
                                width: i ? a : "100%",
                                height: i ? l : "100%",
                                responsive: !0,
                                volume: e.volume,
                                autoPlay: !1,
                                autoMute: !1,
                                type: c.Ay.Types.VIDEO,
                                mediaLayoutType: e.mediaLayoutType,
                                fileName: t.filename,
                                fileSize: null == t.size ? void 0 : t.size.toString(),
                                playable: !0,
                                renderLinkComponent: x.bU,
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
                    (0, n.jsx)(g.Cr, { ...e, hiddenSpoilers: !0, shouldHideMediaOptions: !0, shouldLink: !1 }),
                renderAudioComponent: g.Nj,
                renderPlaintextFilePreview: g.R6,
                renderGenericFileComponent: g.UB,
                renderMosaicItemFooter: g.YE,
                getObscureReason: l,
                gifFavoriteButton: () => null,
            })),
        }),
    });
};
function P(e) {
    let t,
        { flaggedContent: i } = e,
        l = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        [s, o] = a.useState({}),
        [c, h] = a.useState(!0),
        p = (0, r.bG)([C.A], () => C.A.getUsername()),
        g = i[0],
        x =
            ((t = g.attachments.map((e) => {
                let t = { ...e, filename: (0, U.tF)(e), size: 0, proxy_url: e.url };
                return (0, m.u)(e.filename) || (0, m.AE)(e.filename)
                    ? { ...t, width: s[e.id]?.width ?? I.V5, height: s[e.id]?.height ?? I.M8 }
                    : t;
            })),
            (0, u.rh)({
                ...(0, A.Ay)({
                    author: l ?? { id: "", avatar: void 0, discriminator: "0000", username: p },
                    nonce: g.id,
                    content: g.content,
                    type: S.lAJ.DEFAULT,
                    channelId: S.dJq,
                }),
                timestamp: new Date(N.default.extractTimestamp(g.id)).toISOString(),
                attachments: t,
                state: S.cmJ.SENT,
            })),
        f = (0, E.Ay)(x),
        L = (0, v.A)(x, {
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
                    return (0, m.u)(t) || (0, m.AE)(t);
                })
                .map((e) =>
                    new Promise((t, i) => {
                        if ((0, m.u)(e.filename)) {
                            let n = new Image();
                            (n.src = e.url),
                                (n.onload = () => {
                                    t(n);
                                }),
                                (n.onerror = () => {
                                    i();
                                });
                        } else if ((0, m.AE)(e.filename)) {
                            let n = document.createElement("video");
                            (n.src = e.url),
                                (n.onloadedmetadata = () => {
                                    t({ width: n.videoWidth, height: n.videoHeight });
                                }),
                                (n.onerror = () => {
                                    i();
                                });
                        } else t({ width: 0, height: 0 });
                    }).then((t) => o((i) => ({ ...i, [e.id]: t }))),
                ),
        ).finally(() => h(!1));
    }, [g.attachments]),
    "" === x.content && 0 === x.attachments.length)
        ? null
        : (0, n.jsx)("div", {
              className: k.O,
              children: c
                  ? (0, n.jsx)(d.y, {})
                  : (0, n.jsx)(_.A, {
                        compact: !1,
                        childrenHeader: (0, y.A)({
                            author: { ...l, colorString: "", colorStrings: null, nick: l?.username ?? p },
                            message: x,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1,
                        }),
                        childrenAccessories: (0, n.jsx)(O, { message: x }),
                        childrenMessageContent: (0, j.A)({ message: x }, L.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: f,
                    }),
          });
}
var D = i(985018),
    M = i(275636);
let b = (e) => {
    let { flaggedContent: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              className: M.T,
              children: [
                  (0, n.jsx)(l.E, { variant: "eyebrow", color: "text-muted", children: D.intl.string(D.t.s64CMg) }),
                  (0, n.jsx)(P, { flaggedContent: t }),
              ],
          });
};
