a.d(t, { A: () => m });
var n = a(627968),
    i = a(64700),
    r = a(503698),
    o = a.n(r),
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
            className: r,
            active: m = !1,
            autoPlay: p,
            src: b,
            embed: C = !1,
            maxWidth: h,
            maxHeight: g,
            channelId: f,
            showParticipants: I = !0,
            volume: A,
            autoMute: v,
            onVolumeChange: x,
            onMutedChange: T,
            onClick: y,
            onContextMenu: S,
        } = e,
        E = t.width ?? 0,
        N = t.height ?? 0,
        M = (0, c.bG)([_.A], () => _.A.getBasicChannel(f)?.guild_id, [f]),
        O = E > 0 && N > 0 ? Math.min((h ?? 1 / 0) / E, (g ?? 1 / 0) / N, 1) : 1,
        P = Math.round(E * O),
        w = Math.round(N * O),
        R = (0, l.AE)({ src: a, width: P, height: w }),
        [B, G] = i.useState(!1),
        D = i.useCallback(
            (e) => {
                let { playerState: a, isControlBarExpanded: i } = e;
                return (0, n.jsx)(d.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: I
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: M,
                    playerState: a,
                    isControlBarExpanded: i,
                    isFullScreen: B,
                });
            },
            [t, M, B, I],
        );
    return (0, n.jsx)("div", {
        className: o()(u.k, r),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: C ? (e) => e.stopPropagation() : void 0,
        onKeyDown: C ? (e) => e.stopPropagation() : void 0,
        onContextMenu: S,
        style: { aspectRatio: `${E} / ${N}`, maxHeight: g, width: C ? void 0 : P, height: C ? void 0 : w },
        children: (0, n.jsx)(s.A, {
            crossOrigin: null,
            src: b,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: R,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: m,
            autoplay: p,
            initialVolume: A,
            initialMuted: v,
            onVolumeChange: x,
            onMutedChange: T,
            orientation: E >= N ? "landscape" : "portrait",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: D,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: G,
            onClick: y,
        }),
    });
}
