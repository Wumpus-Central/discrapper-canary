(i.d(t, { A: () => x }), i(938796), i(321073));
var l = i(477900),
    a = i(582128),
    n = i(503698),
    o = i.n(n),
    s = i(665260),
    r = i(17928),
    c = i(876230),
    d = i(26137),
    u = i(534890),
    h = i(268218),
    p = i(776231),
    m = i(614269),
    v = i(829097),
    g = i(734057),
    C = i(102174),
    S = i(49870),
    _ = i(560149),
    w = i(349897),
    b = i(215655),
    k = i(802976),
    A = i(696016),
    M = i(652215),
    y = i(268378),
    I = i(375708),
    P = i(324973);
let f = (0, h.Fe)({
    createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, l.jsx)("div", { className: P.Lq }),
});
function x(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: n,
            autoPlay: h,
            src: x,
            fillContainer: E = !1,
            minWidth: T = 500,
            maxWidth: V = 1 / 0,
            maxHeight: B = 1 / 0,
            channelId: R,
            messageId: F,
            showTextContent: N = V >= 250,
            showParticipants: U = !0,
            volume: j,
            autoMute: L,
            onVolumeChange: H,
            onMutedChange: O,
            onClick: Z,
            onContextMenu: D,
            onPlay: G,
            onSeekRequest: K,
            initialTimeSec: Q,
            allowFullScreen: W = !0,
        } = e,
        Y = t.width ?? 0,
        q = t.height ?? 0,
        J = (0, r.bG)([g.A], () => g.A.getBasicChannel(R)?.guild_id, [R]),
        X = Y > 0 && q > 0 ? Y / q : 16 / 9;
    (X > 2 || X < 1) && (X = 16 / 9);
    let z = a.useRef(null);
    (0, b.A)(t.id, z, K);
    let $ = Math.min(Y > 0 ? Y : T, V),
        ee = $ / X;
    (ee > B && ($ = (ee = B) * X), $ < T && (ee = ($ = T) / X));
    let et = Math.round(Math.min($, V)),
        ei = Math.round(Math.min(ee, B)),
        el = Y > 0 && q > 0 ? Math.min(et / Y, ei / q, 1) : 1,
        ea = (0, p.AE)({ src: i, width: Math.round(Y * el), height: Math.round(q * el) }),
        [en, eo] = a.useState(!1),
        [es, er] = a.useState(!0),
        [ec, ed] = a.useState(!0),
        [eu, eh] = a.useState(0),
        ep = a.useRef(0),
        em = a.useCallback(
            (e, t) => {
                t !== c.KB.BUFFERING_RECOVERY && e === c.Q6.PLAYING && G?.(t !== c.KB.USER, 1e3 * ep.current, 1e3 * eu);
            },
            [eu, G],
        ),
        ev = a.useCallback((e, t) => {
            ((ep.current = e), Number.isFinite(t) && t > 0 && eh((e) => (e === t ? e : t)));
        }, []),
        eg = a.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        eC = (0, s.Lt)(t.flags ?? 0, M.sbO.HAS_TIMELINE_COMMENTS),
        eS = a.useMemo(() => {
            let e = [];
            return (
                eg &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: I.intl.string(y.default.hFWVZQ),
                        active: es,
                        onClick: () => er((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                eC &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: u.ChatIcon,
                        label: I.intl.string(y.default.XfP4bO),
                        active: ec,
                        onClick: () => ed((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [eg, es, eC, ec]),
        e_ = (0, v._)({ location: A.Mu }).externalAnalyticsEnabled,
        ew = a.useMemo(
            () =>
                e_
                    ? {
                          contentId: x.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(x) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [e_, x, t.title],
        ),
        eb = a.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: ek } = C.B.useConfig({ location: "ClipsPlayer" }),
        eA = a.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: a,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: s,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, l.jsx)(_.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: J,
                    isFullScreen: en,
                    showParticipants: U,
                    showTextContent: N,
                    channelId: R,
                    messageId: F,
                    showSpeakingIndicators: es,
                    clipUserIds: eb,
                    durationSeconds: eu,
                    playerState: i,
                    isControlBarExpanded: a,
                    videoRef: n,
                    isActive: o,
                    isVolumeExpanded: s,
                    showTimelineComments: ec,
                });
            },
            [t, J, en, U, N, R, F, es, eb, eu, ec],
        ),
        eM = (0, w.T)(t.clip_events_timeline ?? []),
        ey = (0, k.A)({ attachment: t, channelId: R, guildId: J, messageId: F }),
        eI = a.useCallback(
            (e) => (null == ey ? null : (0, l.jsx)(S.A, { ...e, original: ey.original, subSources: ey.subSources })),
            [ey],
        );
    return (0, l.jsx)("div", {
        className: o()(P.kL, { [P.HA]: E }, n),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: D,
        style: E ? void 0 : { width: et, height: ei },
        children: (0, l.jsx)(f, {
            src: x,
            downloadUrl: t.url,
            renderVideo: null != ey ? eI : void 0,
            downloadContentType: t.content_type,
            extraButtons: eS,
            poster: ea,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: h,
            initialActive: !1,
            initialTimeSec: Q,
            initialVolume: j,
            initialMuted: L,
            onVolumeChange: H,
            onMutedChange: O,
            onProgressUpdate: ev,
            orientation: "landscape",
            timelineIndicatorConfig: eM,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eA,
            parentTransitionState: null,
            onFullscreenChange: eo,
            onClick: Z,
            onPlayerStateChange: em,
            withVideoHalo: !0,
            objectFit: E ? "cover" : void 0,
            muxContentMetadata: ew,
            hideFullScreenBtn: !W,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: z,
            scrubPreviewVttUrl: ek ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: ek ? t.spritesheet_image_url : void 0,
        }),
    });
}
