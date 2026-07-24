a.d(t, { A: () => R });
var i = a(627968),
    l = a(64700),
    n = a(503698),
    o = a.n(n),
    r = a(17928),
    s = a(876230),
    d = a(26137),
    c = a(268218),
    h = a(597098),
    p = a(614269),
    u = a(829097),
    m = a(734057),
    v = a(102174),
    g = a(664708),
    C = a(349897),
    A = a(215655),
    w = a(696016),
    _ = a(16590),
    k = a(375708),
    I = a(237610);
let M = (0, c.Fe)({
    createPromise: () => Promise.resolve().then(a.bind(a, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: I.Lq }),
});
function R(e) {
    let {
            attachment: t,
            posterUrl: a,
            className: n,
            autoPlay: c,
            src: R,
            fillContainer: y = !1,
            minWidth: S = 500,
            maxWidth: P = 1 / 0,
            maxHeight: b = 1 / 0,
            channelId: x,
            messageId: f,
            showTextContent: E = P >= 250,
            showParticipants: T = !0,
            volume: B,
            autoMute: V,
            onVolumeChange: N,
            onMutedChange: D,
            onClick: F,
            onContextMenu: H,
            onPlay: U,
            allowFullScreen: j = !0,
        } = e,
        K = t.width ?? 0,
        L = t.height ?? 0,
        G = (0, r.bG)([m.A], () => m.A.getBasicChannel(x)?.guild_id, [x]),
        Z = K > 0 && L > 0 ? K / L : 16 / 9;
    (Z > 2 || Z < 1) && (Z = 16 / 9);
    let O = l.useRef(null);
    (0, A.A)(t.id, O);
    let J = Math.min(K > 0 ? K : S, P),
        Q = J / Z;
    Q > b && (J = (Q = b) * Z), J < S && (Q = (J = S) / Z);
    let W = Math.round(Math.min(J, P)),
        Y = Math.round(Math.min(Q, b)),
        q = K > 0 && L > 0 ? Math.min(W / K, Y / L, 1) : 1,
        z = (0, h.AE)({ src: a, width: Math.round(K * q), height: Math.round(L * q) }),
        [X, $] = l.useState(!1),
        [ee, et] = l.useState(!0),
        [ea, ei] = l.useState(0),
        el = l.useRef(0),
        en = l.useCallback(
            (e, t) => {
                t !== s.KB.BUFFERING_RECOVERY && e === s.Q6.PLAYING && U?.(t !== s.KB.USER, 1e3 * el.current, 1e3 * ea);
            },
            [ea, U],
        ),
        eo = l.useCallback((e, t) => {
            (el.current = e), Number.isFinite(t) && t > 0 && ei((e) => (e === t ? e : t));
        }, []),
        er = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        es = l.useMemo(() => {
            if (er)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: k.intl.string(_.default.hFWVZQ),
                        active: ee,
                        onClick: () => et((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [er, ee]),
        ed = (0, u._)({ location: w.Mu }).externalAnalyticsEnabled,
        ec = l.useMemo(
            () =>
                ed
                    ? {
                          contentId: R.split("?")[0],
                          videoStreamType: p.u.isHlsUrl(R) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [ed, R, t.title],
        ),
        eh = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: ep } = v.B.useConfig({ location: "ClipsPlayer" }),
        eu = l.useCallback(
            (e) => {
                let {
                    playerState: a,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: r,
                    controlBarAnimationSpring: s,
                } = e;
                return (0, i.jsx)(g.A, {
                    attachment: t,
                    controlBarAnimationSpring: s,
                    guildId: G,
                    isFullScreen: X,
                    showParticipants: T,
                    showTextContent: E,
                    channelId: x,
                    messageId: f,
                    showSpeakingIndicators: ee,
                    clipUserIds: eh,
                    durationSeconds: ea,
                    playerState: a,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: r,
                });
            },
            [t, G, X, T, E, x, f, ee, eh, ea],
        ),
        em = (0, C.T)(t.clip_events_timeline ?? []);
    return (0, i.jsx)("div", {
        className: o()(I.kL, { [I.HA]: y }, n),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: H,
        style: y ? void 0 : { width: W, height: Y },
        children: (0, i.jsx)(M, {
            src: R,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: es,
            poster: z,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: c,
            initialActive: !1,
            initialVolume: B,
            initialMuted: V,
            onVolumeChange: N,
            onMutedChange: D,
            onProgressUpdate: eo,
            orientation: "landscape",
            timelineIndicatorConfig: em,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eu,
            parentTransitionState: null,
            onFullscreenChange: $,
            onClick: F,
            onPlayerStateChange: en,
            withVideoHalo: !0,
            objectFit: y ? "cover" : void 0,
            muxContentMetadata: ec,
            hideFullScreenBtn: !j,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: O,
            scrubPreviewVttUrl: ep ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: ep ? t.spritesheet_image_url : void 0,
        }),
    });
}
