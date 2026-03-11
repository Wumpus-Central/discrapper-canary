I.d(_, { A: () => u }), I(938796);
var A = I(627968),
    S = I(64700),
    T = I(735438),
    C = I(665260),
    O = I(311907),
    R = I(397927),
    N = I(922667),
    e = I(77350),
    P = I(294520),
    t = I(141468),
    L = I(448381),
    D = I(963852),
    i = I(763754),
    n = I(491182),
    a = I(266620),
    l = I(652176),
    V = I(394839),
    s = I(538355),
    Y = I(715628),
    o = I(752636),
    r = I(287809),
    U = I(515718),
    d = I(661191),
    G = I(207913),
    c = I(393033),
    M = I(239093),
    B = I(652215),
    m = I(838541),
    H = I(366906);
let h = (E) => {
    let { message: _ } = E,
        { attachments: I } = _;
    if (0 === I.length) return null;
    let S = 1 === I.length;
    function O(E, _) {
        return (0, P.iW)(E.originalItem, _);
    }
    return (0, A.jsx)("div", {
        className: H.Y,
        children: (0, A.jsx)(V.A, {
            items: I.map((E) => ({
                item: {
                    uniqueId: E.id,
                    originalItem: E,
                    type: (0, L.NI)(E, !0),
                    downloadUrl: E.proxy_url,
                    height: E.height,
                    width: E.width,
                    spoiler: E.spoiler,
                    contentType: E.content_type,
                    srcIsAnimated: (0, C.Lt)(E.flags ?? 0, B.sbO.IS_ANIMATED),
                },
                message: _,
                mediaLayoutType: m.dG.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: S,
                onRemoveItem: T.noop,
                renderVideoComponent: (_) =>
                    ((E, _, I) => {
                        let S = M.V5,
                            C = M.M8;
                        if (null != _.width && null != _.height) {
                            let E = (0, U.U8)({ width: _.width, height: _.height, maxWidth: M.V5, maxHeight: M.M8 });
                            (S = (0, T.clamp)(Math.round(_.width * E), 0, M.V5)),
                                (C = (0, T.clamp)(Math.round(_.height * E), 0, M.M8));
                        }
                        return (0, A.jsx)("div", {
                            style: { width: I ? S : "100%", height: I ? C : "100%" },
                            children: (0, A.jsx)(N.Ay, {
                                className: E.className,
                                forceExternal: !1,
                                src: _.url,
                                width: I ? S : "100%",
                                height: I ? C : "100%",
                                responsive: !0,
                                volume: E.volume,
                                autoPlay: !1,
                                autoMute: !1,
                                type: N.Ay.Types.VIDEO,
                                mediaLayoutType: E.mediaLayoutType,
                                fileName: _.filename,
                                fileSize: null == _.size ? void 0 : _.size.toString(),
                                playable: !0,
                                renderLinkComponent: l.bU,
                                onClick: E.onClick,
                                onPlay: E.onPlay,
                                onEnded: E.onEnded,
                                onVolumeChange: E.onVolumeChange,
                                onMute: E.onMute,
                                downloadable: !1,
                            }),
                        });
                    })(_, E, S),
                renderImageComponent: (E) =>
                    (0, A.jsx)(a.Cr, { ...E, hiddenSpoilers: !0, shouldHideMediaOptions: !0, shouldLink: !1 }),
                renderAudioComponent: a.Nj,
                renderPlaintextFilePreview: a.R6,
                renderGenericFileComponent: a.UB,
                renderMosaicItemFooter: a.YE,
                getObscureReason: O,
                gifFavoriteButton: () => null,
            })),
        }),
    });
};
function u(E) {
    let _,
        { flaggedContent: I } = E,
        T = (0, O.bG)([r.default], () => r.default.getCurrentUser()),
        [C, N] = S.useState({}),
        [P, L] = S.useState(!0),
        a = (0, O.bG)([G.A], () => G.A.getUsername()),
        l = I[0],
        V =
            ((_ = l.attachments.map((E) => {
                let _ = { ...E, filename: (0, c.tF)(E), size: 0, proxy_url: E.url };
                return (0, e.u)(E.filename) || (0, e.AE)(E.filename)
                    ? { ..._, width: C[E.id]?.width ?? M.V5, height: C[E.id]?.height ?? M.M8 }
                    : _;
            })),
            (0, t.rh)({
                ...(0, D.Ay)({
                    author: T ?? { id: "", avatar: void 0, discriminator: "0000", username: a },
                    nonce: l.id,
                    content: l.content,
                    type: B.lAJ.DEFAULT,
                    channelId: B.dJq,
                }),
                timestamp: new Date(d.default.extractTimestamp(l.id)).toISOString(),
                attachments: _,
                state: B.cmJ.SENT,
            })),
        U = (0, i.Ay)(V),
        m = (0, s.A)(V, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        });
    return (S.useEffect(() => {
        Promise.all(
            l.attachments
                .filter((E) => {
                    let { filename: _ } = E;
                    return (0, e.u)(_) || (0, e.AE)(_);
                })
                .map((E) =>
                    new Promise((_, I) => {
                        if ((0, e.u)(E.filename)) {
                            let A = new Image();
                            (A.src = E.url),
                                (A.onload = () => {
                                    _(A);
                                }),
                                (A.onerror = () => {
                                    I();
                                });
                        } else if ((0, e.AE)(E.filename)) {
                            let A = document.createElement("video");
                            (A.src = E.url),
                                (A.onloadedmetadata = () => {
                                    _({ width: A.videoWidth, height: A.videoHeight });
                                }),
                                (A.onerror = () => {
                                    I();
                                });
                        } else _({ width: 0, height: 0 });
                    }).then((_) => N((I) => ({ ...I, [E.id]: _ }))),
                ),
        ).finally(() => L(!1));
    }, [l.attachments]),
    "" === V.content && 0 === V.attachments.length)
        ? null
        : (0, A.jsx)("div", {
              className: H.O,
              children: P
                  ? (0, A.jsx)(R.y$y, {})
                  : (0, A.jsx)(n.A, {
                        compact: !1,
                        childrenHeader: (0, o.A)({
                            author: { ...T, colorString: "", colorStrings: null, nick: T?.username ?? a },
                            message: V,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1,
                        }),
                        childrenAccessories: (0, A.jsx)(h, { message: V }),
                        childrenMessageContent: (0, Y.A)({ message: V }, m.content),
                        hasThread: !1,
                        hasReply: !1,
                        author: U,
                    }),
          });
}
