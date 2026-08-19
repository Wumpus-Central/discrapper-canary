i.d(t, { A: () => P }), i(938796), i(321073);
var a = i(477900),
    l = i(582128),
    n = i(503698),
    o = i.n(n),
    s = i(665260),
    r = i(17928),
    c = i(876230),
    d = i(26137),
    h = i(534890),
    p = i(268218),
    u = i(776231),
    m = i(614269),
    v = i(829097),
    g = i(734057),
    C = i(102174),
    _ = i(664708),
    w = i(349897),
    M = i(215655),
    S = i(696016),
    k = i(652215),
    b = i(711918),
    y = i(375708),
    A = i(237610);
let I = (0, p.Fe)({
    createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, a.jsx)("div", { className: A.Lq }),
});
function P(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: n,
            autoPlay: p,
            src: P,
            fillContainer: f = !1,
            minWidth: x = 500,
            maxWidth: E = 1 / 0,
            maxHeight: T = 1 / 0,
            channelId: B,
            messageId: V,
            showTextContent: R = E >= 250,
            showParticipants: F = !0,
            volume: N,
            autoMute: U,
            onVolumeChange: L,
            onMutedChange: j,
            onClick: H,
            onContextMenu: O,
            onPlay: Z,
            allowFullScreen: D = !0,
        } = e,
        G = t.width ?? 0,
        K = t.height ?? 0,
        Q = (0, r.bG)([g.A], () => g.A.getBasicChannel(B)?.guild_id, [B]),
        W = G > 0 && K > 0 ? G / K : 16 / 9;
    (W > 2 || W < 1) && (W = 16 / 9);
    let Y = l.useRef(null);
    (0, M.A)(t.id, Y);
    let q = Math.min(G > 0 ? G : x, E),
        J = q / W;
    J > T && (q = (J = T) * W), q < x && (J = (q = x) / W);
    let X = Math.round(Math.min(q, E)),
        z = Math.round(Math.min(J, T)),
        $ = G > 0 && K > 0 ? Math.min(X / G, z / K, 1) : 1,
        ee = (0, u.AE)({ src: i, width: Math.round(G * $), height: Math.round(K * $) }),
        [et, ei] = l.useState(!1),
        [ea, el] = l.useState(!0),
        [en, eo] = l.useState(!0),
        [es, er] = l.useState(0),
        ec = l.useRef(0),
        ed = l.useCallback(
            (e, t) => {
                t !== c.KB.BUFFERING_RECOVERY && e === c.Q6.PLAYING && Z?.(t !== c.KB.USER, 1e3 * ec.current, 1e3 * es);
            },
            [es, Z],
        ),
        eh = l.useCallback((e, t) => {
            (ec.current = e), Number.isFinite(t) && t > 0 && er((e) => (e === t ? e : t));
        }, []),
        ep = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        eu = (0, s.Lt)(t.flags ?? 0, k.sbO.HAS_TIMELINE_COMMENTS),
        em = l.useMemo(() => {
            let e = [];
            return (
                ep &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: y.intl.string(b.default.hFWVZQ),
                        active: ea,
                        onClick: () => el((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                eu &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: h.ChatIcon,
                        label: y.intl.string(b.default.XfP4bO),
                        active: en,
                        onClick: () => eo((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [ep, ea, eu, en]),
        ev = (0, v._)({ location: S.Mu }).externalAnalyticsEnabled,
        eg = l.useMemo(
            () =>
                ev
                    ? {
                          contentId: P.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(P) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [ev, P, t.title],
        ),
        eC = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: e_ } = C.B.useConfig({ location: "ClipsPlayer" }),
        ew = l.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: s,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, a.jsx)(_.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: Q,
                    isFullScreen: et,
                    showParticipants: F,
                    showTextContent: R,
                    channelId: B,
                    messageId: V,
                    showSpeakingIndicators: ea,
                    clipUserIds: eC,
                    durationSeconds: es,
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: s,
                    showTimelineComments: en,
                });
            },
            [t, Q, et, F, R, B, V, ea, eC, es, en],
        ),
        eM = (0, w.T)(t.clip_events_timeline ?? []);
    return (0, a.jsx)("div", {
        className: o()(A.kL, { [A.HA]: f }, n),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: O,
        style: f ? void 0 : { width: X, height: z },
        children: (0, a.jsx)(I, {
            src: P,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: em,
            poster: ee,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: p,
            initialActive: !1,
            initialVolume: N,
            initialMuted: U,
            onVolumeChange: L,
            onMutedChange: j,
            onProgressUpdate: eh,
            orientation: "landscape",
            timelineIndicatorConfig: eM,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ew,
            parentTransitionState: null,
            onFullscreenChange: ei,
            onClick: H,
            onPlayerStateChange: ed,
            withVideoHalo: !0,
            objectFit: f ? "cover" : void 0,
            muxContentMetadata: eg,
            hideFullScreenBtn: !D,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: Y,
            scrubPreviewVttUrl: e_ ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: e_ ? t.spritesheet_image_url : void 0,
        }),
    });
}
