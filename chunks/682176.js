(i.d(t, { A: () => P, v: () => x }), i(938796), i(321073));
var n = i(477900),
    l = i(582128),
    a = i(503698),
    s = i.n(a),
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
    _ = i(215655),
    M = i(802976),
    b = i(696016),
    k = i(652215),
    A = i(704796),
    I = i(660183),
    y = i(324973);
let f = (0, p.qT)({
    createPromise: () => Promise.all([i.e("216870"), i.e("390098"), i.e("334127")]).then(i.bind(i, 266546)),
    webpackId: 266546,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, n.jsx)("div", { className: y.Lq }),
});
function x() {
    f.preload();
}
function P(e) {
    let {
            attachment: t,
            posterUrl: i,
            className: a,
            autoPlay: p,
            src: x,
            fillContainer: P = !1,
            minWidth: V = 500,
            maxWidth: E = 1 / 0,
            maxHeight: T = 1 / 0,
            channelId: B,
            messageId: R,
            showTextContent: N = E >= 250,
            showParticipants: F = !0,
            volume: U,
            autoMute: j,
            onVolumeChange: G,
            onMutedChange: L,
            onClick: H,
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
    let z = l.useRef(null);
    (0, _.A)(t.id, z, D);
    let $ = Math.min(W > 0 ? W : V, E),
        ee = $ / X;
    (ee > T && ($ = (ee = T) * X), $ < V && (ee = ($ = V) / X));
    let et = Math.round(Math.min($, E)),
        ei = Math.round(Math.min(ee, T)),
        en = W > 0 && Y > 0 ? Math.min(et / W, ei / Y, 1) : 1,
        el = (0, h.AE)({ src: i, width: Math.round(W * en), height: Math.round(Y * en) }),
        [ea, es] = l.useState(!1),
        [eo, er] = l.useState(!0),
        [ed, ec] = l.useState(!0),
        [eu, ep] = l.useState(0),
        eh = l.useRef(0),
        em = l.useCallback(
            (e, t) => {
                t !== d.KB.BUFFERING_RECOVERY && e === d.Q6.PLAYING && Z?.(t !== d.KB.USER, 1e3 * eh.current, 1e3 * eu);
            },
            [eu, Z],
        ),
        eg = l.useCallback((e, t) => {
            ((eh.current = e), Number.isFinite(t) && t > 0 && ep((e) => (e === t ? e : t)));
        }, []),
        ev = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        eC = (0, o.Lt)(t.flags ?? 0, k.sbO.HAS_TIMELINE_COMMENTS),
        ew = l.useMemo(() => {
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
        e_ = l.useMemo(
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
        eM = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        [eb, ek] = l.useState(!1),
        eA = l.useCallback(
            (e) => {
                let {
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: o,
                    controlBarAnimationSpring: r,
                } = e;
                return (0, n.jsx)(w.A, {
                    attachment: t,
                    controlBarAnimationSpring: r,
                    guildId: J,
                    isFullScreen: ea,
                    showParticipants: F,
                    showTextContent: N,
                    channelId: B,
                    messageId: R,
                    showSpeakingIndicators: eo,
                    clipUserIds: eM,
                    durationSeconds: eu,
                    playerState: i,
                    isControlBarExpanded: l,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: o,
                    showTimelineComments: ed,
                    isGridView: eb,
                    setIsGridView: ek,
                });
            },
            [t, J, ea, F, N, B, R, eo, eM, eu, ed, eb],
        ),
        eI = (0, S.T)(t.clip_events_timeline ?? []),
        ey = (0, M.A)({ attachment: t, channelId: B, guildId: J, messageId: R }),
        ef = l.useCallback(
            (e) =>
                null == ey
                    ? null
                    : (0, n.jsx)(C.A, {
                          ...e,
                          original: ey.original,
                          subSources: ey.subSources,
                          isGridView: eb,
                          setIsGridView: ek,
                          suppressSourceSelection: eb,
                      }),
            [ey, eb],
        );
    return (0, n.jsx)("div", {
        className: s()(y.kL, { [y.HA]: P }, a),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: O,
        style: P ? void 0 : { width: et, height: ei },
        children: (0, n.jsx)(f, {
            src: x,
            downloadUrl: t.url,
            renderVideo: null != ey ? ef : void 0,
            downloadContentType: t.content_type,
            extraButtons: ew,
            poster: el,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: p,
            initialActive: !1,
            initialTimeSec: q,
            initialVolume: U,
            initialMuted: j,
            onVolumeChange: G,
            onMutedChange: L,
            onProgressUpdate: eg,
            orientation: "landscape",
            timelineIndicatorConfig: eI,
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eA,
            parentTransitionState: null,
            onFullscreenChange: es,
            onClick: H,
            onPlayerStateChange: em,
            onEnded: K,
            withVideoHalo: !eb,
            objectFit: P ? "cover" : void 0,
            muxContentMetadata: e_,
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
