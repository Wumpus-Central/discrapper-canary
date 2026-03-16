E.d(A, { A: () => F }), E(938796);
var e = E(627968),
    I = E(64700),
    T = E(735438),
    C = E(665260),
    t = E(311907),
    S = E(397927),
    i = E(922667),
    n = E(77350),
    N = E(294520),
    R = E(141468),
    a = E(448381),
    l = E(963852),
    O = E(763754),
    s = E(491182),
    o = E(266620),
    r = E(652176),
    P = E(394839),
    D = E(538355),
    d = E(715628),
    c = E(752636),
    V = E(287809),
    L = E(515718),
    Y = E(661191),
    U = E(207913),
    M = E(393033),
    m = E(239093),
    h = E(652215),
    u = E(838541),
    G = E(26896);
let p = (_) => {
    let { message: A } = _,
        { attachments: E } = A;
    if (0 === E.length) return null;
    let I = 1 === E.length;
    function t(_, A) {
        return (0, N.iW)(_.originalItem, A);
    }
    return (0, e.jsx)("div", {
        className: G.Y,
        children: (0, e.jsx)(P.A, {
            items: E.map((_) => ({
                item: {
                    uniqueId: _.id,
                    originalItem: _,
                    type: (0, a.NI)(_, !0),
                    downloadUrl: _.proxy_url,
                    height: _.height,
                    width: _.width,
                    spoiler: _.spoiler,
                    contentType: _.content_type,
                    srcIsAnimated: (0, C.Lt)(_.flags ?? 0, h.sbO.IS_ANIMATED),
                },
                message: A,
                mediaLayoutType: u.dG.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: I,
                onRemoveItem: T.noop,
                renderVideoComponent: (A) =>
                    ((_, A, E) => {
                        let I = m.V5,
                            C = m.M8;
                        if (null != A.width && null != A.height) {
                            let _ = (0, L.U8)({ width: A.width, height: A.height, maxWidth: m.V5, maxHeight: m.M8 });
                            (I = (0, T.clamp)(Math.round(A.width * _), 0, m.V5)),
                                (C = (0, T.clamp)(Math.round(A.height * _), 0, m.M8));
                        }
                        return (0, e.jsx)("div", {
                            style: { width: E ? I : "100%", height: E ? C : "100%" },
                            children: (0, e.jsx)(i.Ay, {
                                className: _.className,
                                forceExternal: !1,
                                src: A.url,
                                width: E ? I : "100%",
                                height: E ? C : "100%",
                                responsive: !0,
                                volume: _.volume,
                                autoPlay: !1,
                                autoMute: !1,
                                type: i.Ay.Types.VIDEO,
                                mediaLayoutType: _.mediaLayoutType,
                                fileName: A.filename,
                                fileSize: null == A.size ? void 0 : A.size.toString(),
                                playable: !0,
                                renderLinkComponent: r.bU,
                                onClick: _.onClick,
                                onPlay: _.onPlay,
                                onEnded: _.onEnded,
                                onVolumeChange: _.onVolumeChange,
                                onMute: _.onMute,
                                downloadable: !1,
                            }),
                        });
                    })(A, _, I),
                renderImageComponent: (_) =>
                    (0, e.jsx)(o.Cr, { ..._, hiddenSpoilers: !0, shouldHideMediaOptions: !0, shouldLink: !1 }),
                renderAudioComponent: o.Nj,
                renderPlaintextFilePreview: o.R6,
                renderGenericFileComponent: o.UB,
                renderMosaicItemFooter: o.YE,
                getObscureReason: t,
                gifFavoriteButton: () => null,
            })),
        }),
    });
};
function F(_) {
    let A,
        { flaggedContent: E } = _,
        T = (0, t.bG)([V.default], () => V.default.getCurrentUser()),
        [C, i] = I.useState({}),
        [N, a] = I.useState(!0),
        o = (0, t.bG)([U.A], () => U.A.getUsername()),
        r = E[0],
        P =
            ((A = r.attachments.map((_) => {
                let A = { ..._, filename: (0, M.tF)(_), size: 0, proxy_url: _.url };
                return (0, n.u)(_.filename) || (0, n.AE)(_.filename)
                    ? { ...A, width: C[_.id]?.width ?? m.V5, height: C[_.id]?.height ?? m.M8 }
                    : A;
            })),
            (0, R.rh)({
                ...(0, l.Ay)({
                    author: T ?? { id: "", avatar: void 0, discriminator: "0000", username: o },
                    nonce: r.id,
                    content: r.content,
                    type: h.lAJ.DEFAULT,
                    channelId: h.dJq,
                }),
                timestamp: new Date(Y.default.extractTimestamp(r.id)).toISOString(),
                attachments: A,
                state: h.cmJ.SENT,
            })),
        L = (0, O.Ay)(P),
        u = (0, D.A)(P, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        });
    return (I.useEffect(() => {
        Promise.all(
            r.attachments
                .filter((_) => {
                    let { filename: A } = _;
                    return (0, n.u)(A) || (0, n.AE)(A);
                })
                .map((_) =>
                    new Promise((A, E) => {
                        if ((0, n.u)(_.filename)) {
                            let e = new Image();
                            (e.src = _.url),
                                (e.onload = () => {
                                    A(e);
                                }),
                                (e.onerror = () => {
                                    E();
                                });
                        } else if ((0, n.AE)(_.filename)) {
                            let e = document.createElement("video");
                            (e.src = _.url),
                                (e.onloadedmetadata = () => {
                                    A({ width: e.videoWidth, height: e.videoHeight });
                                }),
                                (e.onerror = () => {
                                    E();
                                });
                        } else A({ width: 0, height: 0 });
                    }).then((A) => i((E) => ({ ...E, [_.id]: A }))),
                ),
        ).finally(() => a(!1));
    }, [r.attachments]),
    "" === P.content && 0 === P.attachments.length)
        ? null
        : (0, e.jsx)("div", {
              className: G.O,
              children: N
                  ? (0, e.jsx)(S.y$y, {})
                  : (0, e.jsx)(s.A, {
                        compact: !1,
                        childrenHeader: (0, c.A)({
                            author: { ...T, colorString: "", colorStrings: null, nick: T?.username ?? o },
                            message: P,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1,
                        }),
                        childrenAccessories: (0, e.jsx)(p, { message: P }),
                        childrenMessageContent: (0, d.A)({ message: P }, u.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: L,
                    }),
          });
}
