n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(268218),
    d = n(776231),
    u = n(734057),
    h = n(67281),
    c = n(315955),
    m = n(658610);
let g = (0, o.Fe)({
    createPromise: () => Promise.all([n.e("57174"), n.e("91652"), n.e("49884")]).then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: m.Lq }),
});
function p(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: r,
            active: o = !1,
            autoPlay: p,
            src: f,
            embed: A = !1,
            fillContainer: x = !1,
            minWidth: y = 500,
            maxWidth: w = 1 / 0,
            maxHeight: _ = 1 / 0,
            channelId: E,
            messageId: C,
            showTextContent: S = w >= 250,
            showParticipants: b = !0,
            volume: I,
            autoMute: v,
            onVolumeChange: M,
            onMutedChange: j,
            onClick: T,
            onContextMenu: N,
        } = e,
        O = t.width ?? 0,
        P = t.height ?? 0,
        D = (0, s.bG)([u.A], () => u.A.getBasicChannel(E)?.guild_id, [E]),
        R = O > 0 && P > 0 ? O / P : 16 / 9,
        L = Math.min(O > 0 ? O : y, w),
        U = L / R;
    U > _ && (L = (U = _) * R), L < y && (U = (L = y) / R);
    let V = Math.round(Math.min(L, w)),
        k = Math.round(Math.min(U, _)),
        H = O > 0 && P > 0 ? Math.min(V / O, k / P, 1) : 1,
        F = (0, d.AE)({ src: n, width: Math.round(O * H), height: Math.round(P * H) }),
        [W, G] = a.useState(!1),
        X = a.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: a } = e;
                return (0, i.jsx)(h.A, {
                    createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                    participantIds: b
                        ? (t.clip_participants?.map((e) => {
                              let { id: t } = e;
                              return t;
                          }) ?? [])
                        : [],
                    applicationId: t.application?.id,
                    title: t.title,
                    guildId: D,
                    playerState: n,
                    isControlBarExpanded: a,
                    isFullScreen: W,
                    showTextContent: S,
                    shareCTA: null != C && null != E && (0, i.jsx)(c.A, { attachment: t, messageId: C, channelId: E }),
                });
            },
            [t, D, W, b, S, E, C],
        );
    return (0, i.jsx)("div", {
        className: l()(m.kL, { [m.HA]: x }, r),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: A ? (e) => e.stopPropagation() : void 0,
        onKeyDown: A ? (e) => e.stopPropagation() : void 0,
        onContextMenu: N,
        style: x ? void 0 : { width: V, height: k },
        children: (0, i.jsx)(g, {
            crossOrigin: null,
            src: f,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: F,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: o,
            autoplay: p,
            initialVolume: I,
            initialMuted: v,
            onVolumeChange: M,
            onMutedChange: j,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: X,
            parentTransitionState: null,
            onFullscreenChange: G,
            onClick: T,
            withVideoHalo: !0,
            objectFit: x ? "cover" : void 0,
        }),
    });
}
