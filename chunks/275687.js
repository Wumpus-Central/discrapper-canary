"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(776231),
    u = n(664111),
    c = n(734057),
    d = n(67281),
    _ = n(256034);
function f(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: s,
            active: f = !1,
            autoPlay: h,
            src: p,
            embed: m = !1,
            maxWidth: E,
            maxHeight: g,
            channelId: A,
            showParticipants: I = !0,
            volume: T,
            autoMute: S,
            onVolumeChange: y,
            onMutedChange: v,
            onClick: C,
            onContextMenu: N,
        } = e,
        R = t.width ?? 0,
        b = t.height ?? 0,
        O = R >= b ? "landscape" : "portrait",
        D = (0, o.bG)([c.A], () => c.A.getBasicChannel(A)?.guild_id, [A]),
        L = R > 0 && b > 0 ? Math.min((E ?? 1 / 0) / R, (g ?? 1 / 0) / b, 1) : 1,
        w = Math.round(R * L),
        M = Math.round(b * L),
        x = (0, l.AE)({ src: n, width: w, height: M }),
        [P, k] = i.useState(!1),
        U = i.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: i } = e;
                return (0, r.jsx)(d.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: I
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: D,
                    playerState: n,
                    isControlBarExpanded: i,
                    isFullScreen: P,
                });
            },
            [t, D, P, I],
        );
    return (0, r.jsx)("div", {
        className: a()(_.k, s),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: m ? (e) => e.stopPropagation() : void 0,
        onKeyDown: m ? (e) => e.stopPropagation() : void 0,
        onContextMenu: N,
        style: { aspectRatio: `${R} / ${b}`, maxHeight: g, width: m ? void 0 : w, height: m ? void 0 : M },
        children: (0, r.jsx)(u.A, {
            crossOrigin: null,
            src: p,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: x,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: f,
            autoplay: h,
            initialVolume: T,
            initialMuted: S,
            onVolumeChange: y,
            onMutedChange: v,
            orientation: O,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: U,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: k,
            onClick: C,
        }),
    });
}
