i.d(t, { A: () => R }), i(938796), i(321073);
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
    u = i(597098),
    m = i(614269),
    v = i(829097),
    g = i(734057),
    C = i(102174),
    A = i(664708),
    _ = i(349897),
    w = i(215655),
    M = i(696016),
    k = i(652215),
    I = i(16590),
    S = i(375708),
    b = i(237610);
let y = (0, p.Fe)({
    createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, a.jsx)("div", { className: b.Lq }),
});
function R(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: n,
            autoPlay: p,
            src: R,
            fillContainer: P = !1,
            minWidth: f = 500,
            maxWidth: E = 1 / 0,
            maxHeight: T = 1 / 0,
            channelId: x,
            messageId: N,
            showTextContent: B = E >= 250,
            showParticipants: V = !0,
            volume: D,
            autoMute: F,
            onVolumeChange: H,
            onMutedChange: L,
            onClick: U,
            onContextMenu: j,
            onPlay: K,
            allowFullScreen: G = !0,
        } = e,
        O = t.width ?? 0,
        Z = t.height ?? 0,
        J = (0, r.bG)([g.A], () => g.A.getBasicChannel(x)?.guild_id, [x]),
        Q = O > 0 && Z > 0 ? O / Z : 16 / 9;
    (Q > 2 || Q < 1) && (Q = 16 / 9);
    let W = l.useRef(null);
    (0, w.A)(t.id, W);
    let Y = Math.min(O > 0 ? O : f, E),
        q = Y / Q;
    q > T && (Y = (q = T) * Q), Y < f && (q = (Y = f) / Q);
    let X = Math.round(Math.min(Y, E)),
        z = Math.round(Math.min(q, T)),
        $ = O > 0 && Z > 0 ? Math.min(X / O, z / Z, 1) : 1,
        ee = (0, u.AE)({ src: i, width: Math.round(O * $), height: Math.round(Z * $) }),
        [et, ei] = l.useState(!1),
        [ea, el] = l.useState(!0),
        [en, eo] = l.useState(!0),
        [es, er] = l.useState(0),
        ec = l.useRef(0),
        ed = l.useCallback(
            (e, t) => {
                t !== c.KB.BUFFERING_RECOVERY && e === c.Q6.PLAYING && K?.(t !== c.KB.USER, 1e3 * ec.current, 1e3 * es);
            },
            [es, K],
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
                        label: S.intl.string(I.default.hFWVZQ),
                        active: ea,
                        onClick: () => el((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                eu &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: h.o,
                        label: S.intl.string(I.default.XfP4bO),
                        active: en,
                        onClick: () => eo((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [ep, ea, eu, en]),
        ev = (0, v._)({ location: M.Mu }).externalAnalyticsEnabled,
        eg = l.useMemo(
            () =>
                ev
                    ? {
                          contentId: R.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(R) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [ev, R, t.title],
        ),
        eC = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: eA } = C.B.useConfig({ location: "ClipsPlayer" }),
        e_ = l.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: s,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, a.jsx)(A.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: J,
                    isFullScreen: et,
                    showParticipants: V,
                    showTextContent: B,
                    channelId: x,
                    messageId: N,
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
            [t, J, et, V, B, x, N, ea, eC, es, en],
        ),
        ew = (0, _.T)(t.clip_events_timeline ?? []);
    return (0, a.jsx)("div", {
        className: o()(b.kL, { [b.HA]: P }, n),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: j,
        style: P ? void 0 : { width: X, height: z },
        children: (0, a.jsx)(y, {
            src: R,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: em,
            poster: ee,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: p,
            initialActive: !1,
            initialVolume: D,
            initialMuted: F,
            onVolumeChange: H,
            onMutedChange: L,
            onProgressUpdate: eh,
            orientation: "landscape",
            timelineIndicatorConfig: ew,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: e_,
            parentTransitionState: null,
            onFullscreenChange: ei,
            onClick: U,
            onPlayerStateChange: ed,
            withVideoHalo: !0,
            objectFit: P ? "cover" : void 0,
            muxContentMetadata: eg,
            hideFullScreenBtn: !G,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: W,
            scrubPreviewVttUrl: eA ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: eA ? t.spritesheet_image_url : void 0,
        }),
    });
}
