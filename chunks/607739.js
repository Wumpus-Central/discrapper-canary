n.d(t, { U: () => V });
var i = n(627968),
    a = n(64700),
    l = n(834730);
n(938796);
var o = n(735438),
    r = n(665260),
    s = n(17928),
    d = n(289873),
    h = n(994064),
    m = n(59318),
    c = n(294520),
    u = n(320095),
    p = n(448381),
    g = n(963852),
    f = n(763754),
    y = n(491182),
    A = n(266620),
    v = n(34337),
    w = n(394839),
    I = n(375199),
    E = n(715628),
    x = n(752636),
    S = n(287809),
    C = n(515718),
    L = n(935208),
    M = n(207913),
    P = n(393033),
    T = n(239093),
    j = n(652215),
    b = n(838541),
    _ = n(483899);
function k(e) {
    let { message: t } = e,
        { attachments: n } = t;
    if (0 === n.length) return null;
    let a = 1 === n.length;
    function l(e, t) {
        return (0, c.iW)(e.originalItem, t);
    }
    return (0, i.jsx)("div", {
        className: _.Y,
        children: (0, i.jsx)(w.A, {
            items: n.map((e) => ({
                item: {
                    uniqueId: e.id,
                    originalItem: e,
                    type: (0, p.NI)(e, !0),
                    downloadUrl: e.proxy_url,
                    height: e.height,
                    width: e.width,
                    spoiler: (0, r.Lt)(e.flags ?? 0, j.sbO.IS_SPOILER),
                    contentType: e.content_type,
                    srcIsAnimated: (0, r.Lt)(e.flags ?? 0, j.sbO.IS_ANIMATED),
                },
                message: t,
                mediaLayoutType: b.dG.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                canEditItem: !1,
                isSingleMosaicItem: a,
                onRemoveItem: o.noop,
                onEditItem: o.noop,
                renderVideoComponent: (t) =>
                    (function (e, t, n) {
                        let a = T.V5,
                            l = T.M8;
                        if (null != t.width && null != t.height) {
                            let e = (0, C.U8)({ width: t.width, height: t.height, maxWidth: T.V5, maxHeight: T.M8 });
                            (a = (0, o.clamp)(Math.round(t.width * e), 0, T.V5)),
                                (l = (0, o.clamp)(Math.round(t.height * e), 0, T.M8));
                        }
                        return (0, i.jsx)("div", {
                            style: { width: n ? a : "100%", height: n ? l : "100%" },
                            children: (0, i.jsx)(h.Ay, {
                                className: e.className,
                                forceExternal: !1,
                                src: t.url,
                                width: n ? a : "100%",
                                height: n ? l : "100%",
                                responsive: !0,
                                volume: e.volume,
                                autoPlay: !1,
                                autoMute: !1,
                                type: h.Ay.Types.VIDEO,
                                mediaLayoutType: e.mediaLayoutType,
                                fileName: t.filename,
                                fileSize: null == t.size ? void 0 : t.size.toString(),
                                playable: !0,
                                renderLinkComponent: v.bU,
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
                    (0, i.jsx)(A.Cr, { ...e, hiddenSpoilers: !0, shouldHideMediaOptions: !0, shouldLink: !1 }),
                renderAudioComponent: A.Nj,
                renderPlaintextFilePreview: A.R6,
                renderGenericFileComponent: A.UB,
                getObscureReason: l,
                gifFavoriteButton: () => null,
            })),
        }),
    });
}
function N(e) {
    let t,
        { flaggedContent: n } = e,
        l = (0, s.bG)([S.default], () => S.default.getCurrentUser()),
        [o, r] = a.useState({}),
        [h, c] = a.useState(!0),
        p = (0, s.bG)([M.A], () => M.A.getUsername()),
        A = n[0],
        v =
            ((t = A.attachments.map((e) => {
                let t = { ...e, filename: e.filename ?? "", flags: (0, P.Q7)(e), size: 0, proxy_url: e.url };
                return (0, m.u)(e.filename) || (0, m.AE)(e.filename)
                    ? { ...t, width: o[e.id]?.width ?? T.V5, height: o[e.id]?.height ?? T.M8 }
                    : t;
            })),
            (0, u.rh)({
                ...(0, g.Ay)({
                    author: l ?? { id: "", avatar: void 0, discriminator: "0000", username: p },
                    nonce: A.id,
                    content: A.content,
                    type: j.lAJ.DEFAULT,
                    channelId: j.dJq,
                }),
                timestamp: new Date(L.default.extractTimestamp(A.id)).toISOString(),
                attachments: t,
                state: j.cmJ.SENT,
            })),
        w = (0, f.Ay)(v),
        C = (0, I.A)(v, {
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
                    return (0, m.u)(t) || (0, m.AE)(t);
                })
                .map((e) =>
                    new Promise((t, n) => {
                        if ((0, m.u)(e.filename)) {
                            let i = new Image();
                            (i.src = e.url),
                                (i.onload = () => {
                                    t(i);
                                }),
                                (i.onerror = () => {
                                    n();
                                });
                        } else if ((0, m.AE)(e.filename)) {
                            let i = document.createElement("video");
                            (i.src = e.url),
                                (i.onloadedmetadata = () => {
                                    t({ width: i.videoWidth, height: i.videoHeight });
                                }),
                                (i.onerror = () => {
                                    n();
                                });
                        } else t({ width: 0, height: 0 });
                    }).then((t) => r((n) => ({ ...n, [e.id]: t }))),
                ),
        ).finally(() => c(!1));
    }, [A.attachments]),
    "" === v.content && 0 === v.attachments.length)
        ? null
        : (0, i.jsx)("div", {
              className: _.O,
              children: h
                  ? (0, i.jsx)(d.y, {})
                  : (0, i.jsx)(y.A, {
                        compact: !1,
                        childrenHeader: (0, x.A)({
                            author: { ...l, colorString: "", colorStrings: null, nick: l?.username ?? p },
                            message: v,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1,
                        }),
                        childrenAccessories: (0, i.jsx)(k, { message: v }),
                        childrenMessageContent: (0, E.A)({ message: v }, C.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: w,
                    }),
          });
}
var O = n(375708),
    U = n(275636);
function V(e) {
    let { flaggedContent: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: U.T,
              children: [
                  (0, i.jsx)(l.E, { variant: "eyebrow", color: "text-muted", children: O.intl.string(O.t.s64CMg) }),
                  (0, i.jsx)(N, { flaggedContent: t }),
              ],
          });
}
