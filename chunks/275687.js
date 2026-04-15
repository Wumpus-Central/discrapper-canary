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
            showParticipants: T = !0,
            volume: v,
            autoMute: y,
            onVolumeChange: S,
            onMutedChange: E,
            onClick: x,
            onContextMenu: M,
        } = e,
        O = t.width ?? 0,
        N = t.height ?? 0,
        P = (0, c.bG)([_.A], () => _.A.getBasicChannel(A)?.guild_id, [A]),
        w = O > 0 && N > 0 ? O / N : 16 / 9,
        B = Math.min(O > 0 ? O : g, h),
        R = B / w;
    R > I && (B = (R = I) * w), B < g && (R = (B = g) / w);
    let G = Math.round(Math.min(B, h)),
        D = Math.round(Math.min(R, I)),
        L = O > 0 && N > 0 ? Math.min(G / O, D / N, 1) : 1,
        k = (0, l.AE)({ src: a, width: Math.round(O * L), height: Math.round(N * L) }),
        [U, j] = o.useState(!1),
        F = o.useCallback(
            (e) => {
                let { playerState: a, isControlBarExpanded: o } = e;
                return (0, n.jsx)(d.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: T
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: P,
                    playerState: a,
                    isControlBarExpanded: o,
                    isFullScreen: U,
                });
            },
            [t, P, U, T],
        );
    return (0, n.jsx)("div", {
        className: r()(u.k, { [u.H]: f }, i),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: C ? (e) => e.stopPropagation() : void 0,
        onKeyDown: C ? (e) => e.stopPropagation() : void 0,
        onContextMenu: M,
        style: f ? void 0 : { width: G, height: D },
        children: (0, n.jsx)(s.A, {
            crossOrigin: null,
            src: b,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: k,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: m,
            autoplay: p,
            initialVolume: v,
            initialMuted: y,
            onVolumeChange: S,
            onMutedChange: E,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: F,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: j,
            onClick: x,
        }),
    });
}
