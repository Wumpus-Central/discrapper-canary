a.d(t, { A: () => m });
var n = a(627968),
    o = a(64700),
    i = a(503698),
    r = a.n(i),
    c = a(311907),
    l = a(776231),
    s = a(664111),
    _ = a(734057),
    d = a(67281),
    u = a(581874);
function m(e) {
    let {
            attachment: t,
            posterUrl: a,
            className: i,
            active: m = !1,
            autoPlay: p,
            src: b,
            embed: C = !1,
            fillContainer: h = !1,
            minWidth: g = 500,
            maxWidth: f = 1 / 0,
            maxHeight: I = 1 / 0,
            channelId: A,
            showTextContent: T = f >= 250,
            showParticipants: v = !0,
            volume: y,
            autoMute: S,
            onVolumeChange: E,
            onMutedChange: x,
            onClick: M,
            onContextMenu: P,
        } = e,
        O = t.width ?? 0,
        N = t.height ?? 0,
        w = (0, c.bG)([_.A], () => _.A.getBasicChannel(A)?.guild_id, [A]),
        B = O > 0 && N > 0 ? O / N : 16 / 9,
        R = Math.min(O > 0 ? O : g, f),
        G = R / B;
    G > I && (R = (G = I) * B), R < g && (G = (R = g) / B);
    let k = Math.round(Math.min(R, f)),
        D = Math.round(Math.min(G, I)),
        L = O > 0 && N > 0 ? Math.min(k / O, D / N, 1) : 1,
        j = (0, l.AE)({ src: a, width: Math.round(O * L), height: Math.round(N * L) }),
        [F, H] = o.useState(!1),
        U = o.useCallback(
            (e) => {
                let { playerState: a, isControlBarExpanded: o } = e;
                return (0, n.jsx)(d.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: v
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: w,
                    playerState: a,
                    isControlBarExpanded: o,
                    isFullScreen: F,
                    showTextContent: T,
                });
            },
            [t, w, F, v, T],
        );
    return (0, n.jsx)("div", {
        className: r()(u.k, { [u.H]: h }, i),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: C ? (e) => e.stopPropagation() : void 0,
        onKeyDown: C ? (e) => e.stopPropagation() : void 0,
        onContextMenu: P,
        style: h ? void 0 : { width: k, height: D },
        children: (0, n.jsx)(s.A, {
            crossOrigin: null,
            src: b,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: j,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: m,
            autoplay: p,
            initialVolume: y,
            initialMuted: S,
            onVolumeChange: E,
            onMutedChange: x,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: U,
            parentTransitionState: null,
            onFullscreenChange: H,
            onClick: M,
            withVideoHalo: !0,
            objectFit: h ? "cover" : void 0,
        }),
    });
}
