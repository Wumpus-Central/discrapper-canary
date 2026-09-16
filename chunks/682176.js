(i.d(t, { A: () => y }), i(938796), i(321073));
var a = i(477900),
    l = i(582128),
    n = i(503698),
    s = i.n(n),
    o = i(665260),
    r = i(17928),
    c = i(876230),
    d = i(26137),
    h = i(534890),
    u = i(268218),
    p = i(776231),
    m = i(614269),
    v = i(829097),
    g = i(734057),
    w = i(102174),
    C = i(53774),
    S = i(560149),
    _ = i(349897),
    A = i(215655),
    M = i(802976),
    I = i(696016),
    b = i(652215),
    f = i(268378),
    k = i(375708),
    x = i(324973);
let V = (0, u.Fe)({
    createPromise: () => Promise.resolve().then(i.bind(i, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, a.jsx)("div", { className: x.Lq }),
});
function y(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: n,
            autoPlay: u,
            src: y,
            fillContainer: E = !1,
            minWidth: P = 500,
            maxWidth: T = 1 / 0,
            maxHeight: B = 1 / 0,
            channelId: N,
            messageId: R,
            showTextContent: F = T >= 250,
            showParticipants: j = !0,
            volume: U,
            autoMute: H,
            onVolumeChange: L,
            onMutedChange: Z,
            onClick: G,
            onContextMenu: O,
            onPlay: D,
            onSeekRequest: J,
            initialTimeSec: K,
            allowFullScreen: Q = !0,
        } = e,
        W = t.width ?? 0,
        Y = t.height ?? 0,
        q = (0, r.bG)([g.A], () => g.A.getBasicChannel(N)?.guild_id, [N]),
        X = W > 0 && Y > 0 ? W / Y : 16 / 9;
    (X > 2 || X < 1) && (X = 16 / 9);
    let z = l.useRef(null);
    (0, A.A)(t.id, z, J);
    let $ = Math.min(W > 0 ? W : P, T),
        ee = $ / X;
    (ee > B && ($ = (ee = B) * X), $ < P && (ee = ($ = P) / X));
    let et = Math.round(Math.min($, T)),
        ei = Math.round(Math.min(ee, B)),
        ea = W > 0 && Y > 0 ? Math.min(et / W, ei / Y, 1) : 1,
        el = (0, p.AE)({ src: i, width: Math.round(W * ea), height: Math.round(Y * ea) }),
        [en, es] = l.useState(!1),
        [eo, er] = l.useState(!0),
        [ec, ed] = l.useState(!0),
        [eh, eu] = l.useState(0),
        ep = l.useRef(0),
        em = l.useCallback(
            (e, t) => {
                t !== c.KB.BUFFERING_RECOVERY && e === c.Q6.PLAYING && D?.(t !== c.KB.USER, 1e3 * ep.current, 1e3 * eh);
            },
            [eh, D],
        ),
        ev = l.useCallback((e, t) => {
            ((ep.current = e), Number.isFinite(t) && t > 0 && eu((e) => (e === t ? e : t)));
        }, []),
        eg = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ew = (0, o.Lt)(t.flags ?? 0, b.sbO.HAS_TIMELINE_COMMENTS),
        eC = l.useMemo(() => {
            let e = [];
            return (
                eg &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: k.intl.string(f.default.hFWVZQ),
                        active: eo,
                        onClick: () => er((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                ew &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: h.ChatIcon,
                        label: k.intl.string(f.default.XfP4bO),
                        active: ec,
                        onClick: () => ed((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [eg, eo, ew, ec]),
        eS = (0, v._)({ location: I.Mu }).externalAnalyticsEnabled,
        e_ = l.useMemo(
            () =>
                eS
                    ? {
                          contentId: y.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(y) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [eS, y, t.title],
        ),
        eA = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: eM } = w.B.useConfig({ location: "ClipsPlayer" }),
        [eI, eb] = l.useState(!1),
        ef = l.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: s,
                    isVolumeExpanded: o,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, a.jsx)(S.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: q,
                    isFullScreen: en,
                    showParticipants: j,
                    showTextContent: F,
                    channelId: N,
                    messageId: R,
                    showSpeakingIndicators: eo,
                    clipUserIds: eA,
                    durationSeconds: eh,
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: n,
                    isActive: s,
                    isVolumeExpanded: o,
                    showTimelineComments: ec,
                    isGridView: eI,
                    setIsGridView: eb,
                });
            },
            [t, q, en, j, F, N, R, eo, eA, eh, ec, eI],
        ),
        ek = (0, _.T)(t.clip_events_timeline ?? []),
        ex = (0, M.A)({ attachment: t, channelId: N, guildId: q, messageId: R }),
        eV = l.useCallback(
            (e) =>
                null == ex
                    ? null
                    : (0, a.jsx)(C.A, {
                          ...e,
                          original: ex.original,
                          subSources: ex.subSources,
                          isGridView: eI,
                          setIsGridView: eb,
                          suppressSourceSelection: eI,
                      }),
            [ex, eI],
        );
    return (0, a.jsx)("div", {
        className: s()(x.kL, { [x.HA]: E }, n),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: O,
        style: E ? void 0 : { width: et, height: ei },
        children: (0, a.jsx)(V, {
            src: y,
            downloadUrl: t.url,
            renderVideo: null != ex ? eV : void 0,
            downloadContentType: t.content_type,
            extraButtons: eC,
            poster: el,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: u,
            initialActive: !1,
            initialTimeSec: K,
            initialVolume: U,
            initialMuted: H,
            onVolumeChange: L,
            onMutedChange: Z,
            onProgressUpdate: ev,
            orientation: "landscape",
            timelineIndicatorConfig: ek,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ef,
            parentTransitionState: null,
            onFullscreenChange: es,
            onClick: G,
            onPlayerStateChange: em,
            withVideoHalo: !eI,
            objectFit: E ? "cover" : void 0,
            muxContentMetadata: e_,
            hideFullScreenBtn: !Q,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: z,
            scrubPreviewVttUrl: eM ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: eM ? t.spritesheet_image_url : void 0,
        }),
    });
}
