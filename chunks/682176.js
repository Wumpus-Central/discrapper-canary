i.d(t, { A: () => y });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    o = i.n(l),
    r = i(17928),
    s = i(876230),
    d = i(26137),
    c = i(268218),
    u = i(776231),
    p = i(614269),
    h = i(829097),
    m = i(734057),
    g = i(102174),
    v = i(664708),
    C = i(215655),
    k = i(696016),
    M = i(16590),
    A = i(375708),
    S = i(581874);
let _ = (0, c.Fe)({
    createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, n.jsx)("div", { className: S.Lq }),
});
function y(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: l,
            autoPlay: c,
            src: y,
            fillContainer: P = !1,
            minWidth: b = 500,
            maxWidth: I = 1 / 0,
            maxHeight: R = 1 / 0,
            channelId: w,
            messageId: x,
            showTextContent: B = I >= 250,
            showParticipants: E = !0,
            volume: V,
            autoMute: D,
            onVolumeChange: F,
            onMutedChange: T,
            onClick: f,
            onContextMenu: H,
            onPlay: N,
            allowFullScreen: U = !0,
        } = e,
        K = t.width ?? 0,
        G = t.height ?? 0,
        j = (0, r.bG)([m.A], () => m.A.getBasicChannel(w)?.guild_id, [w]),
        L = K > 0 && G > 0 ? K / G : 16 / 9;
    (L > 2 || L < 1) && (L = 16 / 9);
    let O = a.useRef(null);
    (0, C.A)(t.id, O);
    let Q = Math.min(K > 0 ? K : b, I),
        W = Q / L;
    W > R && (Q = (W = R) * L), Q < b && (W = (Q = b) / L);
    let Y = Math.round(Math.min(Q, I)),
        q = Math.round(Math.min(W, R)),
        J = K > 0 && G > 0 ? Math.min(Y / K, q / G, 1) : 1,
        Z = (0, u.AE)({ src: i, width: Math.round(K * J), height: Math.round(G * J) }),
        [z, X] = a.useState(!1),
        [$, ee] = a.useState(!0),
        [et, ei] = a.useState(0),
        en = a.useRef(0),
        ea = a.useCallback(
            (e, t) => {
                t !== s.KB.BUFFERING_RECOVERY && e === s.Q6.PLAYING && N?.(t !== s.KB.USER, 1e3 * en.current, 1e3 * et);
            },
            [et, N],
        ),
        el = a.useCallback((e, t) => {
            (en.current = e), Number.isFinite(t) && t > 0 && ei((e) => (e === t ? e : t));
        }, []),
        eo = a.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        er = a.useMemo(() => {
            if (eo)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: A.intl.string(M.default.hFWVZQ),
                        active: $,
                        onClick: () => ee((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [eo, $]),
        es = (0, h._)({ location: k.Mu }).externalAnalyticsEnabled,
        ed = a.useMemo(
            () =>
                es
                    ? {
                          contentId: y.split("?")[0],
                          videoStreamType: p.u.isHlsUrl(y) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [es, y, t.title],
        ),
        ec = a.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: eu } = g.B.useConfig({ location: "ClipsPlayer" }),
        ep = a.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: a,
                    videoRef: l,
                    isActive: o,
                    isVolumeExpanded: r,
                    controlBarAnimationSpring: s,
                } = e;
                return (0, n.jsx)(v.A, {
                    attachment: t,
                    controlBarAnimationSpring: s,
                    guildId: j,
                    isFullScreen: z,
                    showParticipants: E,
                    showTextContent: B,
                    channelId: w,
                    messageId: x,
                    showSpeakingIndicators: $,
                    clipUserIds: ec,
                    durationSeconds: et,
                    playerState: i,
                    isControlBarExpanded: a,
                    videoRef: l,
                    isActive: o,
                    isVolumeExpanded: r,
                });
            },
            [t, j, z, E, B, w, x, $, ec, et],
        );
    return (0, n.jsx)("div", {
        className: o()(S.kL, { [S.HA]: P }, l),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: H,
        style: P ? void 0 : { width: Y, height: q },
        children: (0, n.jsx)(_, {
            src: y,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: er,
            poster: Z,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: c,
            initialActive: !1,
            initialVolume: V,
            initialMuted: D,
            onVolumeChange: F,
            onMutedChange: T,
            onProgressUpdate: el,
            orientation: "landscape",
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ep,
            parentTransitionState: null,
            onFullscreenChange: X,
            onClick: f,
            onPlayerStateChange: ea,
            withVideoHalo: !0,
            objectFit: P ? "cover" : void 0,
            muxContentMetadata: ed,
            hideFullScreenBtn: !U,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: O,
            scrubPreviewVttUrl: eu ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: eu ? t.spritesheet_image_url : void 0,
        }),
    });
}
