n.d(t, { A: () => p });
var a = n(627968),
    o = n(64700),
    r = n(503698),
    i = n.n(r),
    l = n(311907),
    c = n(776231),
    s = n(664111),
    _ = n(734057),
    d = n(67281),
    u = n(256034);
function p(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: r,
            active: p = !1,
            autoPlay: m,
            src: b,
            embed: h = !1,
            maxWidth: f,
            maxHeight: C,
            channelId: g,
            showParticipants: v = !0,
            volume: x,
            autoMute: I,
            onVolumeChange: y,
            onMutedChange: S,
            onContextMenu: A,
        } = e,
        w = t.width ?? 0,
        B = t.height ?? 0,
        P = (0, l.bG)([_.A], () => _.A.getBasicChannel(g)?.guild_id, [g]),
        M = w > 0 && B > 0 ? Math.min((f ?? 1 / 0) / w, (C ?? 1 / 0) / B, 1) : 1,
        j = Math.round(w * M),
        T = Math.round(B * M),
        k = (0, c.AE)({ src: n, width: j, height: T }),
        [E, N] = o.useState(!1),
        G = o.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: o } = e;
                return (0, a.jsx)(d.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: v
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: P,
                    playerState: n,
                    isControlBarExpanded: o,
                    isFullScreen: E,
                });
            },
            [t, P, E, v],
        );
    return (0, a.jsx)("div", {
        className: i()(u.k, r),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: h ? (e) => e.stopPropagation() : void 0,
        onKeyDown: h ? (e) => e.stopPropagation() : void 0,
        onContextMenu: A,
        style: { aspectRatio: `${w} / ${B}`, maxHeight: C, width: h ? void 0 : j, height: h ? void 0 : T },
        children: (0, a.jsx)(s.A, {
            crossOrigin: null,
            src: b,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: k,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: p,
            autoplay: m,
            initialVolume: x,
            initialMuted: I,
            onVolumeChange: y,
            onMutedChange: S,
            orientation: w >= B ? "landscape" : "portrait",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: G,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: N,
        }),
    });
}
