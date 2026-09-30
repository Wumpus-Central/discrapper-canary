(i.d(t, { A: () => P, v: () => x }), i(938796), i(321073));
var n = i(477900),
    a = i(582128),
    l = i(503698),
    s = i.n(l),
    o = i(665260),
    r = i(17928),
    d = i(876230),
    c = i(26137),
    u = i(534890),
    p = i(268218),
    h = i(776231),
    m = i(614269),
    g = i(829097),
    v = i(734057),
    C = i(53774),
    w = i(560149),
    S = i(349897),
    M = i(215655),
    _ = i(802976),
    b = i(696016),
    k = i(652215),
    A = i(704796),
    I = i(375708),
    V = i(324973);
let y = (0, p.qT)({
    createPromise: () => Promise.resolve().then(i.bind(i, 266546)),
    webpackId: 266546,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, n.jsx)("div", { className: V.Lq }),
});
function x() {
    y.preload();
}
function P(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: l,
            autoPlay: p,
            src: x,
            fillContainer: P = !1,
            minWidth: f = 500,
            maxWidth: E = 1 / 0,
            maxHeight: T = 1 / 0,
            channelId: B,
            messageId: N,
            showTextContent: F = E >= 250,
            showParticipants: R = !0,
            volume: U,
            autoMute: j,
            onVolumeChange: H,
            onMutedChange: G,
            onClick: L,
            onContextMenu: O,
            onPlay: Z,
            onSeekRequest: D,
            initialTimeSec: q,
            onEnded: K,
            allowFullScreen: Q = !0,
        } = e,
        W = t.width ?? 0,
        Y = t.height ?? 0,
        J = (0, r.bG)([v.A], () => v.A.getBasicChannel(B)?.guild_id, [B]),
        X = W > 0 && Y > 0 ? W / Y : 16 / 9;
    (X > 2 || X < 1) && (X = 16 / 9);
    let z = a.useRef(null);
    (0, M.A)(t.id, z, D);
    let $ = Math.min(W > 0 ? W : f, E),
        ee = $ / X;
    (ee > T && ($ = (ee = T) * X), $ < f && (ee = ($ = f) / X));
    let et = Math.round(Math.min($, E)),
        ei = Math.round(Math.min(ee, T)),
        en = W > 0 && Y > 0 ? Math.min(et / W, ei / Y, 1) : 1,
        ea = (0, h.AE)({ src: i, width: Math.round(W * en), height: Math.round(Y * en) }),
        [el, es] = a.useState(!1),
        [eo, er] = a.useState(!0),
        [ed, ec] = a.useState(!0),
        [eu, ep] = a.useState(0),
        eh = a.useRef(0),
        em = a.useCallback(
            (e, t) => {
                t !== d.KB.BUFFERING_RECOVERY && e === d.Q6.PLAYING && Z?.(t !== d.KB.USER, 1e3 * eh.current, 1e3 * eu);
            },
            [eu, Z],
        ),
        eg = a.useCallback((e, t) => {
            ((eh.current = e), Number.isFinite(t) && t > 0 && ep((e) => (e === t ? e : t)));
        }, []),
        ev = a.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        eC = (0, o.Lt)(t.flags ?? 0, k.sbO.HAS_TIMELINE_COMMENTS),
        ew = a.useMemo(() => {
            let e = [];
            return (
                ev &&
                    e.push({
                        id: "speaking-indicators",
                        iconComponent: c.r,
                        label: I.intl.string(A.default.hFWVZQ),
                        active: eo,
                        onClick: () => er((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    }),
                eC &&
                    e.push({
                        id: "timeline-comments",
                        iconComponent: u.ChatIcon,
                        label: I.intl.string(A.default.XfP4bO),
                        active: ed,
                        onClick: () => ec((e) => !e),
                        "data-testid": "clips-player-timeline-comments-toggle",
                    }),
                e
            );
        }, [ev, eo, eC, ed]),
        eS = (0, g._)({ location: b.Mu }).externalAnalyticsEnabled,
        eM = a.useMemo(
            () =>
                eS
                    ? {
                          contentId: x.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(x) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [eS, x, t.title],
        ),
        e_ = a.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        [eb, ek] = a.useState(!1),
        eA = a.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: a,
                    videoRef: l,
                    isActive: s,
                    isVolumeExpanded: o,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, n.jsx)(w.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: J,
                    isFullScreen: el,
                    showParticipants: R,
                    showTextContent: F,
                    channelId: B,
                    messageId: N,
                    showSpeakingIndicators: eo,
                    clipUserIds: e_,
                    durationSeconds: eu,
                    playerState: i,
                    isControlBarExpanded: a,
                    videoRef: l,
                    isActive: s,
                    isVolumeExpanded: o,
                    showTimelineComments: ed,
                    isGridView: eb,
                    setIsGridView: ek,
                });
            },
            [t, J, el, R, F, B, N, eo, e_, eu, ed, eb],
        ),
        eI = (0, S.T)(t.clip_events_timeline ?? []),
        eV = (0, _.A)({ attachment: t, channelId: B, guildId: J, messageId: N }),
        ey = a.useCallback(
            (e) =>
                null == eV
                    ? null
                    : (0, n.jsx)(C.A, {
                          ...e,
                          original: eV.original,
                          subSources: eV.subSources,
                          isGridView: eb,
                          setIsGridView: ek,
                          suppressSourceSelection: eb,
                      }),
            [eV, eb],
        );
    return (0, n.jsx)("div", {
        className: s()(V.kL, { [V.HA]: P }, l),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: O,
        style: P ? void 0 : { width: et, height: ei },
        children: (0, n.jsx)(y, {
            src: x,
            downloadUrl: t.url,
            renderVideo: null != eV ? ey : void 0,
            downloadContentType: t.content_type,
            extraButtons: ew,
            poster: ea,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: p,
            initialActive: !1,
            initialTimeSec: q,
            initialVolume: U,
            initialMuted: j,
            onVolumeChange: H,
            onMutedChange: G,
            onProgressUpdate: eg,
            orientation: "landscape",
            timelineIndicatorConfig: eI,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eA,
            parentTransitionState: null,
            onFullscreenChange: es,
            onClick: L,
            onPlayerStateChange: em,
            onEnded: K,
            withVideoHalo: !eb,
            objectFit: P ? "cover" : void 0,
            muxContentMetadata: eM,
            hideFullScreenBtn: !Q,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: z,
            scrubPreviewVttUrl: t.spritesheet_vtt_url,
            scrubPreviewImageUrl: t.spritesheet_image_url,
        }),
    });
}
