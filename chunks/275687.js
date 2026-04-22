"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(268218),
    c = n(776231),
    u = n(734057),
    d = n(67281),
    _ = n(581874);
let p = (0, o.Fe)({
    createPromise: () => Promise.all([n.e("57174"), n.e("91652"), n.e("43420")]).then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: _.Lq }),
});
function f(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: a,
            active: o = !1,
            autoPlay: f,
            src: h,
            embed: m = !1,
            fillContainer: A = !1,
            minWidth: g = 500,
            maxWidth: E = 1 / 0,
            maxHeight: b = 1 / 0,
            channelId: I,
            showTextContent: y = E >= 250,
            showParticipants: v = !0,
            volume: T,
            autoMute: C,
            onVolumeChange: S,
            onMutedChange: x,
            onClick: L,
            onContextMenu: w,
        } = e,
        N = t.width ?? 0,
        O = t.height ?? 0,
        R = (0, s.bG)([u.A], () => u.A.getBasicChannel(I)?.guild_id, [I]),
        P = N > 0 && O > 0 ? N / O : 16 / 9,
        M = Math.min(N > 0 ? N : g, E),
        j = M / P;
    j > b && (M = (j = b) * P), M < g && (j = (M = g) / P);
    let D = Math.round(Math.min(M, E)),
        k = Math.round(Math.min(j, b)),
        G = N > 0 && O > 0 ? Math.min(D / N, k / O, 1) : 1,
        U = (0, c.AE)({ src: n, width: Math.round(N * G), height: Math.round(O * G) }),
        [F, B] = r.useState(!1),
        V = r.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: r } = e;
                return (0, i.jsx)(d.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: v
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: R,
                    playerState: n,
                    isControlBarExpanded: r,
                    isFullScreen: F,
                    showTextContent: y,
                });
            },
            [t, R, F, v, y],
        );
    return (0, i.jsx)("div", {
        className: l()(_.kL, { [_.HA]: A }, a),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: m ? (e) => e.stopPropagation() : void 0,
        onKeyDown: m ? (e) => e.stopPropagation() : void 0,
        onContextMenu: w,
        style: A ? void 0 : { width: D, height: k },
        children: (0, i.jsx)(p, {
            crossOrigin: null,
            src: h,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: U,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: o,
            autoplay: f,
            initialVolume: T,
            initialMuted: C,
            onVolumeChange: S,
            onMutedChange: x,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: V,
            parentTransitionState: null,
            onFullscreenChange: B,
            onClick: L,
            withVideoHalo: !0,
            objectFit: A ? "cover" : void 0,
        }),
    });
}
