"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(268218),
    c = n(776231),
    d = n(734057),
    u = n(67281),
    _ = n(315955),
    p = n(658610);
let h = (0, o.Fe)({
    createPromise: () => Promise.all([n.e("57174"), n.e("91652"), n.e("49884")]).then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: p.Lq }),
});
function f(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: a,
            active: o = !1,
            autoPlay: f,
            src: m,
            embed: A = !1,
            fillContainer: g = !1,
            minWidth: E = 500,
            maxWidth: b = 1 / 0,
            maxHeight: I = 1 / 0,
            channelId: y,
            messageId: T,
            showTextContent: v = b >= 250,
            showParticipants: S = !0,
            volume: C,
            autoMute: x,
            onVolumeChange: L,
            onMutedChange: w,
            onClick: R,
            onContextMenu: O,
        } = e,
        N = t.width ?? 0,
        P = t.height ?? 0,
        M = (0, s.bG)([d.A], () => d.A.getBasicChannel(y)?.guild_id, [y]),
        j = N > 0 && P > 0 ? N / P : 16 / 9,
        D = Math.min(N > 0 ? N : E, b),
        k = D / j;
    k > I && (D = (k = I) * j), D < E && (k = (D = E) / j);
    let G = Math.round(Math.min(D, b)),
        U = Math.round(Math.min(k, I)),
        F = N > 0 && P > 0 ? Math.min(G / N, U / P, 1) : 1,
        B = (0, c.AE)({ src: n, width: Math.round(N * F), height: Math.round(P * F) }),
        [H, V] = r.useState(!1),
        W = r.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: r } = e;
                return (0, i.jsx)(u.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: S
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: M,
                    playerState: n,
                    isControlBarExpanded: r,
                    isFullScreen: H,
                    showTextContent: v,
                    shareCTA: null != T && null != y && (0, i.jsx)(_.A, { attachment: t, messageId: T, channelId: y }),
                });
            },
            [t, M, H, S, v, y, T],
        );
    return (0, i.jsx)("div", {
        className: l()(p.kL, { [p.HA]: g }, a),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: A ? (e) => e.stopPropagation() : void 0,
        onKeyDown: A ? (e) => e.stopPropagation() : void 0,
        onContextMenu: O,
        style: g ? void 0 : { width: G, height: U },
        children: (0, i.jsx)(h, {
            crossOrigin: null,
            src: m,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: B,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: o,
            autoplay: f,
            initialVolume: C,
            initialMuted: x,
            onVolumeChange: L,
            onMutedChange: w,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: W,
            parentTransitionState: null,
            onFullscreenChange: V,
            onClick: R,
            withVideoHalo: !0,
            objectFit: g ? "cover" : void 0,
        }),
    });
}
