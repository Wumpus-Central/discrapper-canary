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
    u = a(256034);
function m(e) {
    let {
            attachment: t,
            posterUrl: a,
            className: i,
            active: m = !1,
            autoPlay: p,
            src: b,
            embed: C = !1,
            fillContainer: f = !1,
            minWidth: g = 500,
            maxWidth: h = 1 / 0,
            maxHeight: I = 1 / 0,
            channelId: A,
            showTextContent: T = h >= 250,
            showParticipants: v = !0,
            volume: y,
            autoMute: S,
            onVolumeChange: E,
            onMutedChange: x,
            onClick: M,
            onContextMenu: O,
        } = e,
        P = t.width ?? 0,
        N = t.height ?? 0,
        w = (0, c.bG)([_.A], () => _.A.getBasicChannel(A)?.guild_id, [A]),
        B = P > 0 && N > 0 ? P / N : 16 / 9,
        R = Math.min(P > 0 ? P : g, h),
        G = R / B;
    G > I && (R = (G = I) * B), R < g && (G = (R = g) / B);
    let D = Math.round(Math.min(R, h)),
        L = Math.round(Math.min(G, I)),
        k = P > 0 && N > 0 ? Math.min(D / P, L / N, 1) : 1,
        j = (0, l.AE)({ src: a, width: Math.round(P * k), height: Math.round(N * k) }),
        [F, U] = o.useState(!1),
        H = o.useCallback(
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
        className: r()(u.k, { [u.H]: f }, i),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: C ? (e) => e.stopPropagation() : void 0,
        onKeyDown: C ? (e) => e.stopPropagation() : void 0,
        onContextMenu: O,
        style: f ? void 0 : { width: D, height: L },
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
            renderPersistentOverlay: H,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: U,
            onClick: M,
            objectFit: f ? "cover" : void 0,
        }),
    });
}
